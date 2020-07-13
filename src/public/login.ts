declare global {
  interface Window {
    login_verify: any;
  }
}
export default function login() {
  $(document).ready(function () {
    let checkBox = document.querySelector("#checkbox_id") as HTMLInputElement;
    let emailBox = document.querySelector("#login_email") as HTMLInputElement;
    let loginBoxValue = document.querySelector("#login_email") as HTMLInputElement;
    let email: string;
    emailBox.focus();

    let userInputEmail: string = getCookie("userInputEmail");
    loginBoxValue.value = email;
    if (loginBoxValue.value !== "") {
      checkBox.checked = true;
    }

    checkBox.addEventListener("change", async () => {
      if (checkBox.checked) {
        let userInputEmail: string = loginBoxValue.value;
        let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("CSRF-Token", token);
        let response = await fetch("http://localhost:3000/api/setUserEmailCookie", {
          method: "POST",
          credentials: "same-origin",
          headers: myHeaders,
          body: JSON.stringify({ email: userInputEmail }),
        });
        if (response.status === 200 || 201) {
          let result = await response.json();
          email = result.decrypt;
          setCookie("userInputEmail", result.email, 7);
        }
      } else {
        deleteCookie("userInputEmail");
      }
    });

    function setCookie(cookieName: string, value: string, exdays: number) {
      let exdate: Date = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      let cookieValue = escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
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
