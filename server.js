var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World from jenkins");
});

app.get('/home',function(req,res) {
  res.send("Hello jenkins");
});

app.get('/about',function(req,res) {
  res.send("How to automate building and deployment node js apps using jenkins.");
});

app.get('/details',function(req,res) {
  res.send("details page.");
});

app.get('/contact',function(req,res) {
  res.send("contact page.");
});

app.get('/posts',function(req,res) {
  res.send("posts page.");
});

app.listen(4000);