"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var register_1 = __importDefault(require("./register"));
var estimate_1 = __importDefault(require("./estimate"));
var get_esimate_1 = __importDefault(require("./get_esimate"));
var mypqge_1 = __importDefault(require("./mypqge"));
var modified_estimate_1 = __importDefault(require("./modified_estimate"));
var LoginmyBtn = document.querySelector(".nb-right_isLogined");
var path = window.location.pathname;
if (path === "/api/register_previous" || "/api/register/common") {
    register_1.default();
}
if (path === "/estimate") {
    estimate_1.default();
}
if (path === "/api/mypage") {
    mypqge_1.default();
}
if (path.split("/")[2] === "modified_estimate") {
    modified_estimate_1.default();
}
if (path === "/api/get_estimate") {
    get_esimate_1.default();
}
if (path === "/") {
    index();
}
if (LoginmyBtn !== null) {
    LoginmyBtn.addEventListener("click", function (e) {
        location.href = "/api/mypage";
    });
}
function index() {
    var estimateBtn = document.querySelector(".mp-btn_estimate");
    estimateBtn.addEventListener("click", function (e) {
        location.href = "/estimate";
    });
}
//# sourceMappingURL=index.js.map