"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var decoded;
var authStatus = {
    isLogined: function (req, res) {
        var token = req.cookies.jwttoken;
        try {
            decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            return true;
        }
        catch (error) {
            // console.log(error);
            return false;
        }
    },
    status: function (req, res) {
        var UI = null;
        if (this.isLogined(req, res)) {
            UI = "<li class=\"nb-right_login nb-right_list\"><a href=\"/api/login\">" + decoded.username + "</a></li>";
        }
        else {
            UI = "<li class=\"nb-right_register nb-right_list\"><a href=\"/api/register_previous\">\uD68C\uC6D0\uAC00\uC785</a></li>\n      <li class=\"nb-right_login nb-right_list\"><a href=\"/api/login\">\uB85C\uADF8\uC778</a></li>";
        }
        return UI;
    },
};
exports.default = authStatus;
//# sourceMappingURL=authStatus.js.map