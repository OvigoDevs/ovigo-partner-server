const Mail = require("../middlewares/mail.middleware")
const NewsletterModel = require("../models/newsletter.model")

exports.email = async (req, res) => {
  try {
    const { email } = req.body
    if (!email) return res.status(401).send({ message: "Bad request!" })

    const exists = await NewsletterModel.findOne({ email })
    if (exists)
      return res.status(409).send({ message: "This email already exists!" })

    const newEmail = await NewsletterModel.create({ email })

    if (!newEmail) {
      return res.status(500).send({
        messsage: "Something went wrong on server!",
      })
    }

    // Mail(email, "You have successfully subscribed to Ovigo newsletter!")

    res.status(200).send({
      message: "You have successfully subscribed to Ovigo newsletter!",
    })
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong on server!",
    })
  }
}
