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
Object.defineProperty(exports, "__esModule", { value: true });
function login() {
    $(document).ready(function () {
        var _this = this;
        var checkBox = document.querySelector("#checkbox_id");
        var emailBox = document.querySelector("#login_email");
        var loginBoxValue = document.querySelector("#login_email");
        var email;
        emailBox.focus();
        var userInputEmail = getCookie("userInputEmail");
        loginBoxValue.value = email;
        if (loginBoxValue.value !== "") {
            checkBox.checked = true;
        }
        checkBox.addEventListener("change", function () { return __awaiter(_this, void 0, void 0, function () {
            var userInputEmail_1, token, myHeaders, response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!checkBox.checked) return [3 /*break*/, 4];
                        userInputEmail_1 = loginBoxValue.value;
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("CSRF-Token", token);
                        return [4 /*yield*/, fetch("http://localhost:3000/api/setUserEmailCookie", {
                                method: "POST",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ email: userInputEmail_1 }),
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response.status === 200 || 201)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        email = result.decrypt;
                        setCookie("userInputEmail", result.email, 7);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        deleteCookie("userInputEmail");
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        function setCookie(cookieName, value, exdays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + exdays);
            var cookieValue = escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
            document.cookie = cookieName + "=" + cookieValue;
        }
        function deleteCookie(cookieName) {
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() - 1);
            document.cookie = cookieName + "= " + "; expires=" + expireDate.toUTCString();
        }
        function getCookie(cookieName) {
            cookieName = cookieName + "=";
            var cookieData = document.cookie;
            var start = cookieData.indexOf(cookieName);
            var cookieValue = "";
            if (start !== -1) {
                start += cookieName.length;
                var end = cookieData.indexOf(";", start);
                if (end === -1)
                    end = cookieData.length;
                cookieValue = cookieData.substring(start, end);
            }
            return unescape(cookieValue);
        }
    });
}
exports.default = login;
//# sourceMappingURL=login.js.map