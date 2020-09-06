"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var decoded;
var authStatus = {
    isLogined: function (req, res) {
        var token = req.cookies.pjwttoken;
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
            UI = "<li class=\"nb-right_login nb-right_list nb-right_isLogined\">\n        </li>\n        <div class=\"nb-navigation\">\n        <div class=\"nb-name\">\n          " + decoded.username + " \uB2D8\n        </div>\n        <div class=\"nb-profile\">\n          <span class=\"nb-profile-img\"></span>\n          <span class=\"nb-profile-modify\">\uD504\uB85C\uD544 \uBCC0\uACBD</span>\n        </div>\n        <div class=\"nb-profile-mypage\"><a href=\"/provide/mypage\">\uB9C8\uC774\uD398\uC774\uC9C0</a></div>\n        <form method=\"post\" action=\"/api/logout_process\" class=\"logout-form\">\n          <div class=\"nb-profile-logout\">\uB85C\uADF8\uC544\uC6C3</div>\n        </form>\n    </div>\n        ";
        }
        else {
            UI = "<li class=\"nb-right_register nb-right_list\"><a href=\"/api/register_previous\">\uD68C\uC6D0\uAC00\uC785</a></li>\n      <li class=\"nb-right_login nb-right_list\"><a href=\"/api/login\">\uB85C\uADF8\uC778</a></li>";
        }
        return UI;
    },
};
exports.default = authStatus;
//# sourceMappingURL=p_authStatus.js.map