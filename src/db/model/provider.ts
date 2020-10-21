import mysql_t from "../../lib/mysql-test";

const provider = {
  save: async (email: string, password: string, name: string, gender: string, phone: number, address: any, salt: string, time: string) => {
    let conn = await mysql_t();
    try {
      conn.execute(`INSERT INTO provider(email, password, name, gender, phone_number, address, salt, createdAt) VALUES (?,?,?,?,?,?,?,?)`, [email, password, name, gender, phone, address, salt, time]);
    } catch (error) {
      console.error(error);
    } finally {
      conn.release();
    }
  },

  find: async (email: string) => {
    let conn = await mysql_t();
    try {
      let [result] = await conn.execute(`select * from user where email=?`, [email]);
      return result;
    } catch (error) {
      console.error(error);
    } finally {
      conn.release();
    }
  },

  setOrUpdateRefreshToken: async (token: string, email: string) => {
    let conn = await mysql_t();
    try {
      conn.execute(`UPDATE user SET refresh_token = ? where email = ?`, [token, email]);
    } catch (error) {
      console.error(error);
    } finally {
      conn.release();
    }
  },
};

export default provider;
