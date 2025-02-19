import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type KTPDocument = KTP & Document;

@Schema({ timestamps: true })
export class KTP {
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

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User; // Reference to the User who created this KTP

  @Prop({ type: String, enum: ['Pending', 'In Progress', 'Done', 'Reject'], default: 'Pending' })
  status: string;

  @Prop({ type: String, required: function(this: KTP) { return this.status === 'Done' || this.status === 'Reject'; } })
  reason?: string; // Reason is required only if status is 'Done' or 'Reject'

}

export const KTPSchema = SchemaFactory.createForClass(KTP);
