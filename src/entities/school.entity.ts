import { Column, Entity, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Team } from './team.entity';

@Entity('schools', { schema: 'sge_db' })
export class School {
  @Column('varchar', { primary: true, name: 'school_id', length: 38 })
  schoolId: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('tinyint', { name: 'manager_id_fk', nullable: false })
  managerId: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToOne(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'manager_id_fk', referencedColumnName: 'userId' }])
  user?: User;

  @OneToMany(() => Team, (teams) => teams.school, { eager: false })
  teams: Team[];
}
