declare global {
  interface Window {
    login_verify: any;
  }
}
let loginEmail = document.querySelector("#login_email") as HTMLInputElement;
let loginPwd = document.querySelector("#login_pwd") as HTMLInputElement;
let loginBtn = document.querySelector(".login-btn");

export default function login() {
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

  // loginBtn.addEventListener("click", (e) => {
  //   let inputdata = { email: loginEmail.value, password: loginPwd.value };
  //   // login_previous("http://localhost:3000/api/login_process", inputdata);
  // });

  window.login_verify = () => {
    return true;
  };
}
