var Mongoclient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 Mongoclient.connect(url,function(err, db){
    if(err) throw err;
    var dbo = db.db("DATABASE");
    dbo.collection("collectionsValue").drop((err,dbdelete)=>{
        if(err) throw err;
        if(dbdelete) console.log("ok data base deleted");
    });
 });