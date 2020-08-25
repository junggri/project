import { url } from "inspector";

declare global {
  interface Window {
    // login_verify: any;
  }
}
export default function p_showBeforeEsimate() {
  let username = document.querySelector(".sbe-user-name") as HTMLDivElement;
  let createdAt = document.querySelector(".sbe-user-createdAt") as HTMLDivElement;
  let contentName = document.querySelector(".sbe-box-content") as HTMLDivElement;
  let subContentName = document.querySelector(".sbe-content-detail") as HTMLDivElement;
  let userwant_time = document.querySelector(".sbe-userwant-time-resultBox") as HTMLDivElement;
  let userwant_detail = document.querySelector(".sbe-userwant-content-detail") as HTMLDivElement;
  let mainImg = document.querySelector(".summary-main-img") as HTMLDivElement;
  let imgItems = document.querySelector(".sbe-showImg-item") as HTMLDivElement;
  console.log(imgItems);

  async function getDataSymtonsData() {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    let result = await fetch("http://localhost:3000/provide/get_registerData", {
      method: "post",
      credentials: "same-origin",
      headers: myHeaders,
      body: JSON.stringify({ _id: document.location.search.substring(1, document.location.search.length) }),
    });
    try {
      if (result.status === 200 || 201) {
        let response = await result.json();
        mainImg.style.backgroundImage = `url("/${response.data.user_object_id}/${response.data.img[0]}")`;
        username.textContent = response.data.user_name;
        createdAt.textContent = response.data.createdAt;
        contentName.textContent = response.data.sympton_detail;
        subContentName.textContent = response.data.sympton_detail;
        userwant_time.textContent = `${response.data.userwant_time.time}시 ${response.data.userwant_time.minute}분`;
        userwant_detail.textContent = response.data.userwant_content;
      }
    } catch (error) {
      console.error(error);
    }
  }
  getDataSymtonsData();
}
