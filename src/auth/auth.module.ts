import { Logger, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UsersModule } from '../user/user.module';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategy/local.strategy';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './guard/role.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60m' },
      }),
    }),
    UsersModule,
  ],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard, // Register global guard if needed
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard, // Register global guard if needed
    },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
