const express=require('express');
const {default:mongoose}=require('mongoose');
const dotenv=require('dotenv');
const route = require('./routes/routes');
dotenv.config();
const morgan =require("morgan");
const bodyParser = require('body-parser');
const cors =require('cors');
const counter=require('./models/AttendanceCounter');
const app=express();
app.get('/',(req,res)=>{
    res.send("<H1>Hey There, I'm Here</H1>")
})

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.use("/api/users",route);

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MONGOOSE CONNECTED");
})
.catch(()=>{
    console.log("Not Connencted to MONGOOSE");
})



app.listen(8080,()=>{
    console.log("Here I listened something at PORT 8080");
})