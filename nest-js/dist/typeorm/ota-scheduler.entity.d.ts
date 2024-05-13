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
    currentApkVersion: Array<{
        apk_ver: string;
        apk_name: string;
        apk_variant: string;
    }>;
    InstitutionID: string;
    otaStatus: string;
    otaPercentage: number;
    otaForceUpdate: boolean;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
