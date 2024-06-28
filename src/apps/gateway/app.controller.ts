import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  ping() {
    return 'pong';
  }

  @Get('users')
  getUsers(@Req() req: Request) {
    const payload = {
      context: {
        user: 'me@example.com', // req.user (after login)
        session_id: '...', // extract from token
        device_id: '...', // extract DB/TOKEN ...
        path: req.url,
        method: req.method,
      },
      data: {
        foo: 'bar',
      },
    };
    return this.appService.getUsers(payload);
  }

  @Get('schools')
  getSchools() {
    return this.appService.getSchools({});
  }
}
