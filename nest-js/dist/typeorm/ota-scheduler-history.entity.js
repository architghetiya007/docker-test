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
exports.OtaSchedulerHistory = void 0;
const typeorm_1 = require("typeorm");
let OtaSchedulerHistory = class OtaSchedulerHistory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'bigint',
        name: 'logId',
    }),
    __metadata("design:type", Number)
], OtaSchedulerHistory.prototype, "logId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], OtaSchedulerHistory.prototype, "batchID", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        nullable: false,
    }),
    __metadata("design:type", String)
], OtaSchedulerHistory.prototype, "tabletSerialNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        default: '',
        type: "text"
    }),
    __metadata("design:type", String)
], OtaSchedulerHistory.prototype, "InstitutionID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], OtaSchedulerHistory.prototype, "otaStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        array: false,
        default: () => "'[]'",
        nullable: false,
    }),
    __metadata("design:type", Array)
], OtaSchedulerHistory.prototype, "APK_Status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OtaSchedulerHistory.prototype, "createdOn", void 0);
OtaSchedulerHistory = __decorate([
    (0, typeorm_1.Entity)('tbl_ota_scheduler_history')
], OtaSchedulerHistory);
exports.OtaSchedulerHistory = OtaSchedulerHistory;
//# sourceMappingURL=ota-scheduler-history.entity.js.map