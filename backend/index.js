const express=require('express');
const {default:mongoose}=require('mongoose');
const dotenv=require('dotenv');
const route = require('./routes/routes');
dotenv.config();
const morgan =require("morgan");
const app=express();
app.get('/',(req,res)=>{
    res.send("<H1>Hey There, I'm Here</H1>")
})

app.use("/api/users",route);
app.use(morgan("tiny"))
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