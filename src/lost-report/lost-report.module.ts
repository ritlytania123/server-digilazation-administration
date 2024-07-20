// src/lost-report/lost-report.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LostReport, LostReportSchema } from './schemas/lost-report.schema';
import { LostReportService } from './lost-report.service';
import { LostReportController } from './lost-report.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LostReport.name, schema: LostReportSchema }]),
  ],
  providers: [LostReportService],
  controllers: [LostReportController],
  exports: [LostReportService],
})
export class LostReportModule {}
