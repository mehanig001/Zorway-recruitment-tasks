const admin =require('../config/firebase.config');
const users = require('../models/Users');
const router=require('express').Router();


// Function for making new admin
const newUserData = async (decodedValue,req,res)=>{

    const newUser = new users({

        name:decodedValue.name,
        email:decodedValue.email,
        imageUrl:decodedValue.picture,
        userId:decodedValue.user_id,
        email_verified:decodedValue.email_verified,
        role:"admin"

    });

    //  Saving the data
    
        try{
            const savedUser = await newIser.save();
            res.status(200).send({user: savedUser});
        }
        catch(error){
            res.status(400).send({success:false,msg: error});
        }

        
};




// Logging in Admin

router.post("/admin/login",async (req,res)=>{
    

    // Checking if firebase has sent userCredentials


    if(!req.headers.authorization){
        return res.status(500).send({message:"Something went wrong"});
    }
    const token =req.headers.authorization.split(" ")[1];
    try{

        // Decoding the data from token sent by firebase as userCredentials


        const decodedValue= await admin.auth().verifyIdToken(token);
        if(!decodedValue){
            return res.status(500)
            .json({success:false,message:"Unauthorized User"});
        }
        console.log(decodedValue);
        // Checking if the admin already exists or not

        const userExists = await users.findOne({userId: decodedValue.user_id});


        if(!userExists){
            
            // Admin Do not exsits
            // So
            // Make new Admin

            newUserData(decodedValue,req,res);

        }
        else{
            res.send("No problem");
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