import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  full_name?: string;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  birth_place?: string;

  @ApiProperty()
  birth_date?: Date;

  @ApiProperty()
  gender?: string;

  @ApiProperty()
  nationality?: string;

  @ApiProperty()
  phone_number?: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  password?: string;

  @ApiProperty({ enum: ['user', 'admin', 'superadmin'], default: 'user' })
  role?: string;
}
