import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AppController } from './app.controller';

import { AuthController } from '@application/controllers/auth/auth.controller';
import { UserController } from '@application/controllers/user/user.controller';

import { UserServiceModule } from '@services/use-cases/user/user-service.module';
import { AuthModule } from '@auth/auth.module';
import { CryptoModule } from './services/crypto/crypto.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserServiceModule, AuthModule, CryptoModule],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService]
})
export class AppModule {}
