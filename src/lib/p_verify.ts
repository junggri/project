import jwt from "jsonwebtoken";
import { createToken } from "./p_accesstoken";
import providers from "../lib/model/provideModel";
import { reupload } from "./multer";
let email: string;
let user_id: string;

export function verify(req: any, res: any, next: any) {
  const token = req.cookies.pjwttoken;
  let decoded: any = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
    email = decoded.email;
    user_id = decoded.user_objectId;
    // console.log(decoded);
    // console.log(user_id);
    console.log("로그인 되어있음");
    return next();
    ///로그인되었으면 next()해서 다음함수 호출
  } catch (error) {
    // console.log(error);
    if (!token) {
      console.log("아직 토큰은 없습니다. 로그인이 안되있는거지");
      next();
    }
    if (error.name === "TokenExpiredError") {
      //토큰이 만료됬네? 오케이 리프레쉬 토큰확인해볼게
      providers
        .findOne({ _id: user_id })
        .then((result: any) => {
          // console.log(result);
          let validation_promise = new Promise((resolve, reject) => {
            try {
              let validation_token = jwt.verify(result.refresh_token, process.env.JWT_SECRET);
              resolve(validation_token);
            } catch (error) {
              reject(error);
            }
          });
          validation_promise
            .then((result: any) => {
              //어 리프레쉬 토큰 있고 유효하네
              console.log("리프레쉬 토큰이 있고 유효하니 로그인을 유지시켜줄게");
              createToken(req, res, email, result.username, user_id);
              return res.redirect(req.originalUrl);
            })
            .catch((err) => {
              console.error(1, err);
              //야 리프레쉬 토큰은 있는데 유효기간이 끝났어
              console.log("토큰은 쿠키에 저장되어있긴해 근데 로그인이 되지 않아 있네?, 또는 리프레쉬 토큰이 만료되서 로그인해서 새로운 리프레쉬 토큰을 발급받아, 로그인이 필요합니다.");
              next();
            });
        })
        .catch((err) => {
          //리프레쉬토큰 찾다가 에러나면 알려줄게
          console.error(2, err);
        });
    }
  }
}

export function isLogined(req: any, res: any, next: any) {
  const token = req.cookies.pjwttoken;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return res.redirect("/provide/findAllRegister");
  } catch (error) {
    // console.error(error);
    return next();
  }
}

export function isNotLogined(req: any, res: any, next: any) {
  const token = req.cookies.pjwttoken;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    // console.error(error);
    return res.redirect("/provide/index");
  }
}
