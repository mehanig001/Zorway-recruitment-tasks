const admin =require('../config/firebase.config');
const users = require('../models/Users');
const router=require('express').Router();


const loginAdmin=require('../controllers/loginAdmin');
const loginStudent=require('../controllers/loginStudent');
const updateDetails = require('../controllers/updateDetails');


// Logging in Admin

router.post("/admin/login",loginAdmin);




// Logging In Student

router.post("/student/login",loginStudent);







router.patch('/update',updateDetails)








router.get('/',(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
});



module.exports=router;