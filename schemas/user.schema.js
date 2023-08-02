const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  password: { type: String, required: true },
  phone: { type: String, required: true },
  registerInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
  },
  verification: {type: Boolean, required: true, default: false},
  email: { type: String, required: true, unique: true },
  servicesList: {type: Array, required: false, default: []},
  createdAt: { type: Date, default: Date.now },
})

module.exports = userSchema

