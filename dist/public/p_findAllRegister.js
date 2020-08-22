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
        var optionSelect = document.querySelector("#sigunguSelected");
        var selected_sigunguCode, selected_sigungu;
        if (location.search !== "") {
            var decodedUrl = decodeURI(document.location.search);
            for (var i = 0; i < decodedUrl.split("&").length; i++) {
                if (decodedUrl.split("&")[i].split("=")[0] === "sigunguCode")
                    selected_sigunguCode = decodedUrl.split("&")[i].split("=")[1];
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
            if (selected_sigunguCode === "sejong")
                sigungu.disabled = true;
        }
        // (async function loadGetData() {
        //   if (location.search !== "") {
        //     let selected_sigunguCode, selected_sigungu, selected_bname;
        //     let decodedUrl = decodeURI(document.location.search);
        //     // ///////////////////////////////////////
        //     for (let i = 0; i < decodedUrl.split("&").length; i++) {
        //       if (decodedUrl.split("&")[i].split("=")[0] === "sigunguCode") selected_sigunguCode = decodedUrl.split("&")[i].split("=")[1];
        //       if (decodedUrl.split("&")[i].split("=")[0] === "sigungu") selected_sigungu = decodedUrl.split("&")[i].split("=")[1];
        //       if (decodedUrl.split("&")[i].split("=")[0] === "bname") selected_bname = decodedUrl.split("&")[i].split("=")[1];
        //     }
        //     // ///////////////////////////////////////
        //     if (selected_sigunguCode === "0") return;
        //     // ///////////////////////////////////////
        //     if (selected_sigunguCode === "sejong") {
        //       await getDataFromUrl(sigungu, selected_sigunguCode, "http://localhost:3000/provide/get_sigungu");
        //       await getDataFromUrl(bname, selected_sigunguCode, "http://localhost:3000/provide/get_sejong");
        //       if (decodedUrl.split("&")[2] !== undefined) {
        //         for (let i = 0; i < bname.options.length; i++) {
        //           if (selected_bname === bname.options[i].value) {
        //             bname.options[i].selected = true;
        //             bname.options[i].setAttribute("selected", "selected");
        //           }
        //         }
        //       }
        //       sigungu.disabled = true;
        //     } else {
        //       await getDataFromUrl(sigungu, selected_sigunguCode, "http://localhost:3000/provide/get_sigungu");
        //       await getDataFromUrl(bname, { sido: selected_sigunguCode, sigungu: selected_sigungu }, "http://localhost:3000/provide/get_bname");
        //       sigungu.disabled = false;
        //     }
        //     // ///////////////////////////////////////
        // if (decodedUrl.split("&")[1] !== undefined) {
        //   for (let i = 0; i < sigunguCode.options.length; i++) {
        //     if (selected_sigunguCode === sigunguCode.options[i].value) {
        //       sigunguCode.options[i].selected = true;
        //       sigunguCode.options[i].setAttribute("selected", "selected");
        //     }
        //   }
        // }
        //     if (decodedUrl.split("&")[2] !== undefined) {
        //       for (let i = 0; i < sigungu.options.length; i++) {
        //         if (selected_sigungu === sigungu.options[i].value) {
        //           sigungu.options[i].selected = true;
        //           sigungu.options[i].setAttribute("selected", "selected");
        //         }
        //       }
        //     }
        //     if (decodedUrl.split("&")[3] !== undefined) {
        //       for (let i = 0; i < bname.options.length; i++) {
        //         if (selected_bname === bname.options[i].value) {
        //           bname.options[i].selected = true;
        //           bname.options[i].setAttribute("selected", "selected");
        //         }
        //       }
        //     }
        //   }
        // })();
        // ///////////////////////////////////////
        // async function getDataFromUrl(target: any, data: any, url: any) {
        //   let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
        //   let myHeaders = new Headers();
        //   myHeaders.append("Content-Type", "application/json");
        //   myHeaders.append("CSRF-Token", token);
        //   try {
        //     let result = await fetch(url, {
        //       method: "post",
        //       credentials: "same-origin",
        //       headers: myHeaders,
        //       body: JSON.stringify({ data: data }),
        //     });
        //     if (result.status === 200 || 201) {
        //       let response = await result.json();
        //       for (let i = 0; i < response.sido.length; i++) {
        //         let option = document.createElement("option") as HTMLOptionElement;
        //         option.value = response.sido[i];
        //         option.textContent = response.sido[i];
        //         target.appendChild(option);
        //       }
        //     }
        //   } catch (error) {
        //     console.error(error);
        //   }
        // }
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
                var token, myHeaders, result, response, i, option, error_1;
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
                            error_1 = _a.sent();
                            console.error(error_1);
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
                    case 0: return [4 /*yield*/, reset(sigungu, "-- 선택")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, reset(bname, "-- 선택")];
                    case 2:
                        _a.sent();
                        if (sigunguCode.options[sigunguCode.selectedIndex].value === "sejong") {
                            sigungu.disabled = true;
                            commonFunction("-- 동 / 면 / 읍", bname, sigunguCode.options[sigunguCode.selectedIndex].value, "http://localhost:3000/provide/get_sejong");
                            return [2 /*return*/];
                        }
                        if (!(sigunguCode.options[sigunguCode.selectedIndex].value === "0")) return [3 /*break*/, 5];
                        return [4 /*yield*/, reset(sigungu, "-- 선택")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, reset(bname, "-- 선택")];
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
                        return [4 /*yield*/, reset(bname, "-- 선택")];
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