import { User } from '@core/entities/user.entity';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { CreateUserDto } from '@core/dtos/user.dto';
import { UserService } from '@services/use-cases/user/user-service.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() userDto: CreateUserDto): Promise<User> {
    return this.userService.signUp(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req): Promise<User[]> {
    console.log(req);
    console.log(req.isAuthenticated());
    return this.userService.findAll();
  }
}
