"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeImg(imgs, decoded) {
    console.log(imgs, decoded);
    var list = "";
    if (imgs === undefined) {
        return (list = "<div class=\"add-img-icon\"></div>");
    }
    for (var i = 0; i < imgs.length; i++) {
        var item = "\n      <div class=\"img-item\" data-img=\"" + imgs[i] + " style=\"background-image: url(/" + decoded.user_objectId + "/" + imgs[i] + ".jpeg);\">\n          <div class=\"img-box-cancel\"></div>\n      </div>\n      ";
        list += item;
    }
    console.log(list);
    return list;
}
exports.default = makeImg;
//# sourceMappingURL=makeEstimateImg.js.map