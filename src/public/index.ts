import reigster from "./register";
import login from "./login";
import estimate from "./estimate";
import getEstimate from "./get_esimate";

let path = window.location.pathname;
console.log(path);

if (path === "/api/register_previous" || "/api/register/common") {
  reigster();
}
if (path === "/estimate") {
  estimate();
}
if (path === "/api/get_estimate") {
  getEstimate();
}

$(".mp-btn_estimate").on("click", () => {
  location.href = "/estimate";
});
