"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createToken(req, res, email, name, Id) {
    var token = jsonwebtoken_1.default.sign({
        email: email,
        username: name,
        user_objectId: Id,
    }, process.env.JWT_SECRET, {
        expiresIn: "30m",
        issuer: "localhost",
        subject: "userinfo",
    });
    res.cookie("jwttoken", token, { httpOnly: true, path: "/web" });
    //secure
}
exports.createToken = createToken;
//# sourceMappingURL=accesstoken.js.map