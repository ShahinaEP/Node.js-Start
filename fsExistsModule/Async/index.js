var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

    if(req.url=="/"){

        //Asy
        var file = 'File.txt';
        fs.exists(file,function(result){
            if(result){
                res.end(file+" :This file is exist");
            }
            else{
                res.end(file+" :This file is not exist");  
            }
        });
    }
});
server.listen(4040);
console.log("Server Connected");