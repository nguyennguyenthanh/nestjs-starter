import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const gateway = await NestFactory.create(AppModule);
  gateway.setGlobalPrefix('api/v1');
  await gateway.listen(3000);
}
bootstrap();
