"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var registerSympton = new mongoose_1.default.Schema({
    registrant: {
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "testuser" }],
    },
    email: {
        type: String,
    },
    code: {
        type: Array,
    },
    sympton_detail: {
        type: String,
    },
    img: {
        type: Array,
    },
    userwant_time: {
        time: {
            type: Number,
        },
        minute: {
            type: Number,
        },
    },
    address: {
        postcode: { type: String },
        roadAddress: { type: String },
        detailAddress: { type: String },
    },
    userwant_content: {
        type: String,
    },
    createdAt: {
        type: String,
    },
});
module.exports = mongoose_1.default.model("RegisterSympton", registerSympton);
//# sourceMappingURL=registerSympton.js.map