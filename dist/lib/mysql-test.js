"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_1 = __importDefault(require("mysql2/promise"));
var msqyl_json_1 = __importDefault(require("../config/msqyl.json"));
var pool = promise_1.default.createPool({
    host: msqyl_json_1.default.host,
    user: msqyl_json_1.default.user,
    password: msqyl_json_1.default.password,
    database: msqyl_json_1.default.database2,
    connectionLimit: 10,
    waitForConnections: true,
    multipleStatements: false,
});
exports.default = pool;
//# sourceMappingURL=mysql-test.js.map