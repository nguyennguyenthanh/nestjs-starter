import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get-users')
  getUsers(@Payload() data: any, @Ctx() ctx: RmqContext) {
    console.log('user');
    console.log('🚀 ~ AppController ~ getUsers ~ data:', data);

    const channel = ctx.getChannelRef();
    const originalMessage = ctx.getMessage();

    channel.ack(originalMessage);

    // try {
    //   // await do somethings
    //   // const channel = ctx.getChannelRef();
    //   // const originalMessage = ctx.getMessage();
    //   // channel.ack(originalMessage);
    // } catch (error) {}

    return this.appService.getUsersFromDB();
  }
}
