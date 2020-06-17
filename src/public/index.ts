import reigster from "./register";
import login from "./login";
import estimate from "./estimate";
estimate();
login();
reigster();

let where = document.location.href;
console.log(where);
$(".mp-btn_estimate").on("click", () => {
  location.href = "/estimate";
});
