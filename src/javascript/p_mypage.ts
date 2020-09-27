import FetchFunction from "./fetchFunction";
export default function p_mypage() {
  async function getProviderData() {
    try {
      let fetchObj: any = await FetchFunction("post", "same-origin", null);
      let result = await fetch("http://localhost:3000/provide/get_mypage_data", fetchObj);
      if (result.status === 200 || 201) {
        let response = await result.json();
      }
    } catch (error) {}
  }
}
