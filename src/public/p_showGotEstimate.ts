export default function showGotEstimate() {
  async function getData() {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    let result = await fetch("http://localhost:3000/api/find_submit", {
      method: "post",
      credentials: "same-origin",
      headers: myHeaders,
      //   body: JSON.stringify({ submit_id:  }),
    });
    try {
      if (result.status === 200 || 201) {
        let response = await result.json();
        if (response.state === false) return alert("견적이 삭제되었거나, 존재하지 않습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  }
}
