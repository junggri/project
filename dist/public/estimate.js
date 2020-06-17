"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var price = null;
function default_1() {
    var estimate_btn = document.querySelector(".estimate_btn");
    var estimate_box = document.querySelector(".estimate-pre-result-item");
    var estimate_price = document.querySelector(".estimate-pre-price");
    window.add_List = function (e) {
        var div = document.createElement("div");
        div.classList.add("estimate-item");
        estimate_box.appendChild(div);
        estimate_price.textContent = e.parentNode.dataset.price + "\uC6D0";
    };
}
exports.default = default_1;
//# sourceMappingURL=estimate.js.map