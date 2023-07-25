// controllers/newsletter.controller.js

const db = require("../database/database")
const newsletterSchema = require("../schemas/newsletter.schema")

const NewsLetterModel = db.model("newsletter", newsletterSchema)

module.exports = NewsLetterModel
