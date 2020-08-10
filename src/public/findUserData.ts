declare global {
  interface Window {
    add_List: any;
    get_estimate: any;
    isLogined: any;
  }
}

export default function () {
  let findEmailSlo = document.querySelector(".fs-find-user-email") as HTMLElement;
  let findPwdSlo = document.querySelector(".fs-find-user-pwd") as HTMLElement;
  let findResultBtn = document.querySelector(".findUser-btn") as HTMLElement;
  let userInputData = document.querySelector("#findUserInput") as HTMLInputElement;
  let resultBox = document.querySelector(".findResult") as HTMLDivElement;
  let showResultBox = document.querySelector(".findUserResultBox") as HTMLDivElement;
  let btnBox = document.querySelector(".findUserResultBox-btnBox") as HTMLDivElement;
  let loginBoxLoginBtn = document.querySelector(".findUserResultBox-btnBox-login") as HTMLDivElement;
  let loginBoxRegisterBtn = document.querySelector(".findUserResultBox-btnBox-register") as HTMLDivElement;
  let loginBoxConfirmBtn = document.querySelector(".findUserResultBox-btnBox-confirm") as HTMLDivElement;
  let userEmail = document.querySelector(".findEmail") as HTMLDivElement;
  window.location.pathname === "/api/find_user_email" ? findPwdSlo.classList.add("fs-user-opacity") : findEmailSlo.classList.add("fs-user-opacity");

  async function findUserData(url: string, data: string) {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    let response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: myHeaders,
      body: JSON.stringify({ email: data }),
    });
    if (response.status === 200 || 201) {
      let result = await response.json();
      if (!result.state) {
        userEmail.textContent = result.inputdata;
        resultBox.textContent = "회원정보가 존재하지 않습니다.";
        showResultBox.style.display = "block";
        loginBoxLoginBtn.style.display = "none";
        loginBoxRegisterBtn.style.display = "block";
      } else if (result.state === "can-reset") {
        showResultBox.style.display = "block";
        resultBox.textContent = "비밀번호 재설정 링크를 보냈습니다.";
        userEmail.style.display = "none";
        loginBoxLoginBtn.style.display = "none";
        loginBoxRegisterBtn.style.display = "none";
        // loginBoxConfirmBtn.style.display = "none";
      } else {
        userEmail.textContent = result.email;
        resultBox.textContent = "이미 회원가입을 진행하셨습니다. 로그인 후 서비스를 이용해보세요.";
        showResultBox.style.display = "block";
        loginBoxRegisterBtn.style.display = "none";
        loginBoxLoginBtn.style.display = "block";
      }
    }
  }
  // loginBoxConfirmBtn.addEventListener("click", () => {
  //   showResultBox.style.display = "none";
  // });
  findResultBtn.addEventListener("click", () => {
    if (userInputData.value === "") return;
    if (window.location.pathname === "/api/find_user_email") {
      findUserData("http://localhost:3000/api/check_user_eamil", userInputData.value);
    } else {
      findUserData("http://localhost:3000/api/check_user_and_sendEamil", userInputData.value);
    }
  });
}
//그냥 위에서 리턴값?모르겠다
