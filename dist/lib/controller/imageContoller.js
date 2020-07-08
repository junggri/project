"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageModel_1 = __importDefault(require("../model/imageModel"));
var imageController = {};
imageController.save = function (req, res, data) {
    var Img = new imageModel_1.default(data);
    Img.save();
};
exports.default = imageController;
//# sourceMappingURL=imageContoller.js.map