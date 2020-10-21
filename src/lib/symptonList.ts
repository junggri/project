import symptonModel from "../db/schema/symptonModel";
import mysql_t from "../lib/mysql-test";

export let symptonList = async () => {
  try {
    let container = "";
    let conn = await mysql_t();
    let [result]: any = await conn.query("select * from common_sympton");
    for (let i = 0; i < result.length; i++) {
      let list = `
        <li class="problem-item" data-price="${result[i].avg_price}">
    	    <input type="checkbox" class="estimate_btn" id="sypmtom-${result[i].code}" onclick="add_List(this)" name="code" value="${result[i].code}" />
    	    <label for="sypmtom-${result[i].code}">${result[i].content}</label>
    	  </li>`;
      container += list;
    }

    conn.release();

    return container;
  } catch (error) {
    console.error(error);
  }
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
