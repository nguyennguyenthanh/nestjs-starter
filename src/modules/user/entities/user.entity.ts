import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @Column('id')
  @PrimaryColumn('uuid')
  @Generated()
  id: string;
}
