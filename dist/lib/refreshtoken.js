"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function refreshToken(req, res, email, name) {
    var refresh_token = jsonwebtoken_1.default.sign({
        email: email,
        username: name,
    }, process.env.JWT_SECRET, {
        expiresIn: "60s",
        issuer: "localhost",
        subject: "userinfo",
    });
    return refresh_token;
}
exports.default = refreshToken;
//# sourceMappingURL=refreshtoken.js.map