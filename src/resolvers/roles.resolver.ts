import { Resolver } from '@nestjs/graphql';
import { RolesService } from '../services/roles.service';

@Resolver('Role')
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}
}
