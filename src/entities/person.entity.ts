import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Index('email', ['email'], { unique: true })
@Index('user_id_fk', ['userId'], {})
@Entity('persons', { schema: 'sge_db' })
export class Person {
  @Column('varchar', { primary: true, name: 'person_id', length: 38 })
  personId: string;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    unique: true,
    length: 255,
  })
  email: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 255 })
  phone: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('tinyint', { name: 'age', nullable: true })
  age: number | null;

  @Column('varchar', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('tinyint', { name: 'user_id_fk', nullable: false })
  userId: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToOne(() => User, {
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id_fk', referencedColumnName: 'userId' }])
  user?: User;
}
