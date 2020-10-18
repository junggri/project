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
import mypageShowProvider from "./mypageShowProvider";
import mypageShowEstimate from "./mypageShowEstimate";
import p_index from "./p_index";
import p_showItem from "./p_show-item";
import p_BeforeEstimate from "./p_brefore-estimate";
import p_userSend from "./p_user-send";
import p_mypage from "./p_mypage";
import p_showsubmit from "./p_showsubmit";
let LoginmyBtn = document.querySelector(".nb-right_isLogined");
let mainName = document.querySelector(".nb-left-name");
let path = window.location.pathname;
let navigationBox = document.querySelector(".nb-navigation") as HTMLDivElement;
let logout = document.querySelector(".nb-profile-logout");
let logoutForm = document.querySelector(".logout-form") as HTMLFormElement;

function index() {
  let estimateBtn = document.querySelector(".mp-btn_estimate");
  estimateBtn.addEventListener("click", (e) => {
    location.href = "/web/estimate";
  });
}

if (window.location.href.includes("#")) {
  window.location.href = window.location.href.slice(0, -1);
}

if (path === "/provide/main") {
  p_index();
}
if (path === "/provide/show/items") {
  p_showItem();
}

if (path === "/provide/sympton/estimate") {
  p_BeforeEstimate();
}
if (path === "/provide/user/send") {
  p_userSend();
}
if (path === "/provide/submit") {
  p_showsubmit();
}
if (path === "/provide/mypage") {
  p_mypage();
}
if (path === "/web/oauth_register") {
  oauth();
  reigster();
}
if (path.split("/")[2] === "reset") {
  reset();
}
if (path === "/common/find/user/email") {
  findUserData();
}
if (path === "/common/find/user/pwd") {
  findUserData();
}
if (path === "/web/login") {
  login();
}
if (path === "/web/register_previous") {
  reigster();
}
if (path === "/web/register/common") {
  reigster();
}
if (path === "/web/register/provide") {
  provide();
}
if (path === "/web/estimate") {
  estimate();
}
if (path === "/web/mypage") {
  mypage();
}
if (path.split("/")[2] === "show" && path.split("/")[3] === "providers") {
  mypageShowProvider();
}
if (path === "/web/mypage/showestimate") {
  mypageShowEstimate();
}
if (path.split("/")[2] === "modifiment") {
  modified_estimate();
}
if (path === "/web/write/sympton") {
  getEstimate();
}
if (path === "/web/index") {
  index();
}

if (LoginmyBtn !== null) {
  LoginmyBtn.addEventListener("click", (e) => {
    navigationBox.style.display = navigationBox.style.display === "" ? "block" : "";
  });
}

if (mainName !== null) {
  mainName.addEventListener("click", () => {
    if (path.split("/")[1] === "web" || path.split("/")[1] === "common") {
      location.href = "/web/index";
    } else if (path.split("/")[1] === "provide") {
      location.href = "/provide/main";
    }
  });
}

if (logout !== null) {
  logout.addEventListener("click", async () => {
    if (location.pathname.split("/")[1] === "web") {
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
