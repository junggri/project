"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var mongo_json_1 = __importDefault(require("../config/mongo.json"));
mongoose_1.default.Promise = global.Promise;
module.exports = function () {
    function connect() {
        mongoose_1.default
            .connect(mongo_json_1.default.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
            .then(function (result) {
            console.log("sucsses");
        })
            .catch(function (err) {
            console.log(err);
        });
    }
    connect();
    mongoose_1.default.connection.on("disconnected", connect);
};
//# sourceMappingURL=server.js.map