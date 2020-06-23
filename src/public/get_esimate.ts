declare global {
  interface Window {
    openAddresss: any;
  }
}
export default function get_estimate() {
  let width = 500;
  let height = 500;
  let daum = window["daum"];
  let postcode = document.getElementById("postcode") as HTMLInputElement;
  let roadAddress = document.getElementById("roadAddress") as HTMLInputElement;
  let nextBtn = document.querySelector(".estimate-btn-box-next") as HTMLDivElement;
  let previousBtn = document.querySelector(".estimate-btn-box-previous") as HTMLDivElement;
  let submitBtn = document.querySelector(".estimate-btn-box-submit") as HTMLDivElement;
  let page_1 = document.querySelector(".page-1") as HTMLDivElement;
  let page_2 = document.querySelector(".page-2") as HTMLDivElement;
  let bodyPage = document.querySelector(".get-estimate-page") as HTMLDivElement;

  // (async function get_saveEstimateData() {
  //   let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
  //   try {
  //     let result = await fetch("http://localhost:3000/api/get_saveEstimateData", {
  //       method: "POST",
  //       credentials: "same-origin",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "CSRF-Token": token,
  //       },
  //       // body: JSON.stringify({ email: data }),
  //     });
  //     if (result.status === 200 || 201) {
  //       let response = await result.json();
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // })();

  function clickNextBtn() {
    page_1.style.display = "none";
    page_2.style.display = "block";
    previousBtn.style.display = "block";
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
  }
  function clickPreviousBtn() {
    page_1.style.display = "block";
    page_2.style.display = "none";
    previousBtn.style.display = "none";
    nextBtn.style.display = "block";
    submitBtn.style.display = "none";
  }
  function moveTop(): void {
    $("html,body").animate({ scrollTop: 0 }, 300);
  }

  nextBtn.addEventListener("click", () => {
    clickNextBtn();
    moveTop();
  });
  previousBtn.addEventListener("click", () => {
    clickPreviousBtn();
    moveTop();
  });

  window.openAddresss = () => {
    new daum.Postcode({
      width: width,
      height: height,
      oncomplete: function (data) {
        let roadAddr = data.roadAddress;
        let extraRoadAddr = "";
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraRoadAddr += extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        postcode.value = data.zonecode;
        roadAddress.value = roadAddr;
      },
    }).open({
      left: window.screen.width / 2 - width / 2,
      top: window.screen.height / 2 - height / 2,
    });
  };
}
