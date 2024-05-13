import { OtaScheduler } from './ota-scheduler.entity';
import { ReleaseWiseApkManagement } from './release-wise-apk-management.enity';
export declare class ReleaseManagement {
    releaseID: number;
    releaseVersion: string;
    releaseDescription: string;
    releaseFileURL: string;
    Product: string;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    createBy: string;
    releaseWiseApkManagement: ReleaseWiseApkManagement[];
    otaScheduler: OtaScheduler[];
}
