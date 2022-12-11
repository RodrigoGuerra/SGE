import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IncomingMessage } from 'http';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class Authorize implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: IncomingMessage = context.getArgByIndex(2).req;
    const token = req.headers.authorization;
    return this.verify(token);
  }

  public async verify(token: string): Promise<boolean> {
    const client = new OAuth2Client(process.env.CLIENT_ID);
    await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });
    return true;
  }
}