var express = require('express');
var app = express();


app.use(function(req, res, next){
   console.log("A new request received at " + new Date());
   
   next();

});

app.get("/",function(req,res){
    res.send("Welcome to Web Bhumi");
})

app.listen(3000);
