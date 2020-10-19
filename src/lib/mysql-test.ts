import mysql from "mysql2/promise";
import mysqlCre from "../config/msqyl.json";

async function getConnection() {
  let pool: any = mysql.createPool({
    host: mysqlCre.host,
    user: mysqlCre.user,
    password: mysqlCre.password,
    database: mysqlCre.database2,
    connectionLimit: 10,
    waitForConnections: true,
    multipleStatements: false,
  });
  let conn = await pool.getConnection(async (conn: any) => conn);
  return conn;
}

export default getConnection;
