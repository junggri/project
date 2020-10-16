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
var registerSymModel_1 = __importDefault(require("../schema/registerSymModel"));
var provideModel_1 = __importDefault(require("../schema/provideModel"));
var submitEstimateModel_1 = __importDefault(require("../schema/submitEstimateModel"));
var usermodel_1 = __importDefault(require("../schema/usermodel"));
var moment_1 = __importDefault(require("moment"));
var sanitize_html_1 = __importDefault(require("sanitize-html"));
var submitController = {};
submitController.findAllProvider = function (symptonId) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitEstimateModel_1.default.find().where("symptonId").equals(symptonId).populate("provider")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
submitController.showProvider = function (symptonId) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitEstimateModel_1.default.findOne({ symptonId: symptonId }).where("state").equals("accept").populate("provider")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
submitController.getState = function (symptonId, providerId) { return __awaiter(void 0, void 0, void 0, function () {
    var result_1, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(providerId);
                if (!(providerId !== undefined)) return [3 /*break*/, 2];
                return [4 /*yield*/, submitEstimateModel_1.default.findOne({ symptonId: symptonId }).where("provider").equals(providerId)];
            case 1:
                result_1 = _a.sent();
                return [2 /*return*/, result_1];
            case 2: return [4 /*yield*/, submitEstimateModel_1.default.findOne({ symptonId: symptonId })];
            case 3:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
submitController.findSubmit = function (submitId) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitEstimateModel_1.default.findOne({ _id: submitId })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
submitController.getProviderData = function (submitId) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitEstimateModel_1.default.findOne({ _id: submitId }).populate("provider")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
submitController.acceptSubmit = function (submitId, symptonId) { return __awaiter(void 0, void 0, void 0, function () {
    var submits, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitEstimateModel_1.default.find({ symptonId: symptonId })];
            case 1:
                submits = _a.sent();
                return [4 /*yield*/, registerSymModel_1.default.updateOne({ _id: symptonId }, { $set: { state: "accept" } })];
            case 2:
                _a.sent();
                i = 0;
                _a.label = 3;
            case 3:
                if (!(i < submits.length)) return [3 /*break*/, 8];
                if (!(submitId === submits[i].id)) return [3 /*break*/, 5];
                return [4 /*yield*/, submitEstimateModel_1.default.updateOne({ _id: submits[i].id }, { $set: { state: "accept" } })];
            case 4:
                _a.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, submitEstimateModel_1.default.updateOne({ _id: submits[i].id }, { $set: { state: "reject" } })];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7:
                i++;
                return [3 /*break*/, 3];
            case 8: return [2 /*return*/];
        }
    });
}); };
submitController.save = function (symptonId, providerId, data) { return __awaiter(void 0, void 0, void 0, function () {
    var User, Sympton, Provider, time, saveData, Sumbit;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, usermodel_1.default.findOne({ _id: data.user_id })];
            case 1:
                User = _a.sent();
                return [4 /*yield*/, registerSymModel_1.default.findOne({ _id: symptonId })];
            case 2:
                Sympton = _a.sent();
                return [4 /*yield*/, provideModel_1.default.findOne({ _id: providerId })];
            case 3:
                Provider = _a.sent();
                time = moment_1.default().format("YYYY-MM-DD");
                saveData = {
                    register_user: User,
                    symptonId: data.sympton_id,
                    provider: Provider,
                    content: sanitize_html_1.default(data.content),
                    submit_price: sanitize_html_1.default(data.priceValue),
                    createdAt: time,
                };
                Sumbit = new submitEstimateModel_1.default(saveData);
                return [4 /*yield*/, Sumbit.save()];
            case 4:
                _a.sent();
                Sympton.provider.push(Provider._id);
                return [4 /*yield*/, Sympton.save()];
            case 5:
                _a.sent();
                Provider.submit_register.push(Sympton._id);
                return [4 /*yield*/, Provider.save()];
            case 6:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
submitController.isSubmited = function (symptonId) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitEstimateModel_1.default.findOne({ symptonId: symptonId })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
submitController.delete_submit = function (req, res, symptonId, providerId) { return __awaiter(void 0, void 0, void 0, function () {
    var submit, result, provider, idx, idx2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitEstimateModel_1.default.findOne().where("provider").equals(providerId).where("symptonId").equals(symptonId)];
            case 1:
                submit = _a.sent();
                if (!(submit.state === "accept")) return [3 /*break*/, 2];
                return [2 /*return*/, res.json({ state: "accept" })];
            case 2: return [4 /*yield*/, registerSymModel_1.default.findOne({ _id: symptonId })];
            case 3:
                result = _a.sent();
                return [4 /*yield*/, provideModel_1.default.findOne({ _id: providerId })];
            case 4:
                provider = _a.sent();
                idx = result.provider.indexOf(providerId);
                idx2 = provider.submit_register.indexOf(symptonId);
                result.provider.splice(idx, 1);
                provider.submit_register.splice(idx2, 1);
                return [4 /*yield*/, submitEstimateModel_1.default.deleteOne({ _id: submit._id })];
            case 5:
                _a.sent();
                return [4 /*yield*/, registerSymModel_1.default.updateOne({ _id: symptonId }, { $set: { provider: result.provider } })];
            case 6:
                _a.sent();
                return [4 /*yield*/, provideModel_1.default.updateOne({ _id: providerId }, { $set: { submit_register: provider.submit_register } })];
            case 7:
                _a.sent();
                res.json({ url: req.body.symptonId, state: true });
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); };
submitController.getDataFromProviderId = function (providerId) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitEstimateModel_1.default.find({ provider: providerId }).sort({ create: -1 })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
submitController.reset = function () { return __awaiter(void 0, void 0, void 0, function () {
    var User, i, User2, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, provideModel_1.default.find()];
            case 1:
                User = _a.sent();
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < User.length)) return [3 /*break*/, 5];
                return [4 /*yield*/, provideModel_1.default.updateOne({ _id: User[i]._id }, { $set: { usr_sent_sympton: [] } })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5: return [4 /*yield*/, usermodel_1.default.find()];
            case 6:
                User2 = _a.sent();
                i = 0;
                _a.label = 7;
            case 7:
                if (!(i < User2.length)) return [3 /*break*/, 10];
                return [4 /*yield*/, usermodel_1.default.updateOne({ _id: User2[i]._id }, { $set: { register_sympton: [] } })];
            case 8:
                _a.sent();
                _a.label = 9;
            case 9:
                i++;
                return [3 /*break*/, 7];
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.default = submitController;
//# sourceMappingURL=submitNodel.js.map