declare global {
  interface Window {
    pagination_pre: any;
    pagination_next: any;
    makepage: any;
    get_change: any;
  }
}

export default function p_findAllRegister() {
  let sigunguCode = document.querySelector("#sigunguCode") as HTMLSelectElement;
  let sigungu = document.querySelector("#sigungu") as HTMLSelectElement;
  let bname = document.querySelector("#bname") as HTMLSelectElement;
  let findBtn = document.querySelector(".find-btn") as HTMLInputElement;
  let selected_sigunguCode, page_num: string;
  let decodedUrl = decodeURI(document.location.search);
  let pageValue = document.querySelector(".frr-pagination-pageNum") as HTMLInputElement;
  let lastPage = document.querySelector(".frr-pagination-allPage") as HTMLSpanElement;
  let findForm = document.querySelector(".findForm") as HTMLFormElement;
  let changeFromSelect = false;
  let symptonItems = document.querySelectorAll(".frr-item-content");

  if (location.search !== "") {
    for (let i = 0; i < decodedUrl.split("&").length; i++) {
      if (decodedUrl.split("&")[i].split("=")[0] === "sigunguCode") selected_sigunguCode = decodedUrl.split("&")[i].split("=")[1];
      if (decodedUrl.split("&")[i].split("=")[0] === "page") page_num = decodedUrl.split("&")[i].split("=")[1];
    }
    //////////////////////////////////////////////////////////////////////////////////
    if (decodedUrl.split("&")[1] !== undefined) {
      for (let i = 0; i < sigunguCode.options.length; i++) {
        if (selected_sigunguCode === sigunguCode.options[i].value) {
          sigunguCode.options[i].selected = true;
          sigunguCode.options[i].setAttribute("selected", "selected");
        }
      }
    }
    //////////////////////////////////////////////////////////////////////////////////
    blockGetUrl(page_num, lastPage);
    pageValue.value = page_num;
    if (selected_sigunguCode === "sejong") sigungu.disabled = true;
  } else {
    pageValue.value = "1";
  }

  function blockGetUrl(page_num: string, lastPage: HTMLSpanElement) {
    if (Number(page_num) > Number(lastPage.textContent)) {
      alert("잘못된 접근입니다.");
      return history.back();
    }
  }

  function makeSymptonPage(symptonItems: any) {
    for (let i = 0; i < symptonItems.length; i++) {
      symptonItems[i].addEventListener("click", async (e: any) => {
        try {
          let result = await fetch(`http://localhost:3000/provide/check/state/item/${e.target.parentNode.dataset.registerid}`);
          if (result.status === 200 || 201) {
            let response = await result.json();
            let { state } = response;
            if (state === false) {
              let err = new Error("삭제된 증상입니다.");
              err.name = "Delete_data";
              throw err;
            } else if (state === "accept") {
              let err = new Error();
              err.name = "진행중인 견적입니다.";
              throw err;
            }
            return (window.location.href = `/provide/sympton?${e.target.parentNode.dataset.registerid}`);
          } else {
            let err = new Error("NETWORK_ERROR");
            err.name = "NET";
            throw err;
          }
        } catch (error) {
          console.error(error, error.name);
          alert(error);
          return window.location.reload();
        }
      });
    }
  }
  makeSymptonPage(symptonItems);

  findBtn.addEventListener("click", (e) => {
    if (changeFromSelect) {
      pageValue.value = "1";
    }
  });

  window.pagination_pre = () => {
    if (pageValue.value === "1") {
      return;
    } else {
      let page = Number(pageValue.value) - 1;
      pageValue.value = String(page);
      findForm.submit();
    }
  };

  window.pagination_next = () => {
    if (pageValue.value === lastPage.textContent) {
      return;
    } else {
      let page = Number(pageValue.value) + 1;
      pageValue.value = String(page);
      findForm.submit();
    }
  };

  window.get_change = () => {
    changeFromSelect = true;
  };

  async function reset(target: any, text: string) {
    let option = document.createElement("option") as HTMLOptionElement;
    while (target.hasChildNodes()) {
      target.removeChild(target.firstChild);
    }
    option.selected = true;
    option.text = text;
    option.value = "0";
    //value 바꾸면 여기도 바꾸기
    target.appendChild(option);
  }
  //////////////////////////////////////////////////////////////////////////////////

  async function commonFunction(text: string, target: any, url: string) {
    await reset(target, text);
    try {
      // let fetchObj: any = await FetchFunction("post", "same-origin", JSON.stringify({ data: data }));
      let result = await fetch(url);
      if (result.status === 200 || 201) {
        let response = await result.json();
        for (let i = 0; i < response.sido.length; i++) {
          let option = document.createElement("option") as HTMLOptionElement;
          option.value = response.sido[i];
          option.textContent = response.sido[i];
          target.appendChild(option);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  //////////////////////////////////////////////////////////////////////////////////

  sigunguCode.addEventListener("change", async (e) => {
    await reset(sigungu, "-- 전체");
    await reset(bname, "-- 전체");
    if (sigunguCode.options[sigunguCode.selectedIndex].value === "sejong") {
      sigungu.disabled = true;
      commonFunction("-- 동 / 면 / 읍", bname, `http://localhost:3000/provide/get/sejong/${sigunguCode.options[sigunguCode.selectedIndex].value}`);
      return;
    }
    if (sigunguCode.options[sigunguCode.selectedIndex].value === "0") {
      await reset(sigungu, "-- 전체");
      await reset(bname, "-- 전체");
      sigungu.disabled = false;
      return;
    }
    sigungu.disabled = false;
    commonFunction("-- 시 / 군 / 구", sigungu, `http://localhost:3000/provide/get/sigungu/${sigunguCode.options[sigunguCode.selectedIndex].value}`);
  });

  //////////////////////////////////////////////////////////////////////////////////

  sigungu.addEventListener("change", async (e) => {
    if (sigungu.options[sigungu.selectedIndex].value === "0") {
      await reset(bname, "-- 전체");
      return;
    }
    commonFunction("-- 동 / 면 / 읍", bname, `http://localhost:3000/provide/get/bname/${sigunguCode.options[sigunguCode.selectedIndex].value}/${sigungu.options[sigungu.selectedIndex].value}`);
  });
}
