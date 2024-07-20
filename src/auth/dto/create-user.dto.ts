import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  full_name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  birth_place: string;

  @ApiProperty()
  birth_date: Date;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  nationality: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ enum: ['user', 'admin', 'superadmin'], default: 'user' })
  role?: string; // Optional field for role
}
