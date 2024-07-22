import { UsersService } from './user.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./schemas/user.schema").User>;
    getProfile(id: string, req: any): Promise<import("./schemas/user.schema").User>;
    getCurrentUser(req: any): Promise<import("./schemas/user.schema").User>;
    updateProfile(updateUserDto: UpdateUserDto, req: any): Promise<import("./schemas/user.schema").User>;
}
