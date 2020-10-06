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
var fetchFunction_1 = __importDefault(require("./fetchFunction"));
function showsubmit() {
    var SubmitItems = document.querySelectorAll(".sbc-item");
    function AddEventToGotItem(Item) {
        var _this = this;
        for (var i = 0; i < Item.length; i++) {
            Item[i].addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                var target, fetchObj, result, response, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            target = e.target.parentNode;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ submitId: target.dataset.submitid }))];
                        case 2:
                            fetchObj = _a.sent();
                            return [4 /*yield*/, fetch("http://localhost:3000/provide/showSubmitFlag", fetchObj)];
                        case 3:
                            result = _a.sent();
                            if (!(result.status === 200 || 201)) return [3 /*break*/, 5];
                            return [4 /*yield*/, result.json()];
                        case 4:
                            response = _a.sent();
                            if (response.state === "accept" || response.state === "submit") {
                                window.location.href = "/provide/sympton_estimate?" + response.symptonId;
                            }
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            error_1 = _a.sent();
                            console.log(error_1);
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            }); });
        }
    }
    AddEventToGotItem(SubmitItems);
}
exports.default = showsubmit;
//# sourceMappingURL=p_showsubmit.js.map