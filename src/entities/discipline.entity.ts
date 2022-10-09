import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Person } from './person.entity';

@Index('name', ['name'], { unique: true })
@Entity('discipline', { schema: 'sge_db' })
export class Discipline {
  @Column('varchar', { primary: true, name: 'discipline_id', length: 38 })
  disciplineId: string;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    unique: true,
    length: 255,
  })
  name: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Person, (persons) => persons.discipline, { eager: false })
  persons: Person[];
}
