var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}, function(error, db){
    if(error) throw error;
    var dbo = db.db("DATABASE");
    var mysort = {name:-1,address:-1};
    dbo.collection("collectionsValue").find().sort(mysort).toArray((error, result)=>{
        if(error) throw error;
        console.log(result);
        db.close();
    });
});