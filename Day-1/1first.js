var express = require('express');
var app = express();

//app.get(route, callback)
app.get('/', function(req, res){
   res.send("Hello world!");
});


//app.listen(port, [host], [backlog], [callback]])
app.listen(3000);