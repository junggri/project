import mongoose, { mongo } from "mongoose";
import monDB from "../config/mongo.json";

mongoose.Promise = global.Promise;
export default function server() {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  function connect() {
    mongoose
      .connect(monDB.db, {
        dbName: "nodejs", //이게 맞나
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then((result): void => {
        console.log("sucsses connect mongodb");
      })
      .catch((err): void => {
        console.log(err);
      });
  }
  connect();

  mongoose.connection.on("error", (error) => {
    console.error("'몽고디비에러", error);
    require("../lib/model/userinfo");
  });
  mongoose.connection.on("disconnected", connect);
}
