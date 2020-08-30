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