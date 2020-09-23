export const MakeAllSymptonList = (data: any, pageNum: any, divided_num: any) => {
  let list = "";
  if (data.length === 0) {
    list = `
      <div class="doNotFindSympton">
        <span>조회할 자료가 존재하지 않습니다.</span>
      </div>
    `;
    return list;
  }
  for (let i = 0; i < data.length; i++) {
    let estimateState;
    data[i].state === "accept" ? (estimateState = `<span class="frr-item-estimate">진행중</span>`) : (estimateState = `<span class="frr-item-estimate">${data[i].provider.length}</span>`);
    let item = `
        <div class="find-register-resultItem" data-registerId="${data[i]._id}">
            <span>${(pageNum - 1) * divided_num + i + 1}</span>
            <span class="frr-item-content">${data[i].sympton_detail}</span>
            <span class="frr-item-whoMake">${data[i].user_name}</span>
            <span class="frr-item-createdAt">${data[i].createdAt}</span>
           ${estimateState}
        </div>
      `;
    list += item;
  }
  return list;
};

export const MakePagination = (req: any, res: any, data: any, divided_num: number) => {
  let dividedPageNum: number;
  if (data.length === 0) {
    dividedPageNum = 1;
  } else {
    data.length % divided_num === 0 ? (dividedPageNum = Math.floor(data.length / divided_num)) : (dividedPageNum = Math.floor(data.length / divided_num) + 1);
  }
  let list = `
      <div class="frr-pagination">
        <input type="button" class="frr-pagination-previous" value="이전페이지" onclick="pagination_pre()"/>
          <div class="frr-pagination-page">
            <input type="text" class="frr-pagination-pageNum" value="" name="page" />
            /
            <span class="frr-pagination-allPage">${dividedPageNum}</span>
          </div>
        <input type="button" class="frr-pagination-next" value="다음페이지" onclick="pagination_next()"/>
     </div>
  `;
  return list;
};

export const showSubmitList = (data: any) => {
  let list = "";

  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    let state: string;
    data[i].state === "accept" ? (state = "수락됨") : (state = "수락실패");
    let item = `
        <div class="sbc-item" data-submitId="${data[i].symptonId}">
          <span class="sbc-item-content">${data[i].content}</span>
          <span class="sbc-item-price">${data[i].submit_price} 원</span>
          <span class="sbc-item-state">${state}</span>
        </div>
    `;
    list += item;
  }
  return list;
};

export const showGottList = (data: any) => {
  let list = "";
  for (let i = 0; i < data.length; i++) {
    let item = `
        <div class="sg-item" data-submitId="${data[i].symptonId[0]._id}">
          <span class="sg-item-content">${data[i].symptonId[0].sympton_detail}</span>
          <span class="sg-item-user">${data[i].symptonId[0].user_name}님</span>
        </div>
    `;
    list += item;
  }
  return list;
};
