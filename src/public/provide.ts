declare global {
  interface Window {}
}

export default function provide() {
  let phoneBtn = document.querySelector(".provide-phone-btn") as HTMLDivElement;
  let phoneNumber = document.querySelector("#provide-phone") as HTMLInputElement;
  let checkBox = document.querySelector(".provide-verify") as HTMLDivElement;
  let verifyNumber = document.querySelector("#provide-verify") as HTMLInputElement;
  let checkBtn = document.querySelector(".provide-verify-btn") as HTMLDivElement;
  let registerBtn = document.querySelector(".register-btn") as HTMLDivElement;
  let stateVerify = document.querySelector(".ps-verify") as HTMLDivElement;
  let verifyFlag = false;
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
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    let result = await fetch("/api/verify_phone_number", {
      method: "POST",
      credentials: "same-origin",
      headers: myHeaders,
      body: JSON.stringify({ user_phone_number: phoneNumber.value }),
    });
    if (result.status === 200 || 201) {
      let response = await result.json();
      console.log(response.verify_num);
      checkNumber = response.verify_num;
      return;
    }
  });

  checkBtn.addEventListener("click", (e) => {
    console.log(checkNumber, verifyNumber.value);
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
  registerBtn.addEventListener("click", (e) => {
    console.log(verifyFlag);
  });
}
