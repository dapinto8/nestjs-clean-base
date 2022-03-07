import { CreateUserDto } from '@core/dtos/user.dto';
import { gender, UserStatus } from '@core/types';
import { Address } from './address.entity';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  address?: Address;
  gender?: gender;
  birhDate?: Date;
  status: UserStatus;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: CreateUserDto) {
    Object.assign(this, partial);
  }
}
