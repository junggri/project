import jwt from "jsonwebtoken";
import refreshToken from "./refreshtoken";
import { createToken2 } from "./accesstoken";

export function verify(req, res, next) {
  const token = req.cookies.jwttoken || req.cookies.jwttoken2;
  const refresh_token = req.cookies.refreshtoken;
  console.log(refreshToken);
  try {
    req.docoded = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    console.log(error);
    if (!token) {
      return res.status(403).json({
        code: 403,
        message: "로그인되지 않았습니다.",
      });
    }
    if (error.name === "TokenExpiredError") {
      if (refresh_token) {
        res.clearCookie("jwttoken");
        createToken2(req, res);
        if (refresh_token) {
          res.redirect("/auth/check");
        } else {
          refreshToken(req, res);
          res.redirect("/auth/check");
        }
        //여기서 다시 토큰을 발급하고 다시하기
      }
      //refreshtoken 있다면 access token 재발급 없다면 다시 로그인하게
      // return res.status(419).json({
      //   code: 419,
      //   message: "토큰이 만료되었습니다.",
      // });
    }
    return res.status(401).json({
      code: 401,
      message: "유효하지 않은 토큰입니다",
    });
  }
}

export function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
}
