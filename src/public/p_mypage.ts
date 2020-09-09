export default function p_mypage() {
  async function getProviderData() {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    let result = await fetch("http://localhost:3000/provide/get_mypage_data", {
      method: "POST",
      credentials: "same-origin",
      headers: myHeaders,
    });
    try {
      if (result.status === 200 || 201) {
        let response = await result.json();
      }
    } catch (error) {}
  }
}
