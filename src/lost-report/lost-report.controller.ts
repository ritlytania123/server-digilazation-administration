import { Controller, Post, Get, Delete, Param, Body, Req, UseGuards, UnauthorizedException, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LostReportService } from './lost-report.service';
import { CreateLostReportDto } from './dto/create-lost-report.dto';
import { LostReport } from './schemas/lost-report.schema';
import { Roles } from '../auth/decorator/roles.decorator';
import { Request } from 'express';
import { UserInterface } from '../user/schemas/user.schema';
import { UpdateLostReportDto } from './dto/update-lost-report.dto';

@ApiTags('LostReport')
@ApiBearerAuth() // Indicates that the endpoints are protected by JWT
@Controller('lost-reports')
export class LostReportController {
  constructor(private readonly lostReportService: LostReportService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new lost report' })
  @ApiResponse({ status: 201, description: 'The lost report has been successfully created.', type: LostReport })
  @Roles('admin', 'user', 'superadmin') // Roles required to access this route
  async create(@Body() createLostReportDto: CreateLostReportDto, @Req() req: Request): Promise<LostReport> {
    const user = req.user as UserInterface;
    if (!user || !user._id) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.lostReportService.create(createLostReportDto, user._id.toString());
  }

  @Get()
  @ApiOperation({ summary: 'Get all lost reports' })
  @ApiResponse({ status: 200, description: 'List of all lost reports', type: [LostReport] })
  @Roles('admin', 'user', 'superadmin') // Only admin and superadmin can access all reports
  async findAll(@Req() req: Request): Promise<LostReport[]> {
    const user = req.user as UserInterface;
    return this.lostReportService.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific lost report by ID' })
  @ApiResponse({ status: 200, description: 'The lost report', type: LostReport })
  @ApiResponse({ status: 404, description: 'Lost report not found' })
  @Roles('admin', 'superadmin', 'user')
  async findOne(@Param('id') id: string, @Req() req: Request): Promise<LostReport> {
    const user = req.user as UserInterface;
    return this.lostReportService.findOne(id, user);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a lost report by ID' })
  @ApiResponse({ status: 200, description: 'The lost report has been successfully updated', type: LostReport })
  @ApiResponse({ status: 404, description: 'Lost report not found' })
  @Roles('admin', 'superadmin')
  async update(@Param('id') id: string, @Body() updateLostReportDto: UpdateLostReportDto, @Req() req: Request): Promise<LostReport> {
    const user = req.user as UserInterface;
    return this.lostReportService.update(id, updateLostReportDto, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific lost report by ID' })
  @ApiResponse({ status: 204, description: 'The lost report has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Lost report not found' })
  @Roles('admin', 'superadmin')
  async remove(@Param('id') id: string, @Req() req: Request): Promise<void> {
    const user = req.user as UserInterface;
    return this.lostReportService.remove(id, user);
  }
}
