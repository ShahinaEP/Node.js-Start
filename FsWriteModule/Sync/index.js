var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

    if(req.url=="/"){

        //Sync
       let error = fs.writeFileSync('2ndSyncFile.txt','Welcome to Node js');
       
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
        
    }
});
server.listen(4040);
console.log("Server Connected");