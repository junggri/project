"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, MONGO_ID = _a.MONGO_ID, MONGO_PWD = _a.MONGO_PWD;
console.log(MONGO_ID, MONGO_PWD);
// const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PWD}@localhost:27017/coscuz?replicaSet=rs0`;
var MONGO_URL = "mongodb://" + MONGO_ID + ":" + MONGO_PWD + "@localhost:27017/test";
// mongoose.Promise = global.Promise;
function server() {
    if (process.env.NODE_ENV !== "production") {
        mongoose_1.default.set("debug", true);
    }
    var connect = function () {
        mongoose_1.default
            .connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
            .then(function () {
            console.log("connect success:mongo");
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    connect();
    mongoose_1.default.connection.on("error", function (error) {
        console.error("'몽고디비에러", error);
    });
    mongoose_1.default.connection.on("disconnected", function () {
        console.error("연결을 재시도 합니다");
        connect();
    });
}
exports.default = server;
//# sourceMappingURL=server.js.map