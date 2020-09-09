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
exports.makeSumbitbox = exports.makeListSympton = void 0;
var submitController_1 = __importDefault(require("./controller/submitController"));
exports.makeListSympton = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var list, item, list_1, i, response, result;
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
                if (!(i < data.length)) return [3 /*break*/, 6];
                if (!(data[i].state === "accept")) return [3 /*break*/, 3];
                return [4 /*yield*/, submitController_1.default.showProvider(data[i]._id)];
            case 2:
                response = _a.sent();
                result = response.provider[0];
                // 이때의 data-id는 submitid
                item = "\n        <div class=\"sc-item accept-item\" data-id=\"" + response._id + "\">\n        <div class=\"sc-item-accept-slo\">" + result.name + " \uB2D8\uC758</br> \uACAC\uC801\uC744 \uC218\uB77D\uD558\uC168\uC2B5\uB2C8\uB2E4.</div>\n        <div class=\"sc-accept-provider-data-box\">\n            <div class=\"sapd-data\">\n              <span>\uC774  \uB984 :</span>\n              <span>" + result.name + "</span>\n            </div>\n            <div class=\"sapd-data\">\n              <span>\uBC88  \uD638 :</span>\n              <span>" + result.phone_number + "</span>\n            </div>\n            <div class=\"sapd-data\">\n              <span>\uC774\uBA54\uC77C :</span>\n              <span>" + result.email + "</span>\n            </div>\n        </div>\n        <div class=\"show-accept-data-btn\">\n          <span>\uC790\uC138\uD788 \uBCF4\uAE30</span>\n        </div>\n    </div>\n        ";
                return [3 /*break*/, 4];
            case 3:
                //이때는 register
                item = " \n            <div class=\"sc-item\" data-id=\"" + data[i]._id + "\">\n              <div class=\"sc-item-slo\">" + data[i].sympton_detail + "</div>\n              <div class=\"sc-item-createdAt\">" + data[i].createdAt + "</div>\n              <div class=\"sc-item-btnBox\">\n              <span class=\"get-count\">\uACAC\uC801\uC11C \uC81C\uC548 : " + data[i].provider.length + " \uAC1C</span>\n              <div class=\"sc-item-showBtn\">\uC790\uC138\uD788 \uBCF4\uAE30</div>\n              <div class=\"sc-item-btnBox2\">\n                <div class=\"sc-item-modifiedBtn\">\n                  <span>\uC218\uC815</span>\n                </div>\n                <div class=\"sc-item-cancel\">\n                  <span>\uCDE8\uC18C</span>\n                </div>\n              </div>\n            </div>\n            </div>\n          ";
                _a.label = 4;
            case 4:
                list += item;
                _a.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/, list];
        }
    });
}); };
exports.makeSumbitbox = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var list, item, gender, i;
    return __generator(this, function (_a) {
        list = "";
        for (i = 0; i < data.length; i++) {
            data[i].provider[0].gender === "male" ? (gender = "남") : (gender = "여");
            item = "\n        <div class=\"submit-item\" data-submitId=\"" + data[i]._id + "\">\n        <div class=\"si-provider-data\">\n          <div class=\"si-img\"></div>\n          <div class=\"si-username\">" + data[i].provider[0].name + "(" + gender + ")</div>\n          <div class=\"si-email\">" + data[i].provider[0].email + "</div>\n          <div class=\"si-date\">\n            <span>\uACAC\uC801\uC81C\uCD9C\uB0A0\uC9DC :</span>\n            <span>" + data[i].create + "</span>\n          </div>\n        </div>\n        <div class=\"si-itemBox\">\n          <div class=\"si-contentBox\">\n            <span>\uC608\uC0C1\uC6D0\uC778</span>\n            <span>" + data[i].content + "</span>\n          </div>\n        </div>\n        <div class=\"si-footerBox\">\n          <div class=\"si-price\">\n            <span>\uACAC\uC801\uAE08\uC561 :</span>\n            <span>" + data[i].submit_price + "</span>\n          </div>\n          <div class=\"si-accept-btn\">\n            <span>\uC218\uB77D\uD558\uAE30</span>\n          </div>\n        </div>\n      </div>\n      ";
            list += item;
        }
        return [2 /*return*/, list];
    });
}); };
//# sourceMappingURL=mypageState.js.map