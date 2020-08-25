declare global {
  interface Window {
    openAddresss: any;
    previous_fileUpload: any;
    add_fileUpload: any;
    formAndBlockBack: any;
    noBack: any;
  }
}

export default function get_estimate() {
  window.history.forward();
  window.noBack = () => {
    window.history.forward();
  };

  let width = 500;
  let height = 500;
  let daum: any = window["daum"];
  let sigungu = document.querySelector("#sigungu") as HTMLInputElement;
  let bname = document.querySelector("#bname") as HTMLInputElement;
  let bname1 = document.querySelector("#bname1") as HTMLInputElement;
  let postcode = document.getElementById("postcode") as HTMLInputElement;
  let sigunguCode = document.querySelector("#sigunguCode") as HTMLInputElement;
  let roadAddress = document.getElementById("roadAddress") as HTMLInputElement;
  let nextBtn = document.querySelector(".estimate-btn-box-next") as HTMLDivElement;
  let previousBtn = document.querySelector(".estimate-btn-box-previous") as HTMLDivElement;
  let submitBtn = document.querySelector(".estimate-btn-box-submit") as HTMLDivElement;
  let page_1 = document.querySelector(".page-1") as HTMLDivElement;
  let page_2 = document.querySelector(".page-2") as HTMLDivElement;
  let imgBtn = document.querySelector(".add-img-icon") as HTMLElement;
  let fileBtn = document.querySelector('input[type="file"]') as HTMLElement;
  let addFileBtn = document.querySelector(".add_new_image_btn") as HTMLElement;
  let lat = document.querySelector("#lat") as HTMLInputElement;
  let lon = document.querySelector("#lon") as HTMLInputElement;
  let registerFrom = document.querySelector(".register_sympton_form") as HTMLFormElement;

  let lengthFlag: boolean = true;

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
        if (response.state === false) {
          return;
        }
        //if session.img isnt defineded runtun
        makeSymptonImg(response);
      } else {
        throw new Error("reload fetch failed");
      }
    } catch (error) {
      console.error(error);
    }
  })();

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

  window.add_fileUpload = (e: any) => {
    fetchImage("http://localhost:3000/api/fetch_add_upload_image", e.target.files);
  };

  window.formAndBlockBack = () => {
    let check = confirm("간편견적을 받아보시겠습니까?");
    if (check) {
      return true;
    } else {
      alert("필수사항을 입력해주시길 바랍니다.");
      return false;
    }
  };

  window.previous_fileUpload = (e: any) => {
    fetchImage("http://localhost:3000/api/fetch_upload_image", e.target.files);
  };

  window.openAddresss = () => {
    new daum.Postcode({
      width: width,
      height: height,
      oncomplete: async function (data: any) {
        let roadAddr = data.roadAddress;
        let extraRoadAddr = "";
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraRoadAddr += extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        Promise.resolve(data)
          .then(() => {
            const { address } = data;
            return new Promise((resolve, reject) => {
              const geocoder = new daum.maps.services.Geocoder();
              geocoder.addressSearch(address, (result: any, status: any) => {
                if (status === daum.maps.services.Status.OK) {
                  const { x, y } = result[0];
                  resolve({ lat: y, lon: x });
                } else {
                  reject();
                }
              });
            });
          })
          .then((result: any) => {
            postcode.value = data.zonecode;
            roadAddress.value = roadAddr;
            sigunguCode.value = data.sigunguCode;
            sigungu.value = data.sigungu;
            bname.value = data.bname;
            bname1.value = data.bname1;
            lat.value = result.lat;
            lon.value = result.lon;
          });
      },
    }).open({
      left: window.screen.width / 2 - width / 2,
      top: window.screen.height / 2 - height / 2,
    });
  };
}
