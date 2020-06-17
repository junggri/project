declare global {
  interface Window {
    add_List: any;
  }
}

let price = null;

export default function () {
  const estimate_btn = document.querySelector(".estimate_btn");
  const estimate_box = document.querySelector(".estimate-pre-result-item");
  const estimate_price = document.querySelector(".estimate-pre-price");
  window.add_List = function (e) {
    let div = document.createElement("div");
    div.classList.add("estimate-item");

    estimate_box.appendChild(div);
    estimate_price.textContent = `${e.parentNode.dataset.price}원`;
  };
}
