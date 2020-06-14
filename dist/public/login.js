"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loginEmail = document.querySelector("#login_email");
var loginPwd = document.querySelector("#login_pwd");
var loginBtn = document.querySelector(".login-btn");
function login() {
    // async function login_previous(url, data) {
    //   let token = document
    //     .querySelector('meta[name="csrf-token"]')
    //     .getAttribute("content");
    //   try {
    //     let fetchResult = await fetch(url, {
    //       method: "post",
    //       credentials: "same-origin",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "CSRF-Token": token,
    //       },
    //       body: JSON.stringify(data),
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    loginBtn.addEventListener("click", function (e) {
        // let inputdata = { email: loginEmail.value, password: loginPwd.value };
        // login_previous("http://localhost:3000/api/login_process", inputdata);
    });
    window.login_verify = function () {
        return true;
    };
}
exports.default = login;
//# sourceMappingURL=login.js.map