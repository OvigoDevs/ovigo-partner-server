// controllers/hotel.controller.js

const db = require("../database/database")
const hotelSchema = require("../schemas/hotel.schema")

const HotelModel = db.model("hotels", hotelSchema)

module.exports = HotelModel
