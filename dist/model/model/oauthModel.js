"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var passport = new mongoose_1.default.Schema({
    email: {
        type: String,
    },
    oauth_id: {
        type: String,
    },
    name: {
        type: String,
    },
    createdAt: {
        type: String,
    },
    refresh_token: {
        type: String,
    },
    register_sympton: {
        //새로운 모델을 만들어서 정보는 저장하지말고 오브젝트만 저정한다...
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "RegisterSympton" }],
    },
    type: {
        type: String,
        default: "oauth",
    },
});
module.exports = mongoose_1.default.model("Passport", passport);
//# sourceMappingURL=oauthModel.js.map