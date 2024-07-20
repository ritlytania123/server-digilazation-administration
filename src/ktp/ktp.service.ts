import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KTP, KTPDocument } from './schemas/ktp.schema';
import { CreateKTPDto } from './dto/create-ktp.dto';
import { User, UserInterface } from '@/user/schemas/user.schema';
import { UpdateKTPDto } from './dto/update-ktp.dto';

@Injectable()
export class KTPService {
  constructor(@InjectModel(KTP.name) private ktpModel: Model<KTPDocument>) {}

  async create(createKTPDto: CreateKTPDto, userId: string): Promise<KTP> {
    const newKTP = new this.ktpModel({
      ...createKTPDto,
      user: userId,
    });
    return newKTP.save();
  }

  async findAll(user?: UserInterface): Promise<KTP[]> {
    if (user && user.role === 'user') {
      return this.ktpModel.find({ user: user._id }).lean(); // Filter by user email
    }
    return this.ktpModel.find().lean(); // Admin can see all
  }

  async findOne(id: string, user?: UserInterface): Promise<KTP> {
    const ktp = await this.ktpModel.findById(id).lean();
    if (!ktp) {
      throw new NotFoundException('KTP registration not found');
    }
    if (user && user.role === 'user' && ktp.user.toString() !== user._id.toString()) {
      throw new ForbiddenException('Forbidden: You can only access your own KTP registrations');
    }
    return ktp;
  }

  
  async update(id: string, updateKtpDto: UpdateKTPDto, user?: User): Promise<KTP> {
    // Find and update the KTP registration
    const updatedKtp = await this.ktpModel.findByIdAndUpdate(id, updateKtpDto, { new: true }).lean();

    if (!updatedKtp) {
      throw new NotFoundException('KTP registration not found');
    }

    // Check user permissions if a user is provided
    if (user && user.role === 'user') {
      // Make sure the user object in the KTP document is correctly accessed
      if (updatedKtp.user && updatedKtp.user.toString() !== user._id.toString()) {
        throw new ForbiddenException('Forbidden: You can only access your own KTP registrations');
      }
    }

    // Return the updated KTP registration as a Mongoose document, not a plain object
    return this.ktpModel.findById(id).exec();
  }

  async remove(id: string, user: User): Promise<void> {
    const ktp = await this.ktpModel.findById(id).lean();
    if (!ktp) {
      throw new NotFoundException('KTP registration not found');
    }
    if (user && user.role === 'user' && ktp.user.toString() !== user._id.toString()) {
      throw new ForbiddenException('Forbidden: You can only delete your own KTP registrations');
    }

    return this.ktpModel.findByIdAndDelete(id).lean();
  }
}
