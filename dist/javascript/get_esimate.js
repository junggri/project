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
var fetchFunction_1 = __importDefault(require("./fetchFunction"));
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
        //delete add-fetch-btn-img
        if (data.length === 0) {
            var imgBox_1 = document.querySelector(".si-img-itemBox");
            while (imgBox_1.hasChildNodes) {
                if (imgBox_1.firstChild === null)
                    break;
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
            if (imgBox.firstChild === null)
                break;
            imgBox.removeChild(imgBox.firstChild);
        }
        commonMakeImg(data);
    }
    function commonMakeImg(data) {
        var addImgBox = document.createElement("div");
        for (var i = 0; i < data.img.length; i++) {
            var imgItem = document.createElement("div");
            var cancelIcon = document.createElement("div");
            cancelIcon.classList.add("img-box-cancel");
            imgItem.classList.add("img-item");
            imgItem.style.backgroundImage = "url(\"/" + data.userdata.user_objectId + "/" + data.img[i] + "\")";
            imgItem.dataset.img = data.img[i];
            imgItem.appendChild(cancelIcon);
            imgBox.insertBefore(imgItem, imgBox.firstChild);
            cancelIcon.addEventListener("click", function (e) {
                delete_img_session(e);
            });
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
    function delete_img_session(e) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchObj, result, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetchFunction_1.default("post", "same-origin", JSON.stringify({ data: e.target.parentNode.dataset.img }))];
                    case 1:
                        fetchObj = _a.sent();
                        return [4 /*yield*/, fetch("http://localhost:3000/web/delete/session/img", fetchObj)];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 200 || 201)) return [3 /*break*/, 4];
                        return [4 /*yield*/, result.json()];
                    case 3:
                        response = _a.sent();
                        if (response.length !== 0)
                            imgBox.removeChild(e.target.parentNode);
                        lengthOfImg(response);
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
    function fetchImage(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, i, result, response, err, error_2;
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
                        url === "http://localhost:3000/web/add/session/img" ? makeSymptonImg(response) : removeAndMakeNewImage(response);
                        return [3 /*break*/, 5];
                    case 4:
                        err = new Error("fetch 실패(사진등록)");
                        err.name = "FAIL_SAVE_IMG_INSESSION";
                        throw err;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _a.sent();
                        console.error(1, error_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    window.onpageshow = function (event) {
        var _this = this;
        if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
            //페이지가 백버튼으로 들어왔을때 실행되는 부분
        }
        else {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var result, response, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            return [4 /*yield*/, fetch("http://localhost:3000/web/users/session")];
                        case 1:
                            result = _a.sent();
                            if (!(result.status === 200 || 201)) return [3 /*break*/, 3];
                            return [4 /*yield*/, result.json()];
                        case 2:
                            response = _a.sent();
                            if (response.state === false)
                                return [2 /*return*/];
                            makeSymptonImg(response);
                            return [3 /*break*/, 4];
                        case 3: throw new Error("reload fetch failed");
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            error_3 = _a.sent();
                            console.error(error_3);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); })();
        }
    };
    window.add_fileUpload = function (e) {
        if ($(".img-item").length + e.target.files.length > 10 || e.target.files.length > 10)
            return alert("최대 10장까지 등록가능합니다.");
        fetchImage("http://localhost:3000/web/add/session/img/more", e.target.files);
    };
    window.previous_fileUpload = function (e) {
        if (e.target.files.length > 10)
            return alert("최대 10장까지 등록가능합니다.");
        fetchImage("http://localhost:3000/web/add/session/img", e.target.files);
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