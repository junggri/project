export default function mypage() {
  let modifiedBtn = document.querySelectorAll(".ms-resultItem-modifieBtn");
  let deleteBtn = document.querySelectorAll(".ms-resultItem-deleteBtn");
  let registerNum = document.querySelector(".userShowStateBox-register-number");
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
}
