"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function register() {
    var registerEmail = document.querySelector(".register-email");
    var pwd_reg = "/^.*(?=^.{8,15}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/";
    $(".register-email").on("click", function () {
        if (registerEmail.dataset.click === "none") {
            registerEmail.dataset.click = "click";
            $(".arrow").html("&#8743");
            $(".register-common, .register-provide")
                .stop()
                .animate({ bottom: "-90px" }, 350, function () {
                $(".register-provide").animate({ bottom: "-165px" });
            });
        }
        else if (registerEmail.dataset.click === "click") {
            registerEmail.dataset.click = "none";
            $(".arrow").html("&#8744");
            $(".register-common, .register-provide")
                .stop()
                .animate({ bottom: "0px" }, 500);
        }
    });
    $(".cb-pwd").on("propertychange change keyup paste input", function () { });
    window.verify = function () {
        alert(2);
        return false;
    };
}
exports.default = register;
// let a = 1;
// document.querySelector(".common_form").addEventListener("submit", (e) => {
//   if (a === 2) {
//     console.log(2);
//     e.preventDefault();
//   }
// });
// let b = 1;
// const a = new Promise((resolve, reject) => {
//   if (b === 1) {
//     resolve("완ㅇ");
//   } else {
//     reject("시실패");
//   }
// });
// a.then((resut) => {
//   console.log(resut);
// });
// async function save() {
//   let user = await console.log(2);
// }
// save();
//# sourceMappingURL=register.js.map