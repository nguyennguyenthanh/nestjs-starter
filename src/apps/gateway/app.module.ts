import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RMQ_OPTIONS, SERVICES } from 'src/utils/rmq';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.USER.name,
        transport: Transport.RMQ,
        options: { ...RMQ_OPTIONS, queue: SERVICES.USER.queue },
      },
      {
        name: SERVICES.SCHOOL.name,
        transport: Transport.RMQ,
        options: { ...RMQ_OPTIONS, queue: SERVICES.SCHOOL.queue },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
