import { ExecutionContext } from '@nestjs/common';
import { UserAuthService } from '../user/user-auth.service';
import { UsersEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class AdminAuthGuard {
    private readonly userAuthService;
    private usersRepository;
    constructor(userAuthService: UserAuthService, usersRepository: Repository<UsersEntity>);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
