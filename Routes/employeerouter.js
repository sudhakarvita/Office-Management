const express = require("express")
const employee = require("../Model/employeemodel")
const router = express.Router()
const cors = require('cors');

let corsOptions = {
  origin: [ 'http://localhost:4500', ]
};


//creating employee

router.post('/employee/create', (req, res) => {
  const newEmp = new employee(req.body);
  newEmp.save();
  res.status(201).json(newEmp);
});

//employee login

router.post( '/employee/login',cors(corsOptions), async(req,res) =>{
    const Employee = await employee.findOne(req.body);
    if(Employee){
      res.status(201).json(Employee);
    }else{
      res.status(500).json('employee login failed');
      
    }
  });

module.exports = router