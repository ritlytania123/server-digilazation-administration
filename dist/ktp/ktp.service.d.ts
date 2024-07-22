import { Model } from 'mongoose';
import { KTP, KTPDocument } from './schemas/ktp.schema';
import { CreateKTPDto } from './dto/create-ktp.dto';
import { User, UserInterface } from '../user/schemas/user.schema';
import { UpdateKTPDto } from './dto/update-ktp.dto';
export declare class KTPService {
    private ktpModel;
    constructor(ktpModel: Model<KTPDocument>);
    create(createKTPDto: CreateKTPDto, userId: string): Promise<KTP>;
    findAll(user?: UserInterface): Promise<KTP[]>;
    findOne(id: string, user?: UserInterface): Promise<KTP>;
    update(id: string, updateKtpDto: UpdateKTPDto, user?: User): Promise<KTP>;
    remove(id: string, user: User): Promise<void>;
}
