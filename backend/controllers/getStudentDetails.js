const users = require('../models/Users');


const getStudentDetails = async(req,res)=>{
    try{
        const {id}=req.body;
        const studentDetails=await users.findOne({userId:id});
        res.status(200).send(studentDetails);
    }
    catch(err){
        res.send(err);
    }
};

module.exports=getStudentDetails;