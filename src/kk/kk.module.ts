import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KKController } from './kk.controller';
import { KKService } from './kk.service';
import { KK, KKSchema } from './schemas/kk.schema';
import { UsersModule } from '../user/user.module'; // Import UsersModule

@Module({
  imports: [
    MongooseModule.forFeature([{ name: KK.name, schema: KKSchema }]), // Ensure the correct model name
    UsersModule, // Add UsersModule here
  ],
  controllers: [KKController],
  providers: [KKService],
})
export class KKModule {}
