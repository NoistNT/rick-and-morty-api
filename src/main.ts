import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule);

  if (PORT) {
    await app.listen(parseInt(PORT, 10));
  } else {
    console.error('PORT environment variable is not defined');
  }
}
bootstrap();
