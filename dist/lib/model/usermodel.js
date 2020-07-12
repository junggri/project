"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var users = new mongoose_1.default.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    social: {
        naver: {
            name: String,
            id: Number,
        },
        goolge: {
            name: String,
            id: Number,
        },
        kakao: {
            name: String,
            id: Number,
        },
    },
    salt: {
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
});
module.exports = mongoose_1.default.model("User", users);
//# sourceMappingURL=usermodel.js.map