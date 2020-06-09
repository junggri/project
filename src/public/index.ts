import reigster from "./register";

reigster();

$(".mp-btn_estimate").on("click", () => {
  location.href = "/estimate";
});
