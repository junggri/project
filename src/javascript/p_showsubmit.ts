export default function showsubmit() {
  let SubmitItems = document.querySelectorAll(".sbc-item") as NodeList;

  function AddEventToGotItem(Item: NodeList) {
    for (let i = 0; i < Item.length; i++) {
      Item[i].addEventListener("click", async (e: Event) => {
        let target = (e.target as HTMLDivElement).parentNode as HTMLDivElement;
        try {
          let result = await fetch(`http://localhost:3000/provide/check/flags/submit/${target.dataset.submitid}`);
          if (result.status === 200 || 201) {
            let response = await result.json();
            if (response.state === "accept" || response.state === "submit") {
              window.location.href = `/provide/sympton?${response.symptonId}`;
            }
          }
        } catch (error) {
          console.log(error);
        }
      });
    }
  }
  AddEventToGotItem(SubmitItems);
}
