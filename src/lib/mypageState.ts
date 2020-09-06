import submitController from "./controller/submitController";

export let makeListSympton = async (data: any) => {
  let list = "";
  let item;
  if (data.length === 0) {
    let list = `
      <div class="ms-resultBox-nonedata">
        아직 조회할 자료가 존재하지 않습니다.
      </div>
    `;
    return list;
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i].state === "accept") {
      let response = await submitController.showProvider(data[i]._id);
      let result = response.provider[0];
      item = `
      <div class="sc-item accept-item" data-id="${response._id}">
        <div class="sc-item-slo">${result.name} 님의</br> 견적을 수락하셨습니다.</div>
        <div class="show-accept-data-btn">
          <span>자세히 보기</span>
        </div>
     </div>
        `;
    } else {
      item = ` 
            <div class="sc-item" data-id="${data[i]._id}">
              <div class="sc-item-slo">${data[i].sympton_detail}</div>
              <div class="sc-item-createdAt">${data[i].createdAt}</div>
              <div class="sc-item-btnBox">
              <span class="get-count">견적서 제안 : ${data[i].provider.length} 개</span>
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
    }
    list += item;
  }
  return list;
};

export let makeSumbitbox = async (data: any) => {
  let list = "",
    item,
    gender;

  for (let i = 0; i < data.length; i++) {
    data[i].provider[0].gender === "male" ? (gender = "남") : (gender = "여");
    item = `
        <div class="submit-item" data-submitId="${data[i]._id}">
        <div class="si-provider-data">
          <div class="si-img"></div>
          <div class="si-username">${data[i].provider[0].name}(${gender})</div>
          <div class="si-email">${data[i].provider[0].email}</div>
          <div class="si-date">
            <span>견적제출날짜 :</span>
            <span>${data[i].create}</span>
          </div>
        </div>
        <div class="si-itemBox">
          <div class="si-contentBox">
            <span>예상원인</span>
            <span>${data[i].content}</span>
          </div>
        </div>
        <div class="si-footerBox">
          <div class="si-price">
            <span>견적금액 :</span>
            <span>${data[i].submit_price}</span>
          </div>
          <div class="si-accept-btn">
            <span>수락하기</span>
          </div>
        </div>
      </div>
      `;
    list += item;
  }
  return list;
};
