import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor (private prima:PrismaService){}
  signin() {
    return { msg: 'i have signed in' };
  }

  signup() {
    return { msg: 'i have signed up' };
  }
}
