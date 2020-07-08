import reigster from "./register";
import login from "./login";
import estimate from "./estimate";
import getEstimate from "./get_esimate";
import mypage from "./mypqge";
import modified_estimate from "./modified_estimate";
let LoginmyBtn = document.querySelector(".nb-right_isLogined");
let path = window.location.pathname;

if (path === "/api/register_previous" || "/api/register/common") {
  reigster();
}
if (path === "/estimate") {
  estimate();
}
if (path === "/api/mypage") {
  mypage();
}
if (path.split("/")[2] === "modified_estimate") {
  modified_estimate();
}
if (path === "/api/get_estimate") {
  getEstimate();
}
if (path === "/") {
  index();
}

if (LoginmyBtn !== null) {
  LoginmyBtn.addEventListener("click", (e) => {
    location.href = "/api/mypage";
  });
}

function index() {
  let estimateBtn = document.querySelector(".mp-btn_estimate");

  estimateBtn.addEventListener("click", (e) => {
    location.href = "/estimate";
  });
}
