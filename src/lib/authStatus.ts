import jwt from "jsonwebtoken";

let decoded: any;
let authStatus = {
  isLogined: function (req: any, res: any) {
    const token = req.cookies.jwttoken;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      return true;
    } catch (error) {
      // console.log(error);
      return false;
    }
  },
  status: function (req: any, res: any) {
    let UI = null;
    if (this.isLogined(req, res)) {
      UI = `<li class="nb-right_login nb-right_list nb-right_isLogined">
        </li>
        <div class="nb-navigation">
        <div class="nb-name">
          ${decoded.username} 님
        </div>
        <div class="nb-profile">
          <span class="nb-profile-img"></span>
          <span class="nb-profile-modify">프로필 변경</span>
        </div>
        <div class="nb-profile-mypage"><a href="/web/mypage">마이페이지</a></div>
        <form method="post" action="/web/logout_process" class="logout-form">
          <div class="nb-profile-logout">로그아웃</div>
        </form>
    </div>
        `;
    } else {
      UI = `<li class="nb-right_register nb-right_list"><a href="/web/register_previous">회원가입</a></li>
      <li class="nb-right_login nb-right_list"><a href="/web/login">로그인</a></li>`;
    }
    return UI;
  },
};

export default authStatus;
