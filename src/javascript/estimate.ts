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

  estimateBtn.addEventListener("click", async (e) => {
    try {
      let result = await fetch("http://localhost:3000/web/user/check/login");
      if (result.status === 200 || 201) {
        let response = await result.json();
        if (response.state) {
          estimateForm.submit();
          estimateForm.reset();
        } else {
          if (confirm("로그인이 필요한 서비스입니다.")) return (location.href = "/web/login");
        }
      }
    } catch (error) {
      console.error(error);
      //5-- 서버에러
    }
  });
}
