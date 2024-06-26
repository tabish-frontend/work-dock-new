"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const utils_1 = require("../utils");
const breakSchema = new mongoose_1.Schema({
    start: { type: Date, required: false },
    end: { type: Date, required: false },
    duration: { type: Number, required: false, default: 0 },
});
const attendanceSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.default.Schema.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    status: {
        type: String,
        enum: [
            utils_1.AttendanceStatus.FULL_DAY_PRESENT,
            utils_1.AttendanceStatus.FULL_DAY_ABSENT,
            utils_1.AttendanceStatus.SHORT_ATTENDANCE,
            utils_1.AttendanceStatus.ONLINE,
            utils_1.AttendanceStatus.HALF_DAY_PRESENT,
        ],
        required: true,
    },
    timeIn: { type: Date, required: false },
    timeOut: { type: Date, default: "", required: false },
    duration: { type: Number, default: 0 },
    breaks: { type: [breakSchema], default: [] },
    notes: { type: String, required: false },
}, {
    timestamps: true,
});
attendanceSchema.index({ user: 1, date: 1 }, { unique: true });
exports.AttendanceModel = mongoose_1.default.model("Attendance", attendanceSchema);
//# sourceMappingURL=attendanceModel.js.map