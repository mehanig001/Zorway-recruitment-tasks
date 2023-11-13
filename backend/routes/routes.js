// Requires

const admin =require('../config/firebase.config');
const users = require('../models/Users');
const router=require('express').Router();


// Controllers

const loginAdmin=require('../controllers/loginAdmin');
const loginStudent=require('../controllers/loginStudent');
const updateDetails = require('../controllers/updateDetails');
const takeAttendance=require('../controllers/takeAttendance');
const getStudentDetails = require('../controllers/getStudentDetails');
const getAdminDetails = require('../controllers/getAdminDetails');
const getAllAdmins = require('../controllers/getAllAdmins');
const getAllStudents = require('../controllers/getAllStudents');


// Logging in Admin

router.post("/admin/login",loginAdmin);

// Get Admin Details

router.get("/admin/profile",getAdminDetails);


// Get all admins

router.get("/admin/all",getAllAdmins);


// Logging In Student

router.post("/student/login",loginStudent);


// Getting Student details

router.get("/student/profile",getStudentDetails);


// Getting all Students


router.get("/student/all",getAllStudents);



// Updating Details

router.patch('/update',updateDetails);


// Insert attendance

router.patch('/attendance/insert',takeAttendance);




router.get('/',(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
});



module.exports=router;