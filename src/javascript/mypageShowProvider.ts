import FetchFunction from "./fetchFunction";
export default function mypageEstimate() {
  let acceptBtn = document.querySelectorAll(".si-accept-btn");
  let previousAccept = document.querySelector(".previous-accept-box") as HTMLDivElement;
  let confirmBtn = document.querySelector(".pab-confirmBtn") as HTMLDivElement;
  let cancelBtn = document.querySelector(".pab-cancelBtn") as HTMLDivElement;
  let hiddenInput = document.querySelector(".pab-hidden") as HTMLInputElement;

  (async () => {
    let length = window.location.href.split("/").length;
    try {
      let result = await fetch(`http://localhost:3000/web/check/reigister/state/${window.location.href.split("/")[length - 1]}`);
      if (result.status === 200 || 201) {
        let response = await result.json();
        if (response.state === false) {
          alert("잘못된 접근입니다");
          return (window.location.href = "/web/mypage/showestimate");
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
        try {
          let result = await fetch(`http://localhost:3000/web/find/providers/submit/${acceptBtn[i].parentNode.parentNode.dataset.submitid}`);
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
    try {
      let fetchObj: any = await FetchFunction("post", "same-origin", JSON.stringify({ submit_id: submitId }));
      let result = await fetch("http://localhost:3000/web/acception/submit", fetchObj);
      if (result.status === 200 || 201) {
        window.location.href = "/web/mypage/showestimate";
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
