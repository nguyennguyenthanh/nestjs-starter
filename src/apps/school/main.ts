import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { RMQ_OPTIONS, SERVICES } from 'src/utils/rmq';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: { ...RMQ_OPTIONS, queue: SERVICES.SCHOOL.queue, noAck: false },
    },
  );
  await app.listen();
}
bootstrap();
