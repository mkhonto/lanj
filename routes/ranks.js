var geolib = require("geolib");
module.exports = function(){

	this.findNear = function(req, res, next){
		req.services(function(err,services){
			var rankService = services.rankService
		    var location = req.body;
			rankService.getAllRanks(function(err,ranks){
				geolib.orderByDistance(ranks)
				res.render('index',{ranks:ranks})
			})
		})
	}
}