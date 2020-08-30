declare global {
  interface Window {
    makePrice: any;
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
  let priceValue = document.querySelector(".sbe-estimate-box-price-value") as HTMLInputElement;
  let hiddenPrice = document.querySelector(".sbe-save-price") as HTMLInputElement;
  let estimateBtn = document.querySelector(".sbe-estimate-btn") as HTMLInputElement;
  let showEstimateBox = document.querySelector(".sbe-estimate-box") as HTMLDivElement;
  let cancelEstimateBtn = document.querySelector(".sbe-cancel-estimate-btn") as HTMLInputElement;
  let sumbitEstimate = document.querySelector(".sbe-get-estimate-btn") as HTMLInputElement;
  let submitForm = document.querySelector(".submit_form") as HTMLFormElement;
  let estimate_detail_value = document.querySelector("#sympton-detail") as HTMLTextAreaElement;
  let registrantId = document.querySelector(".registrant_id") as HTMLInputElement;
  let symptonId = document.querySelector(".sympton_id") as HTMLInputElement;
  let userId = document.querySelector(".user_id") as HTMLInputElement;
  let deleteEstimateBtn = document.querySelector(".sbe-delete-estimate-btn") as HTMLInputElement;
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
        if (response.state === false) {
          alert("존재하지 않는 자료입니다.");
          window.location.href = "/provide/findAllRegister";
        }
        mainImg.style.backgroundImage = `url("/${response.data.user_object_id}/${response.data.img[0]}")`;
        username.textContent = response.data.user_name;
        createdAt.textContent = response.data.createdAt;
        contentName.textContent = response.data.sympton_detail;
        subContentName.textContent = response.data.sympton_detail;
        userwant_time.textContent = `${response.data.userwant_time.time}시 ${response.data.userwant_time.minute}분`;
        userwant_detail.textContent = response.data.userwant_content;
        registrantId.value = response.data.user_object_id;
        symptonId.value = response.data._id;
        userId.value = response.data.user_object_id;
      }
    } catch (error) {
      console.error(error);
    }
  }
  getDataSymtonsData();

  function numberFormat(inputNumber: string) {
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  $(".sbe-estimate-box-price-value").on("blur", () => {
    hiddenPrice.value = priceValue.value;
    let price = numberFormat(priceValue.value);
    priceValue.value = price;
  });

  if (estimateBtn !== null) {
    estimateBtn.addEventListener("click", (e) => {
      showEstimateBox.style.display = "block";
      estimateBtn.style.pointerEvents = "none";
    });
  }

  cancelEstimateBtn.addEventListener("click", (e) => {
    showEstimateBox.style.display = "none";
    estimateBtn.style.pointerEvents = "all";
  });

  sumbitEstimate.addEventListener("click", async (e) => {
    if (estimate_detail_value.value === "" || priceValue.value === "") {
      alert("입력사항을 기제해주시길 바랍니다");
      return;
    } else {
      let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("CSRF-Token", token);
      let result = await fetch("http://localhost:3000/provide/submit_estimate", {
        method: "post",
        credentials: "same-origin",
        headers: myHeaders,
        body: JSON.stringify({
          sympton_id: document.location.search.substring(1, document.location.search.length),
          content: estimate_detail_value.value,
          priceValue: priceValue.value,
          user_id: userId.value,
        }),
      });
      try {
        if (result.status === 200 || 201) {
          let response = await result.json();
          if (response.state) {
            showEstimateBox.style.display = "none";
            alert("견적제출이 완료되었습니다.");
            submitForm.reset();
            window.location.href = `/provide/sympton_estimate?${response.url}`;
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  });

  if (deleteEstimateBtn !== null) {
    deleteEstimateBtn.addEventListener("click", async (e) => {
      let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("CSRF-Token", token);
      let result = await fetch("http://localhost:3000/provide/delete_submit", {
        method: "post",
        credentials: "same-origin",
        headers: myHeaders,
        body: JSON.stringify({ symptonId: document.location.search.substring(1, document.location.search.length) }),
      });
      try {
        if (result.status === 200 || 201) {
          let response = await result.json();
          alert("취소가 완료되었습다.");
          window.location.href = `/provide/sympton_estimate?${response.url}`;
        }
      } catch (error) {}
    });
  }
}
