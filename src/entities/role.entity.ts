import { Column, Entity, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('roles', { schema: 'sge_db' })
export class Role {
  @Column('tinyint', { primary: true, name: 'role_id' })
  roleId: number;

  @Column('varchar', { name: 'role_name', nullable: true, length: 255 })
  roleName: string | null;

  @Column('tinyint', { name: 'can_create_student', nullable: true, width: 1 })
  canCreateStudent: boolean | null;

  @Column('tinyint', { name: 'can_read_student', nullable: true, width: 1 })
  canReadStudent: boolean | null;

  @Column('tinyint', { name: 'can_update_student', nullable: true, width: 1 })
  canUpdateStudent: boolean | null;

  @Column('tinyint', { name: 'can_delete_student', nullable: true, width: 1 })
  canDeleteStudent: boolean | null;

  @Column('tinyint', { name: 'can_create_employee', nullable: true, width: 1 })
  canCreateEmployee: boolean | null;

  @Column('tinyint', { name: 'can_read_employee', nullable: true, width: 1 })
  canReadEmployee: boolean | null;

  @Column('tinyint', { name: 'can_update_employee', nullable: true, width: 1 })
  canUpdateEmployee: boolean | null;

  @Column('tinyint', { name: 'can_delete_employee', nullable: true, width: 1 })
  canDeleteEmployee: boolean | null;

  @Column('tinyint', { name: 'can_create_school', nullable: true, width: 1 })
  canCreateSchool: boolean | null;

  @Column('tinyint', { name: 'can_read_school', nullable: true, width: 1 })
  canReadSchool: boolean | null;

  @Column('tinyint', { name: 'can_update_school', nullable: true, width: 1 })
  canUpdateSchool: boolean | null;

  @Column('tinyint', { name: 'can_delete_school', nullable: true, width: 1 })
  canDeleteSchool: boolean | null;

  @Column('tinyint', { name: 'can_create_class', nullable: true, width: 1 })
  canCreateClass: boolean | null;

  @Column('tinyint', { name: 'can_read_class', nullable: true, width: 1 })
  canReadClass: boolean | null;

  @Column('tinyint', { name: 'can_update_class', nullable: true, width: 1 })
  canUpdateClass: boolean | null;

  @Column('tinyint', { name: 'can_delete_class', nullable: true, width: 1 })
  canDeleteClass: boolean | null;

  @Column('tinyint', {
    name: 'can_create_discipline',
    nullable: true,
    width: 1,
  })
  canCreateDiscipline: boolean | null;

  @Column('tinyint', { name: 'can_read_discipline', nullable: true, width: 1 })
  canReadDiscipline: boolean | null;

  @Column('tinyint', {
    name: 'can_update_discipline',
    nullable: true,
    width: 1,
  })
  canUpdateDiscipline: boolean | null;

  @Column('tinyint', {
    name: 'can_delete_discipline',
    nullable: true,
    width: 1,
  })
  canDeleteDiscipline: boolean | null;

  @Column('tinyint', {
    name: 'can_vinculate_student',
    nullable: true,
    width: 1,
  })
  canVinculateStudent: boolean | null;

  @Column('tinyint', {
    name: 'can_vinculate_employee',
    nullable: true,
    width: 1,
  })
  canVinculateEmployee: boolean | null;

  @Column('tinyint', { name: 'can_vinculate_class', nullable: true, width: 1 })
  canVinculateClass: boolean | null;

  @Column('tinyint', {
    name: 'can_vinculate_discipline',
    nullable: true,
    width: 1,
  })
  canVinculateDiscipline: boolean | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => User, (users) => users.role, { eager: false })
  users: User[];
}
