"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsModule = void 0;
const common_1 = require("@nestjs/common");
const user_auth_service_1 = require("./auth/user/user-auth.service");
const jwt_1 = require("@nestjs/jwt");
const user_auth_guard_1 = require("./auth/user/user-auth.guard");
const admin_auth_guard_1 = require("./auth/admin/admin-auth.guard");
const typeorm_1 = require("../typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let UtilsModule = class UtilsModule {
};
UtilsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                useFactory: async () => ({
                    secret: '9c32d407a1598e0d',
                    signOptions: {
                        algorithm: 'HS256',
                        expiresIn: '24h',
                    },
                })
            }),
            typeorm_2.TypeOrmModule.forFeature([typeorm_1.UsersEntity]),
        ],
        providers: [user_auth_service_1.UserAuthService, jwt_1.JwtService, user_auth_guard_1.UserAuthGuard, admin_auth_guard_1.AdminAuthGuard],
        exports: [user_auth_service_1.UserAuthService, jwt_1.JwtService, user_auth_guard_1.UserAuthGuard, admin_auth_guard_1.AdminAuthGuard]
    })
], UtilsModule);
exports.UtilsModule = UtilsModule;
//# sourceMappingURL=utils.module.js.map