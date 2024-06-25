import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import { BaseEntity } from 'src/utils/BaseEntity';

@Entity({
  name: 'users',
})
export class User extends BaseEntity {
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'email' })
  email: string;
}
