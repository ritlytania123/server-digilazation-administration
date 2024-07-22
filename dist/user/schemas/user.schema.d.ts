import { Document, Types } from 'mongoose';
export interface UserInterface extends Document {
    _id: Types.ObjectId;
    full_name: string;
    address: string;
    birth_place: string;
    birth_date: Date;
    gender: string;
    nationality: string;
    phone_number: string;
    email: string;
    password: string;
    role: string;
}
export type UserDocument = User & Document;
export declare class User {
    _id: Types.ObjectId;
    full_name: string;
    address: string;
    birth_place: string;
    birth_date: Date;
    gender: string;
    nationality: string;
    phone_number: string;
    email: string;
    password: string;
    role: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: Types.ObjectId;
}>>;
