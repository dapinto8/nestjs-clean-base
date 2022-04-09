import { Module } from '@nestjs/common';
import { UserRepository } from '@core/abstracts/user-repository.abstract';
import { MemoryUserRepository } from './memory-user.repository';

@Module({
  exports: [
    UserRepository, 
    MemoryUserRepository
  ],
  providers: [
    {
      provide: UserRepository,
      useClass: MemoryUserRepository
    },
    MemoryUserRepository
  ]
})
export class MemoryUserRepositoryModule {}
