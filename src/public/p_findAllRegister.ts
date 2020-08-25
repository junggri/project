declare global {
  interface Window {
    // login_verify: any;
    pagination_pre: any;
    pagination_next: any;
    makepage: any;
    get_change: any;
  }
}
export default function p_findAllRegister() {
  $(document).ready(() => {
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
    // let optionSelect = document.querySelector("#sigunguSelected");
    // let previousBtn = document.querySelector(".frr-pagination-previous") as HTMLInputElement;
    // let nextBtn = document.querySelector(".frr-pagination-next") as HTMLInputElement;

    makeSymptonPage(symptonItems);

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
        symptonItems[i].addEventListener("click", (e: any) => {
          window.location.href = `/provide/sympton_estimate?${e.target.parentNode.dataset.registerid}`;
        });
      }
    }

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

    async function commonFunction(text: string, target: any, data: any, url: string) {
      await reset(target, text);
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
        commonFunction("-- 동 / 면 / 읍", bname, sigunguCode.options[sigunguCode.selectedIndex].value, "http://localhost:3000/provide/get_sejong");
        return;
      }
      if (sigunguCode.options[sigunguCode.selectedIndex].value === "0") {
        await reset(sigungu, "-- 전체");
        await reset(bname, "-- 전체");
        sigungu.disabled = false;
        return;
      }
      sigungu.disabled = false;
      commonFunction("-- 시 / 군 / 구", sigungu, sigunguCode.options[sigunguCode.selectedIndex].value, "http://localhost:3000/provide/get_sigungu");
    });

    //////////////////////////////////////////////////////////////////////////////////

    sigungu.addEventListener("change", async (e) => {
      if (sigungu.options[sigungu.selectedIndex].value === "0") {
        await reset(bname, "-- 전체");
        return;
      }
      commonFunction(
        "-- 동 / 면 / 읍",
        bname,
        { sido: sigunguCode.options[sigunguCode.selectedIndex].value, sigungu: sigungu.options[sigungu.selectedIndex].value },
        "http://localhost:3000/provide/get_bname"
      );
    });
  });
}
