import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('user_info')
export class UserInfo {
  @Column('id')
  @PrimaryColumn('uuid')
  @Generated()
  id: string;
}
