import FetchFunction from "./fetchFunction";
import { getAddress } from "./address";
declare global {
  interface Window {
    openAddresss: any;
  }
}

export default function provide() {
  const email_reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const pwd_reg = /^.*(?=^.{8,20}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  let provideForm = document.querySelector(".provide_form") as HTMLFormElement;
  let phoneBtn = document.querySelector(".provide-phone-btn") as HTMLDivElement;
  let phoneNumber = document.querySelector("#provide-phone") as HTMLInputElement;
  let checkBox = document.querySelector(".provide-verify") as HTMLDivElement;
  let verifyNumber = document.querySelector("#provide-verify") as HTMLInputElement;
  let checkBtn = document.querySelector(".provide-verify-btn") as HTMLDivElement;
  let registerBtn = document.querySelector(".register-btn") as HTMLDivElement;
  let inputEmail = document.querySelector("#provide-email") as HTMLInputElement;
  let inputPwd = document.querySelector("#provide-pwd") as HTMLInputElement;
  let statePhone = document.querySelector(".ps-phone") as HTMLDivElement;
  let stateVerify = document.querySelector(".ps-verify") as HTMLDivElement;
  let stateEmail = document.querySelector(".ps-email") as HTMLDivElement;
  let statePwd = document.querySelector(".ps-pwd") as HTMLDivElement;
  let add1 = document.querySelector("#provide-address1") as HTMLInputElement;
  let add2 = document.querySelector("#provide-address2") as HTMLInputElement;
  let add3 = document.querySelector("#provide-address3") as HTMLInputElement;
  let lat1 = document.querySelector("#lat1") as HTMLInputElement;
  let lat2 = document.querySelector("#lat2") as HTMLInputElement;
  let lat3 = document.querySelector("#lat3") as HTMLInputElement;
  let lon1 = document.querySelector("#lon1") as HTMLInputElement;
  let lon2 = document.querySelector("#lon2") as HTMLInputElement;
  let lon3 = document.querySelector("#lon3") as HTMLInputElement;
  let addressBtn = document.querySelectorAll(".provide-add-btn");
  let verifyFlag = false;
  let emailFlag = false;
  let pwdFlag = false;
  let checkNumber: string;

  phoneBtn.addEventListener("click", async (e) => {
    if (phoneNumber.value === "") return alert("휴대폰번호를 입력해주시길 바랍니다.");
    if (verifyFlag) return alert("인증이 완료되었습니다.");
    checkBox.style.display = "block";
    phoneBtn.textContent = "인증번호 재전송";
    let randomArray = [];
    for (let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * 10);
      randomArray.push(randomNum);
    }
    try {
      let result = await fetch(`/web/verify/phone/number/${phoneNumber.value}`);
      if (result.status === 200 || 201) {
        let response = await result.json();
        // console.log(response.verify_num);
        checkNumber = response.verify_num;
        return;
      } else {
        throw new Error("reload fetch failed");
      }
    } catch (error) {
      console.error(error);
    }
  });

  checkBtn.addEventListener("click", (e) => {
    // console.log(checkNumber, verifyNumber.value);
    if (checkNumber === verifyNumber.value) {
      phoneBtn.textContent = "인증 완료";
      checkBox.style.display = "none";
      verifyNumber.value = "";
      phoneNumber.readOnly = true;
      verifyFlag = true;
      return;
    } else {
      stateVerify.textContent = "인증번호가 일치하지 않습니다.";
      verifyFlag = false;
      return;
    }
  });

  inputEmail.addEventListener("blur", async (e) => {
    if (!email_reg.test(inputEmail.value)) {
      emailFlag = false;
      return (stateEmail.textContent = "이메일 형식이 올바르지 않습니다.");
    }
    try {
      let result = await fetch(`http://localhost:3000/web/check/provider/duplicate/${inputEmail.value}`);
      if (result.status === 201 || 201) {
        let response = await result.json();
        if (!response.state) {
          emailFlag = false;
          stateEmail.textContent = "이미 사용중인이메일입니다.";
        } else {
          emailFlag = true;
          stateEmail.textContent = "사용가능한 이메일입니다.";
        }
      } else {
        let err = new Error("NET_ERROR");
        err.name = "NET";
        throw err;
      }
    } catch (error) {
      console.error(error);
    }
  });

  inputPwd.addEventListener("blur", () => {
    if (pwd_reg.test(inputPwd.value)) {
      pwdFlag = true;
      statePwd.textContent = "비밀번호가 유효합니다.";
    } else {
      pwdFlag = false;
      statePwd.textContent = "비밀번호가 유효하지 않습니다";
    }
  });

  registerBtn.addEventListener("click", (e) => {
    if (emailFlag && pwdFlag && verifyFlag && add1.value !== "") return provideForm.submit();
    else {
      if (!emailFlag) stateEmail.textContent = "이메일을 확인해 주시길 바랍니다.";
      if (!pwdFlag) statePwd.textContent = "비밀번호를 확인해 주시실 바랍니다.";
      if (!verifyFlag) statePhone.textContent = "휴대폰 인증이 필요합니다.";
      return;
    }
  });

  for (let i = 0; i < addressBtn.length; i++) {
    addressBtn[i].addEventListener("click", (e: any) => {
      if (e.target.classList[1] === "addressBtn1") {
        getAddress(add1, lat1, lon1);
        $(".add-wrapper2").css("display", "block");
      } else if (e.target.classList[1] === "addressBtn2") {
        getAddress(add2, lat2, lon2);
        $(".add-wrapper3").css("display", "block");
      } else {
        getAddress(add3, lat3, lon3);
      }
    });
  }
}
