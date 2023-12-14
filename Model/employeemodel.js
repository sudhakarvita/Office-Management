const mongoose = require("mongoose")

const EmpSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    dateofbirth:{
        type: String,
        require: true
    },
    gender: {
        type: String,
        enum: ['male', 'female',],
        required: true,
    },
    mobileno:{
        type:Number,
        require:true
    },
    emailid:{
        type:String,
        require:true
    },
    employeeId:{
        type:String,
        require:true
    },
    password:{
        type:Number,
        require:true
    },
    jobrole:{
        type:String,
        require:true
    },
    salary:{
        type:String,
        require:true
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Employee",EmpSchema)