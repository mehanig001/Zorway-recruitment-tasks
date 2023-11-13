// Requires

const admin =require('../config/firebase.config');
const users = require('../models/Users');
const router=require('express').Router();


// Controllers

const loginAdmin=require('../controllers/loginAdmin');
const loginStudent=require('../controllers/loginStudent');
const updateDetails = require('../controllers/updateDetails');
const takeAttendance=require('../controllers/takeAttendance');


// Logging in Admin

router.post("/admin/login",loginAdmin);


// Logging In Student

router.post("/student/login",loginStudent);


// Updating Details

router.patch('/update',updateDetails)


// Insert attendance

router.patch('/attendance/insert',takeAttendance);




router.get('/',(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
});



module.exports=router;