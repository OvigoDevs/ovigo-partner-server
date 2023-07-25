const express = require("express")
const { email } = require("../controllers/newsletter.controller")
const router = express.Router()

router.post("/", email)

module.exports = router
