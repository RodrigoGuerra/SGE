import { Column, Entity, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Person } from './person.entity';
import { Team } from './team.entity';

@Entity('school', { schema: 'sge_db' })
export class School {
  @Column('varchar', { primary: true, name: 'school_id', length: 38 })
  schoolId: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('tinyint', { name: 'person_id_fk', nullable: false })
  personId: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToOne(() => Person, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'person_id_fk', referencedColumnName: 'personId' }])
  person?: Person;

  @OneToMany(() => Team, (teams) => teams.school, { eager: false })
  teams: Team[];
}
