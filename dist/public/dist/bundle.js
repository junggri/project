/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/public/estimate.js":
/*!*********************************!*\
  !*** ./dist/public/estimate.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    var estimate_container = document.querySelector(".estimate-pre-result-itembox");
    var estimate_list = document.querySelector(".estimate-pre-result-item");
    var estimate_price = document.querySelector(".estimate-pre-price");
    var estimate_num = document.querySelector(".estimate-pre-num");
    var estimateForm = document.querySelector(".estimateForm");
    var estimate_item;
    var added_item;
    var lists_height = 0;
    var price = 0;
    window.add_List = function (e) {
        if (e.checked) {
            var li = document.createElement("li");
            var span = document.createElement("span");
            li.classList.add("estimate-item");
            li.classList.add("" + e.id);
            li.dataset.code = e.value;
            span.innerHTML = e.nextSibling.nextElementSibling.innerHTML;
            estimate_list.appendChild(li);
            li.appendChild(span);
            added_item = document.querySelector("." + e.id);
            lists_height += added_item.offsetHeight;
            price += Number(e.parentNode.dataset.price);
            estimate_item = document.querySelectorAll(".estimate-item");
        }
        else {
            var remove_item = document.querySelector("." + e.id);
            remove_item.parentNode.removeChild(remove_item);
            lists_height -= added_item.offsetHeight;
            price -= Number(e.parentNode.dataset.price);
            estimate_item = document.querySelectorAll(".estimate-item");
        }
        console.log(estimate_item);
        estimate_price.textContent = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "\uC6D0";
        estimate_num.textContent = estimate_item.length + "\uAC1C \uC120\uD0DD";
        estimate_container.scrollTop = estimate_container.scrollHeight;
    };
    function isLogined(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var token, myHeaders, result, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("CSRF-Token", token);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetch(url, {
                                method: "POST",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify(data),
                            })];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        if (response.state === true) {
                            estimateForm.submit();
                        }
                        else {
                            if (confirm("로그인이 필요한 서비스입니다.")) {
                                location.href = "/api/login";
                            }
                        }
                        return [3 /*break*/, 5];
                    case 4: throw new Error("로그인유무 확인 실패");
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    $(".estimate-btn").on("click", function () {
        if (estimate_item === undefined) {
            alert("선택하신 증상이 없습니다.");
            return;
        }
        var data = [];
        for (var i = 0; i < estimate_item.length; i++) {
            data.push(estimate_item[i].dataset.code);
        }
        isLogined("http://localhost:3000/api/pre_estimate", data);
    });
    //input submit으로 바꾸고 실핼하기
}
exports.default = default_1;
//그냥 위에서 리턴값?모르겠다
//# sourceMappingURL=estimate.js.map

/***/ }),

/***/ "./dist/public/get_esimate.js":
/*!************************************!*\
  !*** ./dist/public/get_esimate.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function get_estimate() {
    var width = 500;
    var height = 500;
    var daum = window["daum"];
    var postcode = document.getElementById("postcode");
    var roadAddress = document.getElementById("roadAddress");
    var nextBtn = document.querySelector(".estimate-btn-box-next");
    var previousBtn = document.querySelector(".estimate-btn-box-previous");
    var submitBtn = document.querySelector(".estimate-btn-box-submit");
    var page_1 = document.querySelector(".page-1");
    var page_2 = document.querySelector(".page-2");
    var bodyPage = document.querySelector(".get-estimate-page");
    // (async function get_saveEstimateData() {
    //   let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    //   try {
    //     let result = await fetch("http://localhost:3000/api/get_saveEstimateData", {
    //       method: "POST",
    //       credentials: "same-origin",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "CSRF-Token": token,
    //       },
    //       // body: JSON.stringify({ email: data }),
    //     });
    //     if (result.status === 200 || 201) {
    //       let response = await result.json();
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })();
    function clickNextBtn() {
        page_1.style.display = "none";
        page_2.style.display = "block";
        previousBtn.style.display = "block";
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
    }
    function clickPreviousBtn() {
        page_1.style.display = "block";
        page_2.style.display = "none";
        previousBtn.style.display = "none";
        nextBtn.style.display = "block";
        submitBtn.style.display = "none";
    }
    function moveTop() {
        $("html,body").animate({ scrollTop: 0 }, 300);
    }
    nextBtn.addEventListener("click", function () {
        clickNextBtn();
        moveTop();
    });
    previousBtn.addEventListener("click", function () {
        clickPreviousBtn();
        moveTop();
    });
    window.openAddresss = function () {
        new daum.Postcode({
            width: width,
            height: height,
            oncomplete: function (data) {
                var roadAddr = data.roadAddress;
                var extraRoadAddr = "";
                if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                    extraRoadAddr += data.bname;
                }
                if (data.buildingName !== "" && data.apartment === "Y") {
                    extraRoadAddr += extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
                }
                postcode.value = data.zonecode;
                roadAddress.value = roadAddr;
            },
        }).open({
            left: window.screen.width / 2 - width / 2,
            top: window.screen.height / 2 - height / 2,
        });
    };
}
exports.default = get_estimate;
//# sourceMappingURL=get_esimate.js.map

/***/ }),

/***/ "./dist/public/index.js":
/*!******************************!*\
  !*** ./dist/public/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var register_1 = __importDefault(__webpack_require__(/*! ./register */ "./dist/public/register.js"));
var estimate_1 = __importDefault(__webpack_require__(/*! ./estimate */ "./dist/public/estimate.js"));
var get_esimate_1 = __importDefault(__webpack_require__(/*! ./get_esimate */ "./dist/public/get_esimate.js"));
var path = window.location.pathname;
console.log(path);
if (path === "/api/register_previous" || "/api/register/common") {
    register_1.default();
}
if (path === "/estimate") {
    estimate_1.default();
}
if (path === "/api/get_estimate") {
    get_esimate_1.default();
}
$(".mp-btn_estimate").on("click", function () {
    location.href = "/estimate";
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/public/register.js":
/*!*********************************!*\
  !*** ./dist/public/register.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var validation_num = null;
var emailFlag = false;
var email_is_exist = false;
function register() {
    $("#common_email").focus();
    $(".register-email").on("click", function () {
        if (registerEmail.dataset.click === "none") {
            registerEmail.dataset.click = "click";
            $(".arrow").html("&#8743");
            $(".register-common, .register-provide")
                .stop()
                .animate({ bottom: "-90px" }, 350, function () {
                $(".register-provide").animate({ bottom: "-165px" });
            });
        }
        else if (registerEmail.dataset.click === "click") {
            registerEmail.dataset.click = "none";
            $(".arrow").html("&#8744");
            $(".register-common, .register-provide").stop().animate({ bottom: "0px" }, 500);
        }
    });
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
        console.log(pwd_reg.test(pwd.value), pwd.value === pwd2.value, emailFlag);
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map