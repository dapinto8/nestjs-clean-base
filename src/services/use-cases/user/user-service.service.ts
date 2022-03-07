import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '@core/abstracts/user-repository.abstract';
import { User } from '@core/entities/user.entity';
import { CreateUserDto } from '@core/dtos/user.dto';
import { CryptoService } from '@services/crypto/crypto.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptoService: CryptoService
  ) {}

  async signUp(userDto: CreateUserDto): Promise<User> {
    const userFound = await this.userRepository.findByEmail(userDto.email);
    if (userFound) {
      throw new HttpException('User already exists', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    
    const password = await this.cryptoService.hash(userDto.password);
    const user = new User({
      ...userDto,
      password
    });

    return this.userRepository.create(user);
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findByEmail(email);
  }

  findAll(): Promise<User[]> {

    return this.userRepository.findAll();
  }
}
