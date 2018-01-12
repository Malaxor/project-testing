
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  name: { type: String, required: true},
  about: { type: String, required: true },
  imgUrl: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
