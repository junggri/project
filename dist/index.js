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
var connect_redis_1 = __importDefault(require("connect-redis"));
var session_json_1 = __importDefault(require("./config/session.json"));
var RedisStore = connect_redis_1.default(express_session_1.default);
var _client = redis_1.default.createClient();
var mongoServer = require("./lib/server");
var app = express_1.default();
// app.set("env", "production");
var sess = {
    secret: session_json_1.default.secret,
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
app.use(express_session_1.default(sess));
console.log(app.get("env")); //개발 단계확인
mongoServer();
var publicPath = path_1.default.resolve(__dirname, "public");
app.use(express_1.default.static(publicPath));
app.use(morgan_1.default("dev"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(helmet_1.default.frameguard({ action: "deny" }));
app.use(helmet_1.default.xssFilter());
app.use(helmet_1.default.noSniff());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
var index_1 = __importDefault(require("./router/index"));
app.use("/", index_1.default);
app.set("port", process.env.PORT || 3000);
app.use(function (req, res, next) {
    res.end("Not Found");
});
app.use(function (req, res, next) {
    res.status(404).send("Sorry cant find that!");
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});
app.listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
});
module.exports = app;
//# sourceMappingURL=index.js.map