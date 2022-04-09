import { Module } from '@nestjs/common';
import { UserServiceModule } from './user/user-service.module';

@Module({
  imports: [UserServiceModule],
  exports: [UserServiceModule]
})
export class UseCasesModule {}
