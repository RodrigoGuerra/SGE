import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { Person } from './person.entity';
import { Functions } from './function.entity';

@Index('person_id_fk', ['personIdFk'], {})
@Index('functions_id_fk', ['functionsIdFk'], {})
@Entity('manager_employee', { schema: 'sge_db' })
export class PersonFunctions {
  @Column('varchar', { primary: true, name: 'person_functions_id', length: 38 })
  personFunctionsId: string;

  @Column('varchar', { name: 'person_id_fk', length: 38 })
  personIdFk: string;

  @Column('varchar', { name: 'functions_id_fk', length: 38 })
  functionsIdFk: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt?: Date | null;

  @OneToOne(() => Person, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'person_id_fk', referencedColumnName: 'personId' }])
  person?: Person;

  @OneToOne(() => Functions, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'functions_id_fk', referencedColumnName: 'functionId' }])
  functions?: Functions;
}
