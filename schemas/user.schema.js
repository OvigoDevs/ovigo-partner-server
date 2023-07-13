const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  contactDetails: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
  },
  password: { type: String, required: true },
  servicesList: [
    {
      serviceId: { type: String, required: false },
      name: { type: String, required: false },
      titleImage: { type: String, required: false },
      streetAddress: { type: String, required: false },
      serviceRefId: { type: String, required: false },
    },
  ],
  verifiedStatus: { type: Boolean, required: false },
  createdAt: { type: Date, default: Date.now },
})

module.exports = userSchema
