import { KKService } from './kk.service';
import { CreateKKDto } from './dto/create-kk.dto';
import { UpdateKKDto } from './dto/update-kk.dto';
import { KK } from './schemas/kk.schema';
import { Request } from 'express';
export declare class KKController {
    private readonly kkService;
    constructor(kkService: KKService);
    create(createKKDto: CreateKKDto, req: Request): Promise<KK>;
    findAll(req: Request): Promise<KK[]>;
    findOne(id: string, req: Request): Promise<KK>;
    update(id: string, updateKKDto: UpdateKKDto, req: Request): Promise<KK>;
    remove(id: string, req: Request): Promise<KK>;
}
