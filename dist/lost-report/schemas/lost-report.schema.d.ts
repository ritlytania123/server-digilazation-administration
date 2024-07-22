import { Document, Types } from 'mongoose';
import { DocumentType } from '../dto/create-lost-report.dto';
import { User } from '../../user/schemas/user.schema';
export type LostReportDocument = LostReport & Document;
export declare class LostReport {
    full_name: string;
    address: string;
    police_lost_report_document: string;
    lost_reason: string;
    lost_time_incident: Date;
    document_lost: DocumentType;
    user: User;
}
export declare const LostReportSchema: import("mongoose").Schema<LostReport, import("mongoose").Model<LostReport, any, any, any, Document<unknown, any, LostReport> & LostReport & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LostReport, Document<unknown, {}, import("mongoose").FlatRecord<LostReport>> & import("mongoose").FlatRecord<LostReport> & {
    _id: Types.ObjectId;
}>;
