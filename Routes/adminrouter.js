const express = require("express")
const admin = require("../Model/adminmodel")
const employee = require( "../Model/employeemodel")
const router = express.Router()
const cors = require('cors');

let corsOptions = {
  origin: [ 'http://localhost:4500', ]
};


//creating admin

router.post('/admin/create', (req, res) => {
  const newAdmin = new admin(req.body);
  newAdmin.save();
  res.status(201).json(newAdmin);
});


//admin login

router.post( '/admin/login',cors(corsOptions), async(req,res) =>{
  const Admin = await admin.findOne(req.body);
  if(Admin){
    res.status(201).json(Admin);
  }else{
    res.status(500).json('admin login failed');
    
  }
});

//admin add employee

router.post('/addemployee', (req, res) => {
  const newEmp = new employee(req.body);
  newEmp.save();
  res.status(201).json(newEmp);
});

 //get all employees

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


//get all admins

router.get('/get/admins', async (req, res) => {
  try {
    const allAdmins = await admin.find(); 
    res.status(201).json(allAdmins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// get admin with id

router.get('/get/admin/:id', async (req, res) => {
  try {
    const Admin = await admin.findById(req.params.id);
    res.status(200).json(Admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


//admin update with id

router.put( '/admin/update/:id', async (req,res) =>{
  try{
    const Admin = await admin.findByIdAndUpdate( req.params.id, {$set:req.body}, {new:true});
    res.status(201).json(Admin);
  }catch(err){
    res.status(500).json(err)
  }
});


//delete admin with id

router.delete( '/admin/delete/:id', async (req,res) =>{
  try{
    const Admin = await admin.findByIdAndDelete(req.params.id);
    res.status(201).json(Admin);
  }catch(err){
    res.status(500).json(err);
  } 
});

module.exports = router
