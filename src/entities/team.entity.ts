import { Column, Entity, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Discipline } from './discipline.entity';
import { Person } from './person.entity';
import { School } from './school.entity';

@Entity('team', { schema: 'sge_db' })
export class Team {
  @Column('varchar', { primary: true, name: 'team_id', length: 38 })
  teamId: string;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('tinyint', { name: 'discipline_id_fk', nullable: false })
  disciplineId: string | null;

  @Column('tinyint', { name: 'school_id_fk', nullable: false })
  schoolId: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Discipline, (disciplines) => disciplines.persons, {
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([
    { name: 'discipline_id_fk', referencedColumnName: 'disciplineId' },
  ])
  discipline?: Discipline;

  @ManyToOne(() => School, (schools) => schools.teams, {
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'school_id_fk', referencedColumnName: 'schoolId' }])
  school?: School;

  @ManyToMany(() => Person, (persons) => persons.teams, { eager: false })
  persons: Person[];
}
