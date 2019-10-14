const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Bepul:123@cluster0-lo1zs.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
    var myobj = [
        { _id:157, name: 'rakib', address: 'nazma bording'},
        { _id:158, name: 'John', address: 'Highway 71'},
        { _id:159, name: 'Peter', address: 'Lowstreet 4'},
        { _id:160, name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
      ];

client.connect(err => {
  const collection = client.db("database").collection("people_table").insertMany(myobj,function(err, res){
      console.log(res.insertedCount);
      
  });
  console.log("ok");
  
  // perform actions on the collection object
  client.close();
});
