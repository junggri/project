import express, { Request, Response, NextFunction } from "express";
import path from "path";
import bodyParser from "body-parser";
import logger from "morgan";
import helmet from "helmet";
import session from "express-session";
import redis from "redis";
import connectRedis from "connect-redis";
import configSession from "./config/session.json";
const RedisStore = connectRedis(session);
const _client = redis.createClient();
const mongoServer = require("./lib/server");
const app = express();

// app.set("env", "production");

let sess = {
  secret: configSession.secret,
  name: "sessionID",
  resave: false,
  saveUninitialized: true,
  store: new RedisStore({
    host: "localhost",
    port: 6379,
    client: _client,
  }),
  cookie: {
    httpOnly: true,
    secure: false,
  },
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
app.use(session(sess));

console.log(app.get("env")); //개발 단계확인

mongoServer();

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

import indexRouter from "./router/index";

app.use("/", indexRouter);

app.set("port", process.env.PORT || 3000);

app.use(function (req, res, next) {
  res.end("Not Found");
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});

module.exports = app;
