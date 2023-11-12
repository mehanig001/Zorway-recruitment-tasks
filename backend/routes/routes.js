const admin =require('../config/firebase.config');
const router=require('express').Router();

// Logging in Admin

router.post("/admin/login",async (req,res)=>{
    if(!req.headers.authorization){
        return res.status(500).send({message:"Something went wrong"});
    }
    const token =req.headers.authorization.split(" ")[1];
    try{
        const decodedValue= await admin.auth().verifyIdToken(token);
        if(!decodedValue){
            return res.status(500)
            .json({success:false,message:"Unauthorized User"});
        }
    }
    catch(error){
        return res.status({success:false,msg:error})
    }
});

// Logging In Student
router.post("/student/login",async (req,res)=>{
    if(!req.headers.authorization){
        return res.status(500).send({message:"Something went wrong"});
    }
    const token =req.headers.authorization.split(" ")[1];
    try{
        const decodedValue= await admin.auth().verifyIdToken(token);
        if(!decodedValue){
            return res.status(500)
            .json({success:false,message:"Unauthorized User"});
        }
    }
    catch(error){
        return res.status({success:false,msg:error})
    }
});



router.get('/',(req,res)=>{
    console.log("hellp");
    res.send("hello");
});

module.exports=router;