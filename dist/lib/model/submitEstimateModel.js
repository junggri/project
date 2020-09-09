"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var submitSympton = new mongoose_1.default.Schema({
    register_user: {
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" }],
    },
    symptonId: {
        type: String,
    },
    provider: {
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Provider" }],
    },
    content: { type: String },
    submit_price: { type: String },
    create: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: String,
    },
    state: {
        type: String,
        default: "submit",
    },
    payment: {
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose_1.default.model("submitEstimate", submitSympton);
//# sourceMappingURL=submitEstimateModel.js.map