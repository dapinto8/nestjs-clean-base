import { AuthLoginDto } from '@core/dtos/auth.dto';
import { User } from '@core/entities/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from '@infrastructure/frameworks/crypto/crypto.service';
import { UserService } from '@services/use-cases/user/user-service.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(authLoginDto: AuthLoginDto): Promise<User | null> {
    const { email, password } = authLoginDto;
    const user = await this.userService.findByEmail(email);
    if (!user || !this.cryptoService.compare(password, user.password)) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto);
    const payload = { email: user.email, sub: user.id };

    return this.jwtService.sign(payload);
  }
}
