import mysql_t from "../../lib/mysql-test";

const user = {
  save: async (common_email: string, key: string, common_name: string, salt: string, time: string) => {
    let conn = await mysql_t();
    try {
      conn.execute("INSERT INTO user(email,password,name,salt,createdAt) values (?,?,?,?,?)", [common_email, key, common_name, salt, time]);
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

export default user;
