"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var register_1 = __importDefault(require("./register"));
var login_1 = __importDefault(require("./login"));
var estimate_1 = __importDefault(require("./estimate"));
estimate_1.default();
login_1.default();
register_1.default();
var where = document.location.href;
console.log(where);
$(".mp-btn_estimate").on("click", function () {
    location.href = "/estimate";
});
//# sourceMappingURL=index.js.map