declare global {
  interface Window {}
}

export default function () {
  const pwd_reg = /^.*(?=^.{8,20}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  let pwd1 = document.querySelector("#rib-pwd1") as HTMLInputElement;
  let pwd2 = document.querySelector("#rib-pwd2") as HTMLInputElement;
  let resetState = document.querySelector(".reset-state") as HTMLDivElement;
  let resetBtn = document.querySelector(".reset-btn") as HTMLDivElement;
  let resetForm = document.querySelector("#reset-form") as HTMLFormElement;

  $("#rib-pwd1").on("blur", () => {
    if (pwd_reg.test(pwd1.value)) {
      resetState.textContent = "비밀번호가 유효합니다.";
    } else {
      resetState.textContent = "비밀번호가 유효하지 않습니다.";
    }
  });

  pwd2.addEventListener("blur", () => {
    if (pwd_reg.test(pwd1.value) && pwd1.value === pwd2.value) {
      resetState.textContent = "비밀번호가 일치합니다.";
    } else if (pwd_reg.test(pwd1.value) && pwd1.value !== pwd2.value) {
      resetState.textContent = "비밀번호가 일치하지 않습니다.";
    } else if (!pwd_reg.test(pwd1.value) && pwd1.value === pwd2.value) {
      resetState.textContent = "비밀번호가 유효하지 않습니다.";
    } else if (!pwd_reg.test(pwd1.value) && pwd1.value !== pwd2.value) {
      resetState.textContent = "비밀번호가 유효하지 않습니다.";
    }
  });

  resetBtn.addEventListener("click", (e) => {
    if (pwd_reg.test(pwd1.value) && pwd1.value === pwd2.value) {
      resetForm.submit();
    } else {
      alert("변경할 비밀번호가 일치하지 않거나 유효하지 않습니다. 다시한번 확인해줴요.");
    }
  });
}
//그냥 위에서 리턴값?모르겠다
