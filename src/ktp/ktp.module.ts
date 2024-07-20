import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KTP, KTPSchema } from './schemas/ktp.schema';
import { KTPService } from './ktp.service';
import { KTPController } from './ktp.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: KTP.name, schema: KTPSchema }])],
  controllers: [KTPController],
  providers: [KTPService],
})
export class KTPModule {}
