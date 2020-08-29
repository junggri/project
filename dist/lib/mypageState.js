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
exports.makeListSympton = void 0;
var symptonModel_1 = __importDefault(require("./model/symptonModel"));
var submitController_1 = __importDefault(require("../lib/controller/submitController"));
exports.makeListSympton = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var list, list_1, i, mainImg, gender, showItem, codeText, result, response, i_1, showItems, item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                list = "";
                if (data.length === 0) {
                    list_1 = "\n      <div class=\"ms-resultBox-nonedata\">\n        \uC544\uC9C1 \uC870\uD68C\uD560 \uC790\uB8CC\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\n      </div>\n    ";
                    return [2 /*return*/, list_1];
                }
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < data.length)) return [3 /*break*/, 5];
                mainImg = void 0, gender = void 0;
                showItem = " ";
                codeText = void 0;
                return [4 /*yield*/, symptonModel_1.default.find({ code: data[i].code[0] })];
            case 2:
                result = _a.sent();
                return [4 /*yield*/, submitController_1.default.findAllProvider(data[i].id)];
            case 3:
                response = _a.sent();
                data[i].img[0] !== undefined || null ? (mainImg = "url('/" + data[i].user_object_id + "/" + data[i].img[0] + "')") : (mainImg = "url('/noimage.svg')");
                data[i].code.length === 1 ? (codeText = result[0].content) : (codeText = result[0].content + " \uC678 " + (data[i].code.length - 1) + "\uAC1C");
                if (response.length !== 0) {
                    for (i_1 = 0; i_1 < response.length; i_1++) {
                        response[i_1].provider[0].gender === "male" ? (gender = "남성") : (gender = "여성");
                        showItems = "\n            <div class=\"sge-item\" data-submitId=" + response[i_1].id + ">\n            <div class=\"sge-item-img\"></div>\n            <div class=\"sge-provider-data\">\n              <div class=\"sge-item-name-box\">\n                <span>\uC774\uB984</span>\n                <span>" + response[i_1].provider[0].name + "</span>\n              </div>\n              <div class=\"sge-item-sex-box\">\n                <span>\uC131\uBCC4</span>\n                <span>" + gender + "</span>\n              </div>\n            </div>\n            <div class=\"sge-price-box\">\n              <div>\uACAC\uC801\uAE08\uC561</div>\n              <div>" + response[i_1].submit_price + "\uC6D0</div>\n            </div>\n          </div>\n        ";
                        showItem += showItems;
                    }
                }
                item = " <div class=\"ms-resultItem-container\" data-id=\"" + data[i]._id + "\">\n          <div class=\"ms-resultItem\">\n          <span class=\"ms-resultItem-img\" style=\"background-image:" + mainImg + ";\"></span>\n            <div class=\"ms-resultItem-right\">\n              <span class=\"ms-resultItem-time\">" + data[i].createdAt + "</span>\n              <span class=\"ms-resultItem-symptom\">" + codeText + "</span>\n              <div class=\"ms-resultItem-price\">" + data[i].predict_price + "\uC6D0</div>\n            </div>\n            <div class=\"ms-resultItem-BtnBox\">\n              <span class=\"ms-resultItem-showGotEstimate\">\n              \uBC1B\uC740\uACAC\uC801\uBCF4\uAE30\n              </span>\n              <span class=\"ms-resultItem-modifieBtn\">\n                \uC218\uC815\uD558\uAE30\n              </span>\n              <span class=\"ms-resultItem-deleteBtn\">\n                \uC0AD\uC81C\uD558\uAE30\n              </span>\n            </div>\n          </div>  \n        </div>\n        <div class=\"show-got-estimate-container " + data[i]._id + "\">\n            <div class=\"show-got-estimate\">\n            " + showItem + "\n            </div>\n          </div>\n        ";
                list += item;
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 1];
            case 5: return [2 /*return*/, list];
        }
    });
}); };
//# sourceMappingURL=mypageState.js.map