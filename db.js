import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/MKtube", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to MongoDB");
const handleError = () => console.log("Error!!");

db.once("open", handleOpen);
db.on("error", handleError);
