"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var msqyl_json_1 = __importDefault(require("../config/msqyl.json"));
var database = mysql_1.default.createConnection({
    host: msqyl_json_1.default.host,
    user: msqyl_json_1.default.user,
    password: msqyl_json_1.default.password,
    database: msqyl_json_1.default.database,
});
database.connect();
database.end();
exports.default = database;
//# sourceMappingURL=mysql.js.map