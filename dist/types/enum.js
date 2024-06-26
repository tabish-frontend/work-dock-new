"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.AccountStatus = void 0;
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["Active"] = "active";
    AccountStatus["Pending"] = "pending";
    AccountStatus["Suspend"] = "suspend";
    AccountStatus["Terminate"] = "terminate";
    AccountStatus["Deleted"] = "deleted";
})(AccountStatus || (exports.AccountStatus = AccountStatus = {}));
var Roles;
(function (Roles) {
    Roles["Admin"] = "admin";
    Roles["HR"] = "hr";
    Roles["Employee"] = "employee";
})(Roles || (exports.Roles = Roles = {}));
//# sourceMappingURL=enum.js.map