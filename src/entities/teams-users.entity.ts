import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Team } from './team.entity';

@Index('teams_id_fk', ['teamId'], {})
@Index('users_id_fk', ['userId'], {})
@Entity('teams_users', { schema: 'sge_db' })
export class TeamsUsers {
  @Column('varchar', { primary: true, name: 'teams_users_id', length: 38 })
  teamsUsersId: string;

  @Column('varchar', { name: 'team_id_fk', length: 38 })
  teamId: string;

  @Column('varchar', { name: 'user_id_fk', length: 38 })
  userId: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt?: Date | null;

  @ManyToOne(() => User, (users) => users.userId, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id_fk', referencedColumnName: 'userId' }])
  user?: User;

  @ManyToOne(() => Team, (teams) => teams.teamId, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'team_id_fk', referencedColumnName: 'teamId' }])
  team?: Team;
}