const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose");

const adminRouter = require("./Routes/adminrouter")
const employeeRouter = require("./Routes/employeerouter")
const cors = require('cors')
const app = express()
dotenv.config()

mongoose.connect(process.env.DB_URL)
    .then(console.log("db connected succesfully"))
    .catch(err => {
        console.log("error",err)
    })



app.use(express.json())

app.use(cors()) 

let corsOptions = {
    origin: [ 'http://localhost:4500', ]
};

app.use("/",cors(corsOptions),  adminRouter)

app.use("/",cors (corsOptions), employeeRouter)

//port
app.listen(4500, (req, res) => {
    console.log("welcome office backend")
})