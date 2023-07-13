const user = {
  email: String,
  contactDetails: {
    firstName: String,
    lastName: String,
    phone: String,
  },
  password: String,
  verifiedStatus: Boolean,
  servicesList: [
    {
      serviceId: String,
      name: String,
      titleImage: String,
      streetAddress: String,
      serviceRefId: String,
    },
  ],
}

const hotel = {
  verifiedStatus: Boolean,
  serviceType: String,
  hotelType: String,
  thumbnail: String,
  hotelLocation: {
    country: String,
    streetAddress: String,
    zipCode: Number,
    city: String,
  },
  hotelName: String,
  startRatingOfHotel: Number,
  propertyManagementCompany: Boolean,
  managementCompanyName: String, // propertyManagementCompany true
  popularFacilities: [String],
  breakfast: Boolean,
  breakfastInfo: {
    includedInPrice: Boolean, // breackfast true
    pricePerPersonPerDay: Number,
    breakfastType: [String], // includedInPrice false
  },
  parking: Boolean,
  parkingCost: Number, // parking true
  languages: [String],
  checkIn: String,
  checkOut: String,
  childrenPolicy: String,
  petPolicy: Boolean,
  petCost: Number,
  creditCard: Boolean,
  nameInInvoice: String,
  invoiceAddress: String,
  rooms: [
    {
      roomName: String,
      price: Number,
      unitType: String,
      roomsQuantity: Number,
      beds: [
        {
          bedType: String,
          bedQuantity: Number,
        },
      ],
      guestsLimit: Number,
      roomSize: {
        unit: String,
        measurement: Number,
      },
      smoking: Boolean,
      bathroomDetails: {
        privateBathroom: Boolean,
        bathroomItems: [String],
      },
      roomDetails: {
        general: [String],
        outdoorAndView: [String],
        foodAndDrinks: [String],
      },
      cancellationCostPolicy: Number,
      images: [String],
      thumbnail: String,
    },
  ],
}
