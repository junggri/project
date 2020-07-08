export default function mypage() {
  let modifiedBtn = document.querySelectorAll(".ms-resultItem-modifieBtn");
  let deleteBtn = document.querySelectorAll(".ms-resultItem-deleteBtn");

  for (let i = 0; i < modifiedBtn.length; i++) {
    modifiedBtn[i].addEventListener("click", () => {
      let userNode: any = modifiedBtn[i].parentNode.parentNode.parentNode;
      let id: string = userNode.dataset.id;
      location.href = `/api/modified_estimate/${id}`;
    });
  }
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", () => {});
  }
}
