import express, { Request, Response, NextFunction } from "express";
import path from "path";
import bodyParser from "body-parser";
import logger from "morgan";
import helmet from "helmet";
import session from "express-session";
import redis from "redis";
import cookieParser from "cookie-parser";
import connectRedis from "connect-redis";
import configSession from "./config/session.json";
import mongoServer from "./lib/server";
import compression from "compression";
import { stream } from "./lib/winston";
import createError from "http-errors";
import dotenv from "dotenv";
import passport from "passport";
import flash from "connect-flash";

dotenv.config();
const RedisStore = connectRedis(session);
const _client = redis.createClient({});
const app = express();

mongoServer();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

// app.set("env", "production");
console.log(app.get("env")); //개발 단계확인

let sess = {
  secret: configSession.secret,
  name: configSession.name,
  resave: false,
  saveUninitialized: true,
  store: new RedisStore({
    host: process.env.HOST,
    port: Number(process.env.port),
    client: _client,
    ttl: 60 * 60 * 24, //second
    //ttl을 토큰시간과 맞춰야 하나 ???....
  }),
  cookie: {
    httpOnly: true,
    secure: false,
  },
};
// 쿠키관련괸건 req.cookie 옵션에 따로
// 위는 sessionid 쿠키에 관련된것

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(cookieParser(configSession.secret));
app.use(session(sess));

// app.use(logger("prod", { stream })); //prod combined
app.use(logger("dev"));
app.get("env") === "development" ? app.use(express.static(path.join(__dirname + "/../dist/public", "dist"))) : app.use(express.static(path.join(__dirname + "/public", "dist")));
//bundel.js위치
app.use(flash());

app.use(express.static(path.join(__dirname, "../static/css")));
app.use(express.static(path.join(__dirname, "../static/image")));
app.use(express.static(path.join(__dirname, "../upload")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(compression());
app.disable("x-powered-by");

app.use(passport.initialize());
app.use(passport.session());

app.set("views", __dirname + "/../static/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

import indexRouter from "./router/index";
// import authRouter from "./router/auth";
import apiRouter from "./router/api";
import provierRouter from "./router/provide";

app.use("/", indexRouter);
// app.use("/auth", authRouter);
app.use("/api", apiRouter);
app.use("/provide", provierRouter);

app.set("port", process.env.PORT || 3000);

app.use(logError);

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

function logError(err: any, req: Request, res: Response, next: NextFunction) {
  console.log("logErrorHandler", "record :", err.stack);
  next(err);
}

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // 라우트에서 new Error 생성하고 next 인자로 주면 에러 스택에 내용이나온다
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
//배포 할떄에에는 에러처리도 ㅏ꾸엉한다 사용자에게 에러 내용을 보여주면 안된다
app.listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});

module.exports = app;
