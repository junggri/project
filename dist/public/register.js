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
var pwd_reg = /^.*(?=^.{8,20}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
var email_reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
var registerEmail = document.querySelector(".register-email");
var pwd = document.querySelector("#common_pwd");
var pwd2 = document.querySelector("#common_checkpwd");
var email = document.querySelector("#common_email");
var validation_emailBox = document.querySelector(".cb-email-validation");
var validation_btn = document.querySelector(".email-validationBtn");
var validation_num;
var emailFlag = false;
var email_is_exist = false;
function register() {
    $("#common_email").focus();
    // $(".register-email").on("click", () => {
    //   if (registerEmail.dataset.click === "none") {
    //     registerEmail.dataset.click = "click";
    //     $(".arrow").html("&#8743");
    //     $(".register-common, .register-provide")
    //       .stop()
    //       .animate({ bottom: "-90px" }, 350, () => {
    //         $(".register-provide").animate({ bottom: "-165px" });
    //       });
    //   } else if (registerEmail.dataset.click === "click") {
    //     registerEmail.dataset.click = "none";
    //     $(".arrow").html("&#8744");
    //     $(".register-common, .register-provide").stop().animate({ bottom: "0px" }, 500);
    //   }
    // });
    ///animation of reigster_preivious page///
    function checkEmail(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var token, fetchResult, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetch(url, {
                                method: "POST",
                                credentials: "same-origin",
                                headers: {
                                    "Content-Type": "application/json",
                                    "CSRF-Token": token,
                                },
                                body: JSON.stringify({ email: data }),
                            })];
                    case 2:
                        fetchResult = _a.sent();
                        if (!(fetchResult.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, fetchResult.json()];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        validation_num = result.validation_num;
                        $(".state-email").html(result.msg);
                        if (result.state === "true") {
                            email_is_exist = true;
                            validation_emailBox.style.display = "block";
                        }
                        return [3 /*break*/, 5];
                    case 4: throw new Error("이메일 페치 오류");
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    ///check email that to check user is already//
    $(".cb-email").on("propertychange change keyup paste input blur", function () {
        if (email_reg.test(email.value)) {
            validation_btn.style.pointerEvents = "all";
            validation_btn.style.backgroundColor = "rgba(0,0,0,0.3)";
            $(".email-validationBtn span").css("color", "rgba(0,0,0,0.7)");
            $(".state-email").html(" ");
        }
        else {
            validation_btn.style.pointerEvents = "none";
            validation_btn.style.backgroundColor = "rgba(0,0,0,0.1)";
            $(".email-validationBtn span").css("color", "rgba(0,0,0,0.3)");
            $(".state-email").html("이메일 형식이 올바르지 않습니다.");
        }
    });
    ///animation for chekc the email
    $(".email-validationBtn").on("click", function (e) {
        if (email_is_exist) {
            alert("새로운 인증번호를 발송하였습니다.");
        }
        var inputdata = $("#common_email").val();
        checkEmail("http://localhost:3000/api/check_email", inputdata);
    });
    //send send ajax request
    $(".email-checkBtn").on("click", function () {
        if ($("#validation_email").val() === validation_num) {
            $(".state-email").html("인증번호가 일치합니다.");
            validation_emailBox.style.display = "none";
            $(".email-validationBtn").css("display", "none");
            $(".changeEmail-Btn").css("display", "block");
            $("#common_email").css("pointerEvents", "none");
            $(".cb-email").css("backgroundColor", "rgba(0,0,0,0.05)");
            $(".condition-register").html("위의 이메일로 로그인하세요.");
            emailFlag = true;
        }
        else {
            $(".state-email").html("인증번호가 일치하지 않습니다.");
            emailFlag = false;
        }
    });
    ////iput the vaildation number and process of change email
    $(".changeEmail-Btn").on("click", function () {
        var pre_changeEmail_alert = confirm("정말로 이메일을 변경하시겠어요?");
        if (pre_changeEmail_alert) {
            $("#common_email").val("");
            $(".email-validationBtn").css("display", "block");
            $(".changeEmail-Btn").css("display", "none");
            $(".cb-email").css("backgroundColor", "rgba(0,0,0,0)");
            $("#common_email").css("pointerEvents", "all");
            email_is_exist = false;
            emailFlag = false;
        }
    });
    ///change_email process
    $("#common_pwd").on("blur", function (e) {
        if (pwd_reg.test(pwd.value)) {
            $(".state-pwd").html("비밀번호가 유효합니다.");
        }
        else {
            $(".state-pwd").html("비밀번호가 유효하지 않습니다.");
        }
    });
    $("#common_checkpwd").on("blur", function (e) {
        if (pwd_reg.test(pwd.value) && pwd.value === pwd2.value) {
            $(".state-pwd").html("비밀번호가 일치합니다.");
            setTimeout(function () {
                $(".state-pwd").html(" ");
            }, 1000);
        }
        else if (!pwd_reg.test(pwd.value) && pwd.value === pwd2.value) {
            $(".state-pwd").html("비밀번호가 유효하지 않습니다.");
        }
        else if (pwd_reg.test(pwd.value) && pwd.value !== pwd2.value) {
            $(".state-pwd").html("비밀번호가 일치하지 않습니다.");
        }
        else {
            $(".state-pwd").html("비밀번호가 유효하지 않습니다.");
        }
    });
    /////////////////
    window.verify = function () {
        // console.log(pwd_reg.test(pwd.value), pwd.value === pwd2.value, emailFlag);
        if (pwd_reg.test(pwd.value) && pwd.value === pwd2.value && emailFlag) {
            return true;
        }
        else {
            alert("입력정보를 다시한번 확인해보세요.");
        }
        return false;
    };
}
exports.default = register;
//# sourceMappingURL=register.js.map