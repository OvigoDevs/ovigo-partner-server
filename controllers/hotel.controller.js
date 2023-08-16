const HotelModel = require("../models/hotel.model")
const MaxID_generator = require("../utils/max-id-generator")

// Get Hotel
exports.getHotels = async (req, res) => {
  try {
    const hotels = await HotelModel.find({})
    console.log(hotels)
    if (hotels) {
      res.status(200).send({
        message: "Successfully hotel data fetch!",
        result: hotels,
      })
    } else {
      res.status(404).send({ message: "Hotels Not Found." })
    }
  } catch (error) {
    res.status(500).send({ message: "Something Went Wrong." })
  }
}

// Create Hotel
exports.createHotel = async (req, res) => {
  try {
    // create new hotel data

    const createNewHotelData = async (hotels) => {
      const serviceId = MaxID_generator(hotels, 0) // @TODO need to generate ID
      const newHotel = await HotelModel.create({ serviceId, ...req.body })

      if (newHotel) {
        res.status(200).send({ message: "Created.", newHotel })
      } else {
        res.status(404).send({ message: "Hotel data not created." })
      }
    }

    // checking previous hotels
    const hotels = await HotelModel.find({})
    if (hotels) {
      createNewHotelData(hotels)
    } else {
      createNewHotelData([])
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Something Went Wrong", error })
  }
}
