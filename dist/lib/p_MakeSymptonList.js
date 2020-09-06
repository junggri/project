"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakePagination = exports.MakeAllSymptonList = void 0;
exports.MakeAllSymptonList = function (data, pageNum, divided_num) {
    var list = "";
    if (data.length === 0) {
        list = "\n      <div class=\"doNotFindSympton\">\n        <span>\uC870\uD68C\uD560 \uC790\uB8CC\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</span>\n      </div>\n    ";
        return list;
    }
    for (var i = 0; i < data.length; i++) {
        var estimateState = void 0;
        data[i].state === "accept" ? (estimateState = "<span class=\"frr-item-estimate\">\uC9C4\uD589\uC911</span>") : (estimateState = "<span class=\"frr-item-estimate\">" + data[i].provider.length + "</span>");
        var item = "\n        <div class=\"find-register-resultItem\" data-registerId=\"" + data[i]._id + "\">\n            <span>" + ((pageNum - 1) * divided_num + i + 1) + "</span>\n            <span class=\"frr-item-content\">" + data[i].sympton_detail + "</span>\n            <span class=\"frr-item-whoMake\">" + data[i].user_name + "</span>\n            <span class=\"frr-item-createdAt\">" + data[i].createdAt + "</span>\n           " + estimateState + "\n        </div>\n      ";
        list += item;
    }
    return list;
};
exports.MakePagination = function (req, res, data, divided_num) {
    var dividedPageNum;
    if (data.length === 0) {
        dividedPageNum = 1;
    }
    else {
        data.length % divided_num === 0 ? (dividedPageNum = Math.floor(data.length / divided_num)) : (dividedPageNum = Math.floor(data.length / divided_num) + 1);
    }
    var list = "\n      <div class=\"frr-pagination\">\n        <input type=\"button\" class=\"frr-pagination-previous\" value=\"\uC774\uC804\uD398\uC774\uC9C0\" onclick=\"pagination_pre()\"/>\n          <div class=\"frr-pagination-page\">\n            <input type=\"text\" class=\"frr-pagination-pageNum\" value=\"\" name=\"page\" />\n            /\n            <span class=\"frr-pagination-allPage\">" + dividedPageNum + "</span>\n          </div>\n        <input type=\"button\" class=\"frr-pagination-next\" value=\"\uB2E4\uC74C\uD398\uC774\uC9C0\" onclick=\"pagination_next()\"/>\n     </div>\n  ";
    return list;
};
//# sourceMappingURL=p_MakeSymptonList.js.map