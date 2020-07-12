import symptonModel from "./model/symptonModel";

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
    let mainImg;
    data[i].img[0] !== undefined || null ? (mainImg = `url('/${data[i].email}/${data[i].img[0]}')`) : (mainImg = `url('/noimage.svg')`);
    let codeText: string;
    let result: Content = await symptonModel.find({ code: data[i].code[0] });
    if (data[i].code.length === 1) {
      codeText = (result[0] as Code).content;
    } else {
      codeText = `${(result[0] as Code).content} 외 ${data[i].code.length - 1}개`;
    }
    let item = ` <div class="ms-resultItem-container" data-id="${data[i]._id}">
          <div class="ms-resultItem">
          <span class="ms-resultItem-img" style="background-image:${mainImg};"></span>
            <div class="ms-resultItem-right">
              <span class="ms-resultItem-time">${data[i].createdAt}</span>
              <span class="ms-resultItem-symptom">${codeText}</span>
              <div class="ms-resultItem-price">7000-1000원</div>
            </div>
            <div class="ms-resultItem-BtnBox">
              <span class="ms-resultItem-modifieBtn">
                수정하기
              </span>
              <span class="ms-resultItem-deleteBtn">
                삭제하기
              </span>
            </div>
          </div>  
        </div>`;
    list += item;
  }
  return list;
};
