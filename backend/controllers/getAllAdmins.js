
const users = require('../models/Users');

const getAllAdmins = async (req,res)=>{
    try{
        const role='admin';
        const allAdmins=await users.find({role:role});
        res.status(200).send(allAdmins);
    }
    catch(err){
        res.send(err);
    }
};



module.exports=getAllAdmins;