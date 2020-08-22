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
function provide() {
    var _this = this;
    var email_reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var pwd_reg = /^.*(?=^.{8,20}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    var provideForm = document.querySelector(".provide_form");
    var phoneBtn = document.querySelector(".provide-phone-btn");
    var phoneNumber = document.querySelector("#provide-phone");
    var checkBox = document.querySelector(".provide-verify");
    var verifyNumber = document.querySelector("#provide-verify");
    var checkBtn = document.querySelector(".provide-verify-btn");
    var registerBtn = document.querySelector(".register-btn");
    var inputEmail = document.querySelector("#provide-email");
    var inputPwd = document.querySelector("#provide-pwd");
    var statePhone = document.querySelector(".ps-phone");
    var stateVerify = document.querySelector(".ps-verify");
    var stateEmail = document.querySelector(".ps-email");
    var statePwd = document.querySelector(".ps-pwd");
    var verifyFlag = false;
    var emailFlag = false;
    var pwdFlag = false;
    var checkNumber;
    phoneBtn.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
        var randomArray, i, randomNum, token, myHeaders, result, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (phoneNumber.value === "")
                        return [2 /*return*/, alert("휴대폰번호를 입력해주시길 바랍니다.")];
                    if (verifyFlag)
                        return [2 /*return*/, alert("인증이 완료되었습니다.")];
                    checkBox.style.display = "block";
                    phoneBtn.textContent = "인증번호 재전송";
                    randomArray = [];
                    for (i = 0; i < 6; i++) {
                        randomNum = Math.floor(Math.random() * 10);
                        randomArray.push(randomNum);
                    }
                    token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                    myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    myHeaders.append("CSRF-Token", token);
                    return [4 /*yield*/, fetch("/api/verify_phone_number", {
                            method: "POST",
                            credentials: "same-origin",
                            headers: myHeaders,
                            body: JSON.stringify({ user_phone_number: phoneNumber.value }),
                        })];
                case 1:
                    result = _a.sent();
                    if (!(result.status === 200 || 201)) return [3 /*break*/, 3];
                    return [4 /*yield*/, result.json()];
                case 2:
                    response = _a.sent();
                    // console.log(response.verify_num);
                    checkNumber = response.verify_num;
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    checkBtn.addEventListener("click", function (e) {
        console.log(checkNumber, verifyNumber.value);
        if (checkNumber === verifyNumber.value) {
            phoneBtn.textContent = "인증 완료";
            checkBox.style.display = "none";
            verifyNumber.value = "";
            phoneNumber.readOnly = true;
            verifyFlag = true;
            return;
        }
        else {
            stateVerify.textContent = "인증번호가 일치하지 않습니다.";
            verifyFlag = false;
            return;
        }
    });
    inputEmail.addEventListener("blur", function (e) { return __awaiter(_this, void 0, void 0, function () {
        var token, myHeaders, result, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!email_reg.test(inputEmail.value)) {
                        emailFlag = false;
                        return [2 /*return*/, (stateEmail.textContent = "이메일 형식이 올바르지 않습니다.")];
                    }
                    token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                    myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    myHeaders.append("CSRF-Token", token);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/check_provide_email", {
                            method: "POST",
                            credentials: "same-origin",
                            headers: myHeaders,
                            body: JSON.stringify({ email: inputEmail.value }),
                        })];
                case 1:
                    result = _a.sent();
                    if (!(result.status === 201 || 201)) return [3 /*break*/, 3];
                    return [4 /*yield*/, result.json()];
                case 2:
                    response = _a.sent();
                    if (!response.state) {
                        emailFlag = false;
                        stateEmail.textContent = "이미 사용중인이메일입니다.";
                    }
                    else {
                        emailFlag = true;
                        stateEmail.textContent = "사용가능한 이메일입니다.";
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); });
    inputPwd.addEventListener("blur", function () {
        if (pwd_reg.test(inputPwd.value)) {
            pwdFlag = true;
            statePwd.textContent = "비밀번호가 유효합니다.";
        }
        else {
            pwdFlag = false;
            statePwd.textContent = "비밀번호가 유효하지 않습니다";
        }
    });
    registerBtn.addEventListener("click", function (e) {
        console.log(emailFlag, pwdFlag, verifyFlag);
        if (emailFlag && pwdFlag && verifyFlag)
            return provideForm.submit();
        else {
            if (!emailFlag)
                stateEmail.textContent = "이메일을 확인해 주시길 바랍니다.";
            if (!pwdFlag)
                statePwd.textContent = "비밀번호를 확인해 주시실 바랍니다.";
            if (!verifyFlag)
                statePhone.textContent = "휴대폰 인증이 필요합니다.";
            return;
        }
    });
}
exports.default = provide;
//# sourceMappingURL=provide.js.map