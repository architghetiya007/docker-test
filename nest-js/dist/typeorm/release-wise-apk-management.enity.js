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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseWiseApkManagement = void 0;
const typeorm_1 = require("typeorm");
const release_management_entity_1 = require("./release-management.entity");
const apk_manager_entity_1 = require("./apk-manager.entity");
let ReleaseWiseApkManagement = class ReleaseWiseApkManagement {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'bigint',
        name: 'releaseApkID',
    }),
    __metadata("design:type", Number)
], ReleaseWiseApkManagement.prototype, "releaseApkID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReleaseWiseApkManagement.prototype, "releaseID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => release_management_entity_1.ReleaseManagement, (ReleaseManagement) => ReleaseManagement.releaseWiseApkManagement),
    (0, typeorm_1.JoinColumn)({ name: 'releaseID' }),
    __metadata("design:type", release_management_entity_1.ReleaseManagement)
], ReleaseWiseApkManagement.prototype, "ReleaseManagement", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReleaseWiseApkManagement.prototype, "apkID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => apk_manager_entity_1.ApkManager, (ApkManager) => ApkManager.releaseWiseApkManagement),
    (0, typeorm_1.JoinColumn)({ name: 'apkID' }),
    __metadata("design:type", apk_manager_entity_1.ApkManager)
], ReleaseWiseApkManagement.prototype, "ApkManager", void 0);
ReleaseWiseApkManagement = __decorate([
    (0, typeorm_1.Entity)('tbl_release_wise_apk_management')
], ReleaseWiseApkManagement);
exports.ReleaseWiseApkManagement = ReleaseWiseApkManagement;
//# sourceMappingURL=release-wise-apk-management.enity.js.map