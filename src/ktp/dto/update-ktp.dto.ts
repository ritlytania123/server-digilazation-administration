import { PartialType } from '@nestjs/swagger';
import { CreateKTPDto } from './create-ktp.dto';

export class UpdateKTPDto extends PartialType(CreateKTPDto) {}
