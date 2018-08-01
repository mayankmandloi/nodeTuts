var express = require('express');
var app = express();

app.use(function(req, res, next){
   console.log("A new request received at " + new Date());
   
   next();

});

app.get("/",function(req,res,next){
    res.send("Welcome to Web Bhumi:Mayank");
    next();
})

app.use("/",function(req,res){
    console.log("data sent");
})
app.listen(3000);
