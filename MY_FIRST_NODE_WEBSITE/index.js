var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    // if(req.url=="/"){
    //     //Asynchronous
    //     fs.readFile('Home.html',function(error,data){
    //        res.writeHead(200,{'Content-Type':'text/html'});
    //        res.write(data);
    //        res.end(); 
    //     });
    // }
    
     //Synchronous
     if(req.url =="/"){
        let data = fs.readFileSync('Home.html','utf8');
        res.end(data)
     }
     else if(req.url =="/About"){
         let data = fs.readFileSync('About.html','utf8');
         res.end(data);
     }
     else if(req.url=="/Contact"){
         let data = fs.readFileSync('Contact.html','utf8');
         res.end(data);
     }
});

server.listen(4040);
console.log("Server conect success")