const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    username: { required: true, type: String, minlength: 6, maxlength: 14 },
    email: { required: true, type: String, minlength: 6, maxlength: 200 },
    firstname: { required: true, type: String, minlength: 1, maxlength: 20 },
    lastname: { required: true, type: String, minlength: 1, maxlength: 20 },
    password: { required: true, type: String, minlength: 6, maxlength: 200 },
    theme: { required: true, type: String, default: "dark default" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
