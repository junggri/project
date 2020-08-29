export default function mypage() {
  let modifiedBtn = document.querySelectorAll(".ms-resultItem-modifieBtn");
  let deleteBtn = document.querySelectorAll(".ms-resultItem-deleteBtn");
  let registerNum = document.querySelector(".userShowStateBox-register-number");
  let showBtn = document.querySelectorAll(".ms-resultItem-showGotEstimate");
  let submitItem = document.querySelectorAll(".sge-item");

  for (let i = 0; i < modifiedBtn.length; i++) {
    modifiedBtn[i].addEventListener("click", () => {
      let userNode: any = modifiedBtn[i].parentNode.parentNode.parentNode;
      let id: string = userNode.dataset.id;
      location.href = `/api/modified_estimate/${id}`;
    });
  }

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", async (e) => {
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
          registerNum.textContent = response.length;
        } catch (error) {
          console.error(error);
        }
      }
    });
  }

  for (let i = 0; i < showBtn.length; i++) {
    showBtn[i].addEventListener("click", async (e: any) => {
      let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("CSRF-Token", token);
      let result = await fetch("http://localhost:3000/api/find_provider", {
        method: "post",
        credentials: "same-origin",
        headers: myHeaders,
        body: JSON.stringify({ sympton_id: e.target.parentNode.parentNode.parentNode.dataset.id }),
      });
      try {
        if (result.status === 200 || 201) {
          let response = await result.json();
          if (response.state === false) return alert("받은 견적이 존재하지 않습니다.");
          $(`.${response.data[0].symptonId}`).stop().animate({ height: "toggle" });
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

  for (let i = 0; i < submitItem.length; i++) {
    submitItem[i].addEventListener("click", async (e: any) => {
      let submitId = (submitItem[i] as any).dataset.submitid;
      let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("CSRF-Token", token);
      let result = await fetch("http://localhost:3000/api/find_submit", {
        method: "post",
        credentials: "same-origin",
        headers: myHeaders,
        body: JSON.stringify({ submit_id: submitId }),
      });
      try {
        if (result.status === 200 || 201) {
          let response = await result.json();
          if (response.state === false) return alert("견적이 삭제되었거나, 존재하지 않습니다.");
        }
      } catch (error) {
        console.error(error);
      }
    });
  }
}
