"use strict";
var fs = require('fs');

fs.appendFile('demoText.txt','hi',function(err){
    if(err) throw err;
    console.log('appendFile');
});
fs.open('demoText1.txt','w',function(err,file){
    if(err) throw err;
    console.log('open');
});
fs.writeFile('demoText3.txt','hello world',function(err){
    if(err) throw err;
    console.log('writeFile replace');
});
fs.unlink('demoText3.txt',function(err){
    if(err) throw err;
    console.log('unlink delete file');
});