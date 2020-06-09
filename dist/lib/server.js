"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var mongo_json_1 = __importDefault(require("../config/mongo.json"));
mongoose_1.default.Promise = global.Promise;
function server() {
    if (process.env.NODE_ENV !== "production") {
        mongoose_1.default.set("debug", true);
    }
    function connect() {
        mongoose_1.default
            .connect(mongo_json_1.default.db, {
            dbName: "nodejs",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
            .then(function (result) {
            console.log("sucsses connect mongodb");
        })
            .catch(function (err) {
            console.log(err);
        });
    }
    connect();
    mongoose_1.default.connection.on("error", function (error) {
        console.error("'몽고디비에러", error);
        require("../lib/model/userinfo");
    });
    mongoose_1.default.connection.on("disconnected", connect);
}
exports.default = server;
//# sourceMappingURL=server.js.map