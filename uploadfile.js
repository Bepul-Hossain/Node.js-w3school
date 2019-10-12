var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var mv = require('mv');

http.createServer(function(req, res){
    if(req.url=='/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.fileuploaded.path;
           // console.log(oldpath);
           //var newpath = 'C:/Users/HP/' + files.fileuploaded.name;
           var newpath = 'E:/movie/new/' + files.fileuploaded.name;
           //console.log(newpath);
           /*fs.readFile(oldpath, function(err,data){
               if(err) throw err;
               console.log('file read');
               fs.writeFile(newpath,data, function(err){
                    if(err) throw err;
                    res.write('file uploaded and moved');
                });
           });
        
           fs.unlink(oldpath,function(err){
               if(err) throw err;
               console.log('file deleted');
           });*/
           mv(oldpath,newpath,function(err){
                if(err) throw err;
                res.write('file uploaded and moved');
                res.end();
           });
        });
    }else{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileuploaded"><br><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);