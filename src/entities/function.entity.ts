import { Column, Entity, Index } from 'typeorm';

@Index('name', ['name'], { unique: true })
@Entity('functions', { schema: 'sge_db' })
export class Functions {
  @Column('varchar', { primary: true, name: 'function_id', length: 38 })
  functionId: string;

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
}
