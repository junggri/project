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
      UI = `<li class="nb-right_login nb-right_list nb-right_isLogined">${decoded.username}</li>`;
    } else {
      UI = `<li class="nb-right_register nb-right_list"><a href="/api/register_previous">회원가입</a></li>
      <li class="nb-right_login nb-right_list"><a href="/api/login">로그인</a></li>`;
    }
    return UI;
  },
};

export default authStatus;
