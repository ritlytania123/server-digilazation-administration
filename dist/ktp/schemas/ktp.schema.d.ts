import { Document, Types } from 'mongoose';
import { User } from '../../user/schemas/user.schema';
export type KTPDocument = KTP & Document;
export declare class KTP {
    full_name: string;
    address: string;
    birth_place: string;
    birth_date: Date;
    gender: string;
    nationality: string;
    support_document_identity: string;
    user: User;
    status: string;
    reason?: string;
}
export declare const KTPSchema: import("mongoose").Schema<KTP, import("mongoose").Model<KTP, any, any, any, Document<unknown, any, KTP> & KTP & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, KTP, Document<unknown, {}, import("mongoose").FlatRecord<KTP>> & import("mongoose").FlatRecord<KTP> & {
    _id: Types.ObjectId;
}>;
