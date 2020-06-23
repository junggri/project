"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var register_1 = __importDefault(require("./register"));
var estimate_1 = __importDefault(require("./estimate"));
var get_esimate_1 = __importDefault(require("./get_esimate"));
var path = window.location.pathname;
console.log(path);
if (path === "/api/register_previous" || "/api/register/common") {
    register_1.default();
}
if (path === "/estimate") {
    estimate_1.default();
}
if (path === "/api/get_estimate") {
    get_esimate_1.default();
}
$(".mp-btn_estimate").on("click", function () {
    location.href = "/estimate";
});
//# sourceMappingURL=index.js.map