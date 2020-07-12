export default function login() {
  let checkBox = document.querySelector("#checkbox_id") as HTMLInputElement;
  let emailBox = document.querySelector("#login_email") as HTMLInputElement;
  $(document).ready(function () {
    emailBox.focus();
    let userInputEmail: string = getCookie("userInputEmail");
    $("#login_email").val(userInputEmail);
    if ($("#login_email").val() !== "") {
      checkBox.checked = true;
    }

    $("#checkbox_id").change(function () {
      if ($("#checkbox_id").is(":checked")) {
        let userInputEmail = $("#login_email").val();
        setCookie("userInputEmail", userInputEmail, 7);
      } else {
        deleteCookie("userInputEmail");
      }
    });

    $("login_email").keyup(function () {
      if ($("#checkbox_id").is(":checked")) {
        let userInputEmail = $("login_email").val();
        setCookie("userInputEmail", userInputEmail, 7);
      }
    });
  });

  function setCookie(cookieName: string, value: any, exdays: number) {
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
    if (start != -1) {
      start += cookieName.length;
      let end = cookieData.indexOf(";", start);
      if (end == -1) end = cookieData.length;
      cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
  }
}
