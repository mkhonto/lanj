var Promise = require("bluebird");

function QueryExecutor(connection) {
    this.connection = connection;

    this.executeQuery = function(query, data){
        data = data || [];
        return new Promise(function(accept, reject){
            connection.query(query, data, function(err, results){
              if (err){
                return reject(err)
              }
              accept(results);
            });

        })
    };
}



module.exports = function(connection){

  var queryExecutor = new QueryExecutor(connection);

  this.getAllRanks = function(cb){
    return queryExecutor.executeQuery('select * from rank',cb)
  }

  this.getInfo = function(rank_id,cb){
    return queryExecutor.executeQuery('select * from rank where rank_id = ?',rank_id,cb)
  }

  this.getRoutes = function(rank_id,cb){
    return queryExecutor.executeQuery('select * from route where rank_id = ?',rank_id,cb)
  }

}
