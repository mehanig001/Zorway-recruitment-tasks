const express=require('express');
const app=express();
const PORT=8080;
app.listen(PORT,()=>{
    console.log("Here I listened something at PORT 8080");
})