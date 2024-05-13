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
exports.AdminAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const user_auth_service_1 = require("../user/user-auth.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../../../typeorm");
const typeorm_3 = require("typeorm");
let AdminAuthGuard = class AdminAuthGuard {
    constructor(userAuthService, usersRepository) {
        this.userAuthService = userAuthService;
        this.usersRepository = usersRepository;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.userAuthService.verifyToken(token);
            let user = await this.usersRepository.findOne({ where: { id: payload.userId, isAdmin: true } });
            if (!user) {
                throw new common_1.UnauthorizedException();
            }
            request['user'] = user;
            return true;
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
    }
    extractTokenFromHeader(request) {
        var _a, _b;
        const [type, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        return type === 'Bearer' ? token : undefined;
    }
};
AdminAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(typeorm_2.UsersEntity)),
    __metadata("design:paramtypes", [user_auth_service_1.UserAuthService,
        typeorm_3.Repository])
], AdminAuthGuard);
exports.AdminAuthGuard = AdminAuthGuard;
//# sourceMappingURL=admin-auth.guard.js.map