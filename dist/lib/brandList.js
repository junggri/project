"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var symptonModel_1 = __importDefault(require("./model/symptonModel"));
var symptonList = function () {
    var symptons = symptonModel_1.default.find().sort({ content: 1 }).limit(2);
};
//# sourceMappingURL=brandList.js.map