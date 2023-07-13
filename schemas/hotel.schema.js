const mongoose = require("mongoose")

const hotelSchema = new mongoose.Schema({
  serviceId: { type: String, required: true, unique: true }, // user email can be same, an unique id will be the identifier
  verifiedStatus: { type: Boolean},
  serviceType: { type: String, required: false },
  hotelType: { type: String, required: false },
  thumbnail: { type: String, required: false },
  hotelLocation: {
    country: { type: String, required: false },
    streetAddress: { type: String, required: false },
    zipCode: { type: Number, required: false },
    city: { type: String, required: false },
  },
  hotelName: { type: String, required: false },
  startRatingOfHotel: { type: Number, required: false },
  propertyManagementCompany: { type: Boolean, required: false },
  managementCompanyName: { type: String, required: false }, // propertyManagementCompany true
  popularFacilities: [{ type: String, required: false }],
  breakfast: { type: Boolean, required: false },
  breakfastInfo: {
    includedInPrice: { type: Boolean, required: false }, // breackfast true
    pricePerPersonPerDay: { type: Number, required: false },
    breakfastType: [{ type: String, required: false }], // includedInPrice false
  },
  parking: { type: Boolean, required: false },
  parkingCost: { type: Number, required: false }, // parking true
  languages: [{ type: String, required: false }],
  checkIn: { type: String, required: false },
  checkOut: { type: String, required: false },
  childrenPolicy: { type: String, required: false },
  petPolicy: { type: Boolean, required: false },
  petCost: { type: Number, required: false },
  creditCard: { type: Boolean, required: false },
  nameInInvoice: { type: String, required: false },
  invoiceAddress: { type: String, required: false },
  reviews: {type: [String], required: false},
  reservations: {type: [String], required: false},
  rooms: [
    {
      roomName: { type: String, required: false },
      price: { type: Number, required: false },
      unitType: { type: String, required: false },
      roomsQuantity: { type: Number, required: false },
      beds: [
        {
          bedType: { type: String, required: false },
          bedQuantity: { type: Number, required: false },
        },
      ],
      guestsLimit: { type: Number, required: false },
      roomSize: {
        unit: { type: String, required: false },
        measurement: { type: Number, required: false },
      },
      smoking: { type: Boolean, required: false },
      bathroomDetails: {
        privateBathroom: { type: Boolean, required: false },
        bathroomItems: [{ type: String, required: false }],
      },
      roomDetails: {
        general: [{ type: String, required: false }],
        outdoorAndView: [{ type: String, required: false }],
        foodAndDrinks: [{ type: String, required: false }],
      },
      cancellationCostPolicy: { type: Number, required: false },
      images: [{ type: String, required: false }],
      thumbnail: { type: String, required: false },
    },
  ],
})

module.exports = hotelSchema;
