declare global {
  interface Window {
    openAddresss: any;
    previous_fileUpload: any;
    add_fileUpload: any;
  }
}

export default function get_estimate() {
  let width = 500;
  let height = 500;
  let daum: any = window["daum"];
  let postcode = document.getElementById("postcode") as HTMLInputElement;
  let roadAddress = document.getElementById("roadAddress") as HTMLInputElement;
  let nextBtn = document.querySelector(".estimate-btn-box-next") as HTMLDivElement;
  let previousBtn = document.querySelector(".estimate-btn-box-previous") as HTMLDivElement;
  let submitBtn = document.querySelector(".estimate-btn-box-submit") as HTMLDivElement;
  let page_1 = document.querySelector(".page-1") as HTMLDivElement;
  let page_2 = document.querySelector(".page-2") as HTMLDivElement;
  let imgBtn = document.querySelector(".add-img-icon") as HTMLElement;
  let fileBtn = document.querySelector('input[type="file"]') as HTMLElement;
  let addFileBtn = document.querySelector(".add_new_image_btn") as HTMLElement;
  let addImgBox = document.querySelector(".img-item-addBox") as HTMLElement;
  let remakeFlag = false;

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

  nextBtn.addEventListener("click", (): void => {
    clickNextBtn();
    moveTop();
  });
  previousBtn.addEventListener("click", (): void => {
    clickPreviousBtn();
    moveTop();
  });

  imgBtn.addEventListener("click", () => {
    fileBtn.click();
  });

  addImgBox.addEventListener("click", () => {
    addFileBtn.click();
  });

  function makeSymptonImg(imgArray: string[]) {
    remakeFlag = true;
    if (imgArray === undefined) {
      return;
    }
    addImgBox.style.display = "inline-block";
    imgBtn.style.display = "none";
    let imgBox = document.querySelector(".si-img-itemBox");
    for (let i = 0; i < imgArray.length; i++) {
      let imgItem = document.createElement("div");
      imgItem.classList.add("img-item");
      imgItem.style.backgroundImage = `url("/${imgArray[i]}")`;
      imgBox.insertBefore(imgItem, imgBox.firstChild);
    }
  }

  function removeAndMakeNewImage(imgArray: string[]) {
    addImgBox.style.display = "inline-block";
    let imgBox = document.querySelector(".si-img-itemBox");
    while (imgBox.hasChildNodes) {
      if (imgBox.firstChild === null) {
        break;
      }
      imgBox.removeChild(imgBox.firstChild);
    }
    for (let i = 0; i < imgArray.length; i++) {
      let imgItem = document.createElement("div");
      imgItem.classList.add("img-item");
      imgItem.style.backgroundImage = `url("/${imgArray[i]}")`;
      imgBox.insertBefore(imgItem, imgBox.firstChild);
    }
  }

  async function fetchImage(url: string, data: any) {
    let formData = new FormData();
    for (let i = 0; i < data.length; i++) {
      formData.append("data", data[i]);
    }
    try {
      let result = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (result.status === 200 || 201) {
        let response = await result.json();

        if (url === "http://localhost:3000/api/fetch_upload_image") {
          makeSymptonImg(response);
        } else {
          removeAndMakeNewImage(response);
        }
      } else {
        throw new Error("fetch_image failed");
      }
    } catch (error) {
      console.error(error);
    }
  }
  //리로드시 세션에 있는 정보로 자신을 등록하는 용도
  (async function reloadGetSessionData() {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    try {
      let result = await fetch("http://localhost:3000/api/fetch_session", {
        method: "post",
        credentials: "same-origin",
        headers: myHeaders,
      });
      if (result.status === 200 || 201) {
        let response = await result.json();
        if (response.state === false) return;
        //if session.img isnt defineded runtun
        makeSymptonImg(response);
      } else {
        throw new Error("reload fetch failed");
      }
    } catch (error) {
      console.error(error);
    }
  })();

  window.add_fileUpload = (e: any) => {
    fetchImage("http://localhost:3000/api/fetch_add_upload_image", e.target.files);
  };

  window.previous_fileUpload = (e: any) => {
    fetchImage("http://localhost:3000/api/fetch_upload_image", e.target.files);
  };

  window.openAddresss = () => {
    new daum.Postcode({
      width: width,
      height: height,
      oncomplete: function (data: any) {
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
