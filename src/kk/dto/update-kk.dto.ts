import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsOptional, IsEnum } from 'class-validator';

export class UpdateKKDto {
  @ApiProperty({ example: 'John Doe', description: 'Full name of the registrant', required: false })
  @IsString()
  @IsOptional()
  full_name?: string;

  @ApiProperty({ example: '123 Main St, City', description: 'Address of the registrant', required: false })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({ example: 'City of Birth', description: 'Place of birth of the registrant', required: false })
  @IsString()
  @IsOptional()
  birth_place?: string;

  @ApiProperty({ example: '1990-01-01', description: 'Birth date of the registrant', type: 'string', format: 'date', required: false })
  @IsDate()
  @IsOptional()
  birth_date?: Date;

  @ApiProperty({ example: 'Male', description: 'Gender of the registrant', required: false })
  @IsString()
  @IsOptional()
  gender?: string;

  @ApiProperty({ example: 'Indonesian', description: 'Nationality of the registrant', required: false })
  @IsString()
  @IsOptional()
  nationality?: string;

  @ApiProperty({ example: 'path/to/document.jpg', description: 'Path to the support document identity', required: false })
  @IsString()
  @IsOptional()
  support_document_identity?: string;

  @ApiProperty({ example: 'Pending', enum: ['Pending', 'In Progress', 'Done', 'Reject'], description: 'Status of the KK record', required: false })
  @IsEnum(['Pending', 'In Progress', 'Done', 'Reject'])
  @IsOptional()
  status?: string;

  @ApiProperty({ example: 'Reason for rejection or completion', description: 'Reason for status', required: false })
  @IsString()
  @IsOptional()
  reason?: string;
}
