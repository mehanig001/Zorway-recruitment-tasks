const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema(
    {
        date:{
            type:Date,
            required:true
        },
        present:{
            type:[String],
            default:[]
        },
        absent:{
            type:[String],
            default:[]
        }
    }
);

module.exports= mongoose.model("timetable",timeTable);