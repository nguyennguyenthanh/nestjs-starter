import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSchoolsFromDB() {
    return [
      {
        name: 'School1',
        address: 'Lorem Ipsum',
      },
      {
        name: 'School2',
        address: 'Lorem Ipsum',
      },
    ];
  }
}
