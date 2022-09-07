const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: String,
      default: "Emplyoee",
    },
  ],
  status: {
    type: Boolean,
    default: true,
  },
});

const userModal = mongoose.model("User", userSchema);

module.exports = userModal;
