require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./src/router/router.js");
const rateLimiter = require("express-rate-limit");

const app = express(); 
const limiter = rateLimiter({
  windowMs: 30 * 1000, 
  max: 6, 
  delays: 500
})
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: process.env.WEB_ORIGIN || "http://localhost:5173"
}))
app.use(limiter)

app.use("/chatbot/api", router);

app.listen(PORT, () => {
  
})

module.exports = app;