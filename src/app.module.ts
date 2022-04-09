import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AuthController } from '@application/controllers/auth/auth.controller';
import { UserController } from '@application/controllers/user/user.controller';

import { AppService } from './app.service';
import { UseCasesModule } from '@services/use-cases/use-cases.module';
import { AuthModule } from '@auth/auth.module';
import { CryptoModule } from '@infrastructure/frameworks/crypto/crypto.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UseCasesModule,
    AuthModule,
    CryptoModule
  ],
  controllers: [
    AppController,
    UserController,
    AuthController
  ],
  providers: [AppService]
})
export class AppModule {}
