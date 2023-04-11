const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  destination: { type: String, require: true },
  noOfPerson: { type: Number, require: true },
  budgetPerPerson: { type: Number, require: true },
});

const tripModal = mongoose.Model("trip", tripSchema);

module.exports = tripModal;
