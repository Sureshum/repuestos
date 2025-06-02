import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable, ConflictException } from '@nestjs/common';

type SafeUser = {
  _id: string;
  email: string;
  role: string;
};

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}
  async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = new this.userModel({
      email: createUserDto.email,
      password: hashedPassword,
    });
    return newUser.save();
  }

  async register(body: { email: string; password: string; role: string }) {
    const existing = await this.userModel.findOne({ email: body.email });
    if (existing) {
      throw new ConflictException('El email ya está registrado');
    }
    const hash = await bcrypt.hash(body.password, 10);
    const user = new this.userModel({
      email: body.email,
      password: hash,
      role: body.role,
    });
    await user.save();
    return { email: user.email, _id: user._id, role: user.role };
  }

  async validateUser(email: string, pass: string): Promise<SafeUser | null> {
    const user = await this.userModel.findOne({ email }).select('+password').lean().exec();
    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) return null;

    const { password, ...result } = user;
    return { ...result, _id: user._id.toString() };
  }

  async login(user: SafeUser) {
    const payload = { email: user.email, sub: user._id ?? '', role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  generateToken(user: UserDocument): string {
    const payload = { 
      email: user.email, 
      sub: user._id.toString(),
      role: user.role 
    };
    return this.jwtService.sign(payload);
  }
}