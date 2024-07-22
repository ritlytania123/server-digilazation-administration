import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    full_name?: string;
    address?: string;
    birth_place?: string;
    birth_date?: Date;
    gender?: string;
    nationality?: string;
    phone_number?: string;
    email?: string;
    password?: string;
    role?: string;
}
export {};
