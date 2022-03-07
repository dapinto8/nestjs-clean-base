import { Module } from '@nestjs/common';
import { UserRepository } from '@core/abstracts/user-repository.abstract';
import { MemoryUserRepository } from '@infrastructure/persistence/memory/memory-user.repository';

@Module({
  providers: [
    {
      provide: UserRepository,
      useClass: MemoryUserRepository
    }
  ],
  exports: [UserRepository]
})
export class DataServiceModule {}
