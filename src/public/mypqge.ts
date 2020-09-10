import { captureRejectionSymbol } from "events";

export default function mypage() {
  let modifiedBtn = document.querySelectorAll(".sc-item-modifiedBtn");
  let deleteBtn = document.querySelectorAll(".sc-item-cancel");
  let showBtn = document.querySelectorAll(".sc-item-showBtn");
  let showAccept = document.querySelectorAll(".show-accept-data-btn");
  let showStatebox = document.querySelector(".show-providerAndsympton-dataBox") as HTMLDivElement;
  let priceValue = document.querySelector(".spd-price-value") as HTMLDivElement;
  let contentValue = document.querySelector(".submit-data-content") as HTMLDivElement;
  let statePayment = document.querySelector(".spd-payment-state") as HTMLSpanElement;
  let checkBtn = document.querySelector(".spd-footer-btn") as HTMLInputElement;

  for (let i = 0; i < modifiedBtn.length; i++) {
    modifiedBtn[i].addEventListener("click", () => {
      let userNode: any = modifiedBtn[i].parentNode.parentNode.parentNode;
      let id: string = userNode.dataset.id;
      location.href = `/api/modified_estimate/${id}`;
    });
  }

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", async (e: any) => {
      let deleteConfirm = confirm("정말로 등록을 삭제하시겠습니까?");
      let target: any = deleteBtn[i].parentNode.parentNode.parentNode;
      if (deleteConfirm) {
        target.parentNode.removeChild(target);
        let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("CSRF-Token", token);
        try {
          let result = await fetch("http://localhost:3000/api/delete_register_sympton", {
            method: "post",
            credentials: "same-origin",
            headers: myHeaders,
            body: JSON.stringify({ id: target.dataset.id }),
          });
          let response = await result.json();
        } catch (error) {
          console.error(error);
        }
      }
    });
  }

  for (let i = 0; i < showBtn.length; i++) {
    showBtn[i].addEventListener("click", async (e: any) => {
      let target: any = showBtn[i].parentNode.parentNode;
      let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("CSRF-Token", token);
      let result = await fetch("http://localhost:3000/api/find_provider", {
        method: "post",
        credentials: "same-origin",
        headers: myHeaders,
        body: JSON.stringify({ sympton_id: target.dataset.id }),
      });
      try {
        if (result.status === 200 || 201) {
          let response = await result.json();
          if (response.state === false) return alert("받은 견적이 존재하지 않습니다.");
          if (response.state === "accept") {
            alert("이미 진행중인 견적입니다.");
            window.location.reload();
            return;
          }
          window.location.href = `estimateDetail/${target.dataset.id}`;
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

  async function addEventOnShowAcceptBtn(showAccept: any) {
    for (let i = 0; i < showAccept.length; i++) {
      showAccept[i].addEventListener("click", async (e: any) => {
        let target: any = showAccept[i].parentNode;
        let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("CSRF-Token", token);
        let result = await fetch("http://localhost:3000/api/get_data_accepted", {
          method: "post",
          credentials: "same-origin",
          headers: myHeaders,
          body: JSON.stringify({ submit_id: target.dataset.id }),
        });
        try {
          if (result.status === 200 || 201) {
            let response = await result.json();
            console.log(response);
            let payment;
            console.log(response.submit.payment);
            response.submit.payment === false ? (payment = "결제전") : (payment = "결제 완료");
            showStatebox.style.display = "block";
            $(".show-providerAndsympton-dataBox").css({
              top: ($(window).height() - $(".show-providerAndsympton-dataBox").outerHeight()) / 2 + $(window).scrollTop() + "px",
              left: ($(window).width() - $(".show-providerAndsympton-dataBox").outerWidth()) / 2 + $(window).scrollLeft() + "px",
            });
            priceValue.textContent = `${response.submit.submit_price} 원`;
            contentValue.textContent = response.submit.content;
            statePayment.textContent = payment;
          }

          checkBtn.addEventListener("click", (e) => {
            showStatebox.style.display = "none";
          });
        } catch (error) {
          console.error(error);
        }
      });
    }
  }
  addEventOnShowAcceptBtn(showAccept);
  // document.onreadystatechange = function () {
  //   var state = document.readyState;
  //   if (state == "interactive") {
  //     console.log(1);
  //   } else if (state == "complete") {
  //     console.log(2);
  //   }
  // };
}
