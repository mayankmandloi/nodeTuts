var express = require('express');
var app = express();


app.use(function(req, res, next){
   console.log("A new request received at " + new Date());
   next();

});
app.get("/",function(req,res,next){
    res.send("Welcome to Web Bhumi");
    next();
})

app.use("/",function(req,res,next){
    console.log("data is sent for home page");
    next();
})



app.use("/test",function(req,res,next){
    console.log("data is being sent for test");
    next();
})
app.get("/test",function(req,res,next){
    res.send("Welcome to test page");
    next();
})

app.use("/test",function(req,res){
    console.log("data sent for test");
})
app.listen(3000);
