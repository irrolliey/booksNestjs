import { AuthService } from './auth.service';
import { Controller, Post,Body } from '@nestjs/common';
import { AuthDto } from './dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body('email') email:string,@Body('password') password:string) {
    console.log({
      email,
      password,
    });
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
