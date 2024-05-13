"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
class Constants {
}
exports.Constants = Constants;
Constants.StatusCode = {
    SUCCESS_CODE: 200,
    ERROR_CODE: 400
};
Constants.ResponseMessages = {
    SUCCESS: 'Success',
    DATA_NOT_FOUND: "Bad request. Data not found",
    DATA_NOT_UPDATE: "Bad request. Data not updated",
    SOMETHING_WENT_WRONG: "Something went wrong.",
    FAILED: "Failed",
    BAD_REQUEST: "Bad Request",
    GROUP_NAME_EXIST: "Group name already exist",
    GROUP_CREATED: "Group created successfully.",
    GROUP_UPDATED: "Group updated successfully.",
    GROUP_DELETED: "Group deleted successfully",
    GROUP_DEVICE_DELETED: "Device  deleted from group successfully",
    TABLET_ADDED: "tablet added to group.",
    TABLET_NOT_ADDED: "tablet not added.Try again!!",
    DATA_NOT_DELETED: "Bad request.Data not deleted",
    APK_ALREADY_SCHEDUL: "APK has been actively scheduled for OTA",
    APK_ALREADY_ASSIGN_RELEASE: "You must first delete release package because this APK has been assigned to it.",
    APK_UPLOADED: "Apk uploaded successfully.",
    APK_VERSION_EXIST: "Apk version is already exists.",
    APK_UPDATED: "Apk details updated successfully",
    APK_DELETED: "Apk deleted successfully",
    RELEASE_VERSION_EXIST: "Release version is already exists.",
    RELEASE_UPLOADED: "Release pakage uploaded successfully.",
    RELEASE_UPDATED: "Release details updated successfully",
    RELEASE_DELETED: "Release pakage deleted successfully",
    PRODUCT_EXIST: "Product name is already exist.",
    PRODUCT_DELETED: "Product deleted successfully.",
    PRODUCT_UPDATED: "Group updated successfully.",
    SCHEDULER_CREATED: "Scheduler created successfully",
    SCHEDULER_CANCLE: "Scheduler cancled successfully"
};
//# sourceMappingURL=constants.js.map