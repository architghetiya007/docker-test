import { OtaScheduler } from "./ota-scheduler.entity";
import { ReleaseWiseApkManagement } from './release-wise-apk-management.enity';
export declare class ApkManager {
    apkId: number;
    apkName: string;
    apkVariant: string;
    apkVersion: string;
    apkDescription: string;
    apkFileURL: string;
    apkReleaseNotesURL: string;
    Product: string;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    createBy: string;
    apkStatus: boolean;
    otaScheduler: OtaScheduler[];
    releaseWiseApkManagement: ReleaseWiseApkManagement[];
}
