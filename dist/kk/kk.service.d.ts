import { Model } from 'mongoose';
import { KK, KKDocument } from './schemas/kk.schema';
import { CreateKKDto } from './dto/create-kk.dto';
import { UpdateKKDto } from './dto/update-kk.dto';
import { User, UserInterface } from '../user/schemas/user.schema';
export declare class KKService {
    private kkModel;
    constructor(kkModel: Model<KKDocument>);
    create(createKKDto: CreateKKDto, userId: string): Promise<KK>;
    findAll(user?: UserInterface): Promise<KK[]>;
    findOne(id: string, user?: User): Promise<KK>;
    update(id: string, updateKKDto: UpdateKKDto, user?: User): Promise<KK>;
    remove(id: string, user?: User): Promise<KK>;
}
