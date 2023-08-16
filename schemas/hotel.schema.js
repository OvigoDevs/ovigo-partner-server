const mongoose = require("mongoose")

const hotelSchema = new mongoose.Schema({
  serviceId: { type: Number, required: true, unique: true },
  breakfastDetails: {
    breakfastTypes: [{ type: String, required: false }],
    priceIncluded: { type: String, required: true },
    pricePerPersonAndDay: { type: String, required: false },
    serveToGuest: { type: String, required: false },
  },
  hotelAddress: {
    city: { type: String, required: true },
    country: { type: String, required: true },
    streetAddress: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  hotelCategories: {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  hotelInformation: {
    propertyName: { type: String, required: true },
    propertyManagementEntity: { type: String, required: true },
    managementEntityName: { type: String, required: true },
    hotelRating: { type: String, required: true },
  },
  houseRules: {
    petFee: { type: String, required: false },
    allowChildren: { type: String, required: true },
    allowPet: { type: String, required: true },
    checkinfrom: { type: String, required: true },
    checkoutfrom: { type: String, required: true },
    checkoutuntil: { type: String, required: true },
    checkinuntil: { type: String, required: true },
  },
  noOfHotels: {
    id: { type: String, required: true },
    text: { type: String, required: true },
  },
  parkingDetails: {
    available: { type: String, required: true },
    located: { type: String, required: false },
    reserve: { type: String, required: false },
    type: { type: String, required: false },
  },
  popularFacilities: [{ type: String, required: true }],
  registerLanguages: [{ type: String, required: true }],
  rooms: [
    {
      id: { type: Number, required: true },
      roomData: {
        addPhotos: {
          mainImage: [{ type: String, required: true }],
          mainImage: [{ type: String, required: true }],
        },
        bathroomDetails: {
          bathroomItems: [{ type: String, required: true }],
          privateBathroom: { type: String, required: true },
        },
        roomDetails: {
          bunkBeds: { type: Number, required: true },
          cribsAllowed: { type: String, required: true },
          fullBeds: { type: Number, required: true },
          guestsNumber: { type: Number, required: true },
          kingBeds: { type: Number, required: true },
          queenBeds: { type: Number, required: true },
          roomSize: { type: String, required: true },
          roomSizeUnit: { type: String, required: true },
          sameTypeRooms: { type: Number, required: true },
          smookingAllow: { type: String, required: true },
          sofaBeds: { type: Number, required: true },
          twinBeds: { type: Number, required: true },
          unitType: { type: String, required: true },
        },
        roomFeatures: {
          foodAndDrink: [{ type: String, required: true }],
          generalAmenities: [{ type: String, required: true }],
          mainView: { type: String, required: false },
          outdoorsAndViews: [{ type: String, required: true }],
        },
        roomName: { type: String, required: true },
        roomPrice: { type: String, required: true },
      },
    },
  ],
})

module.exports = hotelSchema
