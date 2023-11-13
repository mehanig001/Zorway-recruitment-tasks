const mongoose = require('mongoose');

const timeTable = mongoose.Schema(
    {
        
    },
    { timestamps: true}
);

module.exports= mongoose.model("timetable",timeTable);