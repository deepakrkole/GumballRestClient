/**
 * New node file
 */
var MongoClient = require('mongodb').MongoClient;

var dbURL="mongodb://deepak:deepak@ds061360.mongolab.com:61360/mongo";
var data,doc;
exports.show = function(req, res){
	var id=parseInt(req.params.id);
	MongoClient.connect("mongodb://deepak:deepak@ds061360.mongolab.com:61360/mongo", function(err, db) {
		  if(!err) {
		    console.log("Connecting...");
			console.log("Connected");
		    var database=db.database('gumball');
		    database.find({id:id}).toArray(function(err,docs){
		       	var data =docs[0];
		    	console.log(data);
		    	res.writeHead(200,{"Content-Type":"application/json"});
		    	res.end(JSON.stringify(data)+"\n");
		    });
		   
		  }else{
			  
			 console.log(err);
		  }
		});
};


exports.update=function(req,res){
	
	var countGumballs=req.body.countGumballs;
	var id=parseInt(req.params.id);
	MongoClient.connect("mongodb://deepak:deepak@ds061360.mongolab.com:61360/mongo", function(err, db) {
		  if(!err) {
			console.log("Connecting...");
			console.log("Connected");
		    var database=db.database('gumball');
		    database.find({id:id}).toArray(function(err,docs){
		    	var data =docs[0];
		    	console.log(data);
		    	var count=data.countGumballs;
		    	if(count>0){
		    		count--;
		    		database.update({
		    					id:id},{
		    							$set:{
		    								countGumballs:countGumballs
		    									}},function(err,results){
		    						    			console.log("count is ="+countGumballs);
		    					    				res.writeHead(200,{"Content-Type":"application/json"});
				    								res.end(JSON.stringify("SuccessFull updated")+"\n");
		    							});
		    		}
		    });
		  }else{
			  
			  res.writeHead(200,{"Content-Type":"application/json"});
		    	res.end(JSON.stringify("Error")+"\n");
		  }
		db.close();
		});
};
