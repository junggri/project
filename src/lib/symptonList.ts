import symptonModel from "./model/symptonModel";

let symptonList = async () => {
  //인덱서블로 바꿔보기
  let symptons: any = await symptonModel.find().sort({ price: 1 }).limit(10);
  let container = "";
  for (let i = 0; i < symptons.length; i++) {
    let list = ` <li class="problem-item" data-price="${symptons[i].avg_price}">
      <input type="checkbox" class="estimate_btn" id="sypmtom-${symptons[i].code}" onclick="add_List(this)" name="sympton" value="${symptons[i].code}" />
      <label for="sypmtom-${symptons[i].code}">${symptons[i].content}</label>
    </li>`;
    container += list;
  }
  return container;
};
export default symptonList;
