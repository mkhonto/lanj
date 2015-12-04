var geolib = require("geolib");
module.exports = function(){
	this.currentLocation ={};
	this.destinationLocation ={};
	var self=this;

	this.findNear = function(req, res, next){
		
		var locationData = false;
		
		console.log(" ######### : " + JSON.stringify(req.body) );


		if (req.body.latitude && req.body.longitude){
			self.currentLocation = {latitude : req.body.latitude, longitude : req.body.longitude};
			locationData = true;
			
			console.log("********");

		};

		req.services(function(err,services){
			if(Object.keys(self.currentLocation).length == 0){
				    console.log('No Location')
					res.redirect('/')
			}
			else{
				console.log('Current Location is')
				console.log(self.currentLocation)
				var rankService = services.rankService
			    var location = req.body;
				rankService.getAllRanks(function(err,ranks){
					
					var sortedRanks = geolib.orderByDistance(self.currentLocation,ranks)
					var rankInfo =[];
					sortedRanks.forEach(function(rank){
						ranks.forEach(function(rawRank){
							if(rank.key == ranks.indexOf(rawRank)){
								rankInfo.push(rawRank)
							}
						})
					})
					rankInfo.forEach(function(rank){
						rankService.getRoutes(rank.rank_id, function(err, routes){
							rank["routes"] = routes; 
							//console.log("\n" + JSON.stringify(rank));
						});

					});

					console.log('locationData')
					console.log(locationData)

					if (!locationData)
						if(Object.keys(self.destinationLocation).length !=0){
							console.log('Displaying Searched Location')
							console.log('From :'+JSON.stringify(self.currentLocation))
							console.log('To :'+JSON.stringify(self.destinationLocation))
							/*var flow =[];
							flow.push(self.currentLocation);

							ranks.forEach(function(rank){
								if(rank.latitude == self.destinationLocation.latitude && rank.longitude == self.destinationLocation.longitude){
									self.destinationLocation = rank;
								}
							})

							ranks.forEach(function(rank){
								rank.routes.forEach(function(route){
									if(route.destination_id == self.destinationLocation.rank_id){

									}
								})
							})*/
							res.render('index', {ranks:rankInfo.slice(0,5),currentLocation:self.currentLocation,destinationLocation:self.destinationLocation})
						}
						else{
							res.render('index', {ranks:rankInfo.slice(0,5),currentLocation:self.currentLocation})
						}
						
					else
						res.render('locationData', {ranks:rankInfo.slice(0,4)})
				})
			}
			
		})
	}

	this.getCurrentLocation = function(req,res,next){
		console.log('Requesting location')
		res.render('location')
	}
	this.receiveLocation = function(req,res,next){
		var location = req.body;
		console.log('\nReceived Location')
		
		self.currentLocation =location;

		console.log(self.currentLocation)
		res.redirect('/whereami')
	}
	this.receivedSearch = function(req,res,next){
		var location = req.body;
		console.log('\nReceived Search Data')
		console.log(location)
		self.destinationLocation =location;
		res.redirect('/whereami')
	}
	this.runSimulation = function(req,res,next){
		console.log('\n-------------- SIMULATION -------------')
		console.log('Requesting location')
		res.render('simlation')
	}

	this.simulate = function(req,res,next){
		var location = req.body;
		console.log('\nSimulation location received')
		
		self.currentLocation =location;
		console.log(self.currentLocation)
		res.redirect('/whereami')
	}

	this.search = function(req, res, next){		
		req.services(function(err,services){
			console.log('\n\n\t SEARCH')
			console.log(req.body)
			var rankService = services.rankService
			var location = req.body;
			rankService.findRank(location.find,function(err,results){
				if(err)console.log(err)
				//console.log('\n\n\t RESULTS')
				//console.log(results)
				res.send(results);
			})
		})

	}
}