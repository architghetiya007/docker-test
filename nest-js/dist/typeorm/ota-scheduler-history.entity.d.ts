export declare class OtaSchedulerHistory {
    logId: number;
    batchID: string;
    tabletSerialNumber: string;
    InstitutionID: string;
    otaStatus: string;
    APK_Status: Array<{
        APK_name: string;
        status: string;
    }>;
    createdOn: Date;
}
