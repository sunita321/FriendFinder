var bodyParser = require('body-parser');
var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) 
{
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	app.get('/api/friends', function(req, res)
	{
		res.json(friends);
	});

//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

	app.post('/api/friends', function(req, res) 
	{
		var userResults = req.body.scores;
		
		// convert the string number to integer array
		for (var i=0; i<userResults.length; i++) 
		{
			userResults[i] = parseInt(userResults[i]);
			//console.log(userResults);
		}

		//go through friends array
		for (var i = 0; i < friends.length; i++) 
		{
			
			var personalDifference = difference(userResults, friends[i].scores);

			console.log("Personal Diff" + personalDifference);

			

		}

/* With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5
Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.
*/

		function difference(array1, array2) 
		{

			// toall difference
			var totalDifference=0;
			
			for (var i=0; i<array1.length; i++) 
			{
				totalDifference += Math.abs(array1[i] - array2[i]);
				console.log("total diff = " + totalDifference);
			}
			
			// return the difference between the two arrays reflecting the deviation
			return totalDifference;
		}

		res.send(friends[i]);
		
	});
};