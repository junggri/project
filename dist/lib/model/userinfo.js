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
});
module.exports = mongoose_1.default.model("users", users);
//# sourceMappingURL=userinfo.js.map