"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function refreshToken() {
    var refresh_token = jsonwebtoken_1.default.sign({}, process.env.JWT_SECRET, {
        expiresIn: "1d",
        issuer: "localhost",
        subject: "userinfo",
    });
    return refresh_token;
}
exports.default = refreshToken;
//# sourceMappingURL=refreshtoken.js.map