/// <reference types="multer" />
import { CreateApkManagerDto } from "./dto/create-apk-manager.dto";
import { ApkManagerService } from "./apk-manager.service";
import { ResponseBuilder } from "../shared/responseBuilder";
export declare class ApkManagerController {
    private apkManagerService;
    constructor(apkManagerService: ApkManagerService);
    uploadApk(files: Array<Express.Multer.File>, CreateApkManagerDto: CreateApkManagerDto): Promise<ResponseBuilder>;
    apkList(page?: number, limit?: number, search?: string, sortBy?: string, sortDir?: 'ASC' | 'DESC'): Promise<ResponseBuilder>;
    allApkList(apkId?: string, apkName?: string, apkVariant?: string): Promise<ResponseBuilder>;
    groupDelete(body: any): Promise<ResponseBuilder>;
    addUpdateApk(data: any): Promise<ResponseBuilder>;
    checknew(): Promise<void>;
}
