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

var connectDatabas = function(){
 // use connection method to connect to the server
MongoClient.connect(url, function(err, db){
	if(err){
		console.log("Can not connect to mongodb because:", err);
	}
	else{
		console.log("Connection established to " , url );

		// collection is an database ? 
		var collection = db.collection('test');
		// var data = collection.insert({object: {name: "testpunkter", glad: "nej"}, ocuppation: "object ;) "});
		// collection.find();
		db.close();
	}
});
}


var databaseInsert = function(insertvalue){
	MongoClient.connect(url, function(err, db) {


  	db.collection('test').insert(insertvalue);
  	return {status : "OK"};
      db.close();

	});
}

var databaseQuery = function(searchvalue){
MongoClient.connect(url, function(err, db) {
  findData(db,searchvalue, function() {
      db.close();
  });
});
}

var findData = function(db,searchvalue, callback) {
   var alldata =db.collection('test').find(searchvalue);
   alldata.each(function(err, data) {
      
      if (data != null) {
         console.log(data);
      } else {
         callback();
      }
   });
};



// databaseInsert( 	);
databaseQuery({name: "*"});

app.post('/insert', function(req,res){
	var insert = {
		name: req.body.name,
		state: req.body.state,
		age: req.body.age
	}

	databaseInsert(insert);

	res.json(insert);
})



// databaseInsert();
app.use(express.static('public'));

//req.connection.remoteAddress; --> ip address
var server = app.listen(9999, function() {
	var port = server.address().port;
	

	console.log("Server started. Listening to connections on port " + port );
});