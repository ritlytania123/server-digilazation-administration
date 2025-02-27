// src/lost-report/schemas/lost-report.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { DocumentType } from '../dto/create-lost-report.dto';
import { User } from '../../user/schemas/user.schema';

export type LostReportDocument = LostReport & Document;

@Schema({ timestamps: true })
export class LostReport {
  @Prop({ required: true })
  full_name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  police_lost_report_document: string;
  
  @Prop({ required: true })
  support_document_identity: string;

  @Prop({ required: true })
  lost_reason: string;

  @Prop({ required: true })
  lost_time_incident: Date;

  @Prop({ type: String, enum: DocumentType, required: true })
  document_lost: DocumentType; // Enum for the type of document lost

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User; // Reference to the User who reported the lost document

  
  @Prop({ type: String, enum: ['Pending', 'In Progress', 'Done', 'Reject'], default: 'Pending' })
  status: string;

  @Prop({ type: String, required: function(this: LostReport) { return this.status === 'Done' || this.status === 'Reject'; } })
  reason?: string; // Reason is required only if status is 'Done' or 'Reject'
}

export const LostReportSchema = SchemaFactory.createForClass(LostReport);
