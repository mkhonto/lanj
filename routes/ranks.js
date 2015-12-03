var geolib = require("geolib");
module.exports = function(){
	this.currentLocation ={};
	var self=this;
	this.findNear = function(req, res, next){
		
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
							console.log("\n" + JSON.stringify(rank));
						});

					});
					res.render('index',{ranks:rankInfo.slice(0,4)})
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
}