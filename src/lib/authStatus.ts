let authStatus = {
  isLogined: function (req, res) {
    if (req.session.logined) {
      return true;
    } else {
      return false;
    }
  },
  status: function (req, res) {
    let UI = null;
    if (this.isLogined(req, res)) {
      UI = `<li class="nb-right_login nb-right_list"><a href="/api/login">${req.session.name}</a></li>`;
    } else {
      UI = `<li class="nb-right_register nb-right_list"><a href="/api/register_previous">회원가입</a></li>
      <li class="nb-right_login nb-right_list"><a href="/api/login">로그인</a></li>`;
    }
    return UI;
  },
};

export default authStatus;
