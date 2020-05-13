module.exports = {
  html: function (email, name, id, csrfToken) {
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
        <div class="register">
          <div class="register_slobox">
            <div class="register_slobox_slo register_user">간편 회원가입</div>
          </div>
          <span class="register_user_slo"
            >SNS계정을 통하여 간편회원가입을 하세요.</span
          >
          <div class="register_termBox register_user_termBox">
            <input type="checkbox" />
            <div class="checkbox_slobox">
              <span class="checkbox_slo">전체동의</span>
              <span class="checkbox_detail">전체동의</span>
            </div>
          </div>
          <form
            action="/auth/register_user_process"
            method="post"
            autocomplete="off"
          >
          <input type="hidden" name="_csrf" value=${csrfToken}>
            <div class="register_box user_email">
              <input
                type="text"
                name="oauth_email"
                value=${email}
                id="oauth_email"
                autocomplete="off"
                required
              />
              <span class="show_state state_id"></span>
            </div>
            <div class="register_box user_name">
              <input
                type="text"
                name="oauth_name"
                value=${name}
                id="oauth_name"
                autocomplete="off"
                placeholder="이름을 입력해주세요"
                required
              />
              <input
                type="hidden"
                name="oauth_id"
                value=${id}
                required
              />
            </div>
            <button class="register-btn register_user-btn">완료</button>
          </form>
        </div>
        <script src="../dist/bundle.js"></script>
      </body>
    </html>
      `;
  },
};
