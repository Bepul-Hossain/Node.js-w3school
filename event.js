var fs = require('fs');
try{
    var rs = fs.createReadStream('./demo.txt');
    throw "e";
    rs.on('open',function(){
         console.log("open successful");
    });
}catch(e){
    console.log("Unsuccessful");
}