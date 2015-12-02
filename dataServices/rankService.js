module.exports = function(connection){

	function query(query_string , data , cb){
		connection.query(query_string , data , cb)
	}

	this.getAllRanks = function(cb){
		query('select * from rank',cb)
	}

	this.getInfo = function(rank_id,cb){
		query('select * from rank where rank_id = ?',cb)
	}

	this.getRoutes = function(rank_id,cb){
		query('select * from route where rank_id = ?',rank_id,cb)
	}

}