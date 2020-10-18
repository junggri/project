import FetchFunction from "./fetchFunction";
declare global {
  interface Window {
    // login_verify: any;
  }
}

export default function p_index() {
  let checkBox = document.querySelector("#checkbox_id") as HTMLInputElement;
  let loginBtn = document.querySelector(".pi-loginBtn") as HTMLDivElement;
  let provideEmail = document.querySelector("#pi-email") as HTMLInputElement;
  let providePwd = document.querySelector("#pi-pwd") as HTMLInputElement;
  let provideState = document.querySelector(".pi-state") as HTMLDivElement;
  let userInputEmail: string = getCookie("upe");
  console.log(loginBtn);
  loginBtn.addEventListener("click", async (e) => {
    console.log(2);
    try {
      let fetchObj: any = await FetchFunction("post", "same-origin", JSON.stringify({ email: provideEmail.value, pwd: providePwd.value }));
      let result = await fetch("http://localhost:3000/provide/users/login", fetchObj);
      if (result.status === 200 || 201) {
        let response = await result.json();
        response.state === true ? (window.location.href = response.url) : (provideState.textContent = response.msg);
      } else {
        console.log(result.status);
        let err = new Error("NET_ERROR");
        err.name = "NETWORK_ERROR";
        throw err;
      }
    } catch (error) {
      console.error(error);
    }
  });

  async function getEmailFromCookie(email: string, state: string) {
    if (email === "") return;
    try {
      // let fetchObj: any = await FetchFunction("post", "same-origin", JSON.stringify({ email: email, state: state }));
      let response = await fetch(`http://localhost:3000/common/users/${email}/cookie/${state}`);
      if (response.status === 200 || 201) {
        let result = await response.json();
        return result;
      }
    } catch (error) {
      console.error(error);
    }
  }

  getEmailFromCookie(userInputEmail, "get").then((result) => {
    if (result === undefined) return;
    provideEmail.value = result.decrypt;
    checkBox.checked = true;
  });

  checkBox.addEventListener("change", async () => {
    if (provideEmail.value === "") return;
    if (checkBox.checked) {
      getEmailFromCookie(provideEmail.value, "set").then((result) => {
        setCookie("upe", result.email, 7);
      });
    } else {
      deleteCookie("upe");
    }
  });

  provideEmail.addEventListener("blur", () => {
    if (provideEmail.value == "") return;
    if (checkBox.checked) {
      getEmailFromCookie(provideEmail.value, "set").then((result) => {
        setCookie("upe", result.email, 7);
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
}
