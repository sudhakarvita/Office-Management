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

  //get all admins

router.get('/get/employees', async (req, res) => {
    try {
      const allEmployees = await employee.find(); 
      res.status(201).json(allEmployees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  // get employee with id

router.get('/get/employee/:id', async (req, res) => {
    try {
      const Employee = await employee.findById(req.params.id);
      res.status(200).json(Employee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  //employee update with id

router.put( '/employee/update/:id', async (req,res) =>{
    try{
      const Employee = await employee.findByIdAndUpdate( req.params.id, {$set:req.body}, {new:true});
      res.status(201).json(Employee);
    }catch(err){
      res.status(500).json(err)
    }
  });

  //delete employee with id

router.delete( '/employee/delete/:id', async (req,res) =>{
    try{
      const Employee = await employee.findByIdAndDelete(req.params.id);
      res.status(201).json(Employee);
    }catch(err){
      res.status(500).json(err);
    } 
  });

module.exports = router