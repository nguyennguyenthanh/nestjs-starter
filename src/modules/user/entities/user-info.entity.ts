import { BaseEntity } from 'src/utils/BaseEntity';
import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_info' })
export class UserInfo extends BaseEntity {}
