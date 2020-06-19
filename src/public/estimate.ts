declare global {
  interface Window {
    add_List: any;
    get_estimate: any;
  }
}

export default function () {
  const estimate_container = document.querySelector(
    ".estimate-pre-result-itembox"
  ) as HTMLDivElement;
  const estimate_list = document.querySelector(".estimate-pre-result-item");
  const estimate_price = document.querySelector(".estimate-pre-price");
  const problem_item = document.querySelectorAll(".problem-item");
  const estimate_num = document.querySelector(".estimate-pre-num");
  let estimate_item;
  let lists_height: number = 0;
  let added_item;
  let price: number = 0;

  window.add_List = function (e) {
    if (e.checked) {
      let li = document.createElement("li");
      let span = document.createElement("span");
      li.classList.add("estimate-item");
      li.classList.add(`${e.id}`);
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
    }
    estimate_price.textContent = `${String(price).replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    )}원`;
    estimate_num.textContent = `${estimate_item.length}개 선택`;
    estimate_container.scrollTop = estimate_container.scrollHeight;
  };

  window.get_estimate = async function () {
    let return_flag;
    let token = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");
    try {
      let result = await fetch("http://localhost:3000/api/pre_estimate", {
        method: "post",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "CSRF-Token": token,
        },
      });
      let check_logined = await result.json();
      if (check_logined.state) {
        return_flag = true;
      } else {
        return_flag = false;
      }
    } catch (error) {
      console.error(error);
    }
    return return_flag;
  };
}
//그냥 위에서 리턴값?모르겠다
