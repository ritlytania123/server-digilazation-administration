import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

 
  async create(createUserDto: CreateUserDto): Promise<User> {
    // Check if a user with the same email already exists
    const existingUser = await this.userModel.findOne({ email: createUserDto.email }).exec();
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Create and save the new user
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).lean();
  }

  async findOne(userId: string): Promise<User | null> {
    return this.userModel.findById(userId).lean();
  }

  async findByIdAndDelete(userId: string) {
    return this.userModel.findByIdAndDelete(userId).lean();
  }

  // Update user profile method
  async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    // Find the user by ID
    const user = await this.userModel.findById(userId).exec();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Check for duplicates if email is being updated
    if (updateUserDto.email) {
      const existingUser = await this.userModel.findOne({ email: updateUserDto.email }).exec();
      if (existingUser && existingUser._id.toString() !== userId) {
        // Handle the case where the email already exists
        throw new ConflictException('Email already in use, please choose a different one');
      }
    }

    // Update user fields
    Object.assign(user, updateUserDto);

    // Save the updated user
    const updatedUser = await user.save();

    return updatedUser;
  }
}
