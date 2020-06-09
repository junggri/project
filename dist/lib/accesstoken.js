"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken2 = exports.createToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createToken(req, res) {
    var token = jsonwebtoken_1.default.sign({
        email: "Asdasd",
        pwd: "Asdasdas",
    }, process.env.JWT_SECRET, {
        expiresIn: "2s",
        issuer: "localhost",
        subject: "userinfo",
    });
    res.cookie("jwttoken", token, { httpOnly: true });
}
exports.createToken = createToken;
function createToken2(req, res) {
    var token = jsonwebtoken_1.default.sign({
        email: "Asdasd",
        pwd: "Asdasdas",
    }, process.env.JWT_SECRET, {
        expiresIn: "2s",
        issuer: "localhost",
        subject: "userinfo",
    });
    res.cookie("jwttoken2", token, { httpOnly: true });
}
exports.createToken2 = createToken2;
//# sourceMappingURL=accesstoken.js.map