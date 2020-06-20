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
  const problem_item = document.querySelectorAll(".problem-item");
  const estimate_num = document.querySelector(".estimate-pre-num");
  const estimateForm = document.querySelector(".estimateForm") as HTMLFormElement;
  let estimate_item;
  let added_item;
  let lists_height: number = 0;
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
    estimate_price.textContent = `${String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
    estimate_num.textContent = `${estimate_item.length}개 선택`;
    estimate_container.scrollTop = estimate_container.scrollHeight;
  };

  function isLogined(url, item) {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: myHeaders,
      body: JSON.stringify(item),
    })
      .then((response) => {
        if (response.status === 200 || 201) {
          return response.json();
        } else {
          throw new Error("esimtae 오류");
        }
      })
      .then((result) => {
        if (result.state === true) {
          estimateForm.submit();
        } else {
          if (confirm("로그인이 필요한 서비스입니다.")) {
            location.href = "/api/login";
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $(".estimate-btn").on("click", () => {
    let dataArray: any = [];
    estimate_item.forEach((element) => {
      dataArray.push(element.classList[1]);
    });

    isLogined("http://localhost:3000/api/pre_estimate", dataArray);
  });
}
//그냥 위에서 리턴값?모르겠다
