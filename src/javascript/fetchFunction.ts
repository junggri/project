export default async function FetchFunction(method: string, credentials?: string, body?: any) {
  function FetchSet() {
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("CSRF-Token", token);
    return myHeaders;
  }

  class Fetch {
    method: string;
    credentials: string;
    headers: any;
    body: any;
    constructor(method: string, credentials: string, body: any) {
      this.method = method;
      this.credentials = credentials;
      this.headers = FetchSet();
      this.body = body;
    }
  }
  let fetchObj = new Fetch(method, credentials, body);
  return fetchObj;
}
