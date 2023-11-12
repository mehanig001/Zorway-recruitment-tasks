const admin =require('../config/firebase.config');
const users = require('../models/Users');
const router=require('express').Router();


const newAdminData=require('../controllers/newAdmin');
const loginAdmin=require('../controllers/loginAdmin');
const loginStudent=require('../controllers/loginStudent');


// Logging in Admin

router.post("/admin/login",loginAdmin);




// Logging In Student

router.post("/student/login",loginStudent);



router.get('/',(req,res)=>{
    console.log("hellp");
    res.send("hello");
});



module.exports=router;