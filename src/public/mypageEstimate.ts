export default function mypageEstimate() {
  let acceptBtn = document.querySelectorAll(".si-accept-btn");
  let previousAccept = document.querySelector(".previous-accept-box") as HTMLDivElement;
  let confirmBtn = document.querySelector(".pab-confirmBtn") as HTMLDivElement;
  let cancelBtn = document.querySelector(".pab-cancelBtn") as HTMLDivElement;
  let hiddenInput = document.querySelector(".pab-hidden") as HTMLInputElement;

  function FetchSet() {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    return myHeaders;
  }

  (async () => {
    let length = window.location.href.split("/").length;
    let header = FetchSet();
    try {
      let result = await fetch("http://localhost:3000/api/check_reigister_state", {
        method: "post",
        credentials: "same-origin",
        headers: header,
        body: JSON.stringify({ register_id: window.location.href.split("/")[length - 1] }),
      });
      if (result.status === 200 || 201) {
        let response = await result.json();
        if (!response.state) {
          alert("잘못된 접근입니다");
          return (window.location.href = "/api/mypage/showestimate");
        }
      } else {
        let error = new Error("오류");
        error.name = "error";
        throw error;
      }
    } catch (error) {
      console.error(error);
    }
  })();

  function addEventOnAcceptBtn(acceptBtn: any) {
    for (let i = 0; i < acceptBtn.length; i++) {
      acceptBtn[i].addEventListener("click", async (e: any) => {
        let header = FetchSet();
        let result = await fetch("http://localhost:3000/api/find_submit", {
          method: "post",
          credentials: "same-origin",
          headers: header,
          body: JSON.stringify({ submit_id: acceptBtn[i].parentNode.parentNode.dataset.submitid }),
        });
        try {
          if (result.status === 200 || 201) {
            let response = await result.json();
            if (response.state === false) {
              alert("견적이 삭제되었거나, 존재하지 않습니다.");
              return window.location.reload();
            }
            hiddenInput.value = response.data._id;
            previousAccept.style.display = "block";
            $(".previous-accept-box").css({
              top: ($(window).height() - $(".previous-accept-box").outerHeight()) / 2 + $(window).scrollTop() + "px",
              left: ($(window).width() - $(".previous-accept-box").outerWidth()) / 2 + $(window).scrollLeft() + "px",
            });
          }
        } catch (error) {
          console.error(error);
        }
      });
    }
  }
  addEventOnAcceptBtn(acceptBtn);

  cancelBtn.addEventListener("click", (e) => {
    previousAccept.style.display = "none";
  });

  confirmBtn.addEventListener("click", (e) => {
    let submitId = hiddenInput.value;
    acceptSubmit(submitId);
  });

  async function acceptSubmit(submitId: string) {
    let header = FetchSet();
    try {
      let result = await fetch("http://localhost:3000/api/accept_estimate", {
        method: "post",
        credentials: "same-origin",
        headers: header,
        body: JSON.stringify({ submit_id: submitId }),
      });
      if (result.status === 200 || 201) {
        window.location.href = "/api/mypage/showestimate";
      } else {
        let error = new Error("젼적받기 실패");
        error.name = "fail to accept";
        throw error;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
