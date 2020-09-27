export default function oauth() {
  let userEmail = document.querySelector("#common_email") as HTMLInputElement;
  let alertBox = document.querySelector(".oauth-alert-box ") as HTMLDivElement;
  let loginBtn = document.querySelector(".oab-loginBtn") as HTMLDivElement;
  let emailBtn = document.querySelector(".oab-emailBtn") as HTMLDivElement;
  let oauthEmail = document.querySelector("#common_email") as HTMLInputElement;
  loginBtn.addEventListener("click", (e) => {
    window.location.href = "/api/login";
  });

  emailBtn.addEventListener("click", (e) => {
    alertBox.style.display = "none";
    oauthEmail.readOnly = false;
  });

  async function checkIsExisted() {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    let result = await fetch("http://localhost:3000/api/oauth_check_user_email", {
      method: "post",
      credentials: "same-origin",
      headers: myHeaders,
      body: JSON.stringify({ email: userEmail.value }),
    });
    try {
      if (result.status === 200 || 201) {
        let response = await result.json();
        if (!response.state) {
          alertBox.style.display = "block";
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  checkIsExisted();
}
