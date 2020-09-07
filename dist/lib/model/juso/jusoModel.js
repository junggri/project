"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var juso = new mongoose_1.default.Schema({
    sigunguCode: {
        type: String,
    },
    sigungu: {
        type: String,
    },
    bname: {
        type: String,
    },
    bname1: {
        type: String,
    },
});
module.exports = mongoose_1.default.model("juso", juso);
//# sourceMappingURL=jusoModel.js.map