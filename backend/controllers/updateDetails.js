const users = require('../models/Users');

const updateDetails = async (req,res)=>{

    // req.body contains the id of current and userid of the user which is to be updated


    const {id,userid,...rest} =req.body;

    // Finding current user

    const current=await users.findOne({userId:id}).exec();

    if(!current){
        return res.status(500).json({success:false,msg:"Invalid User Id"});
    }

    // Finding target user

    const target=await users.findOne({userId:userid}).exec();
    if(!target){
        return res.status(500).json({success:false,msg:"Invalid Target User Id"});
    }

    // students can only update their own details not of others

    if(current.role==="student"){
        if(id===userid){

            try{
                const modified= await users.findOneAndUpdate({userId:userid},rest,{new:true});
                res.json(modified);
            }
            catch(e){
                req.status(500).json({error:"Something went wrong while updating the data"});
            }
            
        }
        else{
            return res.status(500).json({success:false,msg:"Student cannot change details of others"});
        }
    }
    else if(current.role==="admin"){
        try{
            const modified= await users.findOneAndUpdate({userId:userid},rest,{new:true});
            res.json(modified);
        }
        catch(e){
            req.status(500).json({error:"Something went wrong while updating the data"});
        }
    }
};

module.exports=updateDetails;