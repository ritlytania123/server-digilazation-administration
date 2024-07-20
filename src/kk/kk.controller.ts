import { Controller, Get, Post, Body, Param, Patch, Delete, Req, UseGuards, UnauthorizedException } from '@nestjs/common';
import { KKService } from './kk.service';
import { CreateKKDto } from './dto/create-kk.dto';
import { UpdateKKDto } from './dto/update-kk.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { KK } from './schemas/kk.schema';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Roles } from '../auth/decorator/roles.decorator';
import { RoleGuard } from '../auth/guard/role.guard';
import { Request } from 'express';
import { User, UserInterface } from '@/user/schemas/user.schema';

@ApiTags('kk')
@ApiBearerAuth()
@Controller('kk')
export class KKController {
  constructor(private readonly kkService: KKService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new KK registration' })
  @ApiResponse({ status: 201, description: 'The KK registration has been successfully created.', type: KK })
  @Roles('admin', 'user', 'superadmin')
  async create(@Body() createKKDto: CreateKKDto, @Req() req: Request): Promise<KK> {
    const user = req.user as UserInterface;
    if (!user || !user._id) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.kkService.create(createKKDto, String(user._id));
  }

  @Get()
  @ApiOperation({ summary: 'Get all KK registrations' })
  @ApiResponse({ status: 200, description: 'List of all KK registrations', type: [KK] })
  @Roles('admin', 'superadmin', 'user')
  async findAll(@Req() req: Request): Promise<KK[]> {
    const user = req.user as UserInterface;
    return this.kkService.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a KK registration by ID' })
  @ApiResponse({ status: 200, description: 'The KK registration with the given ID', type: KK })
  @ApiResponse({ status: 404, description: 'KK registration not found' })
  @Roles('admin', 'superadmin', 'user')
  async findOne(@Param('id') id: string, @Req() req: Request): Promise<KK> {
    const user = req.user;
    return this.kkService.findOne(id, user);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a KK registration by ID' })
  @ApiResponse({ status: 200, description: 'The KK registration has been successfully updated', type: KK })
  @ApiResponse({ status: 404, description: 'KK registration not found' })
  @Roles('admin', 'user', 'superadmin')
  async update(@Param('id') id: string, @Body() updateKKDto: UpdateKKDto, @Req() req: Request): Promise<KK> {
    const user = req.user;
    return this.kkService.update(id, updateKKDto, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a KK registration by ID' })
  @ApiResponse({ status: 204, description: 'The KK registration has been successfully deleted' })
  @ApiResponse({ status: 404, description: 'KK registration not found' })
  @Roles('admin', 'user', 'superadmin')
  async remove(@Param('id') id: string, @Req() req: Request): Promise<KK> {
    const user = req.user;
    return this.kkService.remove(id, user);
  }
}
