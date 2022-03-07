import { User } from '@core/entities/user.entity';
import { GenericRepository } from './generic-repository.abstract';

export abstract class UserRepository extends GenericRepository<User> {
  abstract findByEmail(email: string): Promise<User>;
}