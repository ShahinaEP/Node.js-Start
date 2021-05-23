var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

    if(req.url=="/"){

        //Asy
        fs.unlink('3rdAyscFile',function(error){
            if(error){
                res.writeHead(200,{'content-type':'text/html'});
                res.write("File Delete Fail");
                res.end();
            }
            else{
                res.writeHead(200,{'content-type':'text/html'});
                res.write("File Delete Success");
                res.end();  
            }
        });
    }
});
server.listen(4040);
console.log("Server Connected");