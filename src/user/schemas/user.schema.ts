import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export interface UserInterface extends Document {
  _id: Types.ObjectId; // _id field as a string
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

@Schema({ timestamps: true })
export class User {
  _id: Types.ObjectId;

  @Prop({ required: true })
  full_name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  birth_place: string;

  @Prop({ required: true })
  birth_date: Date;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string; // Store hashed password

  @Prop({ enum: ['user', 'admin', 'superadmin'], default: 'user' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
