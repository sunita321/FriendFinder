var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//send to hroku port or test port
var PORT = process.env.PORT || 8080;

//Set up BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

app.use(express.static(__dirname + '/app/public'));

//Routing
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});