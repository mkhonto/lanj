//grabe the packages we need
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var myConnection = require('express-myconnection');
var bodyParser = require('body-parser');
var rankService = require('./dataServices/rankService');
var rank = require('./routes/ranks');
//var routes = require('./routes/routes');
var connectionProvider = require('./routes/connectionProvider');

var app = express();

var dbOptions = {
	host: 'localhost',
	user: 'freakils',
	password: 'fish04',
	port: 3306,
	database: 'getmethere',
};

var serviceSetupCallback = function(connection){
	return {
		rankService : new rankService(connection)
    
	}
};

var myConnectionProvider = new connectionProvider(dbOptions, serviceSetupCallback);
app.use(myConnectionProvider.setupProvider);
app.use(myConnection(mysql, dbOptions, 'pool'));

app.use(express.static(__dirname + '/public'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//create routes
var taxiRanks = new rank();
app.get('/',taxiRanks.getCurrentLocation );
app.get('/whereami',taxiRanks.findNear)
app.post('/location',taxiRanks.receiveLocation)
app.get('/simulation',taxiRanks.runSimulation)
app.post('/simulation',taxiRanks.simulate)
app.post('/search',taxiRanks.search)

app.listen(5000, function(){
	console.log('Server started! At http://localhost:5000');
});
