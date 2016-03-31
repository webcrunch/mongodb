// Initial Setup
var 
express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongodb = require('mongodb'),
mongoose = require('mongoose');




app.use(express.static('public'));

//req.connection.remoteAddress; --> ip address
var server = app.listen(9999, function() {
	var port = server.address().port;
	

	console.log("Server started. Listening to connections on port " + port );
});