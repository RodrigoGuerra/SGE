import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Role } from './role.entity';

@Index('email', ['email'], { unique: true })
@Index('role_id_fk', ['roleId'], {})
@Entity('users', { schema: 'sge_db' })
export class User {
  @Column('varchar', { primary: true, name: 'user_id', length: 38 })
  userId: string;

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

  @Column('tinyint', { name: 'role_id_fk', nullable: false })
  roleId: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Role, (roles) => roles.users, {
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'role_id_fk', referencedColumnName: 'roleId' }])
  role?: Role;
}
