import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { App2Module } from './app2.module';

async function bootstrap() {
  // 1 app - n modules
  const app1 = await NestFactory.create(AppModule);
  app1.setGlobalPrefix('api/v1');
  await app1.listen(3000);

  const app2 = await NestFactory.create(App2Module);
  app2.setGlobalPrefix('api/v2');
  await app2.listen(3001);
}
bootstrap();
