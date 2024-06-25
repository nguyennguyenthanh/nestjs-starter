import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  checkIsLoggedIn() {
    return true;
  }
}
