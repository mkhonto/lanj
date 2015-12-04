var RanksDataService = require('../dataServices/rankServicePromise');
var assert = require("assert");
var mysql = require("mysql");
var Promise = require("bluebird");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.MYSQL_USER || 'root',
  password : "",
  database : 'getmethere_test'
});

var rankService = new RanksDataService(connection);

describe('Rank Data Service', function(){

      it('should get all ranks', function (done) {
          rankService
            .getAllRanks()
            .done(function(ranks){
                assert.equal(3, ranks.length);
                done();
            });
      });

      it('should get all routes offered by specified rank', function (done) {
          rankService
            .getRoutes(2)
            .done(function(routes){
                assert.equal(2, routes.length);
                done();
            });
      });
      it('should get rank info', function (done) {
          rankService
            .getInfo(2)
            .done(function(rank){

                var bellville = {
                  id:2,
                  name :'Bellvile',
                  type:'official',
                  lattitude:10.1457800000,
                  longitude:-20.1447600000
                }
                
                assert.deepEqual(bellville,rank);
                done();
            });
      });

})
