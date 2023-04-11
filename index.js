const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const TripModel = require("./models/trips.model");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello home");
});

app.get("/trips", async (req, res) => {
  try {
    const trips = await TripModel.find();
    res.send(trips);
  } catch (error) {
    res.send({ msg: "error in getting data", err: error });
  }
});

app.post("/postdata", async (req, res) => {
  try {
    const trip = new TripModel(req.body);
    await trip.save();
    res.send({ msg: "Data posted successfully", response: trip });
  } catch (error) {
    res.send({ msg: "Error in posting", err: error });
  }
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
