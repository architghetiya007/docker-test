import { ApkManager } from './apk-manager.entity';
import { Group } from './group.entity';
import { ReleaseManagement } from "./release-management.entity";
export declare class OtaScheduler {
    batchID: string;
    tabletSerialNumber: string;
    Group: Group;
    groupId: number;
    ReleaseManagement: ReleaseManagement;
    releaseID: number;
    ApkManager: ApkManager;
    targetApkID: number;
    targetApkFileURL: string;
    otaStatus: string;
    otaPercentage: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
