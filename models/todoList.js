const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = mongoose.connection;

const todoSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  title: {
    type: String,
    required: [true, "Enter the title!"],
  },
  description: {
    type: String,
    required: [true, "Enter the desc!"],
  },
  checked_date: {
    type: Date,
    default: undefined,
  },
});

module.exports = mongoose.model("todo", todoSchema);
