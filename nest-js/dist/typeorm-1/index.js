"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceCerts = exports.Group = exports.OtaScheduler = exports.ProductManager = exports.ReleaseWiseApkManagement = exports.ReleaseManagement = exports.DeviceGroup = exports.ApkManager = void 0;
const apk_manager_entity_1 = require("./apk-manager.entity");
Object.defineProperty(exports, "ApkManager", { enumerable: true, get: function () { return apk_manager_entity_1.ApkManager; } });
const device_group_entity_1 = require("./device-group.entity");
Object.defineProperty(exports, "DeviceGroup", { enumerable: true, get: function () { return device_group_entity_1.DeviceGroup; } });
const release_management_entity_1 = require("./release-management.entity");
Object.defineProperty(exports, "ReleaseManagement", { enumerable: true, get: function () { return release_management_entity_1.ReleaseManagement; } });
const release_wise_apk_management_enity_1 = require("./release-wise-apk-management.enity");
Object.defineProperty(exports, "ReleaseWiseApkManagement", { enumerable: true, get: function () { return release_wise_apk_management_enity_1.ReleaseWiseApkManagement; } });
const product_manager_entity_1 = require("./product-manager.entity");
Object.defineProperty(exports, "ProductManager", { enumerable: true, get: function () { return product_manager_entity_1.ProductManager; } });
const ota_scheduler_entity_1 = require("./ota-scheduler.entity");
Object.defineProperty(exports, "OtaScheduler", { enumerable: true, get: function () { return ota_scheduler_entity_1.OtaScheduler; } });
const group_entity_1 = require("./group.entity");
Object.defineProperty(exports, "Group", { enumerable: true, get: function () { return group_entity_1.Group; } });
const device_certs_entity_1 = require("./device-certs.entity");
Object.defineProperty(exports, "DeviceCerts", { enumerable: true, get: function () { return device_certs_entity_1.DeviceCerts; } });
const entities = [apk_manager_entity_1.ApkManager, device_group_entity_1.DeviceGroup, release_management_entity_1.ReleaseManagement, release_wise_apk_management_enity_1.ReleaseWiseApkManagement, product_manager_entity_1.ProductManager,
    ota_scheduler_entity_1.OtaScheduler, group_entity_1.Group, device_certs_entity_1.DeviceCerts];
exports.default = entities;
//# sourceMappingURL=index.js.map