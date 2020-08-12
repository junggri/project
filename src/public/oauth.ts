export default function oauth() {
  let userEmail = document.querySelector("#oauth_email") as HTMLInputElement;

  (async function checkIsExisted() {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    let result = await fetch("http://localhost:3000/api/check_user_email", {
      method: "post",
      credentials: "same-origin",
      headers: myHeaders,
      body: JSON.stringify({ email: userEmail.value }),
    });
    try {
      if (result.status === 200 || 201) {
        let response = await result.json();
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  })();
}
