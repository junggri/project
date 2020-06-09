"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function refreshToken(req, res) {
    var token = jsonwebtoken_1.default.sign({
        email: "Asdasd",
        pwd: "Asdasdas",
    }, process.env.JWT_SECRET, {
        expiresIn: "5m",
        issuer: "localhost",
        subject: "userinfo",
    });
    res.cookie("refreshtoken", token, { httpOnly: true });
}
exports.default = refreshToken;
//# sourceMappingURL=refreshtoken.js.map