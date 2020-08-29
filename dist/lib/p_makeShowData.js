"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBtn = exports.makeImg = exports.makeLocation = void 0;
function changeSigunguCode(sigunguCode) {
    var findArea;
    if (sigunguCode === "11")
        findArea = "서울시";
    if (sigunguCode === "26")
        findArea = "부산";
    if (sigunguCode === "27")
        findArea = "대구";
    if (sigunguCode === "28")
        findArea = "인천";
    if (sigunguCode === "29")
        findArea = "광주";
    if (sigunguCode === "30")
        findArea = "대전";
    if (sigunguCode === "31")
        findArea = "울산";
    if (sigunguCode === "36")
        findArea = "세종";
    if (sigunguCode === "41")
        findArea = "경기도";
    if (sigunguCode === "42")
        findArea = "강원";
    if (sigunguCode === "43")
        findArea = "충청북도";
    if (sigunguCode === "44")
        findArea = "충청남도";
    if (sigunguCode === "45")
        findArea = "전라북도";
    if (sigunguCode === "46")
        findArea = "전라남도";
    if (sigunguCode === "47")
        findArea = "경상북도";
    if (sigunguCode === "48")
        findArea = "경상남도";
    if (sigunguCode === "50")
        findArea = "제주";
    return findArea;
}
exports.makeLocation = function (data) {
    var list;
    var sido = changeSigunguCode(data.address.sigunguCode);
    if (sido === "세종") {
        if (data.address.bname1 === "") {
            list = "\n          <span>" + sido + "</span>\n          <span>" + data.address.bname + "</span>\n     ";
            return list;
        }
        else if (data.address.bname1 !== "") {
            list = "\n        <span>" + sido + "</span>\n        <span>" + data.address.bname + "</span>\n        <span>" + data.address.bname1 + "</span>\n   ";
            return list;
        }
    }
    else {
        if (data.address.bname1 === "") {
            list = "\n        <span>" + sido + "</span>\n        <span>" + data.address.sigungu + "</span>\n        <span>" + data.address.bname + "</span> \n   ";
            return list;
        }
        else if (data.address.bname1 !== "") {
            list = "\n        <span>" + sido + "</span>\n        <span>" + data.address.sigungu + "</span>\n        <span>" + data.address.bname + "</span> \n        <span>" + data.address.bname1 + "</span> \n   ";
            return list;
        }
    }
};
exports.makeImg = function (data) {
    var list = "";
    for (var i = 0; i < data.img.length; i++) {
        var item = "<img class=\"sbe-showImg-item\" src=\"/" + data.user_object_id + "/" + data.img[i] + "\">";
        list += item;
    }
    return list;
};
exports.makeBtn = function (data, symptonId) {
    var btn = "";
    if (data.submit_register.includes(symptonId)) {
        btn = "<input type=\"button\" class=\"sbe-delete-estimate-btn\" value=\"\uACAC\uC801\uC11C \uCDE8\uC18C\uD558\uAE30\" />";
    }
    else {
        btn = "<input type=\"button\" class=\"sbe-estimate-btn\" value=\"\uACAC\uC801\uC11C \uC81C\uCD9C\uD558\uAE30\" />";
    }
    return btn;
};
//# sourceMappingURL=p_makeShowData.js.map