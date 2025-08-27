import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Res() res, @Body() loginUserDto: CreateUserDto) {
    const user = await this.authService.validateUser(loginUserDto.email, loginUserDto.password);
    if (!user) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Credenciales inválidas.'
      });
    }

    const token = await this.authService.login(user);
    return res.status(HttpStatus.OK).json({
      message: 'Login exitoso',
      ...token
    });
  }
}
