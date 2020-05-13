import mongoose from "mongoose";
import monDB from "../config/mongo.json";

mongoose.Promise = global.Promise;
module.exports = () => {
  function connect() {
    mongoose
      .connect(monDB.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then((result): void => {
        console.log("sucsses");
      })
      .catch((err): void => {
        console.log(err);
      });
  }
  connect();
  mongoose.connection.on("disconnected", connect);
};
