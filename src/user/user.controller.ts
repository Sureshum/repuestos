import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Res() res, @Body() createUserDto: CreateUserDto) {
    const existingUser = await this.userService.findOneByEmail(createUserDto.email);
    if (existingUser) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'El usuario ya existe con ese email.'
      });
    }

    const newUser = await this.userService.create(createUserDto);
    return res.status(HttpStatus.CREATED).json({
      message: 'Usuario registrado exitosamente',
      user: newUser
    });
  }

  @Post('login')
  async login(@Res() res, @Body() loginUserDto: CreateUserDto) {
    return res.status(HttpStatus.OK).json({
      message: 'mmmmmmmmmmmmm'
    });
  }
}
