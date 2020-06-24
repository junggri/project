import jwt from "jsonwebtoken";
import { createToken } from "./accesstoken";
import users from "../lib/model/usermodel";

let email: string;

export function verify(req: any, res: any, next: any) {
  const token = req.cookies.jwttoken;
  let decoded: any = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
    email = decoded.email;
    console.log("로그인 되어있음");
    return next();
    ///로그인되었으면 next()해서 다음함수 호출
  } catch (error) {
    // console.log(error);
    if (!token) {
      next();
    }
    if (error.name === "TokenExpiredError") {
      //토큰이 만료됬네? 오케이 리프레쉬 토큰확인해볼게
      users
        .findOne({ email: { $in: [email] } })
        .then((result: any) => {
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
              console.log("리프레쉬 토큰이 있고 유효해요.", result);
              createToken(req, res, email, result.username);
              return res.redirect(req.originalUrl);
            })
            .catch((err) => {
              //야 리프레쉬 토큰은 있는데 유효기간이 끝났어
              console.log("로그인이 필요합니다.");
              next();
            });
        })
        .catch((err) => {
          //리프레쉬토큰 찾다가 에러나면 알려줄게
          console.error(err);
        });
    }
  }
}

export function isLogined(req: any, res: any, next: any) {
  const token = req.cookies.jwttoken;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return res.redirect("/");
  } catch (error) {
    // console.error(error);
    return next();
  }
}

export function isNotLogined(req: any, res: any, next: any) {
  const token = req.cookies.jwttoken;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    // console.error(error);
    return res.redirect("/api/login");
  }
}
