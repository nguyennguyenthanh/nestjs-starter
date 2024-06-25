import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInfo } from './entities/user-info.entity';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserInfo)
    private readonly userInfoRepository: Repository<UserInfo>,
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    this.authService.checkIsLoggedIn();

    return this.userRepository.find();
  }

  findOne(id: string) {
    // const user = this.userRepository.findOneBy({
    //   id: id,
    // });

    // if (!user) {
    //   throw new Error('User not found');
    // }

    // return this.userInfoRepository.update({
    //   id: '',
    // });

    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
