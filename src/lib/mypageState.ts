import symptonModel from "./model/symptonModel";
import submitController from "../lib/controller/submitController";

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
    // let mainImg;

    // let codeText: string;
    // let result: Content = await symptonModel.find({ code: data[i].code[0] });
    let sumit = await submitController.findAllProvider(data[i].id);

    // data[i].img[0] !== undefined || null ? (mainImg = `url('/${data[i].user_object_id}/${data[i].img[0]}')`) : (mainImg = `url('/noimage.svg')`);
    // data[i].code.length === 1 ? (codeText = (result[0] as Code).content) : (codeText = `${(result[0] as Code).content} 외 ${data[i].code.length - 1}개`);

    let item = ` 
          <div class="sc-item" data-id="${data[i]._id}">
            <div class="sc-item-slo">증상이름</div>
            <div class="sc-item-createdAt">${data[i].createdAt}</div>
            <div class="sc-item-btnBox">
            <span class="get-count">견적서 제안 : ${sumit.length} 개</span>
            <div class="sc-item-showBtn">자세히 보기</div>
            <div class="sc-item-btnBox2">
              <div class="sc-item-modifiedBtn">
                <span>수정</span>
              </div>
              <div class="sc-item-cancel">
                <span>취소</span>
              </div>
            </div>
          </div>
          </div>
        `;
    list += item;
  }
  return list;
};
