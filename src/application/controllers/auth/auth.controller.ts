import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthLoginDto } from '@core/dtos/auth.dto';
import { AuthService } from '@auth/auth.service';
import { add } from '@application/utils/date';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: AuthLoginDto, @Res({ passthrough: true }) res: Response) {
    const accessToken = await this.authService.login(user);
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      domain: 'localhost',
      sameSite: 'lax',
      secure: process.env.ENVIRONMENT !== 'development',
      maxAge: add(new Date(), { minutes: 15 }).getTime()
    });
    return 'OK';
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res) {
    res.clearCookie('access_token');
    return 'OK';
  }
}
