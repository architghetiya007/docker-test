import { JwtService } from '@nestjs/jwt';
import { AuthPayload } from 'src/utils/dto/params.dto';
export declare class UserAuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    signToken(payload: AuthPayload): Promise<string>;
    verifyToken(token: string): Promise<any>;
}
