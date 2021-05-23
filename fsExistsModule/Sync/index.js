var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

    if(req.url=="/"){

        //Sync
        var file = '5ndSyncFile.txt';
        let result = fs.existsSync(file);

        if(result){
            res.end(file+" :This file is Exist");
        }else{
            res.end(file+" :This file is not Exist");
        }
        
    }
});
server.listen(4040);
console.log("Server Connected");