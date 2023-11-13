const users = require('../models/Users');

const getAdminDetails = async(req,res)=>{
    try{
        const {id}=req.body;
        const adminDetails=await users.findOne({userId:id});
        res.status(200).send(adminDetails);
    }
    catch(err){
        res.send(err);
    }
};



module.exports=getAdminDetails;