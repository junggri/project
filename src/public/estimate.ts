declare global {
  interface Window {
    add_List: any;
    get_estimate: any;
    isLogined: any;
  }
}

export default function () {
  const estimate_container = document.querySelector(".estimate-pre-result-itembox") as HTMLDivElement;
  const estimate_list = document.querySelector(".estimate-pre-result-item");
  const estimate_price = document.querySelector(".estimate-pre-price");
  const estimate_num = document.querySelector(".estimate-pre-num");
  const estimateForm = document.querySelector(".estimateForm") as HTMLFormElement;
  let estimate_item: any;
  let added_item: any;
  let lists_height: number = 0;
  let price: number = 0;

  window.add_List = function (e: any) {
    if (e.checked) {
      let li = document.createElement("li");
      let span = document.createElement("span");
      li.classList.add("estimate-item");
      li.classList.add(`${e.id}`);
      li.dataset.code = e.value;
      span.innerHTML = e.nextSibling.nextElementSibling.innerHTML;
      estimate_list.appendChild(li);
      li.appendChild(span);
      added_item = document.querySelector(`.${e.id}`);
      lists_height += added_item.offsetHeight;
      price += Number(e.parentNode.dataset.price);
      estimate_item = document.querySelectorAll(".estimate-item");
    } else {
      let remove_item = document.querySelector(`.${e.id}`);
      remove_item.parentNode.removeChild(remove_item);
      lists_height -= added_item.offsetHeight;
      price -= Number(e.parentNode.dataset.price);
      estimate_item = document.querySelectorAll(".estimate-item");
    }
    // console.log(estimate_item);
    estimate_price.textContent = `${String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
    estimate_num.textContent = `${estimate_item.length}개 선택`;
    estimate_container.scrollTop = estimate_container.scrollHeight;
  };

  async function isLogined(url: string, data: any) {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    // console.log(data);
    try {
      let result = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: myHeaders,
        body: JSON.stringify(data),
      });
      if (result.status === 200 || 201) {
        let response = await result.json();
        if (response.state === true) {
          estimateForm.submit();
          estimateForm.reset();
        } else {
          if (confirm("로그인이 필요한 서비스입니다.")) {
            location.href = "/api/login";
          }
        }
      } else {
        throw new Error("로그인유무 확인 실패");
      }
    } catch (error) {
      console.error(error);
    }
  }

  $(".estimate-btn").on("click", () => {
    if (estimate_item === undefined) {
      return;
    }
    let data = [];
    for (let i = 0; i < estimate_item.length; i++) {
      data.push(estimate_item[i].dataset.code);
    }
    isLogined("http://localhost:3000/api/pre_estimate", data);
  });
  //input submit으로 바꾸고 실핼하기
}
//그냥 위에서 리턴값?모르겠다
