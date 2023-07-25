const jwt = require("jsonwebtoken")
const ServerConfig = require("../configs/server.config")
const { secret } = ServerConfig // replace with your own secret key

function verifyToken(req, res, next) {
  const token = req.body.token

  if (!token) {
    return res.status(401).send("Unauthorized access")
  }

  try {
    console.log(login)
    const decoded = jwt.verify(token, secret)
    console.log(decoded)
    req.user = decoded
    next()
  } catch (err) {
    res.status(400).send("Invalid token")
  }
}

module.exports = verifyToken
