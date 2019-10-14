const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Bepul:123@cluster0-lo1zs.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    if(err) throw err;
    var dbo = client.db("database");
    var oldvalue = {name:"rakib"};
    var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("people_table2").updateOne(oldvalue,newvalues,function(err, res){
      if(err) throw err;
      
      console.log("ok");
  
  // perform actions on the collection object
        client.close();
  });
  
});
