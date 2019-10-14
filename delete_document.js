var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}, function(error, db){
    if(error) throw error;
    var dbo = db.db("DATABASE");
    var deleteDocument = {_id:160};
    dbo.collection("collectionsValue").deleteOne(deleteDocument,(error, result)=>{
        if(error) throw error;
        console.log(result);
        db.close();
    });
});