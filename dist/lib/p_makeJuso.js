"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeJuso = void 0;
var mysql_jusoLIst_1 = __importDefault(require("./mysql-jusoLIst"));
var querystring_1 = __importDefault(require("querystring"));
exports.makeJuso = function (req, res, authUI, _AllSympton, pagination) {
    if (querystring_1.default.parse(req.url).sigunguCode === "sejong") {
        mysql_jusoLIst_1.default.query("select * from " + querystring_1.default.parse(req.url).sigunguCode, function (err, data) {
            var data1 = [];
            var list2 = "";
            var item2;
            if (err)
                console.error(err);
            for (var i = 0; i < data.length; i++) {
                data1.push(data[i].법정읍면동명);
            }
            var arr = Array.from(new Set(data1)).sort();
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === querystring_1.default.parse(req.url).bname) {
                    item2 = "<option value=\"" + arr[i] + "\" selected>" + arr[i] + "</option>";
                }
                else {
                    item2 = "<option value=\"" + arr[i] + "\">" + arr[i] + "</option>";
                }
                list2 += item2;
            }
            res.render("providers/findAllRegister", { authUI: authUI, csrfToken: req.csrfToken(), list: "", list2: list2, AllSympton: _AllSympton, pagination: pagination });
        });
        return;
    }
    mysql_jusoLIst_1.default.query("select \uC2DC\uAD70\uAD6C\uBA85 from " + querystring_1.default.parse(req.url).sigunguCode, function (err, data) {
        if (err)
            console.error(err);
        var data1 = [];
        var list = "";
        var item;
        for (var i = 0; i < data.length; i++) {
            data1.push(data[i].시군구명);
        }
        var arr = Array.from(new Set(data1)).sort();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === querystring_1.default.parse(req.url).sigungu) {
                item = "<option value=\"" + arr[i] + "\" selected>" + arr[i] + "</option>";
            }
            else {
                item = "<option value=\"" + arr[i] + "\">" + arr[i] + "</option>";
            }
            list += item;
        }
        ////////////////////////////시군구찾기
        mysql_jusoLIst_1.default.query("select * from " + querystring_1.default.parse(req.url).sigunguCode + " where \uC2DC\uAD70\uAD6C\uBA85 = \"" + querystring_1.default.parse(req.url).sigungu + "\"", function (err, data) {
            var data1 = [];
            var list2 = "";
            var item2;
            if (err)
                console.error(err);
            for (var i = 0; i < data.length; i++) {
                data1.push(data[i].법정읍면동명);
            }
            var arr = Array.from(new Set(data1)).sort();
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === querystring_1.default.parse(req.url).bname) {
                    item2 = "<option value=\"" + arr[i] + "\" selected>" + arr[i] + "</option>";
                }
                else {
                    item2 = "<option value=\"" + arr[i] + "\">" + arr[i] + "</option>";
                }
                list2 += item2;
            }
            ///////////////////////////////////읍면동 찾기
            res.render("providers/findAllRegister", { authUI: authUI, csrfToken: req.csrfToken(), list: list, list2: list2, AllSympton: _AllSympton, pagination: pagination });
        });
    });
    return;
};
//# sourceMappingURL=p_makeJuso.js.map