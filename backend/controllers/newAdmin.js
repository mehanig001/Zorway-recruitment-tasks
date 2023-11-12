const users = require('../models/Users');

// Function for making new admin


const newAdminData = async (decodedValue,req,res)=>{

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
            const savedUser = await newUser.save();
            res.status(200).send({user: savedUser});
        }
        catch(error){
            res.status(400).send({success:false,msg: error});
        }


};

module.exports= newAdminData;