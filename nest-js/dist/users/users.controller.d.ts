import { UsersService } from './users.service';
import { LoginUserRequestDTO, RegisterRequestDTO } from './DTO/request.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    registerUser(body: RegisterRequestDTO): Promise<{
        status: boolean;
        message: string;
        data: {
            user: import("../typeorm").UsersEntity;
            token: string;
        };
    }>;
    loginUser(body: LoginUserRequestDTO): Promise<{
        status: boolean;
        message: string;
        data: {
            user: import("../typeorm").UsersEntity;
            token: string;
        };
    }>;
    registerAdmin(body: RegisterRequestDTO): Promise<{
        status: boolean;
        message: string;
        data: {
            user: import("../typeorm").UsersEntity;
            token: string;
        };
    }>;
}
