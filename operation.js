var assert = require('assert');

//插入
exports.insertDocument = function(db, document, collection, callback){
	var coll = db.collection(collection);
	coll.insert(document, function(err, result){
		assert.equal(err, null);
		console.log("inserted "+ result.result.n+ "into collection: "+collection);
		callback(result);
	});

};

exports.findDocument = function( db, collection, callback){
	var coll = db.collection(collection);
	coll.find({}).toArray(function(err, doc){
		assert.equal(err, null);
		callback(doc);
	});
};

exports.removeDocument = function(db, document, collection, callback){
	var coll = db.collection(collection);
	coll.deleteOne(document, function(err, result){
			assert.equal(err, null);
			console.log("delete the document"+ document + "from "+ collection);
			callback(result);
		})	;

};

exports.updateDocument = function(db, document, update, collection, callback){
	var coll =  db.collection(collection);

	coll.updateOne(document, {$set: update},null, function(err, result){
		assert.equal(err, null);
		console.log("update wiih "+ update);
		callback(result);
	});
};