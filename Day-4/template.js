 var express = require ('express');

 var app= express()

 app.set('view engine', 'pug');
 app.set('views','./views');

 app.get("/",function(req,res){
     res.render("form",{name:"Mayank"});
 });

 app.get("/home",function(req,res){

    res.render("form",{name:"Web Bhumi"})
 })

 app.get("/welcome/:name",function(req,res){

    res.render("form",{name:req.params.name})
 })
 app.listen(3000);