import mysql from "mysql2/promise";
import mysqlCre from "../config/msqyl.json";

let option = {
  host: mysqlCre.host,
  user: mysqlCre.user,
  password: mysqlCre.password,
  database: mysqlCre.database2,
  connectionLimit: 10,
  waitForConnections: true,
  multipleStatements: false,
};

async function getConnection() {
  try {
    let pool = mysql.createPool(option);
    let conn = await pool.getConnection();
    return conn;
  } catch (error) {
    console.error(error);
  }
}

export default getConnection;
