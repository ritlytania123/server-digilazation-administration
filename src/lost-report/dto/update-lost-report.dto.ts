import { PartialType } from '@nestjs/swagger';
import { CreateLostReportDto } from './create-lost-report.dto';

export class UpdateLostReportDto extends PartialType(CreateLostReportDto) {}
