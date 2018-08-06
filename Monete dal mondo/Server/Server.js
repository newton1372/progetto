var express = require('express');
var app = new express();
var cors = require('cors');
var fs = require('fs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get("/",function(req,resp){
      resp.set('Content-Type', 'text/xml');
      resp.send(fs.readFileSync('./ListaMonete.xml', {encoding: 'utf-8'}));

    })



app.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

