import reigster from "./register";
import login from "./login";
import estimate from "./estimate";
estimate();
login();
reigster();

$(".mp-btn_estimate").on("click", () => {
  location.href = "/estimate";
});