"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var providers = new mongoose_1.default.Schema({
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
    gender: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    address: {
        add1: {
            address: { type: String },
            lat: { type: String },
            lon: { type: String },
        },
        add2: {
            address: { type: String },
            lat: { type: String },
            lon: { type: String },
        },
        add3: {
            address: { type: String },
            lat: { type: String },
            lon: { type: String },
        },
    },
    salt: {
        type: String,
        required: true,
    },
    refresh_token: {
        type: String,
    },
    user_division: {
        type: String,
        default: "provider",
        required: true,
    },
    submit_register: {
        //증상 제출이아니라 제출한견적의 증상을 보여줌
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "RegisterSympton" }],
    },
    usr_sent_sympton: {
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "RegisterSympton" }],
    },
    create: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose_1.default.model("Provider", providers);
//# sourceMappingURL=provideModel.js.map