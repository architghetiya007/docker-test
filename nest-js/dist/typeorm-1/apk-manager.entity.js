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
exports.ApkManager = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const ota_scheduler_entity_1 = require("./ota-scheduler.entity");
const release_wise_apk_management_enity_1 = require("./release-wise-apk-management.enity");
let ApkManager = class ApkManager {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'bigint',
        name: 'apkId',
    }),
    __metadata("design:type", Number)
], ApkManager.prototype, "apkId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], ApkManager.prototype, "apkName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], ApkManager.prototype, "apkVariant", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], ApkManager.prototype, "apkVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        default: '',
        type: "text"
    }),
    __metadata("design:type", String)
], ApkManager.prototype, "apkDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
        type: "text"
    }),
    __metadata("design:type", String)
], ApkManager.prototype, "apkFileURL", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        default: '',
        type: "text"
    }),
    __metadata("design:type", String)
], ApkManager.prototype, "apkReleaseNotesURL", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        default: '',
        type: "text"
    }),
    __metadata("design:type", String)
], ApkManager.prototype, "Product", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ApkManager.prototype, "createdOn", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ApkManager.prototype, "updatedOn", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ApkManager.prototype, "deletedOn", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
        type: "text"
    }),
    __metadata("design:type", String)
], ApkManager.prototype, "createBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: "boolean",
        default: true
    }),
    __metadata("design:type", Boolean)
], ApkManager.prototype, "apkStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ota_scheduler_entity_1.OtaScheduler, (otaScheduler) => otaScheduler.ApkManager),
    __metadata("design:type", Array)
], ApkManager.prototype, "otaScheduler", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => release_wise_apk_management_enity_1.ReleaseWiseApkManagement, (releaseWiseApkManagement) => releaseWiseApkManagement.ReleaseManagement),
    __metadata("design:type", Array)
], ApkManager.prototype, "releaseWiseApkManagement", void 0);
ApkManager = __decorate([
    (0, typeorm_1.Entity)('tbl_apk_manager')
], ApkManager);
exports.ApkManager = ApkManager;
//# sourceMappingURL=apk-manager.entity.js.map