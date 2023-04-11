const mongoose = require("mongoose");
const mongoAtlasUrl =
  "mongodb+srv://abhayfaldu1922:abhaymongomock@cluster0.qiufrxn.mongodb.net/?retryWrites=true&w=majority";

const connectDB = mongoose.connect(mongoAtlasUrl);

module.exports = connectDB;
