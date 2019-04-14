function boolHelper(val) {
	if (val == undefined || val == 'Off') {
		return 0;
	}else return 1;
}

module.exports = {
	getHomeList: (req, res) => {

		let query = "SELECT * FROM homeinfo.home ORDER BY Rating, StreetAddress, City, State DESC";

		//execute query
		db.query(query,(err,queryResult) => {

			if (err) res.redirect('/');

			res.render('index.ejs',{
				homes:queryResult
			});

		});

	},

	getHomeInfoPage: (req,res) => {

		//Get id of the home we want to find
		let homeId = req.params.homeId;
		let query = `SELECT * FROM homeinfo.home WHERE HomeID = ${homeId}`;
		//console.log(query);

		//Execute querey
		db.query(query, (err, queryResult) => {

			if (err) throw err;

			console.log(queryResult[0]);

			res.render('landing.ejs',{
				home:queryResult[0]
			});

		});
	},

	getSubmitPage: (req, res) => {
		res.render('submit.ejs');
	},

	postSubmitPage: (req, res) => {
		//console.log(req.body);

		let data = req.body;

		//Generate a hash code for the address
		let fullAddress = data.StreetAddress + data.City + data.State + data.ZipCode;
		let hashCode = 0;
		for (var i=0;i<fullAddress.length;i++) {
			hashCode = 5 * hashCode + fullAddress.charCodeAt(i);
		}
		hashCode = hashCode % 8388607;

		//Calculate score
		let score = (data.SqFt/(data.NumOfOccupancy * 100 + 50)) + ((boolHelper(data.Accessibility) + boolHelper(data.WindowInBedroom) + boolHelper(data.HasShower) + boolHelper(data.HouseNumberLegible) + boolHelper(data.HandrailsOnStairs) + boolHelper(data.HasTrashBarrels))/7);
		score = Math.round(Math.min(score * 10,10));

		//Create deletion command
		let queryDestroy = `DELETE FROM home WHERE StreetAddress = '${data.StreetAddress}' AND City = '${data.City}' AND ZipCode = '${data.ZipCode}' AND State = '${data.State}'`;
		//Create addition command
		let queryCreate = `INSERT INTO home VALUES (${hashCode}, '${data.HousingType}', '${data.StreetAddress}', '${data.City}', '${data.State}', '${data.ZipCode}', ${data.SqFt}, ${boolHelper(data.Accessibility)},${data.NumOfOccupancy},${data.NumOfBedrooms},${data.AvgBedroomSqFt},${boolHelper(data.WindowInBedroom)},${data.NumOfKitchen},${data.NumOfBathroom},${boolHelper(data.HasShower)},${data.NumOfLivingRoom},${data.NumOfAdditionalRooms},${boolHelper(data.HouseNumberLegible)},${data.NumberOfExits},${boolHelper(data.HandrailsOnStairs)},${boolHelper(data.HasTrashBarrels)},${score})`;

		console.log(queryDestroy);

		//Perform deletion
		db.query(queryDestroy, (err, result) => {
			if (err) throw err;
			console.log("Previous entry deleted");
		});

		//Perform addition
		db.query(queryCreate, (err, result) => {
			if (err) throw err;
			console.log("New entry created!");
		});

		console.log("New submission received!");
		res.render('received.ejs',{});

	}
};