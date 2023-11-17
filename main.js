const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose");

const adminRouter = require("./Routes/adminrouter")

const app = express()
dotenv.config()

mongoose.connect(process.env.DB_URL)
    .then(console.log("db connected succesfully"))
    .catch(err => {
        console.log("error",err)
    })



app.use(express.json())

app.use("/",  adminRouter)


//port
app.listen(4500, (req, res) => {
    console.log("welcome mvc backend")
})