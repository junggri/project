"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var Sympton = new mongoose_1.default.Schema({
    content: {
        type: String,
        required: true,
    },
    code: {
        type: Number,
        required: true,
    },
    avg_price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose_1.default.model("Sypmton", Sympton);
//# sourceMappingURL=symptonModel.js.map