import jwt from "jsonwebtoken";
let decoded;
let authStatus = {
  isLogined: function (req, res) {
    const token = req.cookies.jwttoken;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      return true;
    } catch (error) {
      // console.log(error);
      return false;
    }
  },
  status: function (req, res) {
    let UI = null;
    if (this.isLogined(req, res)) {
      UI = `<li class="nb-right_login nb-right_list"><a href="/api/login">${decoded.username}</a></li>`;
    } else {
      UI = `<li class="nb-right_register nb-right_list"><a href="/api/register_previous">회원가입</a></li>
      <li class="nb-right_login nb-right_list"><a href="/api/login">로그인</a></li>`;
    }
    return UI;
  },
};

export default authStatus;
