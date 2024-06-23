import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule /* ChatModule */],
})
export class App2Module {}
