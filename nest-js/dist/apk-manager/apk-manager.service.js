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
exports.ApkManagerService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const AWS = require("aws-sdk");
const constants_1 = require("../shared/constants");
const responseBuilder_1 = require("../shared/responseBuilder");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
const typeorm_3 = require("../typeorm");
const typeorm_4 = require("typeorm");
let ApkManagerService = class ApkManagerService {
    constructor(configService, apkManagerRepository, otaSchedulerRepository, releaseWiseApkRepository, releaseManagementRepository) {
        this.configService = configService;
        this.apkManagerRepository = apkManagerRepository;
        this.otaSchedulerRepository = otaSchedulerRepository;
        this.releaseWiseApkRepository = releaseWiseApkRepository;
        this.releaseManagementRepository = releaseManagementRepository;
        this.bucketName = this.configService.get('AWS_BUCKET_NAME');
        AWS.config.update({
            accessKeyId: this.configService.get('ACCESS_ID'),
            secretAccessKey: this.configService.get('AWS_SECRET_KEY'),
            region: 'ap-south-1',
        });
        this.s3 = new AWS.S3();
    }
    async check() {
        let sts = new AWS.STS();
        const response = await sts.getSessionToken().promise();
        console.log(response, 'rrrrr');
    }
    async uploadPrivateFile(file, fieldname, apkManagerDto) {
        try {
            const fileExtension = file.originalname.split('.').pop();
            let fileName;
            if (fieldname == "apkFileURL") {
                fileName = `${apkManagerDto.apkName}_${apkManagerDto.apkVariant}_${apkManagerDto.apkVersion}.${fileExtension}`;
            }
            else {
                fileName = `${Date.now()}-${file.originalname}`;
            }
            let uploadResult = await this.s3
                .upload({
                Bucket: this.bucketName,
                Body: file.buffer,
                Key: fileName,
                ACL: 'private',
            })
                .promise();
            uploadResult.fieldname = fieldname;
            return uploadResult;
        }
        catch (error) {
            console.log(error, '');
            return responseBuilder_1.ResponseBuilder.errorMessage();
        }
    }
    async uploadApk(CreateApkManagerDto) {
        try {
            if (CreateApkManagerDto.apkId) {
                if (CreateApkManagerDto.apkFileURL && CreateApkManagerDto.apkReleaseNotesURL) {
                    this.deleteApkFile(CreateApkManagerDto.apkId);
                }
                let result = await this.apkManagerRepository.update(CreateApkManagerDto.apkId, CreateApkManagerDto);
                if (result.affected == 1) {
                    return responseBuilder_1.ResponseBuilder.successMessage(constants_1.Constants.ResponseMessages.APK_UPDATED);
                }
                else {
                    return responseBuilder_1.ResponseBuilder.badRequest(constants_1.Constants.ResponseMessages.DATA_NOT_UPDATE);
                }
            }
            else {
                const newApk = this.apkManagerRepository.create(Object.assign({}, CreateApkManagerDto));
                let result = await this.apkManagerRepository.save(newApk);
                return responseBuilder_1.ResponseBuilder.data([result], constants_1.Constants.ResponseMessages.APK_UPLOADED);
            }
        }
        catch (error) {
            return responseBuilder_1.ResponseBuilder.errorMessage();
        }
    }
    async checkApkVersion(CreateApkManagerDto) {
        try {
            let where = { 'apkVersion': CreateApkManagerDto.apkVersion, 'apkName': CreateApkManagerDto.apkName, 'apkVariant': CreateApkManagerDto.apkVariant };
            if (CreateApkManagerDto.apkId) {
                where['apkId'] = (0, typeorm_4.Not)(CreateApkManagerDto.apkId);
            }
            let check = await this.apkManagerRepository.findOne({ where: where });
            return check;
        }
        catch (error) {
            return responseBuilder_1.ResponseBuilder.errorMessage();
        }
    }
    async checkApkSchedule(apkId) {
        try {
            let [checkApkIsSchedule, count] = await this.otaSchedulerRepository.findAndCount({ where: { "targetApkID": apkId, "otaStatus": (0, typeorm_4.Not)("Success") } });
            if (count > 0) {
                return count;
            }
            else {
                return;
            }
        }
        catch (error) {
            return responseBuilder_1.ResponseBuilder.errorMessage();
        }
    }
    async getApkList(page = 1, limit = 10, search = '', sortBy = 'apkId', sortDir = 'DESC') {
        try {
            const skip = (page - 1) * limit;
            const take = limit;
            let [result, itemCount] = await this.apkManagerRepository.findAndCount({
                where: [{ 'apkName': (0, typeorm_4.Like)('%' + search + '%') }, { 'apkVariant': (0, typeorm_4.Like)('%' + search + '%') }, { 'apkVersion': (0, typeorm_4.Like)('%' + search + '%') }, { 'apkDescription': (0, typeorm_4.Like)('%' + search + '%') }],
                order: {
                    [sortBy]: sortDir,
                },
                take: take,
                skip: skip
            });
            let responce = {
                items: result, meta: {
                    "itemCount": result.length,
                    "totalItems": itemCount,
                    "itemsPerPage": take,
                    "currentPage": page
                }
            };
            return responseBuilder_1.ResponseBuilder.data(responce, constants_1.Constants.ResponseMessages.SUCCESS);
        }
        catch (error) {
            return responseBuilder_1.ResponseBuilder.errorMessage();
        }
    }
    async getAllApk(apkId = '', apkName = '', apkVariant = '') {
        try {
            let where;
            if (apkId) {
                console.log(apkId, 'apkId');
                where = { apkId: apkId };
            }
            if (apkName) {
                console.log(apkName, 'apkName');
                where = { apkName: apkName };
            }
            if (apkVariant) {
                console.log(apkName, 'apkName');
                where = { apkVariant: apkVariant };
            }
            if (apkName && apkVariant) {
                where = { apkName: apkName, apkVariant: apkVariant };
            }
            let result = await this.apkManagerRepository.find({ where: where });
            return responseBuilder_1.ResponseBuilder.data(result, constants_1.Constants.ResponseMessages.SUCCESS);
        }
        catch (error) {
            console.log(error, 'error');
            return responseBuilder_1.ResponseBuilder.errorMessage();
        }
    }
    async deleteApk(apkId) {
        try {
            let [checkApkIsSchedule, count] = await this.otaSchedulerRepository.findAndCount({ where: { "targetApkID": apkId, "otaStatus": (0, typeorm_4.Not)("Success") } });
            if (count > 0) {
                return responseBuilder_1.ResponseBuilder.badRequest(constants_1.Constants.ResponseMessages.APK_ALREADY_SCHEDUL);
            }
            else {
                let [checkReleaseApk, apkCount] = await this.releaseWiseApkRepository.findAndCount({ where: { apkID: apkId } });
                if (apkCount > 0) {
                    console.log(checkReleaseApk, 'checkReleaseApk');
                    let releasePakage = await this.releaseManagementRepository.find({ where: { releaseID: checkReleaseApk[0].releaseID } });
                    console.log(releasePakage, 'releasePakage');
                    let msg = constants_1.Constants.ResponseMessages.APK_ALREADY_ASSIGN_RELEASE + '(Release package version:' + releasePakage[0].releaseVersion + ')';
                    return responseBuilder_1.ResponseBuilder.badRequest(msg);
                }
                this.deleteApkFile(apkId);
                let result = await this.apkManagerRepository.softDelete(apkId);
                if (result.affected == 1) {
                    return responseBuilder_1.ResponseBuilder.successMessage(constants_1.Constants.ResponseMessages.APK_DELETED);
                }
                else {
                    return responseBuilder_1.ResponseBuilder.badRequest(constants_1.Constants.ResponseMessages.DATA_NOT_DELETED);
                }
            }
        }
        catch (error) {
            return responseBuilder_1.ResponseBuilder.errorMessage("Internal Server Error");
        }
    }
    async deleteApkFile(apkId) {
        try {
            let check = await this.apkManagerRepository.findOne({ where: { 'apkId': apkId } });
            const deletedApkFileURL = await this.s3
                .deleteObject({
                Bucket: this.bucketName,
                Key: check.apkFileURL,
            })
                .promise();
            const deletedApkReleaseNotesURL = await this.s3
                .deleteObject({
                Bucket: this.bucketName,
                Key: check.apkReleaseNotesURL,
            })
                .promise();
        }
        catch (error) {
            return responseBuilder_1.ResponseBuilder.errorMessage("Internal Server Error");
        }
    }
};
ApkManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(typeorm_2.ApkManager)),
    __param(2, (0, typeorm_1.InjectRepository)(typeorm_2.OtaScheduler)),
    __param(3, (0, typeorm_1.InjectRepository)(typeorm_2.ReleaseWiseApkManagement)),
    __param(4, (0, typeorm_1.InjectRepository)(typeorm_3.ReleaseManagement)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_4.Repository,
        typeorm_4.Repository,
        typeorm_4.Repository,
        typeorm_4.Repository])
], ApkManagerService);
exports.ApkManagerService = ApkManagerService;
//# sourceMappingURL=apk-manager.service.js.map