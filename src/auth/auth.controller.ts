import { Controller, Post, Request, Body, UseGuards, UnauthorizedException, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from './decorator/public.decorator';
import { User } from '../user/schemas/user.schema';
import { Roles } from './decorator/roles.decorator';
import { DeleteUserDto } from './dto/delete-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @Public() 
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  @Public() 
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(loginDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }


  @ApiBearerAuth()
  @Delete('delete-account')
  @ApiResponse({ status: 200, description: 'The account has been successfully deleted', type: User })
  @ApiResponse({ status: 404, description: 'KK registration not found' })
  @Roles('admin', 'user', 'superadmin')
  async deleteAccount(@Request() req, @Body() deleteUserDto: DeleteUserDto) {
    const user = req.user; // The authenticated user from the JWT token
    if (!user || !user._id) {
      throw new UnauthorizedException('User not authenticated');
    }
    return await this.authService.deleteAccount(user, deleteUserDto);
  }

  @ApiBearerAuth()
  @Post('protected')
  getProtected(@Request() req) {
    return req.user;
  }
}
