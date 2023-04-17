const express = require("express")
const cors = require("cors")
// const mongoose = require("mongoose")
// const Todos = require("./models/Todo")
const connectDB = require("./config/db")

const app = express()
app.use(cors())
app.use(express.json())


connectDB()

app.use("/todos", require("./routes/todoRoutes"))

app.get("/salam", (req,res)=>{
    console.log("salam page");
})

app.listen(3001, ()=>{
    console.log("Server is rungging 3001");
})

