import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidateUserDto } from './dto/validate-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<import("../user/schemas/user.schema").User>;
    validateUser(validateUserDto: ValidateUserDto): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    deleteAccount(userId: string, deleteUserDto: DeleteUserDto): Promise<any>;
    private deleteUser;
}
