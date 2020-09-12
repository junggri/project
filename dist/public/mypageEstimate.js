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
function mypageEstimate() {
    var _this = this;
    var acceptBtn = document.querySelectorAll(".si-accept-btn");
    var previousAccept = document.querySelector(".previous-accept-box");
    var confirmBtn = document.querySelector(".pab-confirmBtn");
    var cancelBtn = document.querySelector(".pab-cancelBtn");
    var hiddenInput = document.querySelector(".pab-hidden");
    function FetchSet() {
        var token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("CSRF-Token", token);
        return myHeaders;
    }
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var length, header, result, response, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    length = window.location.href.split("/").length;
                    header = FetchSet();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/check_reigister_state", {
                            method: "post",
                            credentials: "same-origin",
                            headers: header,
                            body: JSON.stringify({ register_id: window.location.href.split("/")[length - 1] }),
                        })];
                case 2:
                    result = _a.sent();
                    if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                    return [4 /*yield*/, result.json()];
                case 3:
                    response = _a.sent();
                    if (!response.state) {
                        alert("잘못된 접근입니다");
                        return [2 /*return*/, (window.location.href = "/api/mypage/showestimate")];
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error = new Error("오류");
                    error.name = "error";
                    throw error;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); })();
    function addEventOnAcceptBtn(acceptBtn) {
        var _this = this;
        var _loop_1 = function (i) {
            acceptBtn[i].addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                var header, result, response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            header = FetchSet();
                            return [4 /*yield*/, fetch("http://localhost:3000/api/find_submit", {
                                    method: "post",
                                    credentials: "same-origin",
                                    headers: header,
                                    body: JSON.stringify({ submit_id: acceptBtn[i].parentNode.parentNode.dataset.submitid }),
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
            var header, result, error, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        header = FetchSet();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch("http://localhost:3000/api/accept_estimate", {
                                method: "post",
                                credentials: "same-origin",
                                headers: header,
                                body: JSON.stringify({ submit_id: submitId }),
                            })];
                    case 2:
                        result = _a.sent();
                        if (result.status === 200 || 201) {
                            window.location.href = "/api/mypage/showestimate";
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