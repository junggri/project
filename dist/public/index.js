"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var register_1 = __importDefault(require("./register"));
register_1.default();
$(".mp-btn_estimate").on("click", function () {
    location.href = "/estimate";
});
//# sourceMappingURL=index.js.map