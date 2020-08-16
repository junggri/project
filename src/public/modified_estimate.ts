export default function mypage() {
  let width = 500;
  let height = 500;
  let daum: any = window["daum"];
  let postcode = document.getElementById("postcode") as HTMLInputElement;
  let roadAddress = document.getElementById("roadAddress") as HTMLInputElement;
  let sigungu = document.querySelector("#sigunguCode") as HTMLInputElement;
  let detailAddress = document.getElementById("detailAddress") as HTMLInputElement;
  let imgBtn = document.querySelector(".add-img-icon") as HTMLElement;
  let fileBtn = document.querySelector('input[type="file"]') as HTMLElement;
  let addFileBtn = document.querySelector(".add_new_image_btn") as HTMLElement;
  let symptonDetail = document.querySelector("#sympton-detail") as HTMLTextAreaElement;
  let timeSelect = document.getElementById("st-time") as HTMLSelectElement;
  let minuteOption = document.getElementById("st-minute") as HTMLSelectElement;
  let userwant_box = document.querySelector("#userwant-box");
  let cancelBtn = document.querySelector(".modified-cancel-btn");
  let modifiedBtn = document.querySelector(".modified-estimate-btn") as HTMLInputElement;
  let modifiedForm = document.querySelector(".modified_estimate_form") as HTMLFormElement;
  let lengthFlag: boolean = true;

  imgBtn.addEventListener("click", () => {
    fileBtn.click();
  });

  interface Time {
    userwant_time: { time: number; minute: number };
  }

  modifiedBtn.addEventListener("click", (e) => {
    if (confirm("입력하신 정보를 수정하시겠습니까?")) {
      modifiedForm.submit();
    }
  });

  cancelBtn.addEventListener("click", () => {
    let cancelConfirm = confirm("수정하신 정보가 저장되지 않습니다. 정말로 취소하시겠습니까?");
    if (cancelConfirm) {
      location.href = "/api/mypage";
    }
  });

  function selectedTime(response: object) {
    let { time, minute } = (response as Time).userwant_time;
    for (let i = 0; i < timeSelect.options.length; i++) {
      if (timeSelect.options[i].value === String(time)) {
        timeSelect.options[i].selected = true;
      }
    }
    for (let i = 0; i < minuteOption.options.length; i++) {
      if (minuteOption.options[i].value === String(minute)) {
        minuteOption.options[i].selected = true;
      }
    }
  }

  (async function reloadGetSessionData() {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    try {
      let result = await fetch("http://localhost:3000/api/modified_get_image", {
        method: "post",
        credentials: "same-origin",
        headers: myHeaders,
        body: JSON.stringify({ url: window.location.pathname.split("/")[3] }),
      });
      if (result.status === 200 || 201) {
        let response = await result.json();
        sigungu.value = response.response.address.sigunguCode;
        symptonDetail.textContent = response.response.sympton_detail;
        postcode.value = response.response.address.postcode;
        roadAddress.value = response.response.address.roadAddress;
        detailAddress.value = response.response.address.detailAddress;
        userwant_box.textContent = response.response.userwant_content;
        selectedTime(response.response);
        makeSymptonImg(response);
      } else {
        throw new Error("reload fetch failed");
      }
    } catch (error) {
      console.error(error);
    }
  })();

  function lengthOfImg(data: string[]) {
    let imgLength = document.querySelector(".si-img-length");
    imgLength.textContent = `${data.length} / 10개 등록`;
    if (data.length === 0) {
      let imgBox = document.querySelector(".si-img-itemBox");
      while (imgBox.hasChildNodes) {
        if (imgBox.firstChild === null) {
          break;
        }
        imgBox.removeChild(imgBox.firstChild);
      }
      imgBtn.style.display = "block";
    } else if (data.length === 10) {
      lengthFlag = false;
    } else {
      lengthFlag = true;
    }
  }

  function commonMakeImg(data: any) {
    let imgBox = document.querySelector(".si-img-itemBox");
    let addImgBox = document.createElement("div");
    for (let i = 0; i < data.img.length; i++) {
      let imgItem = document.createElement("div");
      let cancelIcon = document.createElement("div");
      cancelIcon.classList.add("img-box-cancel");
      imgItem.classList.add("img-item");
      imgItem.style.backgroundImage = `url("/${data.email.user_objectId}/${data.img[i]}")`;
      imgItem.dataset.img = data.img[i];
      imgItem.appendChild(cancelIcon);
      imgBox.insertBefore(imgItem, imgBox.firstChild);
      cancelIcon.addEventListener("click", (e: any) => {
        let targetData = e.target.parentNode.dataset.img;
        fetchDeleteImg("http://localhost:3000/api/delete_session_img", targetData);
        imgBox.removeChild(e.target.parentNode);
      });
    }
    addImgBox.classList.add("img-item-addBox");
    addImgBox.addEventListener("click", (e) => {
      if (!lengthFlag) {
        alert("등록가능한 사진을 초과하셨습니다.");
        return;
      }
      addFileBtn.click();
    });
    imgBox.appendChild(addImgBox);
    lengthOfImg(data.img);
  }

  function makeSymptonImg(data: any) {
    if (data.img === undefined) {
      return;
    }
    imgBtn.style.display = "none";
    commonMakeImg(data);
  }

  function removeAndMakeNewImage(data: any) {
    let imgBox = document.querySelector(".si-img-itemBox");
    while (imgBox.hasChildNodes) {
      if (imgBox.firstChild === null) {
        break;
      }
      imgBox.removeChild(imgBox.firstChild);
    }
    commonMakeImg(data);
  }

  async function fetchDeleteImg(url: string, data: string) {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    try {
      let result = await fetch(url, {
        method: "post",
        credentials: "same-origin",
        headers: myHeaders,
        body: JSON.stringify({ data: data }),
      });
      if (result.status === 200 || 201) {
        let response = await result.json();
        lengthOfImg(response);
      } else {
        throw new Error("reload fetch failed");
      }
    } catch (error) {
      console.error(error);
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
        if (response.state === false) {
          alert("최대 10장까지 등록가능합니다");
          return;
        }
        if (url === "http://localhost:3000/api/modified_upload_image") {
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

  window.add_fileUpload = (e: any) => {
    fetchImage("http://localhost:3000/api/modified_add_upload_image", e.target.files);
  };

  window.previous_fileUpload = (e: any) => {
    fetchImage("http://localhost:3000/api/modified_upload_image", e.target.files);
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
        sigungu.value = data.sigunguCode;
      },
    }).open({
      left: window.screen.width / 2 - width / 2,
      top: window.screen.height / 2 - height / 2,
    });
  };
}
