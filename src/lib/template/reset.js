module.exports = {
  html: function (id, csrfToken) {
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
        <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
      </head>
      <body>
          <div class="nav-bar">
            <div class="nav-bar_left">
              <span class="nav-bar_name">COSCUZ</span>
            </div>
            <div class="nav-bar_right">
              <div class="nav-bar_register">
                회원가입
              </div>
              <div class="nav-bar_login">
                로그인
              </div>
          </div>
        </div>
        <form class="reset-box" method="post" action="/auth/reset_process">
        <input type="hidden" name="_csrf" value=${csrfToken}>
          <div class="reset-pwd1-box">
            <input type="hidden" name="reset_email" value=${id}>
            <input
              type="password"
              name="reset_pwd1"
              placeholder="비밀번호 입력"
              autocomplete="off"
              required
              id="reset_pwd1"
            />
          </div>
          <div class="reset-pwd2-box">
            <input
              type="password"
              name="reset_pwd2"
              placeholder="비밀번호 확인"
              autocomplete="off"
              required
              id="reset_pwd2"
            />
          </div>
          <div class="reset-condition1">
            소문자,대문자,숫자,특수문자를 조합한 8자이상.
          </div>
          <span class="reset-state"></span>
          <button class="reset-icon">확인</but>
        </form>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>    
      `;
  },
};
