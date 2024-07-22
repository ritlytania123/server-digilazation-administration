import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOneByEmail(email: string): Promise<User | null>;
    findOne(userId: string): Promise<User | null>;
    findByIdAndDelete(userId: string): Promise<import("mongoose").FlattenMaps<UserDocument> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(userId: string, updateUserDto: UpdateUserDto): Promise<User>;
}
