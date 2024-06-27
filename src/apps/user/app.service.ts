import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsersFromDB() {
    return [
      {
        name: 'a',
        email: 'a@gmail.com',
      },
    ];
  }
}
