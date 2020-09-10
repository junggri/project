export default function showsubmit() {
  let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("CSRF-Token", token);

  async function getSubmitData() {}
}
