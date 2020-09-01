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
                            acceptSubmit(submitId);
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
    function acceptSubmit(submitId) {
        return __awaiter(this, void 0, void 0, function () {
            var token, myHeaders, result, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("CSRF-Token", token);
                        return [4 /*yield*/, fetch("http://localhost:3000/api/accept_estimate", {
                                method: "post",
                                credentials: "same-origin",
                                headers: myHeaders,
                                body: JSON.stringify({ submit_id: submitId }),
                            })];
                    case 1:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 3];
                        return [4 /*yield*/, result.json()];
                    case 2:
                        response = _a.sent();
                        if (response.state) {
                            alert("견적을 수락하셨습니다.");
                            window.location.href = "/api/mypage";
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
}
exports.default = mypage;
//# sourceMappingURL=mypqge.js.map