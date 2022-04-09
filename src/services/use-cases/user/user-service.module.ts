import { Module } from '@nestjs/common';
import { UserService } from './user-service.service';
import { MemoryUserRepositoryModule } from '@infrastructure/persistence/memory/memory-user-repository.module';
import { CryptoModule } from '@infrastructure/frameworks/crypto/crypto.module';

@Module({
  imports: [CryptoModule, MemoryUserRepositoryModule],
  providers: [UserService],
  exports: [UserService]
})
export class UserServiceModule {}
