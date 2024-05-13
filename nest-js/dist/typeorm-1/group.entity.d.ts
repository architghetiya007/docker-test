import { OtaScheduler } from "./ota-scheduler.entity";
import { DeviceGroup } from './device-group.entity';
export declare class Group {
    groupId: number;
    groupName: string;
    groupDescription: string;
    groupStatus: boolean;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    DeviceGroup: DeviceGroup[];
    otaScheduler: OtaScheduler[];
}
