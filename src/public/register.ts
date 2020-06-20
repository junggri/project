declare global {
  interface Window {
    verify: any;
  }
}
const pwd_reg = /^.*(?=^.{8,20}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
const email_reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
let registerEmail = document.querySelector(".register-email") as HTMLDivElement;
let pwd = document.querySelector("#common_pwd") as HTMLInputElement;
let pwd2 = document.querySelector("#common_checkpwd") as HTMLInputElement;
let email = document.querySelector("#common_email") as HTMLInputElement;
let validation_emailBox = document.querySelector(".cb-email-validation") as HTMLInputElement;
let validation_btn = document.querySelector(".email-validationBtn") as HTMLInputElement;
let validation_num = null;
let emailFlag = false;
let email_is_exist = false;

export default function register() {
  $("#common_email").focus();
  $(".register-email").on("click", () => {
    if (registerEmail.dataset.click === "none") {
      registerEmail.dataset.click = "click";
      $(".arrow").html("&#8743");
      $(".register-common, .register-provide")
        .stop()
        .animate({ bottom: "-90px" }, 350, () => {
          $(".register-provide").animate({ bottom: "-165px" });
        });
    } else if (registerEmail.dataset.click === "click") {
      registerEmail.dataset.click = "none";
      $(".arrow").html("&#8744");
      $(".register-common, .register-provide").stop().animate({ bottom: "0px" }, 500);
    }
  });
  ///animation of reigster_preivious page///
  async function checkEmail(url, data) {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    try {
      let fetchResult = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "CSRF-Token": token,
        },
        body: JSON.stringify({ email: data }),
      });
      if (fetchResult.status === 200 || 201) {
        let result = await fetchResult.json();
        console.log(result);
        validation_num = result.validation_num;
        $(".state-email").html(result.msg);
        if (result.state === "true") {
          email_is_exist = true;
          validation_emailBox.style.display = "block";
        }
      } else {
        throw new Error("이메일 페치 오류");
      }
    } catch (error) {
      console.error(error);
    }
  }
  ///check email that to check user is already//
  $(".cb-email").on("propertychange change keyup paste input blur", () => {
    if (email_reg.test(email.value)) {
      validation_btn.style.pointerEvents = "all";
      validation_btn.style.backgroundColor = "rgba(0,0,0,0.3)";
      $(".email-validationBtn span").css("color", "rgba(0,0,0,0.7)");
      $(".state-email").html(" ");
    } else {
      validation_btn.style.pointerEvents = "none";
      validation_btn.style.backgroundColor = "rgba(0,0,0,0.1)";
      $(".email-validationBtn span").css("color", "rgba(0,0,0,0.3)");
      $(".state-email").html("이메일 형식이 올바르지 않습니다.");
    }
  });

  ///animation for chekc the email
  $(".email-validationBtn").on("click", (e) => {
    if (email_is_exist) {
      alert("새로운 인증번호를 발송하였습니다.");
    }
    let inputdata = $("#common_email").val();
    checkEmail("http://localhost:3000/api/check_email", inputdata);
  });
  //send send ajax request

  $(".email-checkBtn").on("click", () => {
    if ($("#validation_email").val() === validation_num) {
      validation_emailBox.style.display = "none";
      $(".email-validationBtn").css("display", "none");
      $(".changeEmail-Btn").css("display", "block");
      $("#common_email").css("pointerEvents", "none");
      $(".cb-email").css("backgroundColor", "rgba(0,0,0,0.05)");
      $(".condition-register").html("위의 이메일로 로그인하세요.");
      emailFlag = true;
    } else {
      $(".state-email").html("인증번호가 일치하지 않습니다.");
      emailFlag = false;
    }
  });
  ////iput the vaildation number and process of change email

  $(".changeEmail-Btn").on("click", () => {
    let pre_changeEmail_alert = confirm("정말로 이메일을 변경하시겠어요?");
    if (pre_changeEmail_alert) {
      $("#common_email").val("");
      $(".email-validationBtn").css("display", "block");
      $(".changeEmail-Btn").css("display", "none");
      $(".cb-email").css("backgroundColor", "rgba(0,0,0,0)");
      $("#common_email").css("pointerEvents", "all");
      email_is_exist = false;
      emailFlag = false;
    }
  });

  ///change_email process
  $("#common_pwd").on("blur", (e) => {
    if (pwd_reg.test(pwd.value)) {
      $(".state-pwd").html("비밀번호가 유효합니다.");
    } else {
      $(".state-pwd").html("비밀번호가 유효하지 않습니다.");
    }
  });

  $("#common_checkpwd").on("blur", (e) => {
    if (pwd_reg.test(pwd.value) && pwd.value === pwd2.value) {
      $(".state-pwd").html("비밀번호가 일치합니다.");
      setTimeout(() => {
        $(".state-pwd").html(" ");
      }, 1000);
    } else if (!pwd_reg.test(pwd.value) && pwd.value === pwd2.value) {
      $(".state-pwd").html("비밀번호가 유효하지 않습니다.");
    } else if (pwd_reg.test(pwd.value) && pwd.value !== pwd2.value) {
      $(".state-pwd").html("비밀번호가 일치하지 않습니다.");
    } else {
      $(".state-pwd").html("비밀번호가 유효하지 않습니다.");
    }
  });
  /////////////////
  window.verify = () => {
    console.log(pwd_reg.test(pwd.value), pwd.value === pwd2.value, emailFlag);
    if (pwd_reg.test(pwd.value) && pwd.value === pwd2.value && emailFlag) {
      return true;
    } else {
      alert("입력정보를 다시한번 확인해보세요.");
    }
    return false;
  };
}
