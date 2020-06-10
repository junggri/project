declare global {
  interface Window {
    verify: any;
  }
}
const pwd_reg = "/^.*(?=^.{8,15}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/";

let registerEmail = document.querySelector(".register-email") as HTMLDivElement;
window.onload = () => {
  $("#common_email").focus();
};

export default function register() {
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
      $(".register-common, .register-provide")
        .stop()
        .animate({ bottom: "0px" }, 500);
    }
  });

  async function checkEmail(url, data) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    try {
      let fetchRes = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: myHeaders,
        body: JSON.stringify({ email: data }),
      });
      let result = await fetchRes.json();
      $(".state-email").html(result.msg);
    } catch (error) {
      console.error(error);
    }
  }

  $("#common_email").on("blur", (e) => {
    let inputdata = $("#common_email").val();
    checkEmail("http://localhost:3000/api/check_email", inputdata);
  });

  window.verify = () => {
    return true;
  };
}

// let a = 1;
// document.querySelector(".common_form").addEventListener("submit", (e) => {
//   if (a === 2) {
//     console.log(2);
//     e.preventDefault();
//   }
// });
// let b = 1;
// const a = new Promise((resolve, reject) => {
//   if (b === 1) {
//     resolve("완ㅇ");
//   } else {
//     reject("시실패");
//   }
// });

// a.then((resut) => {
//   console.log(resut);
// });
// async function save() {
//   let user = await console.log(2);
// }
// save();
