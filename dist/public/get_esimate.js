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
    var imgBtn = document.querySelector(".add-img-icon");
    var fileBtn = document.querySelector('input[type="file"]');
    var addFileBtn = document.querySelector(".add_new_image_btn");
    var addImgBox = document.querySelector(".img-item-addBox");
    var remakeFlag = false;
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
    addImgBox.addEventListener("click", function () {
        addFileBtn.click();
    });
    function makeSymptonImg(imgArray) {
        remakeFlag = true;
        if (imgArray === undefined) {
            return;
        }
        addImgBox.style.display = "inline-block";
        imgBtn.style.display = "none";
        var imgBox = document.querySelector(".si-img-itemBox");
        for (var i = 0; i < imgArray.length; i++) {
            var imgItem = document.createElement("div");
            imgItem.classList.add("img-item");
            imgItem.style.backgroundImage = "url(\"/" + imgArray[i] + "\")";
            imgBox.insertBefore(imgItem, imgBox.firstChild);
        }
    }
    function removeAndMakeNewImage(imgArray) {
        addImgBox.style.display = "inline-block";
        var imgBox = document.querySelector(".si-img-itemBox");
        while (imgBox.hasChildNodes) {
            if (imgBox.firstChild === null) {
                break;
            }
            imgBox.removeChild(imgBox.firstChild);
        }
        for (var i = 0; i < imgArray.length; i++) {
            var imgItem = document.createElement("div");
            imgItem.classList.add("img-item");
            imgItem.style.backgroundImage = "url(\"/" + imgArray[i] + "\")";
            imgBox.insertBefore(imgItem, imgBox.firstChild);
        }
    }
    function fetchImage(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, i, result, response, error_1;
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
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    //리로드시 세션에 있는 정보로 자신을 등록하는 용도
    (function reloadGetSessionData() {
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
                        if (response.state === false)
                            return [2 /*return*/];
                        //if session.img isnt defineded runtun
                        makeSymptonImg(response);
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
    })();
    window.add_fileUpload = function (e) {
        fetchImage("http://localhost:3000/api/fetch_add_upload_image", e.target.files);
    };
    window.previous_fileUpload = function (e) {
        fetchImage("http://localhost:3000/api/fetch_upload_image", e.target.files);
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