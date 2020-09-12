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
import mypageEstimate from "./mypageEstimate";
import mypageShowEstimate from "./mypageShowEstimate";
import P_index from "./p_index";
import p_findAllRegister from "./p_findAllRegister";
import p_showBeforeEstimate from "./p_showBeforeEstimate";
import p_showGotEstimate from "./p_showGotEstimate";
import p_mypage from "./p_mypage";
import p_showsubmit from "./p_showsubmit";
let LoginmyBtn = document.querySelector(".nb-right_isLogined");
let mainName = document.querySelector(".nb-left-name");
let path = window.location.pathname;
let navigationBox = document.querySelector(".nb-navigation") as HTMLDivElement;
let logout = document.querySelector(".nb-profile-logout");
let logoutForm = document.querySelector(".logout-form") as HTMLFormElement;

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
if (path === "/provide/showsubmit") {
  p_showsubmit();
}
if (path.split("/")[3] === "estimateDetail") {
  mypageEstimate();
}
if (path === "/provide/mypage") {
  p_mypage();
}
if (path === "/api/oauth_register") {
  oauth();
  reigster();
}
if (path.split("/")[2] === "reset") {
  reset();
}
if (path === "/v1/find_user_email") {
  findUserData();
}
if (path === "/v1/find_user_pwd") {
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
if (path === "/api/estimate") {
  estimate();
}
if (path === "/api/mypage") {
  mypage();
}
if (path === "/api/mypage/showestimate") {
  mypageShowEstimate();
}
if (path.split("/")[2] === "modified_estimate") {
  modified_estimate();
}
if (path === "/api/get_estimate") {
  getEstimate();
}
if (path === "/api/index") {
  index();
}

if (LoginmyBtn !== null) {
  LoginmyBtn.addEventListener("click", (e) => {
    navigationBox.style.display = navigationBox.style.display === "" ? "block" : "";
  });
}

if (mainName !== null) {
  mainName.addEventListener("click", () => {
    if (path.split("/")[0] === "") {
      location.href = "/api/index";
    } else if (path.split("/")[1] === "provide") {
      location.href = "/provide/index";
    }
  });
}

if (logout !== null) {
  logout.addEventListener("click", async () => {
    if (location.pathname.split("/")[1] === "api" || location.pathname.split("/")[0] === "") {
      if (confirm("로그아웃 하시겠습니까?")) {
        return logoutForm.submit();
      } else {
        return false;
      }
    } else if (location.pathname.split("/")[1] === "provide") {
      if (confirm("로그아웃 하시겠습니까?")) {
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
    location.href = "/api/estimate";
  });
}
