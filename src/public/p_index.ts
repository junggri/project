declare global {
  interface Window {
    // login_verify: any;
  }
}
export default function p_index() {
  let loginBtn = document.querySelector(".pi-loginBtn") as HTMLDivElement;
  let provideEmail = document.querySelector("#pi-email") as HTMLInputElement;
  let providePwd = document.querySelector("#pi-pwd") as HTMLInputElement;
  let provideState = document.querySelector(".pi-state") as HTMLDivElement;
  loginBtn.addEventListener("click", async (e) => {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    try {
      let result = await fetch("http://localhost:3000/provide/login_process", {
        method: "post",
        credentials: "same-origin",
        headers: myHeaders,
        body: JSON.stringify({
          email: provideEmail.value,
          pwd: providePwd.value,
        }),
      });
      if (result.status === 200 || 201) {
        let response = await result.json();
        if (response.state) {
          return (window.location.href = response.url);
        } else {
          provideState.textContent = response.msg;
        }
      }
    } catch (error) {
      console.error(error);
    }
  });
}
