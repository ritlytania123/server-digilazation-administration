import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNotEmpty, IsOptional, IsEnum, IsMongoId } from 'class-validator';

export class CreateKKDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({ example: '123 Main St' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 'Jakarta' })
  @IsString()
  @IsNotEmpty()
  birth_place: string;

  @ApiProperty({ example: '1990-01-01' })
  @IsDate()
  @IsNotEmpty()
  birth_date: Date;

  @ApiProperty({ example: 'Male' })
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty({ example: 'Indonesian' })
  @IsString()
  @IsNotEmpty()
  nationality: string;

  @ApiProperty({ example: 'ID123456789' })
  @IsString()
  @IsNotEmpty()
  support_document_identity: string;

  @ApiProperty({ example: 'Pending', enum: ['Pending', 'In Progress', 'Done', 'Reject'] })
  @IsEnum(['Pending', 'In Progress', 'Done', 'Reject'])
  @IsNotEmpty()
  status: string;

  @ApiProperty({ example: 'Additional information or reason', required: false })
  @IsString()
  @IsOptional() // Make it optional
  reason?: string;

  @ApiProperty({ example: '669b6fc00d79bd1045bd79b1' }) // Example ObjectId
  @IsMongoId()
  @IsNotEmpty()
  user: string; // User ID
}
