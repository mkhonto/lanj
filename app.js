//grabe the packages we need
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var myConnection = require('express-myconnection');
var bodyParser = require('body-parser');
//var main = require('./routes/main');
//var ranks = require('./routes/ranks');
//var routes = require('./routes/routes');

var app = express();

var dbOptions = {
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'getMeThere',
};

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
app.get('/', main.show);
//start the server
app.get('/main', main.show);
app.listen(3000, function(){
	console.log('Server started! At http://localhost: 3000');
});
