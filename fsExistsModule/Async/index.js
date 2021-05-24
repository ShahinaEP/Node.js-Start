// "use strict";
var http = require('http');
var fs = require('fs');
// const ps = require("prompt-sync");
// const prompt = ps();
var server = http.createServer(function(req,res){

    if(req.url=="/"){

        //Asy = 'File.txt';
    //    let file = prompt("Enter file name :");
       //document.write
        var file ="File.txt"
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