var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.get('/home',function(req,res) {
  res.send("Hello jenkins");
});

app.get('/about',function(req,res) {
  res.send("How to automate building and deployment node js apps using jenkins.");
});

app.listen(4000);