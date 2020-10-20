import mysql_t from "../../lib/mysql-test";

const user = {
  save: async (common_email: string, key: string, common_name: string, salt: string, time: string) => {
    let conn = await mysql_t();
    try {
      await conn.execute("INSERT INTO user value(?,?,?,?,?,?)", [common_email, key, common_name, salt, time]);
      conn.release();
    } catch (error) {
      console.error(error);
      conn.release();
    }
  },
};

export default user;
