import { ExecutionContext } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { UsersEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class UserAuthGuard {
    private usersRepository;
    private readonly userAuthService;
    constructor(usersRepository: Repository<UsersEntity>, userAuthService: UserAuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
