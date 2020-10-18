"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showGotEstimate() {
    var gotItems = document.querySelectorAll(".sg-item");
    function AddEventToGotItem(Item) {
        for (var i = 0; i < Item.length; i++) {
            Item[i].addEventListener("click", function (e) {
                var target = e.target.parentNode;
                window.location.href = "/provide/sympton?" + target.dataset.submitid;
            });
        }
    }
    AddEventToGotItem(gotItems);
}
exports.default = showGotEstimate;
//# sourceMappingURL=p_user-send.js.map