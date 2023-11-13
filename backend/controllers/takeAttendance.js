const users = require('../models/Users');
const attendance = require('../models/Attendance')


const takeAttendance = async (req,res)=>{
    const {id,date,present,absent}=req.body;

    // Finding current user
    const current=await users.findOne({userId:id}).exec();

    if(!current){
        return res.status(500).json({success:false,msg:"Invalid User Id"});
    }
    else if(current.role==="student"){
        return res.status(500).json({success:false,msg:"Students cannot take attendance"});
    }
    present.map(async(id)=>{
        users.updateOne({userId:id},{$inc:{attendance:1}})
        .then(()=>{
            res.send(200).send({msg:"success"});
        })
        .catch(error=>{
            res.send(500).json({success:false,msg:"An error accured during update ",error});
        });
    });
    const newAttendance=new attendance({
        date:date,
        present:present,
        absent:absent
    })

    try{
        const savedAttendance= await newAttendance.save();
        res.status(200).send({attendance:savedAttendance});
    }
    catch(error){
        res.status(400).send({success:false,msg:error});
    }


};

module.exports=takeAttendance;