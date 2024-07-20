import { Schema, Document } from 'mongoose';
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';

export type KKDocument = KK & Document;

@MongooseSchema({ timestamps: true })
export class KK {
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
  support_document_identity: string;

  @Prop({ type: Schema.Types.ObjectId, ref: 'User', required: true })
  user: string; // Reference to User ID
}

export const KKSchema = SchemaFactory.createForClass(KK);
