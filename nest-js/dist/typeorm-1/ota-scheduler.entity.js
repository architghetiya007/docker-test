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
exports.OtaScheduler = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const apk_manager_entity_1 = require("./apk-manager.entity");
const group_entity_1 = require("./group.entity");
const release_management_entity_1 = require("./release-management.entity");
let OtaScheduler = class OtaScheduler {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OtaScheduler.prototype, "batchID", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], OtaScheduler.prototype, "tabletSerialNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_entity_1.Group, (Group) => Group.otaScheduler),
    (0, typeorm_1.JoinColumn)({ name: 'groupId' }),
    __metadata("design:type", group_entity_1.Group)
], OtaScheduler.prototype, "Group", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], OtaScheduler.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => release_management_entity_1.ReleaseManagement, (ReleaseManagement) => ReleaseManagement.otaScheduler),
    (0, typeorm_1.JoinColumn)({ name: 'releaseID' }),
    __metadata("design:type", release_management_entity_1.ReleaseManagement)
], OtaScheduler.prototype, "ReleaseManagement", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], OtaScheduler.prototype, "releaseID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => apk_manager_entity_1.ApkManager, (ApkManager) => ApkManager.otaScheduler),
    (0, typeorm_1.JoinColumn)({ name: 'targetApkID' }),
    __metadata("design:type", apk_manager_entity_1.ApkManager)
], OtaScheduler.prototype, "ApkManager", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], OtaScheduler.prototype, "targetApkID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: "text",
    }),
    __metadata("design:type", String)
], OtaScheduler.prototype, "targetApkFileURL", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], OtaScheduler.prototype, "otaStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], OtaScheduler.prototype, "otaPercentage", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OtaScheduler.prototype, "createdOn", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OtaScheduler.prototype, "updatedOn", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], OtaScheduler.prototype, "deletedOn", void 0);
OtaScheduler = __decorate([
    (0, typeorm_1.Entity)('tbl_ota_scheduler'),
    (0, typeorm_1.Unique)('unique_constraint', ['batchID', 'tabletSerialNumber'])
], OtaScheduler);
exports.OtaScheduler = OtaScheduler;
//# sourceMappingURL=ota-scheduler.entity.js.map