import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getToken(@Req() req, @Res({ passthrough: true }) res: Response): string {
    res.cookie('csrfToken', req.csrfToken(), { httpOnly: true });
    return this.appService.getHello();
  }
}
