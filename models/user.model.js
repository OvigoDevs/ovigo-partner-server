// controllers/user.controller.js

const db = require("../database/database")
const userSchema = require("../schemas/user.schema")

const UserModel = db.model("users", userSchema)

module.exports = UserModel
