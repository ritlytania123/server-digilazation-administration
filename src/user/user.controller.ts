import { Controller, Post, Body, Get, Param, Request, NotFoundException, ForbiddenException, Put } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }


  @Get('detail/:id')
  @ApiBearerAuth()
  async getProfile(@Param('id') id: string, @Request() req) {
    // Check if the user has permission to access this profile
    const requesterRole = req.user.role;
    const requesterId = req.user._id;
    
    // Fetch the user profile
    const userProfile = await this.usersService.findOne(id);
    
    if (!userProfile) {
      throw new NotFoundException('User not found');
    }

    // Admins and superadmins can view any profile; regular users can view only their own
    if (requesterRole === 'user' && requesterId.toString() !== id) {
      throw new ForbiddenException('You can only view your own profile');
    }

    return userProfile;
  }

  @Get('me')
  @ApiBearerAuth()
  async getCurrentUser(@Request() req) {
    // Retrieve the currently authenticated user's profile
    const userId = req.user._id;
    const userProfile = await this.usersService.findOne(userId);
    
    if (!userProfile) {
      throw new NotFoundException('User not found');
    }
    
    return userProfile;
  }

  @Put('me')
  @ApiBearerAuth()
  async updateProfile(@Body() updateUserDto: UpdateUserDto, @Request() req) {
    const userId = req.user._id;
    const updatedUser = await this.usersService.update(userId, updateUserDto);

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    return updatedUser;
  }
}
