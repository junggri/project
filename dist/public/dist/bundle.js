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
    var fetchData = {};
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
        // console.log(estimate_item);
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
                            estimateForm.reset();
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
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    $(".estimate-btn").on("click", function () {
        if (estimate_item === undefined) {
            return;
        }
        var data = [];
        for (var i = 0; i < estimate_item.length; i++) {
            data.push(estimate_item[i].dataset.code);
        }
        fetchData = {
            code: data,
            price: price,
        };
        isLogined("http://localhost:3000/api/pre_estimate", fetchData);
    });
    //input submit으로 바꾸고 실핼하기
}
exports.default = default_1;
//그냥 위에서 리턴값?모르겠다
//# sourceMappingURL=estimate.js.map

/***/ }),

/***/ "./dist/public/findUserData.js":
/*!*************************************!*\
  !*** ./dist/public/findUserData.js ***!
  \*************************************/
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

/***/ }),

/***/ "./dist/public/get_esimate.js":
/*!************************************!*\
  !*** ./dist/public/get_esimate.js ***!
  \************************************/
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
function get_estimate() {
    window.history.forward();
    window.noBack = function () {
        window.history.forward();
    };
    var width = 500;
    var height = 500;
    var daum = window["daum"];
    var sigungu = document.querySelector("#sigungu");
    var bname = document.querySelector("#bname");
    var bname1 = document.querySelector("#bname1");
    var postcode = document.getElementById("postcode");
    var sigunguCode = document.querySelector("#sigunguCode");
    var roadAddress = document.getElementById("roadAddress");
    var nextBtn = document.querySelector(".estimate-btn-box-next");
    var previousBtn = document.querySelector(".estimate-btn-box-previous");
    var submitBtn = document.querySelector(".estimate-btn-box-submit");
    var page_1 = document.querySelector(".page-1");
    var page_2 = document.querySelector(".page-2");
    var imgBtn = document.querySelector(".add-img-icon");
    var fileBtn = document.querySelector('input[type="file"]');
    var addFileBtn = document.querySelector(".add_new_image_btn");
    var lat = document.querySelector("#lat");
    var lon = document.querySelector("#lon");
    var registerFrom = document.querySelector(".register_sympton_form");
    var lengthFlag = true;
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
    imgBtn.addEventListener("click", function () {
        fileBtn.click();
    });
    function lengthOfImg(data) {
        var imgLength = document.querySelector(".si-img-length");
        imgLength.textContent = data.length + " / 10\uAC1C \uB4F1\uB85D";
        if (data.length === 0) {
            var imgBox = document.querySelector(".si-img-itemBox");
            while (imgBox.hasChildNodes) {
                if (imgBox.firstChild === null) {
                    break;
                }
                imgBox.removeChild(imgBox.firstChild);
            }
            imgBtn.style.display = "block";
        }
        else if (data.length === 10) {
            lengthFlag = false;
        }
        else {
            lengthFlag = true;
        }
    }
    function commonMakeImg(data) {
        var imgBox = document.querySelector(".si-img-itemBox");
        var addImgBox = document.createElement("div");
        for (var i = 0; i < data.img.length; i++) {
            var imgItem = document.createElement("div");
            var cancelIcon = document.createElement("div");
            cancelIcon.classList.add("img-box-cancel");
            imgItem.classList.add("img-item");
            imgItem.style.backgroundImage = "url(\"/" + data.email.user_objectId + "/" + data.img[i] + "\")";
            imgItem.dataset.img = data.img[i];
            imgItem.appendChild(cancelIcon);
            imgBox.insertBefore(imgItem, imgBox.firstChild);
            cancelIcon.addEventListener("click", function (e) {
                var targetData = e.target.parentNode.dataset.img;
                fetchDeleteImg("http://localhost:3000/api/delete_session_img", targetData);
                imgBox.removeChild(e.target.parentNode);
            });
        }
        addImgBox.classList.add("img-item-addBox");
        addImgBox.addEventListener("click", function (e) {
            if (!lengthFlag) {
                alert("등록가능한 사진을 초과하셨습니다.");
                return;
            }
            addFileBtn.click();
        });
        imgBox.appendChild(addImgBox);
        lengthOfImg(data.img);
    }
    function makeSymptonImg(data) {
        if (data.img === undefined) {
            return;
        }
        imgBtn.style.display = "none";
        commonMakeImg(data);
    }
    function removeAndMakeNewImage(data) {
        var imgBox = document.querySelector(".si-img-itemBox");
        while (imgBox.hasChildNodes) {
            if (imgBox.firstChild === null) {
                break;
            }
            imgBox.removeChild(imgBox.firstChild);
        }
        commonMakeImg(data);
    }
    (function reloadGetSessionData() {
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
                        return [4 /*yield*/, fetch("http://localhost:3000/api/fetch_session", {
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                            })];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        if (response.state === false) {
                            return [2 /*return*/];
                        }
                        //if session.img isnt defineded runtun
                        makeSymptonImg(response);
                        return [3 /*break*/, 5];
                    case 4: throw new Error("reload fetch failed");
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    })();
    function fetchDeleteImg(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var token, myHeaders, result, response, error_2;
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
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ data: data }),
                            })];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        lengthOfImg(response);
                        return [3 /*break*/, 5];
                    case 4: throw new Error("reload fetch failed");
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    function fetchImage(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, i, result, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        for (i = 0; i < data.length; i++) {
                            formData.append("data", data[i]);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetch(url, {
                                method: "POST",
                                body: formData,
                            })];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        if (response.state === false) {
                            alert("최대 10장까지 등록가능합니다");
                            return [2 /*return*/];
                        }
                        if (url === "http://localhost:3000/api/fetch_upload_image") {
                            makeSymptonImg(response);
                        }
                        else {
                            removeAndMakeNewImage(response);
                        }
                        return [3 /*break*/, 5];
                    case 4: throw new Error("fetch_image failed");
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    //리로드시 세션에 있는 정보로 자신을 등록하는 용도
    window.add_fileUpload = function (e) {
        fetchImage("http://localhost:3000/api/fetch_add_upload_image", e.target.files);
    };
    window.formAndBlockBack = function () {
        var check = confirm("간편견적을 받아보시겠습니까?");
        if (check) {
            return true;
        }
        else {
            alert("필수사항을 입력해주시길 바랍니다.");
            return false;
        }
    };
    window.previous_fileUpload = function (e) {
        fetchImage("http://localhost:3000/api/fetch_upload_image", e.target.files);
    };
    window.openAddresss = function () {
        new daum.Postcode({
            width: width,
            height: height,
            oncomplete: function (data) {
                return __awaiter(this, void 0, void 0, function () {
                    var roadAddr, extraRoadAddr;
                    return __generator(this, function (_a) {
                        roadAddr = data.roadAddress;
                        extraRoadAddr = "";
                        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                            extraRoadAddr += data.bname;
                        }
                        if (data.buildingName !== "" && data.apartment === "Y") {
                            extraRoadAddr += extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
                        }
                        Promise.resolve(data)
                            .then(function () {
                            var address = data.address;
                            return new Promise(function (resolve, reject) {
                                var geocoder = new daum.maps.services.Geocoder();
                                geocoder.addressSearch(address, function (result, status) {
                                    if (status === daum.maps.services.Status.OK) {
                                        var _a = result[0], x = _a.x, y = _a.y;
                                        resolve({ lat: y, lon: x });
                                    }
                                    else {
                                        reject();
                                    }
                                });
                            });
                        })
                            .then(function (result) {
                            postcode.value = data.zonecode;
                            roadAddress.value = roadAddr;
                            sigunguCode.value = data.sigunguCode;
                            sigungu.value = data.sigungu;
                            bname.value = data.bname;
                            bname1.value = data.bname1;
                            lat.value = result.lat;
                            lon.value = result.lon;
                        });
                        return [2 /*return*/];
                    });
                });
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
var register_1 = __importDefault(__webpack_require__(/*! ./register */ "./dist/public/register.js"));
var login_1 = __importDefault(__webpack_require__(/*! ./login */ "./dist/public/login.js"));
var estimate_1 = __importDefault(__webpack_require__(/*! ./estimate */ "./dist/public/estimate.js"));
var get_esimate_1 = __importDefault(__webpack_require__(/*! ./get_esimate */ "./dist/public/get_esimate.js"));
var mypqge_1 = __importDefault(__webpack_require__(/*! ./mypqge */ "./dist/public/mypqge.js"));
var modified_estimate_1 = __importDefault(__webpack_require__(/*! ./modified_estimate */ "./dist/public/modified_estimate.js"));
var findUserData_1 = __importDefault(__webpack_require__(/*! ./findUserData */ "./dist/public/findUserData.js"));
var reset_1 = __importDefault(__webpack_require__(/*! ./reset */ "./dist/public/reset.js"));
var oauth_1 = __importDefault(__webpack_require__(/*! ./oauth */ "./dist/public/oauth.js"));
var provide_1 = __importDefault(__webpack_require__(/*! ./provide */ "./dist/public/provide.js"));
var p_index_1 = __importDefault(__webpack_require__(/*! ./p_index */ "./dist/public/p_index.js"));
var p_findAllRegister_1 = __importDefault(__webpack_require__(/*! ./p_findAllRegister */ "./dist/public/p_findAllRegister.js"));
var p_showBeforeEstimate_1 = __importDefault(__webpack_require__(/*! ./p_showBeforeEstimate */ "./dist/public/p_showBeforeEstimate.js"));
var p_showGotEstimate_1 = __importDefault(__webpack_require__(/*! ./p_showGotEstimate */ "./dist/public/p_showGotEstimate.js"));
var LoginmyBtn = document.querySelector(".nb-right_isLogined");
var mainName = document.querySelector(".nb-left-name");
var path = window.location.pathname;
var navigationBox = document.querySelector(".nb-navigation");
var logout = document.querySelector(".nb-profile-logout");
var logoutForm = document.querySelector(".logout-form");
var body = document.querySelector("#app");
if (window.location.href.includes("#")) {
    window.location.href = window.location.href.slice(0, -1);
}
if (path === "/provide/index") {
    p_index_1.default();
}
if (path === "/provide/findAllRegister") {
    p_findAllRegister_1.default();
}
if (path === "/provide/sympton_estimate") {
    p_showBeforeEstimate_1.default();
}
if (path === "/provide/showGotEstimate") {
    p_showGotEstimate_1.default();
}
if (path === "/api/oauth_register") {
    oauth_1.default();
    register_1.default();
}
if (path.split("/")[2] === "reset") {
    reset_1.default();
}
if (path === "/api/find_user_email") {
    findUserData_1.default();
}
if (path === "/api/find_user_pwd") {
    findUserData_1.default();
}
if (path === "/api/login") {
    login_1.default();
}
if (path === "/api/register_previous") {
    register_1.default();
}
if (path === "/api/register/common") {
    register_1.default();
}
if (path === "/api/register/provide") {
    provide_1.default();
}
if (path === "/estimate") {
    estimate_1.default();
}
if (path === "/api/mypage") {
    mypqge_1.default();
}
if (path.split("/")[2] === "modified_estimate") {
    modified_estimate_1.default();
}
if (path === "/api/get_estimate") {
    get_esimate_1.default();
}
if (path === "/") {
    index();
}
if (LoginmyBtn !== null) {
    LoginmyBtn.addEventListener("click", function (e) {
        navigationBox.style.display = navigationBox.style.display === "" ? "block" : "";
    });
}
if (mainName !== null) {
    mainName.addEventListener("click", function () {
        if (path.split("/")[1] === "api") {
            location.href = "/";
        }
        else if (path.split("/")[1] === "provide") {
            location.href = "/provide/index";
        }
    });
}
if (logout !== null) {
    logout.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (location.pathname.split("/")[1] === "api" || location.pathname.split("/")[1] === "") {
                if (confirm("로그아웃 하시겠습니까?")) {
                    logoutForm.action = "/api/logout_process";
                    return [2 /*return*/, logoutForm.submit()];
                }
                else {
                    return [2 /*return*/, false];
                }
            }
            else if (location.pathname.split("/")[1] === "provide") {
                if (confirm("로그아웃 하시겠습니까?")) {
                    logoutForm.action = "/provide/logout_process";
                    return [2 /*return*/, logoutForm.submit()];
                }
                else {
                    return [2 /*return*/, false];
                }
            }
            return [2 /*return*/];
        });
    }); });
}
function index() {
    var estimateBtn = document.querySelector(".mp-btn_estimate");
    estimateBtn.addEventListener("click", function (e) {
        location.href = "/estimate";
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/public/login.js":
/*!******************************!*\
  !*** ./dist/public/login.js ***!
  \******************************/
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
function login() {
    $(document).ready(function () {
        var _this = this;
        var checkBox = document.querySelector("#checkbox_id");
        var loginBoxValue = document.querySelector("#login_email");
        var pwdValue = document.querySelector("#login_pwd");
        var userInputEmail = getCookie("userInputEmail");
        var loginBtn = document.querySelector(".login-btn");
        var state = document.querySelector(".condition-login");
        loginBoxValue.focus();
        function loginProcess(data) {
            return __awaiter(this, void 0, void 0, function () {
                var token, myHeaders, reuslt, response, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                            myHeaders = new Headers();
                            myHeaders.append("Content-Type", "application/json");
                            myHeaders.append("CSRF-Token", token);
                            return [4 /*yield*/, fetch("http://localhost:3000/api/login_process", {
                                    method: "POST",
                                    credentials: "same-origin",
                                    headers: myHeaders,
                                    body: JSON.stringify(data),
                                })];
                        case 1:
                            reuslt = _a.sent();
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 5, , 6]);
                            if (!(reuslt.status === 200 || 201)) return [3 /*break*/, 4];
                            return [4 /*yield*/, reuslt.json()];
                        case 3:
                            response = _a.sent();
                            if (response.state) {
                                window.location.href = response.url;
                            }
                            else {
                                state.textContent = response.msg;
                            }
                            _a.label = 4;
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            error_1 = _a.sent();
                            console.error(error_1);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        }
        loginBtn.addEventListener("click", function () {
            var data = { email: loginBoxValue.value, pwd: pwdValue.value };
            loginProcess(data);
        });
        function getEmailFromCookie(email, state) {
            return __awaiter(this, void 0, void 0, function () {
                var token, myHeaders, response, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (email === "")
                                return [2 /*return*/];
                            token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                            myHeaders = new Headers();
                            myHeaders.append("Content-Type", "application/json");
                            myHeaders.append("CSRF-Token", token);
                            return [4 /*yield*/, fetch("http://localhost:3000/api/setUserEmailCookie", {
                                    method: "POST",
                                    credentials: "same-origin",
                                    headers: myHeaders,
                                    body: JSON.stringify({ email: email, state: state }),
                                })];
                        case 1:
                            response = _a.sent();
                            if (!(response.status === 200 || 201)) return [3 /*break*/, 3];
                            return [4 /*yield*/, response.json()];
                        case 2:
                            result = _a.sent();
                            return [2 /*return*/, result];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        getEmailFromCookie(userInputEmail, "get").then(function (result) {
            if (result === undefined)
                return;
            loginBoxValue.value = result.decrypt;
            checkBox.checked = true;
        });
        checkBox.addEventListener("change", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (loginBoxValue.value === "")
                    return [2 /*return*/];
                if (checkBox.checked) {
                    getEmailFromCookie(loginBoxValue.value, "set").then(function (result) {
                        setCookie("userInputEmail", result.email, 7);
                    });
                }
                else {
                    deleteCookie("userInputEmail");
                }
                return [2 /*return*/];
            });
        }); });
        loginBoxValue.addEventListener("input", function () {
            if (checkBox.checked) {
                getEmailFromCookie(loginBoxValue.value, "set").then(function (result) {
                    setCookie("userInputEmail", result.email, 7);
                });
            }
        });
        function setCookie(cookieName, value, exdays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + exdays);
            var cookieValue = value + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
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

/***/ }),

/***/ "./dist/public/modified_estimate.js":
/*!******************************************!*\
  !*** ./dist/public/modified_estimate.js ***!
  \******************************************/
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
function mypage() {
    var width = 500;
    var height = 500;
    var daum = window["daum"];
    var sigungu = document.querySelector("#sigungu");
    var bname = document.querySelector("#bname");
    var bname1 = document.querySelector("#bname1");
    var lat = document.querySelector("#lat");
    var lon = document.querySelector("#lon");
    var postcode = document.getElementById("postcode");
    var roadAddress = document.getElementById("roadAddress");
    var sigunguCode = document.querySelector("#sigunguCode");
    var detailAddress = document.getElementById("detailAddress");
    var imgBtn = document.querySelector(".add-img-icon");
    var fileBtn = document.querySelector('input[type="file"]');
    var addFileBtn = document.querySelector(".add_new_image_btn");
    var symptonDetail = document.querySelector("#sympton-detail");
    var timeSelect = document.getElementById("st-time");
    var minuteOption = document.getElementById("st-minute");
    var userwant_box = document.querySelector("#userwant-box");
    var cancelBtn = document.querySelector(".modified-cancel-btn");
    var modifiedBtn = document.querySelector(".modified-estimate-btn");
    var modifiedForm = document.querySelector(".modified_estimate_form");
    var lengthFlag = true;
    imgBtn.addEventListener("click", function () {
        fileBtn.click();
    });
    modifiedBtn.addEventListener("click", function (e) {
        if (confirm("입력하신 정보를 수정하시겠습니까?")) {
            modifiedForm.submit();
        }
    });
    cancelBtn.addEventListener("click", function () {
        var cancelConfirm = confirm("수정하신 정보가 저장되지 않습니다. 정말로 취소하시겠습니까?");
        if (cancelConfirm) {
            location.href = "/api/mypage";
        }
    });
    function selectedTime(response) {
        var _a = response.userwant_time, time = _a.time, minute = _a.minute;
        for (var i = 0; i < timeSelect.options.length; i++) {
            if (timeSelect.options[i].value === String(time)) {
                timeSelect.options[i].selected = true;
            }
        }
        for (var i = 0; i < minuteOption.options.length; i++) {
            if (minuteOption.options[i].value === String(minute)) {
                minuteOption.options[i].selected = true;
            }
        }
    }
    (function reloadGetSessionData() {
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
                        return [4 /*yield*/, fetch("http://localhost:3000/api/modified_get_image", {
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ url: window.location.pathname.split("/")[3] }),
                            })];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        sigungu.value = response.response.address.sigungu;
                        bname.value = response.response.address.bname;
                        bname1.value = response.response.address.bname1;
                        lat.value = response.response.address.lat;
                        lon.value = response.response.address.lon;
                        sigunguCode.value = response.response.address.sigunguCode;
                        symptonDetail.textContent = response.response.sympton_detail;
                        postcode.value = response.response.address.postcode;
                        roadAddress.value = response.response.address.roadAddress;
                        detailAddress.value = response.response.address.detailAddress;
                        userwant_box.textContent = response.response.userwant_content;
                        selectedTime(response.response);
                        makeSymptonImg(response);
                        return [3 /*break*/, 5];
                    case 4: throw new Error("reload fetch failed");
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    })();
    function lengthOfImg(data) {
        var imgLength = document.querySelector(".si-img-length");
        imgLength.textContent = data.length + " / 10\uAC1C \uB4F1\uB85D";
        if (data.length === 0) {
            var imgBox = document.querySelector(".si-img-itemBox");
            while (imgBox.hasChildNodes) {
                if (imgBox.firstChild === null) {
                    break;
                }
                imgBox.removeChild(imgBox.firstChild);
            }
            imgBtn.style.display = "block";
        }
        else if (data.length === 10) {
            lengthFlag = false;
        }
        else {
            lengthFlag = true;
        }
    }
    function commonMakeImg(data) {
        var imgBox = document.querySelector(".si-img-itemBox");
        var addImgBox = document.createElement("div");
        for (var i = 0; i < data.img.length; i++) {
            var imgItem = document.createElement("div");
            var cancelIcon = document.createElement("div");
            cancelIcon.classList.add("img-box-cancel");
            imgItem.classList.add("img-item");
            imgItem.style.backgroundImage = "url(\"/" + data.email.user_objectId + "/" + data.img[i] + "\")";
            imgItem.dataset.img = data.img[i];
            imgItem.appendChild(cancelIcon);
            imgBox.insertBefore(imgItem, imgBox.firstChild);
            cancelIcon.addEventListener("click", function (e) {
                var targetData = e.target.parentNode.dataset.img;
                fetchDeleteImg("http://localhost:3000/api/delete_session_img", targetData);
                imgBox.removeChild(e.target.parentNode);
            });
        }
        addImgBox.classList.add("img-item-addBox");
        addImgBox.addEventListener("click", function (e) {
            if (!lengthFlag) {
                alert("등록가능한 사진을 초과하셨습니다.");
                return;
            }
            addFileBtn.click();
        });
        imgBox.appendChild(addImgBox);
        lengthOfImg(data.img);
    }
    function makeSymptonImg(data) {
        if (data.img === undefined) {
            return;
        }
        imgBtn.style.display = "none";
        commonMakeImg(data);
    }
    function removeAndMakeNewImage(data) {
        var imgBox = document.querySelector(".si-img-itemBox");
        while (imgBox.hasChildNodes) {
            if (imgBox.firstChild === null) {
                break;
            }
            imgBox.removeChild(imgBox.firstChild);
        }
        commonMakeImg(data);
    }
    function fetchDeleteImg(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var token, myHeaders, result, response, error_2;
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
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ data: data }),
                            })];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        lengthOfImg(response);
                        return [3 /*break*/, 5];
                    case 4: throw new Error("reload fetch failed");
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    function fetchImage(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, i, result, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        for (i = 0; i < data.length; i++) {
                            formData.append("data", data[i]);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetch(url, {
                                method: "POST",
                                body: formData,
                            })];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        if (response.state === false) {
                            alert("최대 10장까지 등록가능합니다");
                            return [2 /*return*/];
                        }
                        if (url === "http://localhost:3000/api/modified_upload_image") {
                            makeSymptonImg(response);
                        }
                        else {
                            removeAndMakeNewImage(response);
                        }
                        return [3 /*break*/, 5];
                    case 4: throw new Error("fetch_image failed");
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    //리로드시 세션에 있는 정보로 자신을 등록하는 용도
    window.add_fileUpload = function (e) {
        fetchImage("http://localhost:3000/api/modified_add_upload_image", e.target.files);
    };
    window.previous_fileUpload = function (e) {
        fetchImage("http://localhost:3000/api/modified_upload_image", e.target.files);
    };
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
                Promise.resolve(data)
                    .then(function () {
                    var address = data.address;
                    return new Promise(function (resolve, reject) {
                        var geocoder = new daum.maps.services.Geocoder();
                        geocoder.addressSearch(address, function (result, status) {
                            if (status === daum.maps.services.Status.OK) {
                                var _a = result[0], x = _a.x, y = _a.y;
                                resolve({ lat: y, lon: x });
                            }
                            else {
                                reject();
                            }
                        });
                    });
                })
                    .then(function (result) {
                    console.log(result);
                    postcode.value = data.zonecode;
                    roadAddress.value = roadAddr;
                    sigunguCode.value = data.sigunguCode;
                    sigungu.value = data.sigungu;
                    bname.value = data.bname;
                    bname1.value = data.bname1;
                    lat.value = result.lat;
                    lon.value = result.lon;
                });
            },
        }).open({
            left: window.screen.width / 2 - width / 2,
            top: window.screen.height / 2 - height / 2,
        });
    };
}
exports.default = mypage;
//# sourceMappingURL=modified_estimate.js.map

/***/ }),

/***/ "./dist/public/mypqge.js":
/*!*******************************!*\
  !*** ./dist/public/mypqge.js ***!
  \*******************************/
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
function mypage() {
    var _this = this;
    var modifiedBtn = document.querySelectorAll(".ms-resultItem-modifieBtn");
    var deleteBtn = document.querySelectorAll(".ms-resultItem-deleteBtn");
    var registerNum = document.querySelector(".userShowStateBox-register-number");
    var showBtn = document.querySelectorAll(".ms-resultItem-showGotEstimate");
    var submitItem = document.querySelectorAll(".sge-item");
    var acceptBtn = document.querySelectorAll(".accept-submit-btn");
    var hiddenSubmitId = document.querySelector(".hidden_submitId");
    var acceptForm = document.querySelector(".acceptForm");
    var _loop_1 = function (i) {
        modifiedBtn[i].addEventListener("click", function () {
            var userNode = modifiedBtn[i].parentNode.parentNode.parentNode;
            var id = userNode.dataset.id;
            location.href = "/api/modified_estimate/" + id;
        });
    };
    for (var i = 0; i < modifiedBtn.length; i++) {
        _loop_1(i);
    }
    var _loop_2 = function (i) {
        deleteBtn[i].addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var deleteConfirm, target, token, myHeaders, result, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deleteConfirm = confirm("정말로 등록을 삭제하시겠습니까?");
                        target = deleteBtn[i].parentNode.parentNode.parentNode;
                        if (!deleteConfirm) return [3 /*break*/, 5];
                        target.parentNode.removeChild(target);
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("CSRF-Token", token);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("http://localhost:3000/api/delete_register_sympton", {
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ id: target.dataset.id }),
                            })];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        registerNum.textContent = response.length;
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    for (var i = 0; i < deleteBtn.length; i++) {
        _loop_2(i);
    }
    for (var i = 0; i < showBtn.length; i++) {
        showBtn[i].addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var token, myHeaders, result, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("CSRF-Token", token);
                        return [4 /*yield*/, fetch("http://localhost:3000/api/find_provider", {
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ sympton_id: e.target.parentNode.parentNode.parentNode.dataset.id }),
                            })];
                    case 1:
                        result = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        if (response.state === false)
                            return [2 /*return*/, alert("받은 견적이 존재하지 않습니다.")];
                        $("." + response.data[0].symptonId).stop().animate({ height: "toggle" });
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    }
    var _loop_3 = function (i) {
        acceptBtn[i].addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var submitId, token, myHeaders, result, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.stopPropagation();
                        submitId = acceptBtn[i].parentNode.parentNode.dataset.submitid;
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("CSRF-Token", token);
                        return [4 /*yield*/, fetch("http://localhost:3000/api/find_submit", {
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ submit_id: submitId }),
                            })];
                    case 1:
                        result = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        if (response.state === false)
                            return [2 /*return*/, alert("견적이 삭제되었거나, 존재하지 않습니다.")];
                        if (confirm("oo의 견적을 수락하시겠습니까")) {
                            hiddenSubmitId.value = submitId;
                            acceptForm.submit();
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    // for (let i = 0; i < submitItem.length; i++) {
    //   submitItem[i].addEventListener("click", async (e: any) => {
    //     e.stopPropagation();
    //     let submitId = (submitItem[i] as any).dataset.submitid;
    //     let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    //     let myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");
    //     myHeaders.append("CSRF-Token", token);
    //     let result = await fetch("http://localhost:3000/api/find_submit", {
    //       method: "post",
    //       credentials: "same-origin",
    //       headers: myHeaders,
    //       body: JSON.stringify({ submit_id: submitId }),
    //     });
    //     try {
    //       if (result.status === 200 || 201) {
    //         let response = await result.json();
    //         console.log(response);
    //         if (response.state === false) return alert("견적이 삭제되었거나, 존재하지 않습니다.");
    //       }
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   });
    // }
    for (var i = 0; i < acceptBtn.length; i++) {
        _loop_3(i);
    }
}
exports.default = mypage;
//# sourceMappingURL=mypqge.js.map

/***/ }),

/***/ "./dist/public/oauth.js":
/*!******************************!*\
  !*** ./dist/public/oauth.js ***!
  \******************************/
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
function oauth() {
    var userEmail = document.querySelector("#common_email");
    var alertBox = document.querySelector(".oauth-alert-box ");
    var loginBtn = document.querySelector(".oab-loginBtn");
    var emailBtn = document.querySelector(".oab-emailBtn");
    var oauthEmail = document.querySelector("#common_email");
    loginBtn.addEventListener("click", function (e) {
        window.location.href = "/api/login";
    });
    emailBtn.addEventListener("click", function (e) {
        alertBox.style.display = "none";
        oauthEmail.readOnly = false;
    });
    function checkIsExisted() {
        return __awaiter(this, void 0, void 0, function () {
            var token, myHeaders, result, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("CSRF-Token", token);
                        return [4 /*yield*/, fetch("http://localhost:3000/api/oauth_check_user_email", {
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ email: userEmail.value }),
                            })];
                    case 1:
                        result = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        if (!response.state) {
                            alertBox.style.display = "block";
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    checkIsExisted();
}
exports.default = oauth;
//# sourceMappingURL=oauth.js.map

/***/ }),

/***/ "./dist/public/p_findAllRegister.js":
/*!******************************************!*\
  !*** ./dist/public/p_findAllRegister.js ***!
  \******************************************/
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
function p_findAllRegister() {
    var _this = this;
    $(document).ready(function () {
        var sigunguCode = document.querySelector("#sigunguCode");
        var sigungu = document.querySelector("#sigungu");
        var bname = document.querySelector("#bname");
        var findBtn = document.querySelector(".find-btn");
        var selected_sigunguCode, page_num;
        var decodedUrl = decodeURI(document.location.search);
        var pageValue = document.querySelector(".frr-pagination-pageNum");
        var lastPage = document.querySelector(".frr-pagination-allPage");
        var findForm = document.querySelector(".findForm");
        var changeFromSelect = false;
        var symptonItems = document.querySelectorAll(".frr-item-content");
        // let optionSelect = document.querySelector("#sigunguSelected");
        // let previousBtn = document.querySelector(".frr-pagination-previous") as HTMLInputElement;
        // let nextBtn = document.querySelector(".frr-pagination-next") as HTMLInputElement;
        makeSymptonPage(symptonItems);
        if (location.search !== "") {
            for (var i = 0; i < decodedUrl.split("&").length; i++) {
                if (decodedUrl.split("&")[i].split("=")[0] === "sigunguCode")
                    selected_sigunguCode = decodedUrl.split("&")[i].split("=")[1];
                if (decodedUrl.split("&")[i].split("=")[0] === "page")
                    page_num = decodedUrl.split("&")[i].split("=")[1];
            }
            //////////////////////////////////////////////////////////////////////////////////
            if (decodedUrl.split("&")[1] !== undefined) {
                for (var i = 0; i < sigunguCode.options.length; i++) {
                    if (selected_sigunguCode === sigunguCode.options[i].value) {
                        sigunguCode.options[i].selected = true;
                        sigunguCode.options[i].setAttribute("selected", "selected");
                    }
                }
            }
            //////////////////////////////////////////////////////////////////////////////////
            blockGetUrl(page_num, lastPage);
            pageValue.value = page_num;
            if (selected_sigunguCode === "sejong")
                sigungu.disabled = true;
        }
        else {
            pageValue.value = "1";
        }
        function blockGetUrl(page_num, lastPage) {
            if (Number(page_num) > Number(lastPage.textContent)) {
                alert("잘못된 접근입니다.");
                return history.back();
            }
        }
        function makeSymptonPage(symptonItems) {
            var _this = this;
            for (var i = 0; i < symptonItems.length; i++) {
                symptonItems[i].addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                    var token, myHeaders, result, response, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                                myHeaders = new Headers();
                                myHeaders.append("Content-Type", "application/json");
                                myHeaders.append("CSRF-Token", token);
                                return [4 /*yield*/, fetch("http://localhost:3000/provide/before_getData", {
                                        method: "post",
                                        credentials: "same-origin",
                                        headers: myHeaders,
                                        body: JSON.stringify({ _id: e.target.parentNode.dataset.registerid }),
                                    })];
                            case 1:
                                result = _a.sent();
                                _a.label = 2;
                            case 2:
                                _a.trys.push([2, 5, , 6]);
                                if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                                return [4 /*yield*/, result.json()];
                            case 3:
                                response = _a.sent();
                                if (response.state === false) {
                                    alert("존재하지 않는 자료입니다.");
                                    window.location.href = "/provide/findAllRegister";
                                    return [2 /*return*/];
                                }
                                window.location.href = "/provide/sympton_estimate?" + e.target.parentNode.dataset.registerid;
                                _a.label = 4;
                            case 4: return [3 /*break*/, 6];
                            case 5:
                                error_1 = _a.sent();
                                console.error(error_1);
                                return [3 /*break*/, 6];
                            case 6: return [2 /*return*/];
                        }
                    });
                }); });
            }
        }
        findBtn.addEventListener("click", function (e) {
            if (changeFromSelect) {
                pageValue.value = "1";
            }
        });
        window.pagination_pre = function () {
            if (pageValue.value === "1") {
                return;
            }
            else {
                var page = Number(pageValue.value) - 1;
                pageValue.value = String(page);
                findForm.submit();
            }
        };
        window.pagination_next = function () {
            if (pageValue.value === lastPage.textContent) {
                return;
            }
            else {
                var page = Number(pageValue.value) + 1;
                pageValue.value = String(page);
                findForm.submit();
            }
        };
        window.get_change = function () {
            changeFromSelect = true;
        };
        function reset(target, text) {
            return __awaiter(this, void 0, void 0, function () {
                var option;
                return __generator(this, function (_a) {
                    option = document.createElement("option");
                    while (target.hasChildNodes()) {
                        target.removeChild(target.firstChild);
                    }
                    option.selected = true;
                    option.text = text;
                    option.value = "0";
                    //value 바꾸면 여기도 바꾸기
                    target.appendChild(option);
                    return [2 /*return*/];
                });
            });
        }
        //////////////////////////////////////////////////////////////////////////////////
        function commonFunction(text, target, data, url) {
            return __awaiter(this, void 0, void 0, function () {
                var token, myHeaders, result, response, i, option, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, reset(target, text)];
                        case 1:
                            _a.sent();
                            token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                            myHeaders = new Headers();
                            myHeaders.append("Content-Type", "application/json");
                            myHeaders.append("CSRF-Token", token);
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 6, , 7]);
                            return [4 /*yield*/, fetch(url, {
                                    method: "post",
                                    credentials: "same-origin",
                                    headers: myHeaders,
                                    body: JSON.stringify({ data: data }),
                                })];
                        case 3:
                            result = _a.sent();
                            if (!(result.status === 200 || 201)) return [3 /*break*/, 5];
                            return [4 /*yield*/, result.json()];
                        case 4:
                            response = _a.sent();
                            for (i = 0; i < response.sido.length; i++) {
                                option = document.createElement("option");
                                option.value = response.sido[i];
                                option.textContent = response.sido[i];
                                target.appendChild(option);
                            }
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            error_2 = _a.sent();
                            console.error(error_2);
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        }
        //////////////////////////////////////////////////////////////////////////////////
        sigunguCode.addEventListener("change", function (e) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, reset(sigungu, "-- 전체")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, reset(bname, "-- 전체")];
                    case 2:
                        _a.sent();
                        if (sigunguCode.options[sigunguCode.selectedIndex].value === "sejong") {
                            sigungu.disabled = true;
                            commonFunction("-- 동 / 면 / 읍", bname, sigunguCode.options[sigunguCode.selectedIndex].value, "http://localhost:3000/provide/get_sejong");
                            return [2 /*return*/];
                        }
                        if (!(sigunguCode.options[sigunguCode.selectedIndex].value === "0")) return [3 /*break*/, 5];
                        return [4 /*yield*/, reset(sigungu, "-- 전체")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, reset(bname, "-- 전체")];
                    case 4:
                        _a.sent();
                        sigungu.disabled = false;
                        return [2 /*return*/];
                    case 5:
                        sigungu.disabled = false;
                        commonFunction("-- 시 / 군 / 구", sigungu, sigunguCode.options[sigunguCode.selectedIndex].value, "http://localhost:3000/provide/get_sigungu");
                        return [2 /*return*/];
                }
            });
        }); });
        //////////////////////////////////////////////////////////////////////////////////
        sigungu.addEventListener("change", function (e) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(sigungu.options[sigungu.selectedIndex].value === "0")) return [3 /*break*/, 2];
                        return [4 /*yield*/, reset(bname, "-- 전체")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        commonFunction("-- 동 / 면 / 읍", bname, { sido: sigunguCode.options[sigunguCode.selectedIndex].value, sigungu: sigungu.options[sigungu.selectedIndex].value }, "http://localhost:3000/provide/get_bname");
                        return [2 /*return*/];
                }
            });
        }); });
    });
}
exports.default = p_findAllRegister;
//# sourceMappingURL=p_findAllRegister.js.map

/***/ }),

/***/ "./dist/public/p_index.js":
/*!********************************!*\
  !*** ./dist/public/p_index.js ***!
  \********************************/
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
function p_index() {
    var _this = this;
    var loginBtn = document.querySelector(".pi-loginBtn");
    var provideEmail = document.querySelector("#pi-email");
    var providePwd = document.querySelector("#pi-pwd");
    var provideState = document.querySelector(".pi-state");
    loginBtn.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
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
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fetch("http://localhost:3000/provide/login_process", {
                            method: "post",
                            credentials: "same-origin",
                            headers: myHeaders,
                            body: JSON.stringify({
                                email: provideEmail.value,
                                pwd: providePwd.value,
                            }),
                        })];
                case 2:
                    result = _a.sent();
                    if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                    return [4 /*yield*/, result.json()];
                case 3:
                    response = _a.sent();
                    if (response.state) {
                        return [2 /*return*/, (window.location.href = response.url)];
                    }
                    else {
                        provideState.textContent = response.msg;
                    }
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); });
}
exports.default = p_index;
//# sourceMappingURL=p_index.js.map

/***/ }),

/***/ "./dist/public/p_showBeforeEstimate.js":
/*!*********************************************!*\
  !*** ./dist/public/p_showBeforeEstimate.js ***!
  \*********************************************/
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
function p_showBeforeEsimate() {
    var _this = this;
    var username = document.querySelector(".sbe-user-name");
    var createdAt = document.querySelector(".sbe-user-createdAt");
    var contentName = document.querySelector(".sbe-box-content");
    var subContentName = document.querySelector(".sbe-content-detail");
    var userwant_time = document.querySelector(".sbe-userwant-time-resultBox");
    var userwant_detail = document.querySelector(".sbe-userwant-content-detail");
    var mainImg = document.querySelector(".summary-main-img");
    var priceValue = document.querySelector(".sbe-estimate-box-price-value");
    var hiddenPrice = document.querySelector(".sbe-save-price");
    var estimateBtn = document.querySelector(".sbe-estimate-btn");
    var showEstimateBox = document.querySelector(".sbe-estimate-box");
    var cancelEstimateBtn = document.querySelector(".sbe-cancel-estimate-btn");
    var sumbitEstimate = document.querySelector(".sbe-get-estimate-btn");
    var submitForm = document.querySelector(".submit_form");
    var estimate_detail_value = document.querySelector("#sympton-detail");
    var registrantId = document.querySelector(".registrant_id");
    var symptonId = document.querySelector(".sympton_id");
    var userId = document.querySelector(".user_id");
    var deleteEstimateBtn = document.querySelector(".sbe-delete-estimate-btn");
    function getDataSymtonsData() {
        return __awaiter(this, void 0, void 0, function () {
            var token, myHeaders, result, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("CSRF-Token", token);
                        return [4 /*yield*/, fetch("http://localhost:3000/provide/get_registerData", {
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ _id: document.location.search.substring(1, document.location.search.length) }),
                            })];
                    case 1:
                        result = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        if (response.state === false) {
                            alert("존재하지 않는 자료입니다.");
                            window.location.href = "/provide/findAllRegister";
                        }
                        mainImg.style.backgroundImage = "url(\"/" + response.data.user_object_id + "/" + response.data.img[0] + "\")";
                        username.textContent = response.data.user_name;
                        createdAt.textContent = response.data.createdAt;
                        contentName.textContent = response.data.sympton_detail;
                        subContentName.textContent = response.data.sympton_detail;
                        userwant_time.textContent = response.data.userwant_time.time + "\uC2DC " + response.data.userwant_time.minute + "\uBD84";
                        userwant_detail.textContent = response.data.userwant_content;
                        registrantId.value = response.data.user_object_id;
                        symptonId.value = response.data._id;
                        userId.value = response.data.user_object_id;
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    getDataSymtonsData();
    function numberFormat(inputNumber) {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    $(".sbe-estimate-box-price-value").on("blur", function () {
        hiddenPrice.value = priceValue.value;
        var price = numberFormat(priceValue.value);
        priceValue.value = price;
    });
    if (estimateBtn !== null) {
        estimateBtn.addEventListener("click", function (e) {
            showEstimateBox.style.display = "block";
            estimateBtn.style.pointerEvents = "none";
        });
    }
    cancelEstimateBtn.addEventListener("click", function (e) {
        showEstimateBox.style.display = "none";
        estimateBtn.style.pointerEvents = "all";
    });
    sumbitEstimate.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
        var token, myHeaders, result, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(estimate_detail_value.value === "" || priceValue.value === "")) return [3 /*break*/, 1];
                    alert("입력사항을 기제해주시길 바랍니다");
                    return [2 /*return*/];
                case 1:
                    token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                    myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    myHeaders.append("CSRF-Token", token);
                    return [4 /*yield*/, fetch("http://localhost:3000/provide/submit_estimate", {
                            method: "post",
                            credentials: "same-origin",
                            headers: myHeaders,
                            body: JSON.stringify({
                                sympton_id: document.location.search.substring(1, document.location.search.length),
                                content: estimate_detail_value.value,
                                priceValue: priceValue.value,
                                user_id: userId.value,
                            }),
                        })];
                case 2:
                    result = _a.sent();
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 6, , 7]);
                    if (!(result.status === 200 || 201)) return [3 /*break*/, 5];
                    return [4 /*yield*/, result.json()];
                case 4:
                    response = _a.sent();
                    if (response.state) {
                        showEstimateBox.style.display = "none";
                        alert("견적제출이 완료되었습니다.");
                        submitForm.reset();
                        window.location.href = "/provide/sympton_estimate?" + response.url;
                    }
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
    if (deleteEstimateBtn !== null) {
        deleteEstimateBtn.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var token, myHeaders, result, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("CSRF-Token", token);
                        return [4 /*yield*/, fetch("http://localhost:3000/provide/delete_submit", {
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ symptonId: document.location.search.substring(1, document.location.search.length) }),
                            })];
                    case 1:
                        result = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        alert("취소가 완료되었습다.");
                        window.location.href = "/provide/sympton_estimate?" + response.url;
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    }
}
exports.default = p_showBeforeEsimate;
//# sourceMappingURL=p_showBeforeEstimate.js.map

/***/ }),

/***/ "./dist/public/p_showGotEstimate.js":
/*!******************************************!*\
  !*** ./dist/public/p_showGotEstimate.js ***!
  \******************************************/
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
function showGotEstimate() {
    function getData() {
        return __awaiter(this, void 0, void 0, function () {
            var token, myHeaders, result, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("CSRF-Token", token);
                        return [4 /*yield*/, fetch("http://localhost:3000/api/find_submit", {
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                            })];
                    case 1:
                        result = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        if (response.state === false)
                            return [2 /*return*/, alert("견적이 삭제되었거나, 존재하지 않습니다.")];
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
}
exports.default = showGotEstimate;
//# sourceMappingURL=p_showGotEstimate.js.map

/***/ }),

/***/ "./dist/public/provide.js":
/*!********************************!*\
  !*** ./dist/public/provide.js ***!
  \********************************/
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

/***/ }),

/***/ "./dist/public/reset.js":
/*!******************************!*\
  !*** ./dist/public/reset.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    var pwd_reg = /^.*(?=^.{8,20}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    var pwd1 = document.querySelector("#rib-pwd1");
    var pwd2 = document.querySelector("#rib-pwd2");
    var resetState = document.querySelector(".reset-state");
    var resetBtn = document.querySelector(".reset-btn");
    var resetForm = document.querySelector("#reset-form");
    $("#rib-pwd1").on("blur", function () {
        if (pwd_reg.test(pwd1.value)) {
            resetState.textContent = "비밀번호가 유효합니다.";
        }
        else {
            resetState.textContent = "비밀번호가 유효하지 않습니다.";
        }
    });
    pwd2.addEventListener("blur", function () {
        if (pwd_reg.test(pwd1.value) && pwd1.value === pwd2.value) {
            resetState.textContent = "비밀번호가 일치합니다.";
        }
        else if (pwd_reg.test(pwd1.value) && pwd1.value !== pwd2.value) {
            resetState.textContent = "비밀번호가 일치하지 않습니다.";
        }
        else if (!pwd_reg.test(pwd1.value) && pwd1.value === pwd2.value) {
            resetState.textContent = "비밀번호가 유효하지 않습니다.";
        }
        else if (!pwd_reg.test(pwd1.value) && pwd1.value !== pwd2.value) {
            resetState.textContent = "비밀번호가 유효하지 않습니다.";
        }
    });
    resetBtn.addEventListener("click", function (e) {
        if (pwd_reg.test(pwd1.value) && pwd1.value === pwd2.value) {
            resetForm.submit();
        }
        else {
            alert("변경할 비밀번호가 일치하지 않거나 유효하지 않습니다. 다시한번 확인해줴요.");
        }
    });
}
exports.default = default_1;
//그냥 위에서 리턴값?모르겠다
//# sourceMappingURL=reset.js.map

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map