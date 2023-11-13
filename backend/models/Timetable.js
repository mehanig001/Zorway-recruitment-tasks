const mongoose = require('mongoose');

const timeTable = mongoose.Schema(
    {
        day:{
            type:String,
            required:true
        },
        start:{
            type:String,
            required:true
        },
        end:{
            type:String,
            required:true
        },
        subject:{
            type:String,
            required:true
        },
        teacher:{
            type:String,
            required:true
        }
    },
    { timestamps: true}
);

module.exports= mongoose.model("timetable",timeTable);