import { Module } from '@nestjs/common';
import { UserService } from './user-service.service';
import { DataServiceModule } from '@services/data-service/data-service.module';
import { CryptoModule } from '@services/crypto/crypto.module';

@Module({
  imports: [DataServiceModule, CryptoModule],
  providers: [UserService],
  exports: [UserService]
})
export class UserServiceModule {}
