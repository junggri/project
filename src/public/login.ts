declare global {
  interface Window {
    // login_verify: any;
  }
}
export default function login() {
  $(document).ready(function () {
    let checkBox = document.querySelector("#checkbox_id") as HTMLInputElement;
    let loginBoxValue = document.querySelector("#login_email") as HTMLInputElement;
    let pwdValue = document.querySelector("#login_pwd") as HTMLInputElement;
    let userInputEmail: string = getCookie("uie");
    let loginBtn = document.querySelector(".login-btn") as HTMLDivElement;
    let state = document.querySelector(".condition-login") as HTMLDivElement;
    loginBoxValue.focus();

    interface Data {
      email: string;
      pwd: string;
    }

    function FetchSet() {
      let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("CSRF-Token", token);
      return myHeaders;
    }

    async function loginProcess(data: Data) {
      let header = FetchSet();
      try {
        let result = await fetch("http://localhost:3000/api/login_process", {
          method: "POST",
          credentials: "same-origin",
          headers: header,
          body: JSON.stringify(data),
        });
        if (result.status === 200 || 201) {
          let response = await result.json();
          response.state === true ? (window.location.href = response.url) : (state.textContent = response.msg);
        } else {
          console.log(result.status);
          let err = new Error("NET_ERROR");
          err.name = "NETWORK_ERROR";
          throw err;
        }
      } catch (error) {
        console.error(error);
      }
    }

    loginBtn.addEventListener("click", () => {
      let data: Data = { email: loginBoxValue.value, pwd: pwdValue.value };
      loginProcess(data);
    });

    async function getEmailFromCookie(email: string, state: string) {
      if (email === "") return;
      let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("CSRF-Token", token);
      let response = await fetch("http://localhost:3000/api/setUserEmailCookie", {
        method: "POST",
        credentials: "same-origin",
        headers: myHeaders,
        body: JSON.stringify({ email: email, state: state }),
      });
      if (response.status === 200 || 201) {
        let result = await response.json();
        return result;
      }
    }

    getEmailFromCookie(userInputEmail, "get").then((result) => {
      if (result === undefined) return;
      loginBoxValue.value = result.decrypt;
      checkBox.checked = true;
    });

    checkBox.addEventListener("change", async () => {
      if (loginBoxValue.value === "") return;
      if (checkBox.checked) {
        getEmailFromCookie(loginBoxValue.value, "set").then((result) => {
          setCookie("uie", result.email, 7);
        });
      } else {
        deleteCookie("uie");
      }
    });

    loginBoxValue.addEventListener("blur", () => {
      if (checkBox.checked) {
        getEmailFromCookie(loginBoxValue.value, "set").then((result) => {
          setCookie("uie", result.email, 7);
        });
      }
    });

    function setCookie(cookieName: string, value: string, exdays: number) {
      let exdate: Date = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      let cookieValue = value + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
      document.cookie = cookieName + "=" + cookieValue;
    }

    function deleteCookie(cookieName: string) {
      let expireDate = new Date();
      expireDate.setDate(expireDate.getDate() - 1);
      document.cookie = cookieName + "= " + "; expires=" + expireDate.toUTCString();
    }

    function getCookie(cookieName: string) {
      cookieName = cookieName + "=";
      let cookieData = document.cookie;
      let start = cookieData.indexOf(cookieName);
      let cookieValue = "";
      if (start !== -1) {
        start += cookieName.length;
        let end = cookieData.indexOf(";", start);
        if (end === -1) end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
      }
      return unescape(cookieValue);
    }
  });
}
