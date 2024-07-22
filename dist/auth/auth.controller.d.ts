import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from '@/user/schemas/user.schema';
import { DeleteUserDto } from './dto/delete-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<User>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    deleteAccount(req: any, deleteUserDto: DeleteUserDto): Promise<any>;
    getProtected(req: any): any;
}
