
/*
 * GET home page.
 */
var MongoClient = require('mongodb').MongoClient;

exports.index = function(req, res){
	MongoClient.connect("mongodb://deepak:deepak@ds061360.mongolab.com:61360/mongo", function(err, db) {
		  if(!err) {
		    console.log("We are connected");
		    var collection=db.collection('gumball');
		    collection.find({}).toArray(function(err,docs){
		       	var data =docs[0];
		    	console.log(data);
		    	res.writeHead(200,{"Content-Type":"application/json"});
		    	res.end(JSON.stringify(data)+"\n");
		    });
		  }else{
			  
			  db.collection('gumball',function(err,collection){
				  
				  console.log(collection);
			  });
		  }
		});
};



