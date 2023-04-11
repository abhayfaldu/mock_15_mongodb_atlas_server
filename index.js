const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello home");
});

app.post("/postdata", (req, res) => {
  console.log(req.body);
  res.send("postdata route");
});

app.listen(8080, async () => {
  try {
    await connectDB;
    console.log("DB connected");
  } catch (err) {
    console.log("error in connecting to DB:", err);
  }
  console.log("server running on port:", 8080);
});
