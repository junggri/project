"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var providerGotSympton = new mongoose_1.default.Schema({
    symptonId: {
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "RegisterSympton" }],
    },
    providerId: {
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "RegisterSympton" }],
    },
    create: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose_1.default.model("ProviderGotSympton", providerGotSympton);
//# sourceMappingURL=ProviderGotSymptonModel.js.map