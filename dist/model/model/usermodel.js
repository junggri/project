"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var users = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    refresh_token: {
        type: String,
    },
    user_profile_img: { type: String },
    register_sympton: {
        //새로운 모델을 만들어서 정보는 저장하지말고 오브젝트만 저정한다...
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "RegisterSympton" }],
    },
    user_division: {
        type: String,
        default: "common",
        required: true,
    },
});
module.exports = mongoose_1.default.model("User", users);
//# sourceMappingURL=usermodel.js.map