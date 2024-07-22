import { ForbiddenException, Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LostReport, LostReportDocument } from './schemas/lost-report.schema';
import { CreateLostReportDto } from './dto/create-lost-report.dto';
import { UserInterface } from '../user/schemas/user.schema';
import { UpdateLostReportDto } from './dto/update-lost-report.dto';

@Injectable()
export class LostReportService {
  constructor(@InjectModel(LostReport.name) private lostReportModel: Model<LostReportDocument>) {}

  async create(createLostReportDto: CreateLostReportDto, userId: string): Promise<LostReport> {
    const newLostReport = new this.lostReportModel({
      ...createLostReportDto,
      user: userId,
    });
    return newLostReport.save();
  }

  async findAll(user?: UserInterface): Promise<LostReport[]> {
    if (user && user.role === 'user') {
      return this.lostReportModel.find({ user: user._id }).lean(); // Filter by user ID
    }
    return this.lostReportModel.find().lean(); // Admins and superadmins can see all reports
  }

  async findOne(id: string, user?: UserInterface): Promise<LostReport> {
    const lostReport = await this.lostReportModel.findById(id).lean();
    if (!lostReport) {
      throw new NotFoundException('Lost report not found');
    }
    if (user && user.role === 'user' && lostReport.user.toString() !== user._id.toString()) {
      throw new ForbiddenException('Forbidden: You can only access your own lost reports');
    }
    return lostReport;
  }

  async update(id: string, updateLostReportDto: UpdateLostReportDto, user?: UserInterface): Promise<LostReport> {
    const updatedLostReport = await this.lostReportModel.findByIdAndUpdate(id, updateLostReportDto, { new: true }).lean();

    if (!updatedLostReport) {
      throw new NotFoundException('Lost report not found');
    }

    // Check user permissions if a user is provided
    if (user && user.role === 'user') {
      if (updatedLostReport.user.toString() !== user._id.toString()) {
        throw new ForbiddenException('Forbidden: You can only update your own lost reports');
      }
    }

    // Return the updated lost report as a Mongoose document
    return this.lostReportModel.findById(id).exec();
  }

  async remove(id: string, user: UserInterface): Promise<void> {
    const lostReport = await this.lostReportModel.findById(id).lean();
    if (!lostReport) {
      throw new NotFoundException('Lost report not found');
    }

    if (user.role === 'user' && lostReport.user.toString() !== user._id.toString()) {
      throw new ForbiddenException('Forbidden: You can only delete your own lost reports');
    }

    await this.lostReportModel.findByIdAndDelete(id).lean();
  }
}
