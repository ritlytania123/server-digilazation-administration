import { LostReportService } from './lost-report.service';
import { CreateLostReportDto } from './dto/create-lost-report.dto';
import { LostReport } from './schemas/lost-report.schema';
import { Request } from 'express';
import { UpdateLostReportDto } from './dto/update-lost-report.dto';
export declare class LostReportController {
    private readonly lostReportService;
    constructor(lostReportService: LostReportService);
    create(createLostReportDto: CreateLostReportDto, req: Request): Promise<LostReport>;
    findAll(req: Request): Promise<LostReport[]>;
    findOne(id: string, req: Request): Promise<LostReport>;
    update(id: string, updateLostReportDto: UpdateLostReportDto, req: Request): Promise<LostReport>;
    remove(id: string, req: Request): Promise<void>;
}
