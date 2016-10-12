/**
 * Created by Joh on 2016/10/12.
 */
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
var dboper = require('./operation');

var url = 'mongodb://localhost:27017/conFusion';

//连接至服务器
MongoClient.connect(url, function (err, db) {
    assert.equal(err, null);
    console.log('Connect to server');

   //insert 插入
    dboper.insertDocument(db,{ name:"Vadout", description:"test"},"dishes",function (result) {
        console.log(result.ops);
        dboper.findDocument(db,"dishes",function (docs) {
            console.log("Found: "+docs);

            dboper.updateDocument(db, {name:"Vadout"},{description:"Update test"},"dishes",function (re) {
                console.log(re.result);
                dboper.findDocument(db,"dishes",function (docs){
                    console.log(docs);

                    dboper.removeDocument(db,{name:"Vadout"},"dishes", function (result) {
                        console.log(result);
                        db.close();
                    });
                });
            });

        })
    })
});