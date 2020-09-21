"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var UserSent = new mongoose_1.default.Schema({
    usr_sent_sympton: {
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "RegisterSympton" }],
    },
    create: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose_1.default.model("UserSentSympton", UserSent);
//# sourceMappingURL=user_sent_symptonModel.js.map