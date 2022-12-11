import { Module } from '@nestjs/common';
// import { UsersService } from '../services/users.service';
import { Authorize } from '../interceptor/authorize.interceptor';

@Module({
  imports: [],
  providers: [Authorize],
})
export class AuthorizeModule {}