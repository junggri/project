import reigster from "./register";
import login from "./login";
import estimate from "./estimate";
import getEstimate from "./get_esimate";
import mypage from "./mypqge";
import modified_estimate from "./modified_estimate";
import findUserData from "./findUserData";
import reset from "./reset";
import oauth from "./oauth";
import provide from "./provide";
import P_index from "./p_index";
import p_findAllRegister from "./p_findAllRegister";
import p_showBeforeEstimate from "./p_showBeforeEstimate";
import p_showGotEstimate from "./p_showGotEstimate";
let LoginmyBtn = document.querySelector(".nb-right_isLogined");
let mainName = document.querySelector(".nb-left-name");
let path = window.location.pathname;
let navigationBox = document.querySelector(".nb-navigation") as HTMLDivElement;
let logout = document.querySelector(".nb-profile-logout");
let logoutForm = document.querySelector(".logout-form") as HTMLFormElement;
let body = document.querySelector("#app") as HTMLDivElement;
if (window.location.href.includes("#")) {
  window.location.href = window.location.href.slice(0, -1);
}

if (path === "/provide/index") {
  P_index();
}
if (path === "/provide/findAllRegister") {
  p_findAllRegister();
}
if (path === "/provide/sympton_estimate") {
  p_showBeforeEstimate();
}
if (path === "/provide/showGotEstimate") {
  p_showGotEstimate();
}
if (path === "/api/oauth_register") {
  oauth();
  reigster();
}
if (path.split("/")[2] === "reset") {
  reset();
}
if (path === "/api/find_user_email") {
  findUserData();
}
if (path === "/api/find_user_pwd") {
  findUserData();
}
if (path === "/api/login") {
  login();
}
if (path === "/api/register_previous") {
  reigster();
}
if (path === "/api/register/common") {
  reigster();
}
if (path === "/api/register/provide") {
  provide();
}
if (path === "/estimate") {
  estimate();
}
if (path === "/api/mypage" || path === "/api/mypage/showestimate") {
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
    navigationBox.style.display = navigationBox.style.display === "" ? "block" : "";
  });
}

if (mainName !== null) {
  mainName.addEventListener("click", () => {
    if (path.split("/")[1] === "api") {
      location.href = "/";
    } else if (path.split("/")[1] === "provide") {
      location.href = "/provide/index";
    }
  });
}

if (logout !== null) {
  logout.addEventListener("click", async () => {
    if (location.pathname.split("/")[1] === "api" || location.pathname.split("/")[1] === "") {
      if (confirm("로그아웃 하시겠습니까?")) {
        logoutForm.action = "/api/logout_process";
        return logoutForm.submit();
      } else {
        return false;
      }
    } else if (location.pathname.split("/")[1] === "provide") {
      if (confirm("로그아웃 하시겠습니까?")) {
        logoutForm.action = "/provide/logout_process";
        return logoutForm.submit();
      } else {
        return false;
      }
    }
  });
}

function index() {
  let estimateBtn = document.querySelector(".mp-btn_estimate");
  estimateBtn.addEventListener("click", (e) => {
    location.href = "/estimate";
  });
}
