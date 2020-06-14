import reigster from "./register";
import login from "./login";
login();
reigster();

$(".mp-btn_estimate").on("click", () => {
  location.href = "/estimate";
});
