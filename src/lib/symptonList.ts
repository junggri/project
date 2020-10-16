import symptonModel from "../db/schema/symptonModel";

export let symptonList = async () => {
  let symptons: any = await symptonModel.find().sort({ price: 1 }).limit(10);
  let container = "";
  for (let i = 0; i < symptons.length; i++) {
    let list = ` <li class="problem-item" data-price="${symptons[i].avg_price}">
      <input type="checkbox" class="estimate_btn" id="sypmtom-${symptons[i].code}" onclick="add_List(this)" name="code" value="${symptons[i].code}" />
      <label for="sypmtom-${symptons[i].code}">${symptons[i].content}</label>
    </li>`;
    container += list;
  }
  return container;
};

export let selcted_sympton = async (code: any) => {
  let list = "";
  let data: string[] = [];
  if (code === undefined || code.length === 0) return (list = ` <div class="show-user-selected-item">선택하신 증상이 없습니다.</div>`);
  for (let i = 0; i < code.length; i++) {
    let result: any = await symptonModel.find({ code: code[i] });
    data.push(result[0].content);
  }
  for (let i = 0; i < data.length; i++) {
    list += ` <div class="show-user-selected-item">${data[i]}</div>`;
  }
  return list;
};
