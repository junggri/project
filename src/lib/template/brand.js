module.exports = {
  html: function (authStatus) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>COSCUZ - 새로운 안경 플랫폼</title>
        <meta name="title" content="코스커즈 - 새로운 안경 플랫폼" />
        <meta
          name="keywords"
          content="안경,안경테,안경브랜드,해외안경브랜드,안경추,안경쇼핑몰,코스커즈"
        />
        <meta
          name="description"
          content="안경 이제는 온라인에서, 안경원에서 만나 볼 수 없었던 안경"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/fontello/css/fontello.css" />
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
        <script src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=mrx34o7uuz"></script>
      </head>
      <body>
        ${authStatus}
        <div class="brand-detail_box" id="brand"></div>
        <div class="brand-nav_bar">
          <div class="list-box">
            <span class="brand_intro">소개</span>
            <span class="brand_location">위치</span>
            <span class="brand_SNS">연락하기</span>
          </div>
        </div>
        <div class="brand-product_box">
          <div class="products_box">
            <div class="products_img"></div>
            <div class="products_desc"></div>
          </div>
          <div class="products_box">
            <div class="products_img"></div>
            <div class="products_desc"></div>
          </div>
          <div class="products_box">
            <div class="products_img"></div>
            <div class="products_desc"></div>
          </div>
          <div class="products_box">
            <div class="products_img"></div>
            <div class="products_desc"></div>
          </div>
          <div class="products_box">
            <div class="products_img"></div>
            <div class="products_desc"></div>
          </div>
        </div>
        <div class="brand-map_box">
          <div id="map_v3"></div>
        </div>
      </body>
      <script src="/dist/bundle.js"></script>
    </html>    
      `;
  },
};
