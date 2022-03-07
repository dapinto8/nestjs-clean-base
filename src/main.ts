import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ResponseInterceptor } from '@application/interceptors/response.interceptor';
import { AllExceptionsFilter } from '@application/interceptors/error.interceptor';
// import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    origin: process.env.BASE_URL,
    credentials: true
  });

  // TODO
  // app.use(
  //   csurf({
  //     cookie: {
  //       key: 'csrfToken',
  //       sameSite: true,
  //       secure: true,
  //       httpOnly: process.env.ENVIRONMENT !== 'production'
  //     }
  //   })
  // );
  
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new ResponseInterceptor());
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));

  await app.listen(3000);
}
bootstrap();
