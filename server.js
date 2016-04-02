// Initial Setup
var 
express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongodb = require('mongodb'),
mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
	extended: true
}));

// Connection URl. This is where your mongodb is running.
var url = 'mongodb://localhost:27017/test';

//
var MongoClient = mongodb.MongoClient;

 // use connection method to connect to the server
MongoClient.connect(url, function(err, db){
	if(err){
		console.log("Cant connect to mongodb because:", err);
	}
	else{
		console.log("Connection established to " , url );

		// collection is an database ? 
		var collection = db.collection('test');
		// var data = collection.insert({name: "albert svanberg", ocuppation: "speaker"});
		// collection.find();
		db.close();
	}
});
MongoClient.connect(url, function(err, db) {
  finddata(db, function() {
      db.close();
  });
});

var finddata = function(db, callback) {
   var cursor =db.collection('test').find( );
   cursor.each(function(err, data) {
      
      if (data != null) {
         console.log(data);
      } else {
         callback();
      }
   });
};

app.use(express.static('public'));

//req.connection.remoteAddress; --> ip address
var server = app.listen(9999, function() {
	var port = server.address().port;
	

	console.log("Server started. Listening to connections on port " + port );
});