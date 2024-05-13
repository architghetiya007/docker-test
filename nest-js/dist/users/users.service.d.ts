import { Repository } from 'typeorm';
import { UsersEntity } from 'src/typeorm';
import { UserAuthService } from 'src/utils/auth/user/user-auth.service';
import { LoginUserRequestDTO, RegisterRequestDTO } from './DTO/request.dto';
export declare class UsersService {
    private usersRepository;
    private readonly userAuthService;
    constructor(usersRepository: Repository<UsersEntity>, userAuthService: UserAuthService);
    registerUser(body: RegisterRequestDTO): Promise<{
        status: boolean;
        message: string;
        data: {
            user: UsersEntity;
            token: string;
        };
    }>;
    loginUser(body: LoginUserRequestDTO): Promise<{
        status: boolean;
        message: string;
        data: {
            user: UsersEntity;
            token: string;
        };
    }>;
    registerAdmin(body: RegisterRequestDTO): Promise<{
        status: boolean;
        message: string;
        data: {
            user: UsersEntity;
            token: string;
        };
    }>;
}
