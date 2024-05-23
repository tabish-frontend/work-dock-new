"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = void 0;
const utils_1 = require("../utils");
const getOne = (Model, hideFields, popOptions) => (0, utils_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id, username } = req.params;
    let query = Model.findOne({
        $or: [{ username }, { _id }],
    }).select(hideFields);
    if (popOptions)
        query = query.populate(popOptions);
    const document = yield query;
    if (!document) {
        throw new utils_1.AppError("No document found with that ID", 404);
    }
    return res
        .status(200)
        .json(new utils_1.AppResponse(200, document, "", utils_1.ResponseStatus.SUCCESS));
}));
exports.getOne = getOne;
//# sourceMappingURL=handleFactory.js.map