import { ConfigService } from '@nestjs/config';
import { CreateApkManagerDto } from "./dto/create-apk-manager.dto";
import { ResponseBuilder } from "../shared/responseBuilder";
import { ApkManager as ApkManagerEntity, OtaScheduler as OtaSchedulerEntity, ReleaseWiseApkManagement as ReleaseWiseApkManagementEntity } from 'src/typeorm';
import { ReleaseManagement as ReleaseManagementEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class ApkManagerService {
    private configService;
    private readonly apkManagerRepository;
    private readonly otaSchedulerRepository;
    private readonly releaseWiseApkRepository;
    private readonly releaseManagementRepository;
    private readonly s3;
    constructor(configService: ConfigService, apkManagerRepository: Repository<ApkManagerEntity>, otaSchedulerRepository: Repository<OtaSchedulerEntity>, releaseWiseApkRepository: Repository<ReleaseWiseApkManagementEntity>, releaseManagementRepository: Repository<ReleaseManagementEntity>);
    bucketName: any;
    check(): Promise<void>;
    uploadPrivateFile(file: any, fieldname: string, apkManagerDto: any): Promise<any>;
    uploadApk(CreateApkManagerDto: CreateApkManagerDto): Promise<ResponseBuilder>;
    checkApkVersion(CreateApkManagerDto: CreateApkManagerDto): Promise<ApkManagerEntity | ResponseBuilder>;
    checkApkSchedule(apkId: any): Promise<any>;
    getApkList(page?: number, limit?: number, search?: string, sortBy?: string, sortDir?: 'ASC' | 'DESC'): Promise<ResponseBuilder>;
    getAllApk(apkId?: string, apkName?: string, apkVariant?: string): Promise<ResponseBuilder>;
    deleteApk(apkId: number): Promise<ResponseBuilder>;
    deleteApkFile(apkId: number): Promise<ResponseBuilder>;
}
