import mysql from "mysql2/promise";
import mysqlCre from "../config/msqyl.json";

let pool: any = mysql.createPool({
  host: mysqlCre.host,
  user: mysqlCre.user,
  password: mysqlCre.password,
  database: mysqlCre.database2,
  connectionLimit: 10,
  waitForConnections: true,
  multipleStatements: false,
});

export default pool;
