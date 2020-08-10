"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    var pwd_reg = /^.*(?=^.{8,20}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    var pwd1 = document.querySelector("#rib-pwd1");
    var pwd2 = document.querySelector("#rib-pwd2");
    var resetState = document.querySelector(".reset-state");
    var resetBtn = document.querySelector(".reset-btn");
    var resetForm = document.querySelector("#reset-form");
    $("#rib-pwd1").on("blur", function () {
        if (pwd_reg.test(pwd1.value)) {
            resetState.textContent = "비밀번호가 유효합니다.";
        }
        else {
            resetState.textContent = "비밀번호가 유효하지 않습니다.";
        }
    });
    pwd2.addEventListener("blur", function () {
        if (pwd_reg.test(pwd1.value) && pwd1.value === pwd2.value) {
            resetState.textContent = "비밀번호가 일치합니다.";
        }
        else if (pwd_reg.test(pwd1.value) && pwd1.value !== pwd2.value) {
            resetState.textContent = "비밀번호가 일치하지 않습니다.";
        }
        else if (!pwd_reg.test(pwd1.value) && pwd1.value === pwd2.value) {
            resetState.textContent = "비밀번호가 유효하지 않습니다.";
        }
        else if (!pwd_reg.test(pwd1.value) && pwd1.value !== pwd2.value) {
            resetState.textContent = "비밀번호가 유효하지 않습니다.";
        }
    });
    resetBtn.addEventListener("click", function (e) {
        if (pwd_reg.test(pwd1.value) && pwd1.value === pwd2.value) {
            resetForm.submit();
        }
        else {
            alert("변경할 비밀번호가 일치하지 않거나 유효하지 않습니다. 다시한번 확인해줴요.");
        }
    });
}
exports.default = default_1;
//그냥 위에서 리턴값?모르겠다
//# sourceMappingURL=reset.js.map