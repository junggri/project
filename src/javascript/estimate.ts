import FetchFunction from "./fetchFunction";
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
  const estimate_price = document.querySelector(".estimate-pre-price") as HTMLDivElement;
  const estimate_num = document.querySelector(".estimate-pre-num");
  const estimateForm = document.querySelector(".estimateForm") as HTMLFormElement;
  const estimateBtn = document.querySelector(".estimate-btn") as HTMLDivElement;
  let data: string[] = [];
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
    estimate_price.textContent = `${String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
    estimate_num.textContent = `${estimate_item.length}개 선택`;
    estimate_container.scrollTop = estimate_container.scrollHeight;
  };

  async function isLogined(url: string, data: any) {
    try {
      let fetchObj: any = await FetchFunction("post", "same-origin", JSON.stringify(data));
      let result = await fetch(url, fetchObj);
      if (result.status === 200 || 201) {
        let response = await result.json();
        if (response.state === true) {
          estimateForm.submit();
          estimateForm.reset();
        } else {
          if (confirm("로그인이 필요한 서비스입니다.")) {
            location.href = "/web/login";
          }
        }
      } else {
        throw new Error("로그인유무 확인 실패");
      }
    } catch (error) {
      console.error(error);
    }
  }

  estimateBtn.addEventListener("click", (e) => {
    try {
      if (estimate_item === undefined || estimate_item.length === 0) {
        return isLogined("http://localhost:3000/web/user/check/login", { code: data, price: price });
      } else {
        for (let i = 0; i < estimate_item.length; i++) {
          data.push(estimate_item[i].dataset.code);
        }
        return isLogined("http://localhost:3000/web/pre_estimate", { code: data, price: price });
      }
    } catch (error) {
      console.error(error);
    }
  });

  //input submit으로 바꾸고 실핼하기
}
//그냥 위에서 리턴값?모르겠다
