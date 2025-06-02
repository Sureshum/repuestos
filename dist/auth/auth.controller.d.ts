import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    register(body: {
        email: string;
        password: string;
        role: string;
    }): Promise<{
        access_token: string;
    }>;
}
