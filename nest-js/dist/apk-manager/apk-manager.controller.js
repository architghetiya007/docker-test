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
exports.ApkManagerController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const create_apk_manager_dto_1 = require("./dto/create-apk-manager.dto");
const apk_manager_service_1 = require("./apk-manager.service");
const constants_1 = require("../shared/constants");
const responseBuilder_1 = require("../shared/responseBuilder");
let ApkManagerController = class ApkManagerController {
    constructor(apkManagerService) {
        this.apkManagerService = apkManagerService;
    }
    async uploadApk(files, CreateApkManagerDto) {
        var apkFileURL;
        var apkReleaseNotesURL;
        let checkversion = await this.apkManagerService.checkApkVersion(CreateApkManagerDto);
        if (checkversion) {
            return responseBuilder_1.ResponseBuilder.badRequest(constants_1.Constants.ResponseMessages.APK_VERSION_EXIST);
        }
        if (CreateApkManagerDto.apkId) {
            let checkApkSchedule = await this.apkManagerService.checkApkSchedule(CreateApkManagerDto.apkId);
            if (checkApkSchedule) {
                return responseBuilder_1.ResponseBuilder.badRequest(constants_1.Constants.ResponseMessages.APK_ALREADY_SCHEDUL);
            }
        }
        for (let index = 0; index < files.length; index++) {
            const element = files[index];
            if (element.fieldname == "apkFileURL") {
                apkFileURL = await this.apkManagerService.uploadPrivateFile(element, element.fieldname, CreateApkManagerDto);
            }
            else if (element.fieldname == "apkReleaseNotesURL") {
                apkReleaseNotesURL = await this.apkManagerService.uploadPrivateFile(element, element.fieldname, CreateApkManagerDto);
            }
        }
        if (apkFileURL) {
            CreateApkManagerDto.apkFileURL = apkFileURL.Key;
        }
        if (apkReleaseNotesURL) {
            CreateApkManagerDto.apkReleaseNotesURL = apkReleaseNotesURL.Key;
        }
        return this.apkManagerService.uploadApk(CreateApkManagerDto);
    }
    async apkList(page = 1, limit = 10, search = '', sortBy = 'apkId', sortDir = 'DESC') {
        return this.apkManagerService.getApkList(page, limit, search, sortBy, sortDir);
    }
    async allApkList(apkId = "", apkName = "", apkVariant = "") {
        return this.apkManagerService.getAllApk(apkId, apkName, apkVariant);
    }
    groupDelete(body) {
        return this.apkManagerService.deleteApk(body.apkId);
    }
    async addUpdateApk(data) {
        let files = data.files;
        let body = data.body;
        var apkFileURL;
        var apkReleaseNotesURL;
        let checkversion = await this.apkManagerService.checkApkVersion(data.body);
        console.log(checkversion, '----');
        if (checkversion) {
            return responseBuilder_1.ResponseBuilder.badRequest(constants_1.Constants.ResponseMessages.APK_VERSION_EXIST);
        }
        for (let index = 0; index < files.length; index++) {
            const element = files[index];
            files[index].buffer = Buffer.from(files[index].buffer);
            if (element.fieldname == "apkFileURL") {
                apkFileURL = await this.apkManagerService.uploadPrivateFile(element, element.fieldname, body);
            }
            else if (element.fieldname == "apkReleaseNotesURL") {
                apkReleaseNotesURL = await this.apkManagerService.uploadPrivateFile(element, element.fieldname, body);
            }
        }
        if (apkFileURL) {
            body.apkFileURL = apkFileURL.Key;
        }
        if (apkReleaseNotesURL) {
            body.apkReleaseNotesURL = apkReleaseNotesURL.Key;
        }
        return this.apkManagerService.uploadApk(body);
    }
    checknew() {
        return this.apkManagerService.check();
    }
};
__decorate([
    (0, common_1.Post)('apk'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_apk_manager_dto_1.CreateApkManagerDto]),
    __metadata("design:returntype", Promise)
], ApkManagerController.prototype, "uploadApk", null);
__decorate([
    (0, common_1.Get)('apk'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('sortBy')),
    __param(4, (0, common_1.Query)('sortDir')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, String]),
    __metadata("design:returntype", Promise)
], ApkManagerController.prototype, "apkList", null);
__decorate([
    (0, common_1.Get)('all-apk'),
    __param(0, (0, common_1.Query)('apkId')),
    __param(1, (0, common_1.Query)('apkName')),
    __param(2, (0, common_1.Query)('apkVariant')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ApkManagerController.prototype, "allApkList", null);
__decorate([
    (0, common_1.Delete)('apk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ApkManagerController.prototype, "groupDelete", null);
__decorate([
    (0, common_1.Get)('check'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApkManagerController.prototype, "checknew", null);
ApkManagerController = __decorate([
    (0, common_1.Controller)('apk-manager'),
    __metadata("design:paramtypes", [apk_manager_service_1.ApkManagerService])
], ApkManagerController);
exports.ApkManagerController = ApkManagerController;
//# sourceMappingURL=apk-manager.controller.js.map