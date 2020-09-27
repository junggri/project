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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/javascript/address.js":
/*!************************************!*\
  !*** ./dist/javascript/address.js ***!
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
exports.getAddress = void 0;
var width = 500;
var height = 500;
var daum = window["daum"];
exports.getAddress = function (add, lat, lon, target) {
    new daum.Postcode({
        width: width,
        height: height,
        oncomplete: function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    add.value = data.address;
                    Promise.resolve(data)
                        .then(function () {
                        var address = data.address;
                        return new Promise(function (resolve, reject) {
                            var geocoder = new daum.maps.services.Geocoder();
                            geocoder.addressSearch(address, function (result, status) {
                                var _a;
                                if (status === daum.maps.services.Status.OK) {
                                    var x = (_a = result[0], _a.x), y = _a.y;
                                    resolve({ lat: y, lon: x });
                                }
                                else {
                                    reject();
                                }
                            });
                        });
                    })
                        .then(function (result) {
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
//# sourceMappingURL=address.js.map

/***/ }),

/***/ "./dist/javascript/estimate.js":
/*!*************************************!*\
  !*** ./dist/javascript/estimate.js ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
function default_1() {
    var estimate_container = document.querySelector(".estimate-pre-result-itembox");
    var estimate_list = document.querySelector(".estimate-pre-result-item");
    var estimate_price = document.querySelector(".estimate-pre-price");
    var estimate_num = document.querySelector(".estimate-pre-num");
    var estimateForm = document.querySelector(".estimateForm");
    var estimateBtn = document.querySelector(".estimate-btn");
    var data = [];
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
        estimate_price.textContent = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "\uC6D0";
        estimate_num.textContent = estimate_item.length + "\uAC1C \uC120\uD0DD";
        estimate_container.scrollTop = estimate_container.scrollHeight;
    };
    function isLogined(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchObj, result, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify(data))];
                    case 1:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch(url, fetchObj)];
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
                                location.href = "/web/login";
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
    estimateBtn.addEventListener("click", function (e) {
        try {
            if (estimate_item === undefined || estimate_item.length === 0) {
                return isLogined("http://localhost:3000/web/user/check/login", { code: data, price: price });
            }
            else {
                for (var i = 0; i < estimate_item.length; i++) {
                    data.push(estimate_item[i].dataset.code);
                }
                return isLogined("http://localhost:3000/web/pre_estimate", { code: data, price: price });
            }
        }
        catch (error) {
            console.error(error);
        }
    });
    //input submit으로 바꾸고 실핼하기
}
exports.default = default_1;
//그냥 위에서 리턴값?모르겠다
//# sourceMappingURL=estimate.js.map

/***/ }),

/***/ "./dist/javascript/fetchFunction.js":
/*!******************************************!*\
  !*** ./dist/javascript/fetchFunction.js ***!
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
function FetchFunction(method, credentials, body) {
    return __awaiter(this, void 0, void 0, function () {
        function FetchSet() {
            var token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("CSRF-Token", token);
            return myHeaders;
        }
        var Fetch, fetchObj;
        return __generator(this, function (_a) {
            Fetch = /** @class */ (function () {
                function Fetch(method, credentials, body) {
                    this.method = method;
                    this.credentials = credentials;
                    this.headers = FetchSet();
                    this.body = body;
                }
                return Fetch;
            }());
            fetchObj = new Fetch(method, credentials, body);
            return [2 /*return*/, fetchObj];
        });
    });
}
exports.default = FetchFunction;
//# sourceMappingURL=fetchFunction.js.map

/***/ }),

/***/ "./dist/javascript/findUserData.js":
/*!*****************************************!*\
  !*** ./dist/javascript/findUserData.js ***!
  \*****************************************/
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
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
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
    window.location.pathname === "/v1/find_user_email" ? findPwdSlo.classList.add("fs-user-opacity") : findEmailSlo.classList.add("fs-user-opacity");
    function findUserData(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchObj, response, result, err, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ email: data }))];
                    case 1:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch(url, fetchObj)];
                    case 2:
                        response = _a.sent();
                        if (!(response.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, response.json()];
                    case 3:
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
                        return [3 /*break*/, 5];
                    case 4:
                        err = new Error("NET_ERROR");
                        err.name = "NET_ERROR";
                        throw err;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
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
        if (window.location.pathname === "/v1/find_user_email") {
            return findUserData("http://localhost:3000/v1/check_user_email", userInputData.value);
        }
        else {
            return findUserData("http://localhost:3000/v1/check_user_and_sendEmail", userInputData.value);
        }
    });
}
exports.default = default_1;
//그냥 위에서 리턴값?모르겠다
//# sourceMappingURL=findUserData.js.map

/***/ }),

/***/ "./dist/javascript/get_esimate.js":
/*!****************************************!*\
  !*** ./dist/javascript/get_esimate.js ***!
  \****************************************/
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
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
function get_estimate() {
    var width = 500;
    var height = 500;
    var daum = window["daum"];
    var sigungu = document.querySelector("#sigungu");
    var bname = document.querySelector("#bname");
    var bname1 = document.querySelector("#bname1");
    var postcode = document.getElementById("postcode");
    var sigunguCode = document.querySelector("#sigunguCode");
    var roadAddress = document.getElementById("roadAddress");
    var detailAddress = document.querySelector("#detailAddress");
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
    var submitForm = document.querySelector(".register_sympton_form");
    var symptonDetailBox = document.querySelector("#sympton-detail");
    var timeBox = document.querySelector("#st-time");
    var minuteBox = document.querySelector("#st-minute");
    var userWantContent = document.querySelector("#userwant-box");
    var imgBox = document.querySelector(".si-img-itemBox");
    var lengthFlag = true;
    window.onpageshow = function (event) {
        var _this = this;
        if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
            //페이지가 백버튼으로 들어왔을때 실행되는 부분
        }
        else {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var fetchObj, result, response, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", null)];
                        case 1:
                            fetchObj = _a.sent();
                            return [4 /*yield*/, fetch("http://localhost:3000/web/fetch_session", fetchObj)];
                        case 2:
                            result = _a.sent();
                            if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                            return [4 /*yield*/, result.json()];
                        case 3:
                            response = _a.sent();
                            //if session.img isnt defineded
                            if (response.state === false)
                                return [2 /*return*/];
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
            }); })();
        }
    };
    function lengthOfImg(data) {
        var imgLength = document.querySelector(".si-img-length");
        imgLength.textContent = data.length + " / 10\uAC1C \uB4F1\uB85D";
        if (data.length === 0) {
            //delete add-fetch-btn-img
            var imgBox_1 = document.querySelector(".si-img-itemBox");
            while (imgBox_1.hasChildNodes) {
                if (imgBox_1.firstChild === null) {
                    break;
                }
                imgBox_1.removeChild(imgBox_1.firstChild);
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
    function makeSymptonImg(data) {
        if (data.img === undefined)
            return;
        imgBtn.style.display = "none";
        commonMakeImg(data);
    }
    function removeAndMakeNewImage(data) {
        var imgBox = document.querySelector(".si-img-itemBox");
        //remove img-item which is already made item
        while (imgBox.hasChildNodes) {
            if (imgBox.firstChild === null) {
                break;
            }
            imgBox.removeChild(imgBox.firstChild);
        }
        commonMakeImg(data);
    }
    function commonMakeImg(data) {
        return __awaiter(this, void 0, void 0, function () {
            var addImgBox, i, imgItem, cancelIcon;
            var _this = this;
            return __generator(this, function (_a) {
                addImgBox = document.createElement("div");
                for (i = 0; i < data.img.length; i++) {
                    imgItem = document.createElement("div");
                    cancelIcon = document.createElement("div");
                    cancelIcon.classList.add("img-box-cancel");
                    imgItem.classList.add("img-item");
                    imgItem.style.backgroundImage = "url(\"/" + data.email.user_objectId + "/" + data.img[i] + "\")";
                    imgItem.dataset.img = data.img[i];
                    imgItem.appendChild(cancelIcon);
                    imgBox.insertBefore(imgItem, imgBox.firstChild);
                    cancelIcon.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, delete_img_session(e)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                addImgBox.classList.add("img-item-addBox");
                addImgBox.addEventListener("click", function (e) {
                    if (!lengthFlag)
                        return alert("등록가능한 사진을 초과하셨습니다.");
                    addFileBtn.click();
                });
                imgBox.appendChild(addImgBox);
                lengthOfImg(data.img);
                return [2 /*return*/];
            });
        });
    }
    function delete_img_session(e) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchObj, result, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ data: e.target.parentNode.dataset.img }))];
                    case 1:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch("http://localhost:3000/web/delete_img", fetchObj)];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        lengthOfImg(response);
                        if (response.length !== 0)
                            return [2 /*return*/, imgBox.removeChild(e.target.parentNode)];
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    function fetchImage(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, i, result, response, err, error_3;
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
                                credentials: "same-origin",
                                body: formData,
                            })];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        url === "http://localhost:3000/web/fetch_upload_image" ? makeSymptonImg(response) : removeAndMakeNewImage(response);
                        return [3 /*break*/, 5];
                    case 4:
                        err = new Error("fetch 실패(사진등록)");
                        err.name = "FAIL_SAVE_IMG_INSESSION";
                        throw err;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_3 = _a.sent();
                        console.error(1, error_3);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    window.add_fileUpload = function (e) {
        if ($(".img-item").length + e.target.files.length > 10 || e.target.files.length > 10)
            return alert("최대 10장까지 등록가능합니다.");
        fetchImage("http://localhost:3000/web/fetch_add_upload_image", e.target.files);
    };
    window.previous_fileUpload = function (e) {
        if (e.target.files.length > 10)
            return alert("최대 10장까지 등록가능합니다.");
        fetchImage("http://localhost:3000/web/fetch_upload_image", e.target.files);
    };
    window.formAndBlockBack = function () {
        var check = confirm("간편견적을 받아보시겠습니까?");
        if (check) {
            if (symptonDetailBox.value === "" ||
                timeBox.value === "" ||
                minuteBox.value === "" ||
                userWantContent.value === "" ||
                roadAddress.value === "" ||
                postcode.value === "" ||
                detailAddress.value === "") {
                return alert("필수사항을 입력해주시길 바랍니다.");
            }
            else {
                submitForm.submit();
                submitForm.reset();
            }
        }
        else {
            return false;
        }
    };
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

/***/ "./dist/javascript/index.js":
/*!**********************************!*\
  !*** ./dist/javascript/index.js ***!
  \**********************************/
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
var register_1 = __importDefault(__webpack_require__(/*! ./register */ "./dist/javascript/register.js"));
var login_1 = __importDefault(__webpack_require__(/*! ./login */ "./dist/javascript/login.js"));
var estimate_1 = __importDefault(__webpack_require__(/*! ./estimate */ "./dist/javascript/estimate.js"));
var get_esimate_1 = __importDefault(__webpack_require__(/*! ./get_esimate */ "./dist/javascript/get_esimate.js"));
var mypqge_1 = __importDefault(__webpack_require__(/*! ./mypqge */ "./dist/javascript/mypqge.js"));
var modified_estimate_1 = __importDefault(__webpack_require__(/*! ./modified_estimate */ "./dist/javascript/modified_estimate.js"));
var findUserData_1 = __importDefault(__webpack_require__(/*! ./findUserData */ "./dist/javascript/findUserData.js"));
var reset_1 = __importDefault(__webpack_require__(/*! ./reset */ "./dist/javascript/reset.js"));
var oauth_1 = __importDefault(__webpack_require__(/*! ./oauth */ "./dist/javascript/oauth.js"));
var provide_1 = __importDefault(__webpack_require__(/*! ./provide */ "./dist/javascript/provide.js"));
var mypageEstimate_1 = __importDefault(__webpack_require__(/*! ./mypageEstimate */ "./dist/javascript/mypageEstimate.js"));
var mypageShowEstimate_1 = __importDefault(__webpack_require__(/*! ./mypageShowEstimate */ "./dist/javascript/mypageShowEstimate.js"));
var p_index_1 = __importDefault(__webpack_require__(/*! ./p_index */ "./dist/javascript/p_index.js"));
var p_findAllRegister_1 = __importDefault(__webpack_require__(/*! ./p_findAllRegister */ "./dist/javascript/p_findAllRegister.js"));
var p_showBeforeEstimate_1 = __importDefault(__webpack_require__(/*! ./p_showBeforeEstimate */ "./dist/javascript/p_showBeforeEstimate.js"));
var p_showGotEstimate_1 = __importDefault(__webpack_require__(/*! ./p_showGotEstimate */ "./dist/javascript/p_showGotEstimate.js"));
var p_mypage_1 = __importDefault(__webpack_require__(/*! ./p_mypage */ "./dist/javascript/p_mypage.js"));
var p_showsubmit_1 = __importDefault(__webpack_require__(/*! ./p_showsubmit */ "./dist/javascript/p_showsubmit.js"));
var LoginmyBtn = document.querySelector(".nb-right_isLogined");
var mainName = document.querySelector(".nb-left-name");
var path = window.location.pathname;
var navigationBox = document.querySelector(".nb-navigation");
var logout = document.querySelector(".nb-profile-logout");
var logoutForm = document.querySelector(".logout-form");
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
if (path === "/provide/showsubmit") {
    p_showsubmit_1.default();
}
if (path.split("/")[3] === "estimateDetail") {
    mypageEstimate_1.default();
}
if (path === "/provide/mypage") {
    p_mypage_1.default();
}
if (path === "/web/oauth_register") {
    oauth_1.default();
    register_1.default();
}
if (path.split("/")[2] === "reset") {
    reset_1.default();
}
if (path === "/v1/find_user_email") {
    findUserData_1.default();
}
if (path === "/v1/find_user_pwd") {
    findUserData_1.default();
}
if (path === "/web/login") {
    login_1.default();
}
if (path === "/web/register_previous") {
    register_1.default();
}
if (path === "/web/register/common") {
    register_1.default();
}
if (path === "/web/register/provide") {
    provide_1.default();
}
if (path === "/web/estimate") {
    estimate_1.default();
}
if (path === "/web/mypage") {
    mypqge_1.default();
}
if (path === "/web/mypage/showestimate") {
    mypageShowEstimate_1.default();
}
if (path.split("/")[2] === "modified_estimate") {
    modified_estimate_1.default();
}
if (path === "/web/get_estimate") {
    get_esimate_1.default();
}
if (path === "/web/index") {
    index();
}
if (LoginmyBtn !== null) {
    LoginmyBtn.addEventListener("click", function (e) {
        navigationBox.style.display = navigationBox.style.display === "" ? "block" : "";
    });
}
if (mainName !== null) {
    mainName.addEventListener("click", function () {
        if (path.split("/")[1] === "web") {
            location.href = "/web/index";
        }
        else if (path.split("/")[1] === "provide") {
            location.href = "/provide/index";
        }
    });
}
if (logout !== null) {
    logout.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (location.pathname.split("/")[1] === "web") {
                if (confirm("로그아웃 하시겠습니까?")) {
                    return [2 /*return*/, logoutForm.submit()];
                }
                else {
                    return [2 /*return*/, false];
                }
            }
            else if (location.pathname.split("/")[1] === "provide") {
                if (confirm("로그아웃 하시겠습니까?")) {
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
        location.href = "/web/estimate";
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/javascript/login.js":
/*!**********************************!*\
  !*** ./dist/javascript/login.js ***!
  \**********************************/
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
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
function login() {
    $(document).ready(function () {
        var _this = this;
        var checkBox = document.querySelector("#checkbox_id");
        var loginBoxValue = document.querySelector("#login_email");
        var pwdValue = document.querySelector("#login_pwd");
        var userInputEmail = getCookie("uie");
        var loginBtn = document.querySelector(".login-btn");
        var state = document.querySelector(".condition-login");
        loginBoxValue.focus();
        function loginProcess(data) {
            return __awaiter(this, void 0, void 0, function () {
                var fetchObj, result, response, err, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify(data))];
                        case 1:
                            fetchObj = _a.sent();
                            return [4 /*yield*/, fetch("http://localhost:3000/web/login_process", fetchObj)];
                        case 2:
                            result = _a.sent();
                            if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                            return [4 /*yield*/, result.json()];
                        case 3:
                            response = _a.sent();
                            response.state === true ? (window.location.href = response.url) : (state.textContent = response.msg);
                            return [3 /*break*/, 5];
                        case 4:
                            err = new Error("NET_ERROR");
                            err.name = "NETWORK_ERROR";
                            throw err;
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
        loginBtn.addEventListener("click", function () {
            var data = { email: loginBoxValue.value, pwd: pwdValue.value };
            loginProcess(data);
        });
        function getEmailFromCookie(email, state) {
            return __awaiter(this, void 0, void 0, function () {
                var fetchObj, response, result, err, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (email === "")
                                return [2 /*return*/];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 7, , 8]);
                            return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ email: email, state: state }))];
                        case 2:
                            fetchObj = _a.sent();
                            return [4 /*yield*/, fetch("http://localhost:3000/v1/setUserEmailCookie", fetchObj)];
                        case 3:
                            response = _a.sent();
                            if (!(response.status === 200 || 201)) return [3 /*break*/, 5];
                            return [4 /*yield*/, response.json()];
                        case 4:
                            result = _a.sent();
                            return [2 /*return*/, result];
                        case 5:
                            err = new Error("NET_ERROR");
                            err.name = "NETWORK_ERROR";
                            throw err;
                        case 6: return [3 /*break*/, 8];
                        case 7:
                            error_2 = _a.sent();
                            console.error(error_2);
                            return [3 /*break*/, 8];
                        case 8: return [2 /*return*/];
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
                        setCookie("uie", result.email, 7);
                    });
                }
                else {
                    deleteCookie("uie");
                }
                return [2 /*return*/];
            });
        }); });
        loginBoxValue.addEventListener("blur", function () {
            if (loginBoxValue.value === "")
                return;
            if (checkBox.checked) {
                getEmailFromCookie(loginBoxValue.value, "set").then(function (result) {
                    setCookie("uie", result.email, 7);
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

/***/ "./dist/javascript/modified_estimate.js":
/*!**********************************************!*\
  !*** ./dist/javascript/modified_estimate.js ***!
  \**********************************************/
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
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
function mypage() {
    var _this = this;
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
    var imgBox = document.querySelector(".si-img-itemBox");
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
            location.href = "/web/mypage";
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
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var fetchObj, result, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ url: window.location.pathname.split("/")[3] }))];
                case 1:
                    fetchObj = _a.sent();
                    return [4 /*yield*/, fetch("http://localhost:3000/web/modified_get_data", fetchObj)];
                case 2:
                    result = _a.sent();
                    if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                    if (result.state === false)
                        return [2 /*return*/, alert("자료가 존재하지 않습니다.")];
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
    }); })();
    function lengthOfImg(data) {
        var imgLength = document.querySelector(".si-img-length");
        imgLength.textContent = data.length + " / 10\uAC1C \uB4F1\uB85D";
        if (data.length === 0) {
            var imgBox_1 = document.querySelector(".si-img-itemBox");
            while (imgBox_1.hasChildNodes) {
                if (imgBox_1.firstChild === null) {
                    break;
                }
                imgBox_1.removeChild(imgBox_1.firstChild);
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
        var _this = this;
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
            cancelIcon.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetchDeleteImg(e)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        addImgBox.classList.add("img-item-addBox");
        addImgBox.addEventListener("click", function (e) {
            if (!lengthFlag)
                return alert("등록가능한 사진을 초과하셨습니다.");
            addFileBtn.click();
        });
        imgBox.appendChild(addImgBox);
        lengthOfImg(data.img);
    }
    function makeSymptonImg(data) {
        if (data.img === undefined)
            return;
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
    function fetchDeleteImg(e) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchObj, result, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ data: e.target.parentNode.dataset.img }))];
                    case 1:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch("http://localhost:3000/web/modified_delete_session_img", fetchObj)];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        lengthOfImg(response);
                        if (response.length !== 0)
                            imgBox.removeChild(e.target.parentNode);
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
                        url === "http://localhost:3000/web/modified_upload_image" ? makeSymptonImg(response) : removeAndMakeNewImage(response);
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
        if ($(".img-item").length + e.target.files.length > 10 || e.target.files.length > 10)
            return alert("최대 10장까지 등록가능합니다.");
        fetchImage("http://localhost:3000/web/modified_add_upload_image", e.target.files);
    };
    window.previous_fileUpload = function (e) {
        if (e.target.files.length > 10)
            return alert("최대 10장까지 등록가능합니다.");
        fetchImage("http://localhost:3000/web/modified_upload_image", e.target.files);
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

/***/ "./dist/javascript/mypageEstimate.js":
/*!*******************************************!*\
  !*** ./dist/javascript/mypageEstimate.js ***!
  \*******************************************/
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
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
function mypageEstimate() {
    var _this = this;
    var acceptBtn = document.querySelectorAll(".si-accept-btn");
    var previousAccept = document.querySelector(".previous-accept-box");
    var confirmBtn = document.querySelector(".pab-confirmBtn");
    var cancelBtn = document.querySelector(".pab-cancelBtn");
    var hiddenInput = document.querySelector(".pab-hidden");
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var length, fetchObj, result, response, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    length = window.location.href.split("/").length;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ register_id: window.location.href.split("/")[length - 1] }))];
                case 2:
                    fetchObj = _a.sent();
                    return [4 /*yield*/, fetch("http://localhost:3000/web/check_reigister_state", fetchObj)];
                case 3:
                    result = _a.sent();
                    if (!(result.status === 200 || 201)) return [3 /*break*/, 5];
                    return [4 /*yield*/, result.json()];
                case 4:
                    response = _a.sent();
                    if (!response.state) {
                        alert("잘못된 접근입니다");
                        return [2 /*return*/, (window.location.href = "/api/mypage/showestimate")];
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error = new Error("오류");
                    error.name = "error";
                    throw error;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); })();
    function addEventOnAcceptBtn(acceptBtn) {
        var _this = this;
        var _loop_1 = function (i) {
            acceptBtn[i].addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                var fetchObj, result, response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ submit_id: acceptBtn[i].parentNode.parentNode.dataset.submitid }))];
                        case 1:
                            fetchObj = _a.sent();
                            return [4 /*yield*/, fetch("http://localhost:3000/web/find_submit", fetchObj)];
                        case 2:
                            result = _a.sent();
                            if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                            return [4 /*yield*/, result.json()];
                        case 3:
                            response = _a.sent();
                            if (response.state === false) {
                                alert("견적이 삭제되었거나, 존재하지 않습니다.");
                                return [2 /*return*/, window.location.reload()];
                            }
                            hiddenInput.value = response.data._id;
                            previousAccept.style.display = "block";
                            $(".previous-accept-box").css({
                                top: ($(window).height() - $(".previous-accept-box").outerHeight()) / 2 + $(window).scrollTop() + "px",
                                left: ($(window).width() - $(".previous-accept-box").outerWidth()) / 2 + $(window).scrollLeft() + "px",
                            });
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
        };
        for (var i = 0; i < acceptBtn.length; i++) {
            _loop_1(i);
        }
    }
    addEventOnAcceptBtn(acceptBtn);
    cancelBtn.addEventListener("click", function (e) {
        previousAccept.style.display = "none";
    });
    confirmBtn.addEventListener("click", function (e) {
        var submitId = hiddenInput.value;
        acceptSubmit(submitId);
    });
    function acceptSubmit(submitId) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchObj, result, error, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ submit_id: submitId }))];
                    case 1:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch("http://localhost:3000/web/accept_estimate", fetchObj)];
                    case 2:
                        result = _a.sent();
                        if (result.status === 200 || 201) {
                            window.location.href = "/web/mypage/showestimate";
                        }
                        else {
                            error = new Error("젼적받기 실패");
                            error.name = "fail to accept";
                            throw error;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
}
exports.default = mypageEstimate;
//# sourceMappingURL=mypageEstimate.js.map

/***/ }),

/***/ "./dist/javascript/mypageShowEstimate.js":
/*!***********************************************!*\
  !*** ./dist/javascript/mypageShowEstimate.js ***!
  \***********************************************/
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
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
function showEstimate() {
    var _this = this;
    var modifiedBtn = document.querySelectorAll(".sc-item-modifiedBtn");
    var deleteBtn = document.querySelectorAll(".sc-item-cancel");
    var showBtn = document.querySelectorAll(".sc-item-showBtn");
    var showAccept = document.querySelectorAll(".show-accept-data-btn");
    var showStatebox = document.querySelector(".show-providerAndsympton-dataBox");
    var priceValue = document.querySelector(".spd-price-value");
    var contentValue = document.querySelector(".submit-data-content");
    var statePayment = document.querySelector(".spd-payment-state");
    var checkBtn = document.querySelector(".spd-footer-btn");
    var _loop_1 = function (i) {
        modifiedBtn[i].addEventListener("click", function () {
            var userNode = modifiedBtn[i].parentNode.parentNode.parentNode;
            var id = userNode.dataset.id;
            location.href = "/web/modified_estimate/" + id;
        });
    };
    for (var i = 0; i < modifiedBtn.length; i++) {
        _loop_1(i);
    }
    var _loop_2 = function (i) {
        deleteBtn[i].addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var deleteConfirm, target, fetchObj, result, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deleteConfirm = confirm("정말로 등록을 삭제하시겠습니까?");
                        target = deleteBtn[i].parentNode.parentNode.parentNode;
                        if (!deleteConfirm) return [3 /*break*/, 7];
                        target.parentNode.removeChild(target);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetchFunction_1.default("delete", "same-origin", JSON.stringify({ id: target.dataset.id }))];
                    case 2:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch("http://localhost:3000/web/delete_register_sympton", fetchObj)];
                    case 3:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 5];
                        return [4 /*yield*/, result.json()];
                    case 4:
                        response = _a.sent();
                        console.log(response);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); });
    };
    for (var i = 0; i < deleteBtn.length; i++) {
        _loop_2(i);
    }
    var _loop_3 = function (i) {
        showBtn[i].addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var target, fetchObj, result, response, error, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        target = showBtn[i].parentNode.parentNode;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ sympton_id: target.dataset.id }))];
                    case 2:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch("http://localhost:3000/web/find_provider", fetchObj)];
                    case 3:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 5];
                        return [4 /*yield*/, result.json()];
                    case 4:
                        response = _a.sent();
                        if (response.state === false)
                            return [2 /*return*/, alert("받은 견적이 존재하지 않습니다.")];
                        if (response.state === "accept") {
                            //혹시나 ui가 렌더링 되지 않았을 경우를 위
                            alert("이미 진행중인 견적입니다.");
                            window.location.reload();
                            return [2 /*return*/];
                        }
                        window.location.href = "estimateDetail/" + target.dataset.id;
                        return [3 /*break*/, 6];
                    case 5:
                        error = new Error("에러발생");
                        error.name = "error";
                        throw error;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        }); });
    };
    for (var i = 0; i < showBtn.length; i++) {
        _loop_3(i);
    }
    function addEventOnShowAcceptBtn(showAccept) {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_4, i;
            var _this = this;
            return __generator(this, function (_a) {
                _loop_4 = function (i) {
                    showAccept[i].addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                        var target, fetchObj, result, response, payment, error, error_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    target = showAccept[i].parentNode;
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 7, , 8]);
                                    return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ submit_id: target.dataset.id }))];
                                case 2:
                                    fetchObj = _a.sent();
                                    return [4 /*yield*/, fetch("http://localhost:3000/web/get_data_accepted", fetchObj)];
                                case 3:
                                    result = _a.sent();
                                    if (!(result.status === 200 || 201)) return [3 /*break*/, 5];
                                    return [4 /*yield*/, result.json()];
                                case 4:
                                    response = _a.sent();
                                    payment = void 0;
                                    response.submit.payment === false ? (payment = "결제전") : (payment = "결제 완료");
                                    showStatebox.style.display = "block";
                                    $(".show-providerAndsympton-dataBox").css({
                                        top: ($(window).height() - $(".show-providerAndsympton-dataBox").outerHeight()) / 2 + $(window).scrollTop() + "px",
                                        left: ($(window).width() - $(".show-providerAndsympton-dataBox").outerWidth()) / 2 + $(window).scrollLeft() + "px",
                                    });
                                    priceValue.textContent = response.submit.submit_price + " \uC6D0";
                                    contentValue.textContent = response.submit.content;
                                    statePayment.textContent = payment;
                                    checkBtn.addEventListener("click", function (e) {
                                        showStatebox.style.display = "none";
                                    });
                                    return [3 /*break*/, 6];
                                case 5:
                                    error = new Error("에러발생");
                                    error.name = "error";
                                    throw error;
                                case 6: return [3 /*break*/, 8];
                                case 7:
                                    error_3 = _a.sent();
                                    console.error(error_3);
                                    return [3 /*break*/, 8];
                                case 8: return [2 /*return*/];
                            }
                        });
                    }); });
                };
                for (i = 0; i < showAccept.length; i++) {
                    _loop_4(i);
                }
                return [2 /*return*/];
            });
        });
    }
    addEventOnShowAcceptBtn(showAccept);
    document.onreadystatechange = function () {
        var state = document.readyState;
        if (state == "interactive") {
        }
        else if (state == "complete") {
        }
    };
}
exports.default = showEstimate;
//# sourceMappingURL=mypageShowEstimate.js.map

/***/ }),

/***/ "./dist/javascript/mypqge.js":
/*!***********************************!*\
  !*** ./dist/javascript/mypqge.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mypage() { }
exports.default = mypage;
//# sourceMappingURL=mypqge.js.map

/***/ }),

/***/ "./dist/javascript/oauth.js":
/*!**********************************!*\
  !*** ./dist/javascript/oauth.js ***!
  \**********************************/
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

/***/ "./dist/javascript/p_findAllRegister.js":
/*!**********************************************!*\
  !*** ./dist/javascript/p_findAllRegister.js ***!
  \**********************************************/
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
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
function p_findAllRegister() {
    var _this = this;
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
                var fetchObj, result, response, state, err, err, err, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ _id: e.target.parentNode.dataset.registerid }))];
                        case 1:
                            fetchObj = _a.sent();
                            return [4 /*yield*/, fetch("http://localhost:3000/provide/before_check_getRegisterData", fetchObj)];
                        case 2:
                            result = _a.sent();
                            if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                            return [4 /*yield*/, result.json()];
                        case 3:
                            response = _a.sent();
                            state = response.state;
                            if (state === false) {
                                err = new Error("삭제된 증상입니다.");
                                err.name = "Delete_data";
                                throw err;
                            }
                            else if (state === "accept") {
                                err = new Error();
                                err.name = "진행중인 견적입니다.";
                                throw err;
                            }
                            return [2 /*return*/, (window.location.href = "/provide/sympton_estimate?" + e.target.parentNode.dataset.registerid)];
                        case 4:
                            err = new Error("NETWORK_ERROR");
                            err.name = "NET";
                            throw err;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            error_1 = _a.sent();
                            console.error(error_1, error_1.name);
                            alert(error_1);
                            return [2 /*return*/, window.location.reload()];
                        case 7: return [2 /*return*/];
                    }
                });
            }); });
        }
    }
    makeSymptonPage(symptonItems);
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
            var fetchObj, result, response, i, option, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, reset(target, text)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 7, , 8]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ data: data }))];
                    case 3:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch(url, fetchObj)];
                    case 4:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 6];
                        return [4 /*yield*/, result.json()];
                    case 5:
                        response = _a.sent();
                        for (i = 0; i < response.sido.length; i++) {
                            option = document.createElement("option");
                            option.value = response.sido[i];
                            option.textContent = response.sido[i];
                            target.appendChild(option);
                        }
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
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
}
exports.default = p_findAllRegister;
//# sourceMappingURL=p_findAllRegister.js.map

/***/ }),

/***/ "./dist/javascript/p_index.js":
/*!************************************!*\
  !*** ./dist/javascript/p_index.js ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
function p_index() {
    var _this = this;
    var checkBox = document.querySelector("#checkbox_id");
    var loginBtn = document.querySelector(".pi-loginBtn");
    var provideEmail = document.querySelector("#pi-email");
    var providePwd = document.querySelector("#pi-pwd");
    var provideState = document.querySelector(".pi-state");
    var userInputEmail = getCookie("upe");
    loginBtn.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
        var fetchObj, result, response, err, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({
                            email: provideEmail.value,
                            pwd: providePwd.value,
                        }))];
                case 1:
                    fetchObj = _a.sent();
                    return [4 /*yield*/, fetch("http://localhost:3000/provide/login_process", fetchObj)];
                case 2:
                    result = _a.sent();
                    if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                    return [4 /*yield*/, result.json()];
                case 3:
                    response = _a.sent();
                    response.state === true ? (window.location.href = response.url) : (provideState.textContent = response.msg);
                    return [3 /*break*/, 5];
                case 4:
                    console.log(result.status);
                    err = new Error("NET_ERROR");
                    err.name = "NETWORK_ERROR";
                    throw err;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
    function getEmailFromCookie(email, state) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchObj, response, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (email === "")
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ email: email, state: state }))];
                    case 2:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch("http://localhost:3000/v1/setUserEmailCookie", fetchObj)];
                    case 3:
                        response = _a.sent();
                        if (!(response.status === 200 || 201)) return [3 /*break*/, 5];
                        return [4 /*yield*/, response.json()];
                    case 4:
                        result = _a.sent();
                        return [2 /*return*/, result];
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
    getEmailFromCookie(userInputEmail, "get").then(function (result) {
        if (result === undefined)
            return;
        provideEmail.value = result.decrypt;
        checkBox.checked = true;
    });
    checkBox.addEventListener("change", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (provideEmail.value === "")
                return [2 /*return*/];
            if (checkBox.checked) {
                getEmailFromCookie(provideEmail.value, "set").then(function (result) {
                    setCookie("upe", result.email, 7);
                });
            }
            else {
                deleteCookie("upe");
            }
            return [2 /*return*/];
        });
    }); });
    provideEmail.addEventListener("blur", function () {
        if (provideEmail.value == "")
            return;
        if (checkBox.checked) {
            getEmailFromCookie(provideEmail.value, "set").then(function (result) {
                setCookie("upe", result.email, 7);
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
}
exports.default = p_index;
//# sourceMappingURL=p_index.js.map

/***/ }),

/***/ "./dist/javascript/p_mypage.js":
/*!*************************************!*\
  !*** ./dist/javascript/p_mypage.js ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
function p_mypage() {
    function getProviderData() {
        return __awaiter(this, void 0, void 0, function () {
            var fetchObj, result, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", null)];
                    case 1:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch("http://localhost:3000/provide/get_mypage_data", fetchObj)];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
}
exports.default = p_mypage;
//# sourceMappingURL=p_mypage.js.map

/***/ }),

/***/ "./dist/javascript/p_showBeforeEstimate.js":
/*!*************************************************!*\
  !*** ./dist/javascript/p_showBeforeEstimate.js ***!
  \*************************************************/
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
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
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
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var fetchObj, result, response, err, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ sympton_id: document.location.search.substring(1, document.location.search.length) }))];
                case 1:
                    fetchObj = _a.sent();
                    return [4 /*yield*/, fetch("http://localhost:3000/provide/get_registerData", fetchObj)];
                case 2:
                    result = _a.sent();
                    if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                    return [4 /*yield*/, result.json()];
                case 3:
                    response = _a.sent();
                    if (response.state === false) {
                        window.location.href = "/provide/findAllRegister";
                        return [2 /*return*/];
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
                    return [3 /*break*/, 5];
                case 4:
                    err = new Error("NET_ERROR");
                    err.name = "NETWORK_ERROR";
                    throw err;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); })();
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
        var fetchObj, result, response, state, err, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (estimate_detail_value.value === "" || priceValue.value === "")
                        return [2 /*return*/, alert("입력사항을 기제해주시길 바랍니다")];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({
                            sympton_id: document.location.search.substring(1, document.location.search.length),
                            content: estimate_detail_value.value,
                            priceValue: priceValue.value,
                            user_id: userId.value,
                        }))];
                case 2:
                    fetchObj = _a.sent();
                    return [4 /*yield*/, fetch("http://localhost:3000/provide/submit_estimate", fetchObj)];
                case 3:
                    result = _a.sent();
                    if (!(result.status === 200 || 201)) return [3 /*break*/, 5];
                    return [4 /*yield*/, result.json()];
                case 4:
                    response = _a.sent();
                    state = response.state;
                    if (state === null) {
                        alert("삭제된 증상입니다. 견적을 제시할 수 없습니다.");
                        window.location.href = "/provide/findAllRegister";
                        return [2 /*return*/];
                    }
                    else if (!state) {
                        return [2 /*return*/, alert("더이상 견적을 제시할 수 없습니다.")];
                    }
                    else {
                        showEstimateBox.style.display = "none";
                        alert("견적제출이 완료되었습니다.");
                        submitForm.reset();
                        window.location.href = "/provide/sympton_estimate?" + response.url;
                        return [2 /*return*/];
                    }
                    return [3 /*break*/, 6];
                case 5:
                    err = new Error("NET_ERROR");
                    err.name = "NETWORK_ERROR";
                    throw err;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); });
    if (deleteEstimateBtn !== null) {
        deleteEstimateBtn.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var flag, fetchObj, result, response, state, err, err, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        flag = confirm("정말로 취소하시겠습니까?");
                        if (!(flag === true)) return [3 /*break*/, 8];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ symptonId: document.location.search.substring(1, document.location.search.length) }))];
                    case 2:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch("http://localhost:3000/provide/delete_submit", fetchObj)];
                    case 3:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 5];
                        return [4 /*yield*/, result.json()];
                    case 4:
                        response = _a.sent();
                        state = response.state;
                        if (state === "accept") {
                            alert("견적이 성사되어 취소가 불가능합니다.");
                            return [2 /*return*/, (window.location.href = "/provide/findAllRegister")];
                        }
                        else if (state == null) {
                            err = new Error("error");
                            err.name = "DELETE_DATA";
                            alert("삭제된 게시글이라 자동 취소 되었습니다.");
                            return [2 /*return*/, (window.location.href = "/provide/findAllRegister")];
                        }
                        else {
                            alert("취소가 완료되었습니다.");
                            window.location.href = "/provide/sympton_estimate?" + response.url;
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        err = new Error("NET_ERROR");
                        err.name = "NETWORK_ERROR";
                        throw err;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        }); });
    }
}
exports.default = p_showBeforeEsimate;
//# sourceMappingURL=p_showBeforeEstimate.js.map

/***/ }),

/***/ "./dist/javascript/p_showGotEstimate.js":
/*!**********************************************!*\
  !*** ./dist/javascript/p_showGotEstimate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function showGotEstimate() {
    var gotItems = document.querySelectorAll(".sg-item");
    function AddEventToGotItem(Item) {
        for (var i = 0; i < Item.length; i++) {
            Item[i].addEventListener("click", function (e) {
                var target = e.target.parentNode;
                window.location.href = "/provide/sympton_estimate?" + target.dataset.submitid;
            });
        }
    }
    AddEventToGotItem(gotItems);
}
exports.default = showGotEstimate;
//# sourceMappingURL=p_showGotEstimate.js.map

/***/ }),

/***/ "./dist/javascript/p_showsubmit.js":
/*!*****************************************!*\
  !*** ./dist/javascript/p_showsubmit.js ***!
  \*****************************************/
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
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
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

/***/ }),

/***/ "./dist/javascript/provide.js":
/*!************************************!*\
  !*** ./dist/javascript/provide.js ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
var address_1 = __webpack_require__(/*! ./address */ "./dist/javascript/address.js");
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
    var add1 = document.querySelector("#provide-address1");
    var add2 = document.querySelector("#provide-address2");
    var add3 = document.querySelector("#provide-address3");
    var lat1 = document.querySelector("#lat1");
    var lat2 = document.querySelector("#lat2");
    var lat3 = document.querySelector("#lat3");
    var lon1 = document.querySelector("#lon1");
    var lon2 = document.querySelector("#lon2");
    var lon3 = document.querySelector("#lon3");
    var addressBtn = document.querySelectorAll(".provide-add-btn");
    var verifyFlag = false;
    var emailFlag = false;
    var pwdFlag = false;
    var checkNumber;
    phoneBtn.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
        var randomArray, i, randomNum, fetchObj, result, response, error_1;
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
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ user_phone_number: phoneNumber.value }))];
                case 2:
                    fetchObj = _a.sent();
                    return [4 /*yield*/, fetch("/web/verify_phone_number", fetchObj)];
                case 3:
                    result = _a.sent();
                    if (!(result.status === 200 || 201)) return [3 /*break*/, 5];
                    return [4 /*yield*/, result.json()];
                case 4:
                    response = _a.sent();
                    console.log(response.verify_num);
                    checkNumber = response.verify_num;
                    return [2 /*return*/];
                case 5: throw new Error("reload fetch failed");
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); });
    checkBtn.addEventListener("click", function (e) {
        // console.log(checkNumber, verifyNumber.value);
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
        var fetchObj, result, response, err, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!email_reg.test(inputEmail.value)) {
                        emailFlag = false;
                        return [2 /*return*/, (stateEmail.textContent = "이메일 형식이 올바르지 않습니다.")];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ email: inputEmail.value }))];
                case 2:
                    fetchObj = _a.sent();
                    return [4 /*yield*/, fetch("http://localhost:3000/web/check_provide_email", fetchObj)];
                case 3:
                    result = _a.sent();
                    if (!(result.status === 201 || 201)) return [3 /*break*/, 5];
                    return [4 /*yield*/, result.json()];
                case 4:
                    response = _a.sent();
                    if (!response.state) {
                        emailFlag = false;
                        stateEmail.textContent = "이미 사용중인이메일입니다.";
                    }
                    else {
                        emailFlag = true;
                        stateEmail.textContent = "사용가능한 이메일입니다.";
                    }
                    return [3 /*break*/, 6];
                case 5:
                    err = new Error("NET_ERROR");
                    err.name = "NET";
                    throw err;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
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
        if (emailFlag && pwdFlag && verifyFlag && add1.value !== "")
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
    for (var i = 0; i < addressBtn.length; i++) {
        addressBtn[i].addEventListener("click", function (e) {
            if (e.target.classList[1] === "addressBtn1") {
                address_1.getAddress(add1, lat1, lon1);
                $(".add-wrapper2").css("display", "block");
            }
            else if (e.target.classList[1] === "addressBtn2") {
                address_1.getAddress(add2, lat2, lon2);
                $(".add-wrapper3").css("display", "block");
            }
            else {
                address_1.getAddress(add3, lat3, lon3);
            }
        });
    }
}
exports.default = provide;
//# sourceMappingURL=provide.js.map

/***/ }),

/***/ "./dist/javascript/register.js":
/*!*************************************!*\
  !*** ./dist/javascript/register.js ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetchFunction_1 = __importDefault(__webpack_require__(/*! ./fetchFunction */ "./dist/javascript/fetchFunction.js"));
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
            var fetchObj, fetchResult, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ email: data }))];
                    case 1:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch(url, fetchObj)];
                    case 2:
                        fetchResult = _a.sent();
                        if (!(fetchResult.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, fetchResult.json()];
                    case 3:
                        result = _a.sent();
                        // console.log(result);
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
            validation_btn.style.backgroundColor = "#11d3b7";
            $(".email-validationBtn span").css("color", "white");
            $(".state-email").html(" ");
        }
        else {
            validation_btn.style.pointerEvents = "none";
            validation_btn.style.backgroundColor = "#11d3b7";
            $(".email-validationBtn span").css("color", "white");
            $(".state-email").html("이메일 형식이 올바르지 않습니다.");
        }
    });
    ///animation for chekc the email
    $(".email-validationBtn").on("click", function (e) {
        if (email.value === "")
            return;
        if (email_is_exist) {
            alert("새로운 인증번호를 발송하였습니다.");
        }
        var inputdata = $("#common_email").val();
        checkEmail("http://localhost:3000/web/check_email", inputdata);
    });
    //send send ajax request
    $(".email-checkBtn").on("click", function () {
        if ($("#validation_email").val() === validation_num) {
            $(".state-email").html("인증번호가 일치합니다.");
            validation_emailBox.style.display = "none";
            $(".email-validationBtn").css("display", "none");
            $(".changeEmail-Btn").css("display", "flex");
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
            $("#validation_email").val("");
            $(".email-validationBtn").css("display", "flex");
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

/***/ "./dist/javascript/reset.js":
/*!**********************************!*\
  !*** ./dist/javascript/reset.js ***!
  \**********************************/
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