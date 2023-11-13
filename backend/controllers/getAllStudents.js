
const users = require('../models/Users');

const getAllStudents = async (req,res)=>{
    try{
        const role='student';
        const allStudents=await users.find({role:role});
        res.status(200).send(allStudents);
    }
    catch(err){
        res.send(err);
    }
};



module.exports=getAllStudents;