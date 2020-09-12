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

  function FetchSet() {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    return myHeaders;
  }

  loginBtn.addEventListener("click", async (e) => {
    let header = FetchSet();
    try {
      let result = await fetch("http://localhost:3000/provide/login_process", {
        method: "post",
        credentials: "same-origin",
        headers: header,
        body: JSON.stringify({
          email: provideEmail.value,
          pwd: providePwd.value,
        }),
      });
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
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    let response = await fetch("http://localhost:3000/provide/v1/setProviderEmailCookie", {
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
