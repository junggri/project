"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authStatus = {
    isLogined: function (req, res) {
        if (req.session.logined) {
            return true;
        }
        else {
            return false;
        }
    },
    status: function (req, res) {
        var UI = null;
        if (this.isLogined(req, res)) {
            UI = "<li class=\"nb-right_login nb-right_list\"><a href=\"/api/login\">" + req.session.name + "</a></li>";
        }
        else {
            UI = "<li class=\"nb-right_register nb-right_list\"><a href=\"/api/register_previous\">\uD68C\uC6D0\uAC00\uC785</a></li>\n      <li class=\"nb-right_login nb-right_list\"><a href=\"/api/login\">\uB85C\uADF8\uC778</a></li>";
        }
        return UI;
    },
};
exports.default = authStatus;
//# sourceMappingURL=authStatus.js.map