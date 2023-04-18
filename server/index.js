const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
// const mongoose = require("mongoose")
// const Todos = require("./models/Todo")
const connectDB = require("./config/db")

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json())


connectDB()

app.use("/", require("./routes/todoRoutes"))

app.get("/salam", (req,res)=>{
    console.log("salam page");
})

app.listen(PORT, ()=>{
    console.log("Server is rungging: ", PORT);
})

