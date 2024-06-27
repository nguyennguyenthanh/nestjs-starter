import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get-schools')
  getUsers(@Ctx() ctx: RmqContext) {
    console.log('school');

    const channel = ctx.getChannelRef();
    const originalMessage = ctx.getMessage();

    channel.ack(originalMessage);

    return this.appService.getSchoolsFromDB();
  }
}
