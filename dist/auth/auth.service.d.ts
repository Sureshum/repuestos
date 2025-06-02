import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { UserDocument } from '../auth/schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
type SafeUser = {
    _id: string;
    email: string;
    role: string;
};
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    createUser(createUserDto: CreateUserDto): Promise<UserDocument>;
    register(body: {
        email: string;
        password: string;
        role: string;
    }): Promise<{
        email: string;
        _id: any;
        role: string;
    }>;
    validateUser(email: string, pass: string): Promise<SafeUser | null>;
    login(user: SafeUser): Promise<{
        access_token: string;
    }>;
    generateToken(user: UserDocument): string;
}
export {};
