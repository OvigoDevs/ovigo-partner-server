const HotelModel = require("../models/hotel.model")

// Get Hotel
exports.getHotels = async (req, res) => {
  try {
    const hotels = await HotelModel.find({})
    console.log(hotels)
    if (hotels) {
      res.status(200).send({
        message: "adsfad",
        result: hotels,
      })
    } else {
      res.status(404).send({ message: "Hotels Not Found." })
    }
  } catch (error) {
    // console.log(error)
    res.status(500).send({ message: "Something Went Wrong." })
  }
}

// Create Hotel
exports.createHotel = async (req, res) => {
  try {
    console.log(req.body.rooms.at(0).roomData)

    const newHotel = await HotelModel.create({ serviceId: 0, ...req.body })

    if (newHotel) {
      res.status(200).send({ message: "Created.", newHotel })
    } else {
      res.status(404).send({ message: "Hotel Not Created." })
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Something Went Wrong", error })
  }
}
