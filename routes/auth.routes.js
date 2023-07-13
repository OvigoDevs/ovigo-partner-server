const express = require("express")
const {
  signin,
  signup,
  verify,
  refresh,
  forgetPassword,
  resetPassword,
  emailVerification,
} = require("../controllers/auth.controller")
const verifyToken = require("../middlewares/verifytoken.middleware")
const router = express.Router()

router.post("/signin", signin)
router.post("/signup", verifyToken, signup)
router.post("/forget-password", forgetPassword)
router.post("/reset-password", verifyToken, resetPassword)
router.post("/refresh", verifyToken, refresh)
router.post("/verify", verifyToken, verify)
router.post("/email-verify", emailVerification)

module.exports = router
