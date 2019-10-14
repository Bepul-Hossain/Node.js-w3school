var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}, function(error, db){
    if(error) throw error;
    var dbo = db.db("DATABASE");
    var deleteDocument = {name:/^V/};
    dbo.collection("collectionsValue").deleteMany(deleteDocument,(error, rt)=>{
        if(error) throw error;
        //console.log(result);
        console.log(rt.result.n);
        
        db.close();
    });
});