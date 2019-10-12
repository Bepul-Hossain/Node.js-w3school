var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="input">')
    br();
    
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
    
    function br(){
        var i;
        for(i=0;i<6;i++){
            res.write('<br>');
        }
    }
}).listen(2500);
