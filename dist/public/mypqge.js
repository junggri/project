"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mypage() {
    var modifiedBtn = document.querySelectorAll(".ms-resultItem-modifieBtn");
    var deleteBtn = document.querySelectorAll(".ms-resultItem-deleteBtn");
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
    for (var i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", function () { });
    }
}
exports.default = mypage;
//# sourceMappingURL=mypqge.js.map