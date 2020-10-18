export default function showGotEstimate() {
  let gotItems = document.querySelectorAll(".sg-item") as NodeList;

  function AddEventToGotItem(Item: NodeList) {
    for (let i = 0; i < Item.length; i++) {
      Item[i].addEventListener("click", (e: Event): void => {
        let target = (e.target as HTMLDivElement).parentNode as HTMLDivElement;
        window.location.href = `/provide/sympton?${target.dataset.submitid}`;
      });
    }
  }
  AddEventToGotItem(gotItems);
}
