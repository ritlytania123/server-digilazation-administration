import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KK, KKDocument } from './schemas/kk.schema';
import { CreateKKDto } from './dto/create-kk.dto';
import { UpdateKKDto } from './dto/update-kk.dto';
import { User, UserInterface } from '../user/schemas/user.schema';

@Injectable()
export class KKService {
  constructor(@InjectModel(KK.name) private kkModel: Model<KKDocument>) {}

  async create(createKKDto: CreateKKDto, userId: string): Promise<KK> {
    const createdKK = new this.kkModel({ ...createKKDto, user: userId });
    return createdKK.save();
  }

  async findAll(user?: UserInterface): Promise<KK[]> {
    if (user && user.role === 'user') {
      return this.kkModel.find({ user: user._id }).lean(); // Filter by user email
    }
    return this.kkModel.find().lean(); // Admin can see all
  }

  async findOne(id: string, user?: User): Promise<KK> {
    const kk = await this.kkModel.findById(id).lean();
    if (!kk) {
      throw new NotFoundException('KK registration not found');
    }
    if (user && user.role === 'user' && kk.user.toString() !== user._id.toString()) {
      throw new ForbiddenException('Forbidden: You can only access your own KK registrations');
    }
    return kk;
  }

  async update(id: string, updateKKDto: UpdateKKDto, user?: User): Promise<KK> {
    // Find and update the KK registration
    const updatedKK = await this.kkModel.findByIdAndUpdate(id, updateKKDto, { new: true }).lean();

    if (!updatedKK) {
      throw new NotFoundException('KK registration not found');
    }

    // Check user permissions if a user is provided
    if (user && user.role === 'user') {
      // Make sure the user object in the KK document is correctly accessed
      if (updatedKK.user && updatedKK.user.toString() !== user._id.toString()) {
        throw new ForbiddenException('Forbidden: You can only access your own KK registrations');
      }
    }

    // Return the updated KK registration as a Mongoose document, not a plain object
    return this.kkModel.findById(id).exec();
  }

  
  async remove(id: string, user?: User): Promise<KK> {
    // Find the KK registration
    const kk = await this.kkModel.findById(id).lean(); // Returns a plain JavaScript object
    if (!kk) {
      throw new NotFoundException('KK registration not found');// Throw 404 if not found
    }

    // Check user permissions if a user is provided
    if (user && user.role === 'user') {
      // Convert ObjectId to string for comparison
      const userId = user._id.toString();
      const kkUserId = kk.user.toString(); // Ensure this conversion

      if (kkUserId !== userId) {
        throw new ForbiddenException('Forbidden: You can only delete your own KK registrations'); // Throw 403 if forbidden
      }
    }

    // Perform the delete operation
    return this.kkModel.findByIdAndDelete(id).exec();
  }
}
