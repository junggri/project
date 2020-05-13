module.exports = {
  brand: function (brand, desc) {
    let list = "";
    for (let i = 0; i < brand.length; i++) {
      let descValue = desc[Object.keys(desc)[i]];
      list += `
                <div class="brand_item" id="${brand[i]}">
                  <a href="/brand/${brand[i]}">
                    <div class="item_img" id="${brand[i]}" style=background-image:url("../image/brand/${brand[i]}-image.jpg")></div>
                    <div class="item_desc" id="${brand[i]}_desc">${descValue}</div>
                  </a>
                </div>
                `;
    }
    return list;
  },
  recommened: (brand, desc) => {
    let recommened_list = "";
    for (let i = 0; i < 4; i++) {
      let descValue = desc[Object.keys(desc)[i]];
      recommened_list += `
                    <div class="brand_recommended">
                      <a href="/brand/${brand[i]}">
                        <div class="recommended_img" style=background-image:url("../image/brand/${brand[i]}-image.jpg")></div>
                        <div class="recommended_desc">${descValue}</div>
                      </a>
                    </div>
      `;
    }
    return recommened_list;
  },
  ranked: (brand, desc) => {
    let ranked_list = "";
    for (let i = 0; i < 3; i++) {
      let descValue = desc[Object.keys(desc)[i]];
      ranked_list += `
                    <div class="sb_rank">
                      <a href="/brand/${brand[i]}">
                        <div class="ranked_desc">${descValue}</div>
                        <div class="ranked_img" style=background-image:url("../image/brand/${brand[i]}-image.jpg")></div>
                      </a>
                    </div>
      `;
    }
    return ranked_list;
  },
};
