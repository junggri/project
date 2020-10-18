import FetchFunction from "./fetchFunction";
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

  (async () => {
    try {
      let result = await fetch(`http://localhost:3000/provide/get/data/item/${document.location.search.substring(1, document.location.search.length)}`);
      if (result.status === 200 || 201) {
        let response = await result.json();
        if (response.state === false) {
          window.location.href = "/provide/show/items";
          return;
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
      } else {
        let err = new Error("NET_ERROR");
        err.name = "NETWORK_ERROR";
        throw err;
      }
    } catch (error) {
      console.error(error);
    }
  })();

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
    if (estimate_detail_value.value === "" || priceValue.value === "") return alert("입력사항을 기제해주시길 바랍니다");
    try {
      let fetchObj: any = await FetchFunction(
        "post",
        "same-origin",
        JSON.stringify({
          sympton_id: document.location.search.substring(1, document.location.search.length),
          content: estimate_detail_value.value,
          priceValue: priceValue.value,
          user_id: userId.value,
        })
      );
      let result = await fetch("http://localhost:3000/provide/submit/estimate/process", fetchObj);
      if (result.status === 200 || 201) {
        let response = await result.json();
        let { state } = response;
        if (state === null) {
          alert("삭제된 증상입니다. 견적을 제시할 수 없습니다.");
          window.location.href = `/provide/show/items`;
          return;
        } else if (!state) {
          return alert("더이상 견적을 제시할 수 없습니다.");
        } else {
          showEstimateBox.style.display = "none";
          alert("견적제출이 완료되었습니다.");
          submitForm.reset();
          window.location.href = `/provide/sympton?${response.url}`;
          return;
        }
      } else {
        let err = new Error("NET_ERROR");
        err.name = "NETWORK_ERROR";
        throw err;
      }
    } catch (error) {
      console.error(error);
    }
  });

  if (deleteEstimateBtn !== null) {
    deleteEstimateBtn.addEventListener("click", async (e) => {
      let flag = confirm("정말로 취소하시겠습니까?");
      if (flag === true) {
        try {
          let fetchObj: any = await FetchFunction("delete", "same-origin", JSON.stringify({ symptonId: document.location.search.substring(1, document.location.search.length) }));
          let result = await fetch("http://localhost:3000/provide/delete/submit", fetchObj);
          if (result.status === 200 || 201) {
            let response = await result.json();
            let { state } = response;
            if (state === "accept") {
              alert("견적이 성사되어 취소가 불가능합니다.");
              return (window.location.href = "/provide/show/items");
            } else if (state == null) {
              let err: any = new Error("error");
              err.name = "DELETE_DATA";
              alert("삭제된 게시글이라 자동 취소 되었습니다.");
              return (window.location.href = "/provide/show/items");
            } else {
              alert("취소가 완료되었습니다.");
              window.location.href = `/provide/sympton?${response.url}`;
            }
          } else {
            let err = new Error("NET_ERROR");
            err.name = "NETWORK_ERROR";
            throw err;
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  }
}
