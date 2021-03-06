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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selcted_sympton = exports.symptonList = void 0;
var symptonModel_1 = __importDefault(require("../db/schema/symptonModel"));
var mysql_test_1 = __importDefault(require("../lib/mysql-test"));
exports.symptonList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var container, conn, result, i, list, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                container = "";
                return [4 /*yield*/, mysql_test_1.default()];
            case 1:
                conn = _b.sent();
                return [4 /*yield*/, conn.query("select * from common_sympton")];
            case 2:
                result = (_a = __read.apply(void 0, [_b.sent(), 1]), _a[0]);
                for (i = 0; i < result.length; i++) {
                    list = "\n        <li class=\"problem-item\" data-price=\"" + result[i].avg_price + "\">\n    \t    <input type=\"checkbox\" class=\"estimate_btn\" id=\"sypmtom-" + result[i].code + "\" onclick=\"add_List(this)\" name=\"code\" value=\"" + result[i].code + "\" />\n    \t    <label for=\"sypmtom-" + result[i].code + "\">" + result[i].content + "</label>\n    \t  </li>";
                    container += list;
                }
                conn.release();
                return [2 /*return*/, container];
            case 3:
                error_1 = _b.sent();
                console.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.selcted_sympton = function (code) { return __awaiter(void 0, void 0, void 0, function () {
    var list, data, i, result, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                list = "";
                data = [];
                if (code === undefined || code.length === 0)
                    return [2 /*return*/, (list = " <div class=\"show-user-selected-item\">\uC120\uD0DD\uD558\uC2E0 \uC99D\uC0C1\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>")];
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < code.length)) return [3 /*break*/, 4];
                return [4 /*yield*/, symptonModel_1.default.find({ code: code[i] })];
            case 2:
                result = _a.sent();
                data.push(result[0].content);
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4:
                for (i = 0; i < data.length; i++) {
                    list += " <div class=\"show-user-selected-item\">" + data[i] + "</div>";
                }
                return [2 /*return*/, list];
        }
    });
}); };
//# sourceMappingURL=symptonList.js.map