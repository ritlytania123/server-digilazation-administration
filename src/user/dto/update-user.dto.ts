import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ required: false })
  full_name?: string;

  @ApiProperty({ required: false })
  address?: string;

  @ApiProperty({ required: false })
  birth_place?: string;

  @ApiProperty({ required: false })
  birth_date?: Date;

  @ApiProperty({ required: false })
  gender?: string;

  @ApiProperty({ required: false })
  nationality?: string;

  @ApiProperty({ required: false })
  phone_number?: string;

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false })
  password?: string; // If you want to allow password updates

  @ApiProperty({ enum: ['user', 'admin', 'superadmin'], required: false })
  role?: string; // Optional field for role update
}
