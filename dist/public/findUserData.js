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
function default_1() {
    var findEmailSlo = document.querySelector(".fs-find-user-email");
    var findPwdSlo = document.querySelector(".fs-find-user-pwd");
    var findResultBtn = document.querySelector(".findUser-btn");
    var userInputData = document.querySelector("#findUserInput");
    var resultBox = document.querySelector(".findResult");
    var showResultBox = document.querySelector(".findUserResultBox");
    var btnBox = document.querySelector(".findUserResultBox-btnBox");
    var loginBoxLoginBtn = document.querySelector(".findUserResultBox-btnBox-login");
    var loginBoxRegisterBtn = document.querySelector(".findUserResultBox-btnBox-register");
    var loginBoxConfirmBtn = document.querySelector(".findUserResultBox-btnBox-confirm");
    var userEmail = document.querySelector(".findEmail");
    window.location.pathname === "/api/find_user_email" ? findPwdSlo.classList.add("fs-user-opacity") : findEmailSlo.classList.add("fs-user-opacity");
    function findUserData(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var token, myHeaders, response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("CSRF-Token", token);
                        return [4 /*yield*/, fetch(url, {
                                method: "POST",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ email: data }),
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response.status === 200 || 201)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        if (!result.state) {
                            userEmail.textContent = result.inputdata;
                            resultBox.textContent = "회원정보가 존재하지 않습니다.";
                            showResultBox.style.display = "block";
                            loginBoxLoginBtn.style.display = "none";
                            loginBoxRegisterBtn.style.display = "block";
                        }
                        else if (result.state === "can-reset") {
                            showResultBox.style.display = "block";
                            resultBox.textContent = "비밀번호 재설정 링크를 보냈습니다.";
                            userEmail.style.display = "none";
                            loginBoxLoginBtn.style.display = "none";
                            loginBoxRegisterBtn.style.display = "none";
                            // loginBoxConfirmBtn.style.display = "none";
                        }
                        else {
                            userEmail.textContent = result.email;
                            resultBox.textContent = "이미 회원가입을 진행하셨습니다. 로그인 후 서비스를 이용해보세요.";
                            showResultBox.style.display = "block";
                            loginBoxRegisterBtn.style.display = "none";
                            loginBoxLoginBtn.style.display = "block";
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    // loginBoxConfirmBtn.addEventListener("click", () => {
    //   showResultBox.style.display = "none";
    // });
    findResultBtn.addEventListener("click", function () {
        if (userInputData.value === "")
            return;
        if (window.location.pathname === "/api/find_user_email") {
            findUserData("http://localhost:3000/api/check_user_email", userInputData.value);
        }
        else {
            findUserData("http://localhost:3000/api/check_user_and_sendEmail", userInputData.value);
        }
    });
}
exports.default = default_1;
//그냥 위에서 리턴값?모르겠다
//# sourceMappingURL=findUserData.js.map