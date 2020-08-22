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
    salt: {
        type: String,
        required: true,
    },
    refresh_token: {
        type: String,
    },
    user_division: {
        type: String,
        default: "provide",
        required: true,
    },
});
module.exports = mongoose_1.default.model("Provider", providers);
//# sourceMappingURL=provideModel.js.map