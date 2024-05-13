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
exports.DeviceGroup = void 0;
const typeorm_1 = require("typeorm");
const group_entity_1 = require("./group.entity");
let DeviceGroup = class DeviceGroup {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'bigint',
        name: 'groupTabletID',
    }),
    __metadata("design:type", Number)
], DeviceGroup.prototype, "groupTabletID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_entity_1.Group, (Group) => Group.DeviceGroup),
    (0, typeorm_1.JoinColumn)({ name: 'groupID' }),
    __metadata("design:type", group_entity_1.Group)
], DeviceGroup.prototype, "Group", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], DeviceGroup.prototype, "groupID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        default: '',
        type: "text"
    }),
    __metadata("design:type", String)
], DeviceGroup.prototype, "InstitutionID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        default: '',
        type: "text"
    }),
    __metadata("design:type", String)
], DeviceGroup.prototype, "tabletSerialNumber", void 0);
DeviceGroup = __decorate([
    (0, typeorm_1.Entity)('tbl_device_group')
], DeviceGroup);
exports.DeviceGroup = DeviceGroup;
//# sourceMappingURL=device-group.entity.js.map