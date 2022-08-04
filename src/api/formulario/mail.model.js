const mongoose = require("mongoose");
const mailSchema = new mongoose.Schema(
  {
    mailContacto: { type: String, required: false, trim: true },
  },
  {
    timestamps: true,
  }
);

const Mail = mongoose.model("mail", mailSchema);

module.exports = Mail;
