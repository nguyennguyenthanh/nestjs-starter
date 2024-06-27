import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICES } from 'src/utils/rmq';

@Injectable()
export class AppService {
  constructor(
    @Inject(SERVICES.USER.name)
    private readonly userClient: ClientProxy,
    @Inject(SERVICES.SCHOOL.name)
    private readonly schoolClient: ClientProxy,
  ) {}

  getUsers(dto: any) {
    return this.userClient.send('get-users', dto);
  }

  getSchools(dto: any) {
    return this.schoolClient.send('get-schools', dto);
  }
}
