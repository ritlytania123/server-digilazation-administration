import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsEnum, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateKTPDto {
  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  @IsString()
  full_name: string;

  @ApiProperty({ example: '123 Main St', description: 'Address of the user' })
  @IsString()
  address: string;

  @ApiProperty({ example: 'New York', description: 'Place of birth' })
  @IsString()
  birth_place: string;

  @ApiProperty({ example: '1990-01-01', description: 'Date of birth' })
  @IsDate()
  birth_date: Date;

  @ApiProperty({ example: 'Male', description: 'Gender of the user' })
  @IsString()
  gender: string;

  @ApiProperty({ example: 'American', description: 'Nationality of the user' })
  @IsString()
  nationality: string;

  @ApiProperty({ example: 'ID123456789', description: 'Support document identity' })
  @IsString()
  support_document_identity: string;

  

  @ApiProperty({ example: 'Pending', enum: ['Pending', 'In Progress', 'Done', 'Reject'] })
  @IsEnum(['Pending', 'In Progress', 'Done', 'Reject'])
  @IsNotEmpty()
  status: string;

  @ApiProperty({ example: 'Additional information or reason', required: false })
  @IsString()
  @IsOptional() // Make it optional
  reason?: string;
}
