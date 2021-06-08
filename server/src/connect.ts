import mongoose from "mongoose";

function connectDB(uri: any) {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("mongoDB connected");
  });

  return db;
}

export default connectDB;
