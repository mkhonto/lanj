exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
 		connection.query('select * from routes', [], function(err, results){
        	if (err) return next(err);
			res.render('routes', {
            	 : results
			});
		});
 	});
		
};