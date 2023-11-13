const timetable= require('../models/Timetable');

const getTimeTable =async(req,res)=>{
    try{
        const allPeriods=await timetable.find();
        res.status(200).send(allPeriods);
    }
    catch(err){
        res.send(err);
    }
};

module.exports=getTimeTable;