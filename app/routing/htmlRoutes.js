var path = require('path');

module.exports = function (app) 
{

// go to survey.html page
	app.get("/survey", function(req, res) 
	{
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});

	// every other url path goes to the home.html page
	app.use(function(req, res) 
	{
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

	app.use('*', function(req, res) 
	{
		res.send("404 error");
	});
};