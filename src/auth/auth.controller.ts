import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('login')
async login(@Body() body: { email: string; password: string }): Promise<{ access_token: string }> {
  const user = await this.authService.validateUser(body.email, body.password);

  if (!user) {
    throw new UnauthorizedException('Credenciales inválidas');
  }

  const payload = { 
    email: user.email, 
    sub: user._id, 
    roles: user.role
  };

  const access_token = this.jwtService.sign(payload, { secret: process.env.JWT_SECRET });

  return { access_token };
}

  @Post('register')
  async register(@Body() body: { email: string; password: string; role: string }) {
    const user = await this.authService.register(body);
    const payload = { email: user.email, sub: user._id, roles: [user.role] };
    return { access_token: this.jwtService.sign(payload) };
  }
}