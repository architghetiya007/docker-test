"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const typeorm_3 = require("../typeorm");
const user_auth_service_1 = require("../utils/auth/user/user-auth.service");
let UsersService = class UsersService {
    constructor(usersRepository, userAuthService) {
        this.usersRepository = usersRepository;
        this.userAuthService = userAuthService;
    }
    async registerUser(body) {
        let user;
        try {
            user = await this.usersRepository.findOne({ where: { email: body.email } });
        }
        catch (error) {
            console.log(error, 'error');
            throw new common_1.InternalServerErrorException({
                status: false,
                message: 'Internal server error'
            });
        }
        if (user) {
            throw new common_1.BadRequestException({
                status: false,
                message: 'User already registered',
            });
        }
        try {
            let password = (0, bcrypt_1.hashSync)(body.password, 10);
            let createdUser = await this.usersRepository.create({ firstName: body.firstName, lastName: body.lastName, email: body.email, password: password });
            user = await this.usersRepository.save(createdUser);
        }
        catch (error) {
            console.log(error, 'error');
            throw new common_1.InternalServerErrorException({
                status: false,
                message: 'Internal server error'
            });
        }
        console.log(user, 'user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        const token = await this.userAuthService.signToken({
            userId: user.id,
            isAdmin: false,
            version: Date.now(),
        });
        return {
            status: true,
            message: "User Created Successfully",
            data: {
                user: user,
                token: token,
            },
        };
    }
    async loginUser(body) {
        let user;
        try {
            user = await this.usersRepository.findOne({ where: { email: body.email } });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                status: false,
                message: 'Internal server error'
            });
        }
        if (!user) {
            throw new common_1.BadRequestException({
                status: false,
                message: 'User not found. Please use another email'
            });
        }
        let comparePass = await (0, bcrypt_1.compare)(body.password, user.password);
        if (!comparePass) {
            throw new common_1.UnauthorizedException({
                status: false,
                message: 'Password mismatch. Please use another correct one'
            });
        }
        const token = await this.userAuthService.signToken({
            userId: user.id,
            isAdmin: false,
            version: Date.now(),
        });
        return {
            status: true,
            message: "Login Successfully",
            data: {
                user: user,
                token: token,
            },
        };
    }
    async registerAdmin(body) {
        let user;
        try {
            user = await this.usersRepository.findOne({ where: { email: body.email } });
        }
        catch (error) {
            console.log(error, 'error');
            throw new common_1.InternalServerErrorException({
                status: false,
                message: 'Internal server error'
            });
        }
        if (user) {
            throw new common_1.BadRequestException({
                status: false,
                message: 'User already registered',
            });
        }
        try {
            let password = (0, bcrypt_1.hashSync)(body.password, 10);
            let createdUser = await this.usersRepository.create({ firstName: body.firstName, lastName: body.lastName, email: body.email, password: password, isAdmin: true });
            user = await this.usersRepository.save(createdUser);
        }
        catch (error) {
            console.log(error, 'error');
            throw new common_1.InternalServerErrorException({
                status: false,
                message: 'Internal server error'
            });
        }
        console.log(user, 'user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        const token = await this.userAuthService.signToken({
            userId: user.id,
            isAdmin: true,
            version: Date.now(),
        });
        return {
            status: true,
            message: "User Created Successfully",
            data: {
                user: user,
                token: token,
            },
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_3.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_auth_service_1.UserAuthService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map