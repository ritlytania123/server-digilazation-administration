import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
import { KKModule } from './kk/kk.module';
import { KTPModule } from './ktp/ktp.module';
import { LostReportModule } from './lost-report/lost-report.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
      }),
    }),
    AuthModule,
    UsersModule,
    KKModule,
    KTPModule,
    LostReportModule
  ],
})
export class AppModule {}
