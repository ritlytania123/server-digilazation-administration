import { Schema, Document } from 'mongoose';
export type KKDocument = KK & Document;
export declare class KK {
    full_name: string;
    address: string;
    birth_place: string;
    birth_date: Date;
    gender: string;
    nationality: string;
    support_document_identity: string;
    status: string;
    reason?: string;
    user: string;
}
export declare const KKSchema: Schema<KK, import("mongoose").Model<KK, any, any, any, Document<unknown, any, KK> & KK & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, KK, Document<unknown, {}, import("mongoose").FlatRecord<KK>> & import("mongoose").FlatRecord<KK> & {
    _id: import("mongoose").Types.ObjectId;
}>;
