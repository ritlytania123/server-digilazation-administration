import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidateUserDto } from './dto/validate-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { User } from '@/user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    const newUser = {
      ...createUserDto,
      password: hashedPassword,
    };
    return this.usersService.create(newUser);
  }

  async validateUser(validateUserDto: ValidateUserDto): Promise<any> {
    const { email, password } = validateUserDto;
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


  
  async deleteAccount(userId: string, deleteUserDto: DeleteUserDto): Promise<any> {
    // Check if the requester is a superadmin
    const user = await this.usersService.findOne(userId);
    if(!user) throw new ForbiddenException('Insufficient permissions');
    if (user.role === 'superadmin') {
      return await this.deleteUser(deleteUserDto.user_id);
    } else if (user.role === 'admin') {
      // Admins can only delete other users' accounts but not their own
      if (user._id.toString() !== deleteUserDto.user_id) {
        return await this.deleteUser(deleteUserDto.user_id);
      } else {
        throw new ForbiddenException('Admins cannot delete their own account');
      }
    } else if (user.role === 'user') {
      // Regular users can only delete their own account
      if (user._id.toString() === deleteUserDto.user_id.toString()) {
        return await this.deleteUser(deleteUserDto.user_id.toString());
      } else {
        throw new ForbiddenException('Users can only delete their own account');
      }
    } else {
      throw new ForbiddenException('Insufficient permissions');
    }
  }

  private async deleteUser(userId: string): Promise<any> {
    return await this.usersService.findByIdAndDelete(userId)
  }
}
