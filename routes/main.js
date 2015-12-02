 exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
 		connection.query('select * from ranks', [], function(err, results){
        	if (err) return next(err);
			res.render('main', {
            	colleges : results
			});
		});
 	});
		
};