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
exports.Group = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const ota_scheduler_entity_1 = require("./ota-scheduler.entity");
const device_group_entity_1 = require("./device-group.entity");
let Group = class Group {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'bigint',
        name: 'groupId',
    }),
    __metadata("design:type", Number)
], Group.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Group.prototype, "groupName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        default: '',
        type: "text"
    }),
    __metadata("design:type", String)
], Group.prototype, "groupDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: "boolean",
        default: true
    }),
    __metadata("design:type", Boolean)
], Group.prototype, "groupStatus", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Group.prototype, "createdOn", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Group.prototype, "updatedOn", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Group.prototype, "deletedOn", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => device_group_entity_1.DeviceGroup, (DeviceGroup) => DeviceGroup.Group),
    __metadata("design:type", Array)
], Group.prototype, "DeviceGroup", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ota_scheduler_entity_1.OtaScheduler, (otaScheduler) => otaScheduler.Group),
    __metadata("design:type", Array)
], Group.prototype, "otaScheduler", void 0);
Group = __decorate([
    (0, typeorm_1.Entity)('tbl_group')
], Group);
exports.Group = Group;
//# sourceMappingURL=group.entity.js.map