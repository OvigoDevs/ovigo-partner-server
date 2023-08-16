/**
 * author: musiur alam opu
 * title: main server
 * author site: https://musiur.vercel.app
 */

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const ServerConfig = require("./configs/server.config")
const Database = require("./database/database")
const errorMiddleware = require("./middlewares/error.middleware")
const routes = require("./routes/routes")

// main app
const app = express()

// server configuations
const port = process.env.PORT || ServerConfig.port

// cross origin issue
const allowedOrigins = ["http://localhost:3000", "http://ovigo.net"]

// parser
// app.use(cors())
app.use(
  cors({
    origin: allowedOrigins,
  })
)
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))

// Mount the router object on the root URL path
app.use("/", routes)

// Mount the middleware for handling global error
app.use(errorMiddleware)

// Start the server
app.listen(port, () => console.log(`Server running at port: ${port}`))
