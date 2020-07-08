"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var usermodel_1 = __importDefault(require("../model/usermodel"));
var registerSymModel_1 = __importDefault(require("../model/registerSymModel"));
var mypageState_1 = require("../mypageState");
var authStatus_1 = __importDefault(require("../authStatus"));
var registerSymController = {};
registerSymController.find = function (req, res, email) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.find({ email: email })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
registerSymController.save = function (req, res, data, _email) {
    var registerSympton = new registerSymModel_1.default(data);
    registerSympton
        .save()
        .then(function () {
        usermodel_1.default.findOne({ email: _email }, function (err, user) {
            registerSympton.registrant.push(user);
            registerSympton.save();
        });
    })
        .catch(function (err) {
        res.status(500).json("에러");
    });
};
registerSymController.findAllRegister = function (req, res, _email) {
    registerSymModel_1.default
        .find({ email: _email })
        .populate("registrant")
        .sort({ create: -1 })
        .then(function (result) {
        mypageState_1.makeListSympton(result).then(function (_list) {
            var _registerNum = result.length;
            var authUI = authStatus_1.default.status(req, res);
            res.render("mypage", { authUI: authUI, csrfToken: req.csrfToken(), list: _list, len: _registerNum });
        });
    })
        .catch(function (err) {
        console.error(err);
    });
};
registerSymController.findCodeBeforeModified = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.findOne({ _id: req.url.split("/")[2] }).populate("registrant")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
registerSymController.findImageBeforeModified = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.findOne({ _id: req.body.url }).populate("registrant")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
registerSymController.UpdateImg = function (req, res) {
    registerSymModel_1.default.update({ _id: req.session._id }, { $set: { img: req.session.img } }).then(function () { });
};
registerSymController.modified = function (req, res, data) {
    var sympton_detail = data.sympton_detail, time = data.time, minute = data.minute, postcode = data.postcode, roadAddress = data.roadAddress, detailAddress = data.detailAddress, userwant_content = data.userwant_content;
    registerSymModel_1.default
        .update({ _id: req.session._id }, { $set: { sympton_detail: sympton_detail, userwant_time: { time: time, minute: minute }, address: { postcode: postcode, roadAddress: roadAddress, detailAddress: detailAddress }, userwant_content: userwant_content } })
        .then(function () {
        res.redirect("/api/mypage");
    });
};
registerSymController.deleteSympton = function (req, res) {
    registerSymModel_1.default.deleteOne({ _id: req.body.id }).then(function (result) { });
};
exports.default = registerSymController;
//# sourceMappingURL=registerSymContoller.js.map