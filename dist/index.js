"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var express_session_1 = __importDefault(require("express-session"));
var redis_1 = __importDefault(require("redis"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var connect_redis_1 = __importDefault(require("connect-redis"));
var session_json_1 = __importDefault(require("./config/session.json"));
var server_1 = __importDefault(require("./lib/server"));
var compression_1 = __importDefault(require("compression"));
// import noCache from "nocache";
var dotenv_1 = __importDefault(require("dotenv"));
var connect_flash_1 = __importDefault(require("connect-flash"));
var cors_1 = __importDefault(require("cors"));
var socket_io_1 = __importDefault(require("socket.io"));
var debug_1 = __importDefault(require("debug"));
var Appserver = debug_1.default("app:Appserver");
var error = debug_1.default("error:server");
var fail = debug_1.default("error:request");
Appserver("sever start");
error("404 not found");
fail("request failure");
dotenv_1.default.config();
var RedisStore = connect_redis_1.default(express_session_1.default);
var _client = redis_1.default.createClient();
var app = express_1.default();
server_1.default();
process.env.NODE_ENV = process.env.NODE_ENV || "development";
// app.set("env", "production");
console.log(app.get("env")); //개발 단계확인
var sess = {
    secret: session_json_1.default.secret,
    name: session_json_1.default.name,
    resave: false,
    saveUninitialized: true,
    store: new RedisStore({
        host: process.env.HOST,
        port: Number(process.env.port),
        client: _client,
        ttl: 60 * 60 * 24,
    }),
    cookie: {
        httpOnly: true,
        secure: false,
    },
};
if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
}
app.use(cookie_parser_1.default(session_json_1.default.secret));
app.use(express_session_1.default(sess));
app.use(cors_1.default());
// app.use(logger("prod", { stream })); //prod combined
app.use(morgan_1.default("dev"));
app.use(express_1.default.static(path_1.default.join(__dirname + "/../webpack")));
app.use(connect_flash_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "../static/css")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../static/image")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../upload")));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(helmet_1.default.frameguard({ action: "deny" }));
app.use(helmet_1.default.xssFilter());
app.use(helmet_1.default.noSniff());
// app.use(noCache());
app.use(compression_1.default());
app.disable("x-powered-by");
// app.use(passport.initialize());
// app.use(passport.session());
app.set("views", __dirname + "/../static/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
var v1_1 = __importDefault(require("./router/v1"));
var web_1 = __importDefault(require("./router/web"));
var provide_1 = __importDefault(require("./router/provide"));
app.use("/v1", v1_1.default);
app.use("/web", web_1.default);
app.use("/provide", provide_1.default);
app.set("port", process.env.PORT || 3000);
app.use(logError);
app.use(function (req, res, next) {
    res.status(404).send("Sorry cant find that!");
});
function logError(err, req, res, next) {
    console.log("logErrorHandler", "record :", err.stack);
    next(err);
}
app.use(function (err, req, res, next) {
    // 라우트에서 new Error 생성하고 next 인자로 주면 에러 스택에 내용이나온다
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});
//배포 할떄에에는 에러처리도 ㅏ꾸엉한다 사용자에게 에러 내용을 보여주면 안된다
var server = app.listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
});
var io = socket_io_1.default(server, { transports: ["websocket"] });
// server에 socket.io 연결 , 클라이언트가 연결되면 io.on("connection" ) 이벤트가 발생
io.on("connection", function (socket) { return console.log("연결"); });
module.exports = app;
//# sourceMappingURL=index.js.map