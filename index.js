var express = require('express');

// create express app
var app = express();

// set view engine: ejs
app.set('view engine', 'ejs');

// set router
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});
app.get('/profile/:name', function(req, res){
  var data = {
    name: 'yangjb',
    age: 29,
    family: {
      father: 'yangzhou',
      monther: 'huozhongxin',
      wife: 'gujiamin',
      children: 2
    }
  }
  res.render('profile', data);
});

app.listen(3000);
