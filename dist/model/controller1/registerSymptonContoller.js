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
var usermodel_1 = __importDefault(require("../schema/usermodel"));
var registerSymModel_1 = __importDefault(require("../schema/registerSymModel"));
var mypageState_1 = require("../../lib/mypageState");
var authStatus_1 = __importDefault(require("../../lib/authStatus"));
var provideModel_1 = __importDefault(require("../schema/provideModel"));
var submitEstimateModel_1 = __importDefault(require("../schema/submitEstimateModel"));
var calculateDistance_1 = __importDefault(require("../../lib/calculateDistance"));
var providerGotController_1 = __importDefault(require("../controller/providerGotController"));
var registerSymController = {};
function changeSigunguCode(sigunguCode) {
    var findArea;
    if (sigunguCode === "seoul")
        findArea = "11";
    if (sigunguCode === "busan")
        findArea = "26";
    if (sigunguCode === "daegu")
        findArea = "27";
    if (sigunguCode === "incheon")
        findArea = "28";
    if (sigunguCode === "gwangju")
        findArea = "29";
    if (sigunguCode === "daejeon")
        findArea = "30";
    if (sigunguCode === "ulsan")
        findArea = "31";
    if (sigunguCode === "sejong")
        findArea = "36";
    if (sigunguCode === "gyeonggido")
        findArea = "41";
    if (sigunguCode === "gangwon")
        findArea = "42";
    if (sigunguCode === "chungcheongbukdo")
        findArea = "43";
    if (sigunguCode === "chungcheongnamdo")
        findArea = "44";
    if (sigunguCode === "jeollabukdo")
        findArea = "45";
    if (sigunguCode === "jeollanamdo")
        findArea = "46";
    if (sigunguCode === "gyeongsangbukdo")
        findArea = "47";
    if (sigunguCode === "gyeongsangnamdo")
        findArea = "48";
    if (sigunguCode === "jeju")
        findArea = "50";
    return findArea;
}
registerSymController.showBeforeEstimate = function (_id) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.findOne({ _id: _id })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
registerSymController.getAllData = function (pageNum, divided_num) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default
                    .find()
                    .sort({ create: -1 })
                    .skip((pageNum - 1) * divided_num)
                    .limit(divided_num)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
registerSymController.makePagination = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.find().sort({ create: -1 })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
registerSymController.getSpecificData = function (pageNum, sigunguCode, sigungu, bname, divided_num) { return __awaiter(void 0, void 0, void 0, function () {
    var findArea, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                findArea = changeSigunguCode(sigunguCode);
                if (!(sigunguCode === "sejong")) return [3 /*break*/, 5];
                return [4 /*yield*/, registerSymModel_1.default
                        .find({ "address.sigunguCode": findArea })
                        .sort({ create: -1 })
                        .skip((Number(pageNum) - 1) * divided_num)
                        .limit(divided_num)];
            case 1:
                result = _a.sent();
                if (!(sigunguCode === "sejong" && bname !== "0")) return [3 /*break*/, 4];
                return [4 /*yield*/, registerSymModel_1.default
                        .find()
                        .where("address.sigunguCode")
                        .equals(findArea)
                        .where("address.bname")
                        .equals(bname)
                        .sort({ create: -1 })
                        .skip((Number(pageNum) - 1) * divided_num)
                        .limit(divided_num)];
            case 2:
                result = _a.sent();
                if (!(result.length === 0)) return [3 /*break*/, 4];
                return [4 /*yield*/, registerSymModel_1.default
                        .find()
                        .where("address.sigunguCode")
                        .equals(findArea)
                        .where("address.bname1")
                        .equals(bname)
                        .sort({ create: -1 })
                        .skip((Number(pageNum) - 1) * divided_num)
                        .limit(divided_num)];
            case 3:
                result = _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, result];
            case 5:
                if (!(sigunguCode !== "0" && sigungu === "0" && bname === "0")) return [3 /*break*/, 7];
                return [4 /*yield*/, registerSymModel_1.default
                        .find({ "address.sigunguCode": findArea })
                        .sort({ create: -1 })
                        .skip((Number(pageNum) - 1) * divided_num)
                        .limit(divided_num)];
            case 6:
                result = _a.sent();
                return [2 /*return*/, result];
            case 7:
                if (!(sigunguCode !== "0" && sigungu !== "0" && bname === "0")) return [3 /*break*/, 9];
                return [4 /*yield*/, registerSymModel_1.default.find().where("address.sigunguCode").equals(findArea).where("address.sigungu").equals(sigungu)];
            case 8:
                //시도와 시군구를 선택했을때
                result = _a.sent();
                return [2 /*return*/, result];
            case 9:
                if (!(sigunguCode !== "0" && sigungu !== "0" && bname !== "0")) return [3 /*break*/, 13];
                return [4 /*yield*/, registerSymModel_1.default.find().where("address.sigunguCode").equals(findArea).where("address.sigungu").equals(sigungu).where("address.bname").equals(bname)];
            case 10:
                //시도와 시군구 동면읍을 선택했을떄
                result = _a.sent();
                if (!(result.length === 0)) return [3 /*break*/, 12];
                return [4 /*yield*/, registerSymModel_1.default.find().where("address.sigunguCode").equals(findArea).where("address.sigungu").equals(sigungu).where("address.bname1").equals(bname)];
            case 11:
                result = _a.sent();
                _a.label = 12;
            case 12: return [2 /*return*/, result];
            case 13: return [2 /*return*/];
        }
    });
}); };
registerSymController.makeSpecificPagination = function (pageNum, sigunguCode, sigungu, bname, divided_num) { return __awaiter(void 0, void 0, void 0, function () {
    var findArea, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                findArea = changeSigunguCode(sigunguCode);
                if (!(sigunguCode === "sejong")) return [3 /*break*/, 5];
                return [4 /*yield*/, registerSymModel_1.default.find({ "address.sigunguCode": findArea }).sort({ create: -1 })];
            case 1:
                result = _a.sent();
                if (!(sigunguCode === "sejong" && bname !== "0")) return [3 /*break*/, 4];
                return [4 /*yield*/, registerSymModel_1.default.find().where("address.sigunguCode").equals(findArea).where("address.bname").equals(bname)];
            case 2:
                result = _a.sent();
                if (!(result.length === 0)) return [3 /*break*/, 4];
                return [4 /*yield*/, registerSymModel_1.default.find().where("address.sigunguCode").equals(findArea).where("address.bname1").equals(bname)];
            case 3:
                result = _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, result];
            case 5:
                if (!(sigunguCode !== "0" && sigungu === "0" && bname === "0")) return [3 /*break*/, 7];
                return [4 /*yield*/, registerSymModel_1.default.find({ "address.sigunguCode": findArea }).sort({ create: -1 })];
            case 6:
                result = _a.sent();
                return [2 /*return*/, result];
            case 7:
                if (!(sigunguCode !== "0" && sigungu !== "0" && bname === "0")) return [3 /*break*/, 9];
                return [4 /*yield*/, registerSymModel_1.default
                        .find()
                        .where("address.sigunguCode")
                        .equals(findArea)
                        .where("address.sigungu")
                        .equals(sigungu)
                        .sort({ create: -1 })
                        .skip((Number(pageNum) - 1) * divided_num)
                        .limit(divided_num)];
            case 8:
                result = _a.sent();
                return [2 /*return*/, result];
            case 9:
                if (!(sigunguCode !== "0" && sigungu !== "0" && bname !== "0")) return [3 /*break*/, 13];
                return [4 /*yield*/, registerSymModel_1.default
                        .find()
                        .where("address.sigunguCode")
                        .equals(findArea)
                        .where("address.sigungu")
                        .equals(sigungu)
                        .where("address.bname")
                        .equals(bname)
                        .sort({ create: -1 })
                        .skip((Number(pageNum) - 1) * divided_num)
                        .limit(divided_num)];
            case 10:
                result = _a.sent();
                if (!(result.length === 0)) return [3 /*break*/, 12];
                return [4 /*yield*/, registerSymModel_1.default
                        .find()
                        .where("address.sigunguCode")
                        .equals(findArea)
                        .where("address.sigungu")
                        .equals(sigungu)
                        .where("address.bname1")
                        .equals(bname)
                        .sort({ create: -1 })
                        .skip((Number(pageNum) - 1) * divided_num)
                        .limit(divided_num)];
            case 11:
                result = _a.sent();
                _a.label = 12;
            case 12: return [2 /*return*/, result];
            case 13: return [2 /*return*/];
        }
    });
}); };
registerSymController.find = function (register_id) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.findOne({ _id: register_id })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
registerSymController.save = function (data, _email, id, sentProvidersArray) { return __awaiter(void 0, void 0, void 0, function () {
    var registerSympton, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                registerSympton = new registerSymModel_1.default(data);
                return [4 /*yield*/, registerSympton.save()];
            case 1:
                _a.sent();
                return [4 /*yield*/, usermodel_1.default.findOne({ _id: id })];
            case 2:
                user = _a.sent();
                return [4 /*yield*/, user.register_sympton.push(registerSympton._id)];
            case 3:
                _a.sent();
                return [4 /*yield*/, user.save()];
            case 4:
                _a.sent();
                if (!(sentProvidersArray.length !== 0)) return [3 /*break*/, 6];
                return [4 /*yield*/, providerGotController_1.default.save(registerSympton._id, sentProvidersArray)];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); };
registerSymController.sendToProvider = function (lat, lon) { return __awaiter(void 0, void 0, void 0, function () {
    function commonMakeDistance(par1, par2, par3, par4) {
        var distance = calculateDistance_1.default(par1, par2, par3, par4);
        return distance;
    }
    var providers, selected_num, distanceLess_providers, i, distance, distance, distance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, provideModel_1.default.find()];
            case 1:
                providers = _a.sent();
                selected_num = 10;
                distanceLess_providers = [];
                for (i = 0; i < providers.length; i++) {
                    if (providers[i].address.add1.lat !== "") {
                        distance = commonMakeDistance(Number(lat), Number(lon), Number(providers[i].address.add1.lat), Number(providers[i].address.add1.lon));
                        if (distance < selected_num) {
                            distanceLess_providers.push(providers[i]._id);
                            continue;
                        }
                    }
                    if (providers[i].address.add2.lat !== "") {
                        distance = commonMakeDistance(Number(lat), Number(lon), Number(providers[i].address.add2.lat), Number(providers[i].address.add2.lon));
                        if (distance < selected_num) {
                            distanceLess_providers.push(providers[i]._id);
                            continue;
                        }
                    }
                    if (providers[i].address.add3.lat !== "") {
                        distance = commonMakeDistance(Number(lat), Number(lon), Number(providers[i].address.add3.lat), Number(providers[i].address.add3.lon));
                        if (distance < selected_num) {
                            distanceLess_providers.push(providers[i]._id);
                            continue;
                        }
                    }
                }
                return [2 /*return*/, distanceLess_providers];
        }
    });
}); };
registerSymController.findAllRegister = function (req, res, _email, id) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _list, authUI;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.find({ user_object_id: id }).sort({ state: 1 })];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, mypageState_1.makeListSympton(result)];
            case 2:
                _list = _a.sent();
                authUI = authStatus_1.default.status(req, res);
                res.render("mypageEstimate", { authUI: authUI, csrfToken: req.csrfToken(), list: _list });
                return [2 /*return*/];
        }
    });
}); };
registerSymController.getAllImage = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.find({ user_object_id: id })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
registerSymController.findBeforeModified = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.findOne({ _id: req.params.id })];
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
            case 0: return [4 /*yield*/, registerSymModel_1.default.findOne({ _id: req.params.id })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
registerSymController.modified = function (req, res, data) { return __awaiter(void 0, void 0, void 0, function () {
    var sympton_detail, time, minute, img, postcode, roadAddress, detailAddress, userwant_content, sigunguCode, sigungu, bname, bname1, lat, lon, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sympton_detail = data.sympton_detail, time = data.time, minute = data.minute, img = data.img, postcode = data.postcode, roadAddress = data.roadAddress, detailAddress = data.detailAddress, userwant_content = data.userwant_content, sigunguCode = data.sigunguCode, sigungu = data.sigungu, bname = data.bname, bname1 = data.bname1, lat = data.lat, lon = data.lon;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, registerSymModel_1.default.updateOne({ _id: req.session._id }, {
                        $set: {
                            sympton_detail: sympton_detail,
                            img: img,
                            userwant_time: { time: time, minute: minute },
                            address: { postcode: postcode, sigunguCode: sigunguCode, sigungu: sigungu, bname: bname, bname1: bname1, roadAddress: roadAddress, detailAddress: detailAddress, lat: lat, lon: lon },
                            userwant_content: userwant_content,
                        },
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
registerSymController.isFullSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.findOne({ _id: data.sympton_id })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
registerSymController.deleteSympton = function (req, res, email, id) { return __awaiter(void 0, void 0, void 0, function () {
    var submit, i, provider, idx, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.deleteOne({ _id: req.body.id })];
            case 1:
                _a.sent();
                return [4 /*yield*/, providerGotController_1.default.delete(req.body.id)];
            case 2:
                _a.sent();
                return [4 /*yield*/, submitEstimateModel_1.default.find({ symptonId: req.body.id }).populate("provider")];
            case 3:
                submit = _a.sent();
                if (!(submit.length !== 0)) return [3 /*break*/, 9];
                i = 0;
                _a.label = 4;
            case 4:
                if (!(i < submit.length)) return [3 /*break*/, 9];
                return [4 /*yield*/, provideModel_1.default.findOne({ _id: submit[i].provider[0]._id })];
            case 5:
                provider = _a.sent();
                idx = provider.submit_register.indexOf(req.body.id);
                provider.submit_register.splice(idx, 1);
                return [4 /*yield*/, provideModel_1.default.updateOne({ _id: submit[i].provider[0]._id }, { $set: { submit_register: provider.submit_register } })];
            case 6:
                _a.sent();
                return [4 /*yield*/, submitEstimateModel_1.default.deleteOne({ symptonId: req.body.id })];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8:
                i++;
                return [3 /*break*/, 4];
            case 9: return [4 /*yield*/, usermodel_1.default.findOne({ _id: id }).populate("register_sympton")];
            case 10:
                result = _a.sent();
                return [4 /*yield*/, usermodel_1.default.updateOne({ _id: id }, { $set: { register_sympton: result.register_sympton } })];
            case 11:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.default = registerSymController;
//# sourceMappingURL=registerSymptonContoller.js.map