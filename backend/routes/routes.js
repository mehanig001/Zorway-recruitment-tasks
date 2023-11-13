// Requires

const admin =require('../config/firebase.config');
const users = require('../models/Users');
const attendance = require('../models/Attendance');
const router=require('express').Router();


// Controllers

const loginAdmin=require('../controllers/loginAdmin');
const loginStudent=require('../controllers/loginStudent');
const updateDetails = require('../controllers/updateDetails');


// Logging in Admin

router.post("/admin/login",loginAdmin);


// Logging In Student

router.post("/student/login",loginStudent);


// Updating Details

router.patch('/update',updateDetails)


// Insert attendance

router.patch('/attendance/insert',async (req,res)=>{
    const {id,date,present,absent}=req.body;

    // Finding current user
    const current=await users.findOne({userId:id}).exec();

    if(!current){
        return res.status(500).json({success:false,msg:"Invalid User Id"});
    }
    else if(current.role==="student"){
        return res.status(500).json({success:false,msg:"Students cannot take attendance"});
    }
    present.map(async(id)=>{
        users.updateOne({userId:id},{$inc:{attendance:1}})
        .then(()=>{
            console.log("success");
        })
        .catch(error=>{
            console.log(error);
        });
    });
    const newAttendance=new attendance({
        date:date,
        present:present,
        absent:absent
    })

    try{
        const savedAttendance= await newAttendance.save();
        res.status(200).send({attendance:savedAttendance});
    }
    catch(error){
        res.status(400).send({success:false,msg:error});
    }


})

router.get('/',(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
});



module.exports=router;