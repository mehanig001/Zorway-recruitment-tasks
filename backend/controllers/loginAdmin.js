const users = require('../models/Users');
const admin =require('../config/firebase.config');
const newAdminData=require('./newAdmin');

const loginAdmin = async (req, res) => {


  // Checking if firebase has sent userCredentials

  if (!req.headers.authorization) {
    return res.status(500).send({ message: "Something went wrong" });
  }



  const token = req.headers.authorization.split(" ")[1];


  try {
    // Decoding the data from token sent by firebase as userCredentials

    const decodedValue = await admin.auth().verifyIdToken(token);


    if (!decodedValue) {
      return res
        .status(500)
        .json({ success: false, message: "Unauthorized User" });
    }



    // Checking if the admin already exists or not

    const userExists = await users.findOne({ userId: decodedValue.user_id });



    if (!userExists) {
      // Admin Do not exsits
      // So
      // Make new Admin



      newAdminData(decodedValue, req, res);


    } else {

      res.send("No problem");


    }
  } catch (error) 
  {

    return res.status({ success: false, msg: error });

  }
};

module.exports=loginAdmin;