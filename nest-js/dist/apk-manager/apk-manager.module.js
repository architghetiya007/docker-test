"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApkManagerModule = void 0;
const common_1 = require("@nestjs/common");
const apk_manager_controller_1 = require("./apk-manager.controller");
const apk_manager_service_1 = require("./apk-manager.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
let ApkManagerModule = class ApkManagerModule {
};
ApkManagerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([typeorm_2.ApkManager, typeorm_2.OtaScheduler, typeorm_2.ReleaseWiseApkManagement, typeorm_2.ReleaseManagement])
        ],
        controllers: [apk_manager_controller_1.ApkManagerController],
        providers: [apk_manager_service_1.ApkManagerService]
    })
], ApkManagerModule);
exports.ApkManagerModule = ApkManagerModule;
//# sourceMappingURL=apk-manager.module.js.map