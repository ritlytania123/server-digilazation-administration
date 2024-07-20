import { Controller, Post, Get, Delete, Param, Body, Req, UseGuards, UnauthorizedException, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { KTPService } from './ktp.service';
import { CreateKTPDto } from './dto/create-ktp.dto';
import { KTP } from './schemas/ktp.schema';
import { Roles } from '../auth/decorator/roles.decorator';
import { Request } from 'express';
import { User, UserInterface } from '../user/schemas/user.schema'; 
import { UpdateKTPDto } from './dto/update-ktp.dto';

@ApiTags('KTP')
@ApiBearerAuth() // Indicates that the endpoints are protected by JWT
@Controller('ktp')
export class KTPController {
  constructor(private readonly ktpService: KTPService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new KTP registration' })
  @ApiResponse({ status: 201, description: 'The KTP registration has been successfully created.', type: KTP })
  @Roles('admin', 'user', 'superadmin') // Roles required to access this route
  async create(@Body() createKTPDto: CreateKTPDto, @Req() req: Request): Promise<KTP> {
    const user = req.user as UserInterface;
    if (!user || !user._id) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.ktpService.create(createKTPDto, user._id.toString());
  }

  @Get()
  @ApiOperation({ summary: 'Get all KTP registrations' })
  @ApiResponse({ status: 200, description: 'List of all KTP registrations', type: [KTP] })
  @Roles('admin', 'user', 'superadmin') // Roles required to access this route
  async findAll(@Req() req: Request): Promise<KTP[]> {
    const user = req.user as UserInterface;
    return this.ktpService.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific KTP registration by ID' })
  @ApiResponse({ status: 200, description: 'The KTP registration', type: KTP })
  @ApiResponse({ status: 404, description: 'KTP registration not found' })
  @Roles('admin', 'superadmin', 'user')
  async findOne(@Param('id') id: string, @Req() req: Request): Promise<KTP> {
    const user = req.user as UserInterface;
    return this.ktpService.findOne(id, user);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a KTP registration by ID' })
  @ApiResponse({ status: 200, description: 'The KK registration has been successfully updated', type: KTP })
  @ApiResponse({ status: 404, description: 'KK registration not found' })
  @Roles('admin', 'user', 'superadmin')
  async update(@Param('id') id: string, @Body() updateKtpDto: UpdateKTPDto, @Req() req: Request): Promise<KTP> {
    const user = req.user;
    return this.ktpService.update(id, updateKtpDto, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific KTP registration by ID' })
  @ApiResponse({ status: 204, description: 'The KTP registration has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'KTP registration not found' })
  @Roles('admin', 'superadmin', 'user')
  async remove(@Param('id') id: string, @Req() req: Request): Promise<void> {
    const user = req.user;
    return this.ktpService.remove(id, user);
  }
}
