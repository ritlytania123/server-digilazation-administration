import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsEnum } from 'class-validator';

export enum DocumentType {
  KTP = 'ktp',
  KK = 'kk',
}

export class CreateLostReportDto {
  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  @IsString()
  full_name: string;

  @ApiProperty({ example: '123 Main St', description: 'Address of the user' })
  @IsString()
  address: string;

  @ApiProperty({ example: 'Lost during travel', description: 'Reason for KTP loss' })
  @IsString()
  lost_reason: string;

  @ApiProperty({ example: 'Report123', description: 'Police report document number for lost KTP' })
  @IsString()
  police_lost_report_document: string;

  @ApiProperty({ example: '2024-07-20', description: 'Date and time when the KTP was lost' })
  @IsDate()
  lost_time_incident: Date;
  
  @ApiProperty({ enum: DocumentType, description: 'Type of document lost' })
  @IsEnum(DocumentType)
  document_lost: DocumentType;

  @ApiProperty({ example: 'ID123456789', description: 'Support document identity' })
  @IsString()
  support_document_identity: string;
}
