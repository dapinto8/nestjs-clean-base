import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserServiceModule } from '@services/use-cases/user/user-service.module';
import { CryptoModule } from '@services/crypto/crypto.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserServiceModule,
    PassportModule,
    CryptoModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? '2eaa666ace7315ad63c3f54b057b72737348cd91173a8ea9ef077d224308fc43',
      signOptions: {
        algorithm: 'HS256',
        expiresIn:  process.env.JWT_EXPIRES_IN ?? '2h'
      }
    })
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
