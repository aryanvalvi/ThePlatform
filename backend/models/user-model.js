const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  GanduKiImage: String,
  googleID: { type: String, unique: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
