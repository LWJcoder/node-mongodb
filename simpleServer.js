/**
 * Created by Joh on 2016/10/12.
 */
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017/conFusion';

//连接至服务器
MongoClient.connect(url, function (err, db) {
    assert.equal(err, null);
    console.log('Connect to server');

    var collection = db.collection("dishes");

    collection.insertOne({name:"Mezz", description:"a gril name"},
                function (err, result) {
                    assert.equal(err, null);
                    console.log("after insert");
                    console.log(result.ops);

        collection.find({}).toArray(function (err, docs) {
            assert.equal(err, null);
            console.log("Found: ");
            console.log(docs);

            db.dropCollection("dishes", function (err,result) {
                assert(err, null);
                db.close();
            });
        });
    });
});