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
var registerSymModel_1 = __importDefault(require("../model/registerSymModel"));
var provideModel_1 = __importDefault(require("../model/provideModel"));
var submitEstimateModel_1 = __importDefault(require("../model/submitEstimateModel"));
var usermodel_1 = __importDefault(require("../model/usermodel"));
var submitController = {};
submitController.findAllProvider = function (symptonId) { return __awaiter(void 0, void 0, void 0, function () {
    var arr, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                arr = [];
                return [4 /*yield*/, submitEstimateModel_1.default.find().where("symptonId").equals(symptonId).where("state").equals("submit").populate("provider")];
            case 1:
                result = _a.sent();
                // await submitModel.updateOne({ _id: "5f4c6c7a9c243d6313ea2c99" }, { $set: { state: "submit" } });
                // await submitModel.updateOne({ _id: "5f4c6c839c243d6313ea2c9a" }, { $set: { state: "submit" } });
                // await submitModel.updateOne({ _id: "5f4c6c9a9c243d6313ea2c9b" }, { $set: { state: "submit" } });
                // await submitModel.updateOne({ _id: "5f4c6cc29c243d6313ea2c9c" }, { $set: { state: "submit" } });
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
submitController.acceptSubmit = function (submitId) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitEstimateModel_1.default.updateOne({ _id: submitId }, { $set: { state: "accept" } })];
            case 1:
                result = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
submitController.save = function (symptonId, providerId, data) { return __awaiter(void 0, void 0, void 0, function () {
    var User, Sympton, Provider, saveData, Sumbit;
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
                saveData = {
                    register_user: User,
                    symptonId: data.sympton_id,
                    provider: Provider,
                    content: data.content,
                    submit_price: data.priceValue,
                };
                Sumbit = new submitEstimateModel_1.default(saveData);
                return [4 /*yield*/, Sumbit.save()];
            case 4:
                _a.sent();
                return [4 /*yield*/, Sympton.provider.push(Provider._id)];
            case 5:
                _a.sent();
                return [4 /*yield*/, Sympton.save()];
            case 6:
                _a.sent();
                return [4 /*yield*/, Provider.submit_register.push(Sympton._id)];
            case 7:
                _a.sent();
                return [4 /*yield*/, Provider.save()];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
// submitController.isEstimateAlready = async (data: any) => {
//   let result: any = await submitModel.findOne({ sympton: data }).populate("provider");
//   if (result === null) {
//     return null;
//   }
//   return result;
// };
submitController.delete_submit = function (symptonId, providerId) { return __awaiter(void 0, void 0, void 0, function () {
    var result, provider, idx, idx2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymModel_1.default.findOne({ _id: symptonId })];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, provideModel_1.default.findOne({ _id: providerId })];
            case 2:
                provider = _a.sent();
                idx = result.provider.indexOf(providerId);
                idx2 = provider.submit_register.indexOf(symptonId);
                result.provider.splice(idx, 1);
                provider.submit_register.splice(idx2, 1);
                return [4 /*yield*/, submitEstimateModel_1.default.deleteOne({ provider: providerId })];
            case 3:
                _a.sent();
                return [4 /*yield*/, registerSymModel_1.default.updateOne({ _id: symptonId }, { $set: { provider: result.provider } })];
            case 4:
                _a.sent();
                return [4 /*yield*/, provideModel_1.default.updateOne({ _id: providerId }, { $set: { submit_register: provider.submit_register } })];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.default = submitController;
//# sourceMappingURL=submitController.js.map