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
register_1.default();
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

Object.defineProperty(exports, "__esModule", { value: true });
function register() {
    var registerEmail = document.querySelector(".register-email");
    var pwd_reg = "/^.*(?=^.{8,15}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/";
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
            $(".register-common, .register-provide")
                .stop()
                .animate({ bottom: "0px" }, 500);
        }
    });
    $(".cb-pwd").on("propertychange change keyup paste input", function () { });
    window.verify = function () {
        alert(2);
        return false;
    };
}
exports.default = register;
// let a = 1;
// document.querySelector(".common_form").addEventListener("submit", (e) => {
//   if (a === 2) {
//     console.log(2);
//     e.preventDefault();
//   }
// });
// let b = 1;
// const a = new Promise((resolve, reject) => {
//   if (b === 1) {
//     resolve("완ㅇ");
//   } else {
//     reject("시실패");
//   }
// });
// a.then((resut) => {
//   console.log(resut);
// });
// async function save() {
//   let user = await console.log(2);
// }
// save();
//# sourceMappingURL=register.js.map

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map