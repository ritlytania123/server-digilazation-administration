import { KTPService } from './ktp.service';
import { CreateKTPDto } from './dto/create-ktp.dto';
import { KTP } from './schemas/ktp.schema';
import { Request } from 'express';
import { UpdateKTPDto } from './dto/update-ktp.dto';
export declare class KTPController {
    private readonly ktpService;
    constructor(ktpService: KTPService);
    create(createKTPDto: CreateKTPDto, req: Request): Promise<KTP>;
    findAll(req: Request): Promise<KTP[]>;
    findOne(id: string, req: Request): Promise<KTP>;
    update(id: string, updateKtpDto: UpdateKTPDto, req: Request): Promise<KTP>;
    remove(id: string, req: Request): Promise<void>;
}
