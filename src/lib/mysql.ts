import mysql from "mysql";
import mysqlCre from "../config/msqyl.json";

let database: any = mysql.createConnection({
  host: mysqlCre.host,
  user: mysqlCre.user,
  password: mysqlCre.password,
  database: mysqlCre.database,
  multipleStatements: false,
});
database.connect();

export default database;
