import symptonModel from "./model/symptonModel";
import submitController from "../lib/controller/submitController";
import { ConnectionStates } from "mongoose";

export let makeListSympton = async (data: any) => {
  let list = "";
  interface Content {
    [key: number]: object;
  }
  interface Code {
    content: string;
  }
  if (data.length === 0) {
    let list = `
      <div class="ms-resultBox-nonedata">
        아직 조회할 자료가 존재하지 않습니다.
      </div>
    `;
    return list;
  }
  for (let i = 0; i < data.length; i++) {
    let mainImg, gender;
    let showItem = " ";
    let codeText: string;
    let result: Content = await symptonModel.find({ code: data[i].code[0] });
    let response = await submitController.findAllProvider(data[i].id);
    data[i].img[0] !== undefined || null ? (mainImg = `url('/${data[i].user_object_id}/${data[i].img[0]}')`) : (mainImg = `url('/noimage.svg')`);
    data[i].code.length === 1 ? (codeText = (result[0] as Code).content) : (codeText = `${(result[0] as Code).content} 외 ${data[i].code.length - 1}개`);
    if (response.length !== 0) {
      for (let i = 0; i < response.length; i++) {
        response[i].provider[0].gender === "male" ? (gender = "남성") : (gender = "여성");
        let showItems = `
            <div class="sge-item" data-submitId=${response[i].id}>
            <div class="sge-item-img"></div>
            <div class="sge-provider-data">
              <div class="sge-item-name-box">
                <span>이름</span>
                <span>${response[i].provider[0].name}</span>
              </div>
              <div class="sge-item-sex-box">
                <span>성별</span>
                <span>${gender}</span>
              </div>
            </div>
            <div class="sge-price-box">
              <div>견적금액</div>
              <div>${response[i].submit_price}원</div>
            </div>
          </div>
        `;
        showItem += showItems;
      }
    }
    let item = ` <div class="ms-resultItem-container" data-id="${data[i]._id}">
          <div class="ms-resultItem">
          <span class="ms-resultItem-img" style="background-image:${mainImg};"></span>
            <div class="ms-resultItem-right">
              <span class="ms-resultItem-time">${data[i].createdAt}</span>
              <span class="ms-resultItem-symptom">${codeText}</span>
              <div class="ms-resultItem-price">${data[i].predict_price}원</div>
            </div>
            <div class="ms-resultItem-BtnBox">
              <span class="ms-resultItem-showGotEstimate">
              받은견적보기
              </span>
              <span class="ms-resultItem-modifieBtn">
                수정하기
              </span>
              <span class="ms-resultItem-deleteBtn">
                삭제하기
              </span>
            </div>
          </div>  
        </div>
        <div class="show-got-estimate-container ${data[i]._id}">
            <div class="show-got-estimate">
            ${showItem}
            </div>
          </div>
        `;
    list += item;
  }

  return list;
};
