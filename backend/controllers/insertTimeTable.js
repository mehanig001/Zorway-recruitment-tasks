const users = require('../models/Users');
const timeTable=require('../models/Timetable');

const insertTimeTable = async(req,res)=>{

    const {id,periods} =req.body;

    // Finding current user
    const current=await users.findOne({userId:id}).exec();

    if(!current){
        return res.status(500).json({success:false,msg:"Invalid User Id"});
    }
    else if(current.role==="student"){
        return res.status(500).json({success:false,msg:"Students cannot insert period in timetable"});
    }
    periods.map(async ({day,start,end,subject,teacher})=>{

        const newPeriod=new timeTable({
            day:day,
            start:start,
            end:end,
            subject:subject,
            teacher:teacher
        })
    
        try{
            await newPeriod.save();
            
        }
        catch(error){
            res.status(400).send({success:false,msg:error})
        }

    })
    res.send("success");


};

module.exports=insertTimeTable;