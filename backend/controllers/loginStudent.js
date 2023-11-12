const users = require('../models/Users');
const admin =require('../config/firebase.config');
const newStudentData=require('./newStudent');

const loginStudent=async (req,res)=>{


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

        const userExists = await users.findOne({userId: decodedValue.user_id});


        if(!userExists){
            
            // Student Do not exsits
            // So
            // Make new Student

            newStudentData(decodedValue,req,res);

        }
        else{
            res.send("No problem");
        }



    }
    catch(error){
        return res.status({success:false,msg:error})
    }
};

module.exports=loginStudent;