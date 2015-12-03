var geolib = require("geolib");
module.exports = function(){

	this.findNear = function(req, res, next){
		req.services(function(err,services){
			var rankService = services.rankService
		    var location = req.body;
			rankService.getAllRanks(function(err,ranks){
				geolib.orderByDistance(ranks)
				ranks.forEach(function(rank){
					rankService.getRoutes(rank.rank_id, function(err, routes){
						rank["routes"] = routes; 
						//console.log("\n" + JSON.stringify(rank));
					});

				});
				res.render('index',{ranks:ranks})
			})
		})
	}
}