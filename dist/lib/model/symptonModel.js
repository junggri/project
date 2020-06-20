"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var Sympton = new mongoose_1.default.Schema({
    content: {
        tpye: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    refresh_token: {
        type: String,
    },
});
module.exports = mongoose_1.default.model("Sypmtopn", Sympton);
//# sourceMappingURL=symptonModel.js.map