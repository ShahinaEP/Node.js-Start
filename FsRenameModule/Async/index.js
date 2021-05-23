var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

    if(req.url=="/"){

        //Asy
        fs.rename('3rdFile.txt','3rdAyscFile',function(error){
            if(error){
                res.writeHead(200,{'content-type':'text/html'});
                res.write("File write Fail");
                res.end();
            }
            else{
                res.writeHead(200,{'content-type':'text/html'});
                res.write("File write Success");
                res.end();  
            }
        });
    }
});
server.listen(4040);
console.log("Server Connected");