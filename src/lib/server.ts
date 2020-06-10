import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_ID, MONGO_PWD } = process.env;
const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PWD}@localhost:27017/coscuz`;

// mongoose.Promise = global.Promise;
export default function server() {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  const connect = () => {
    mongoose
      .connect(MONGO_URL, {
        // dbName: "nodejs", //
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log("connect success:mongo");
      })
      .catch((err): void => {
        console.log(err);
      });
  };
  connect();

  mongoose.connection.on("error", (error) => {
    console.error("'몽고디비에러", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.error("연결을 재시도 합니다");
    connect();
  });
}
