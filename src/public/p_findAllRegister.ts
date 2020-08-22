declare global {
  interface Window {
    // login_verify: any;
  }
}
export default function p_findAllRegister() {
  $(document).ready(() => {
    let sigunguCode = document.querySelector("#sigunguCode") as HTMLSelectElement;
    let sigungu = document.querySelector("#sigungu") as HTMLSelectElement;
    let bname = document.querySelector("#bname") as HTMLSelectElement;
    let findBtn = document.querySelector(".find-btn");
    let optionSelect = document.querySelector("#sigunguSelected");
    let selected_sigunguCode, selected_sigungu;

    if (location.search !== "") {
      let decodedUrl = decodeURI(document.location.search);
      for (let i = 0; i < decodedUrl.split("&").length; i++) {
        if (decodedUrl.split("&")[i].split("=")[0] === "sigunguCode") selected_sigunguCode = decodedUrl.split("&")[i].split("=")[1];
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
      if (selected_sigunguCode === "sejong") sigungu.disabled = true;
    }

    // (async function loadGetData() {
    //   if (location.search !== "") {
    //     let selected_sigunguCode, selected_sigungu, selected_bname;
    //     let decodedUrl = decodeURI(document.location.search);

    //     // ///////////////////////////////////////

    //     for (let i = 0; i < decodedUrl.split("&").length; i++) {
    //       if (decodedUrl.split("&")[i].split("=")[0] === "sigunguCode") selected_sigunguCode = decodedUrl.split("&")[i].split("=")[1];
    //       if (decodedUrl.split("&")[i].split("=")[0] === "sigungu") selected_sigungu = decodedUrl.split("&")[i].split("=")[1];
    //       if (decodedUrl.split("&")[i].split("=")[0] === "bname") selected_bname = decodedUrl.split("&")[i].split("=")[1];
    //     }

    //     // ///////////////////////////////////////

    //     if (selected_sigunguCode === "0") return;

    //     // ///////////////////////////////////////

    //     if (selected_sigunguCode === "sejong") {
    //       await getDataFromUrl(sigungu, selected_sigunguCode, "http://localhost:3000/provide/get_sigungu");
    //       await getDataFromUrl(bname, selected_sigunguCode, "http://localhost:3000/provide/get_sejong");
    //       if (decodedUrl.split("&")[2] !== undefined) {
    //         for (let i = 0; i < bname.options.length; i++) {
    //           if (selected_bname === bname.options[i].value) {
    //             bname.options[i].selected = true;
    //             bname.options[i].setAttribute("selected", "selected");
    //           }
    //         }
    //       }
    //       sigungu.disabled = true;
    //     } else {
    //       await getDataFromUrl(sigungu, selected_sigunguCode, "http://localhost:3000/provide/get_sigungu");
    //       await getDataFromUrl(bname, { sido: selected_sigunguCode, sigungu: selected_sigungu }, "http://localhost:3000/provide/get_bname");
    //       sigungu.disabled = false;
    //     }

    //     // ///////////////////////////////////////

    // if (decodedUrl.split("&")[1] !== undefined) {
    //   for (let i = 0; i < sigunguCode.options.length; i++) {
    //     if (selected_sigunguCode === sigunguCode.options[i].value) {
    //       sigunguCode.options[i].selected = true;
    //       sigunguCode.options[i].setAttribute("selected", "selected");
    //     }
    //   }
    // }
    //     if (decodedUrl.split("&")[2] !== undefined) {
    //       for (let i = 0; i < sigungu.options.length; i++) {
    //         if (selected_sigungu === sigungu.options[i].value) {
    //           sigungu.options[i].selected = true;
    //           sigungu.options[i].setAttribute("selected", "selected");
    //         }
    //       }
    //     }
    //     if (decodedUrl.split("&")[3] !== undefined) {
    //       for (let i = 0; i < bname.options.length; i++) {
    //         if (selected_bname === bname.options[i].value) {
    //           bname.options[i].selected = true;
    //           bname.options[i].setAttribute("selected", "selected");
    //         }
    //       }
    //     }
    //   }
    // })();

    // ///////////////////////////////////////

    // async function getDataFromUrl(target: any, data: any, url: any) {
    //   let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    //   let myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
    //   myHeaders.append("CSRF-Token", token);
    //   try {
    //     let result = await fetch(url, {
    //       method: "post",
    //       credentials: "same-origin",
    //       headers: myHeaders,
    //       body: JSON.stringify({ data: data }),
    //     });
    //     if (result.status === 200 || 201) {
    //       let response = await result.json();
    //       for (let i = 0; i < response.sido.length; i++) {
    //         let option = document.createElement("option") as HTMLOptionElement;
    //         option.value = response.sido[i];
    //         option.textContent = response.sido[i];
    //         target.appendChild(option);
    //       }
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

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
      await reset(sigungu, "-- 선택");
      await reset(bname, "-- 선택");
      if (sigunguCode.options[sigunguCode.selectedIndex].value === "sejong") {
        sigungu.disabled = true;
        commonFunction("-- 동 / 면 / 읍", bname, sigunguCode.options[sigunguCode.selectedIndex].value, "http://localhost:3000/provide/get_sejong");
        return;
      }
      if (sigunguCode.options[sigunguCode.selectedIndex].value === "0") {
        await reset(sigungu, "-- 선택");
        await reset(bname, "-- 선택");
        sigungu.disabled = false;
        return;
      }
      sigungu.disabled = false;
      commonFunction("-- 시 / 군 / 구", sigungu, sigunguCode.options[sigunguCode.selectedIndex].value, "http://localhost:3000/provide/get_sigungu");
    });

    //////////////////////////////////////////////////////////////////////////////////

    sigungu.addEventListener("change", async (e) => {
      if (sigungu.options[sigungu.selectedIndex].value === "0") {
        await reset(bname, "-- 선택");
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
