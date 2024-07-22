import { Model } from 'mongoose';
import { LostReport, LostReportDocument } from './schemas/lost-report.schema';
import { CreateLostReportDto } from './dto/create-lost-report.dto';
import { UserInterface } from '@/user/schemas/user.schema';
import { UpdateLostReportDto } from './dto/update-lost-report.dto';
export declare class LostReportService {
    private lostReportModel;
    constructor(lostReportModel: Model<LostReportDocument>);
    create(createLostReportDto: CreateLostReportDto, userId: string): Promise<LostReport>;
    findAll(user?: UserInterface): Promise<LostReport[]>;
    findOne(id: string, user?: UserInterface): Promise<LostReport>;
    update(id: string, updateLostReportDto: UpdateLostReportDto, user?: UserInterface): Promise<LostReport>;
    remove(id: string, user: UserInterface): Promise<void>;
}
