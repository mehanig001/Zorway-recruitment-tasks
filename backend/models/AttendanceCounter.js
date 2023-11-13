const mongoose=require('mongoose');

const AttendanceCounterSchema=new mongoose.Schema(
    {
        count:{
            type:Number,
            default:0,
        }
    }
);

module.exports=mongoose.model("countatt",AttendanceCounterSchema);