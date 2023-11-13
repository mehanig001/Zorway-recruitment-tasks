const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema(
    {
        date:{
            type:String,
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
    },
    { timestamps: true}
);

module.exports= mongoose.model("attendance",attendanceSchema);