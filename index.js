var express = require('express');

var app = express();

app.get('/',function(req, res){
	res.send('hola desde server edel');
});

app.listen(80);