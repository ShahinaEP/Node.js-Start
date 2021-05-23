var http = require('http');
// var fs =require('fs');
var url = require('url');
var server = http.createServer(function(req,res){
    //1st code
    // res.end("Hollo Node.js");
    // if(req.url =="/"){
    //     res.end("This is home page");
    // }


    //2nd code
    // else if(req.url == "/about"){
    //     res.end("This is about page");
    // }
    // else if(req.url =="/contact"){
    //     res.end("This is contact us page");
    // }



    //3rd code
    // if(req.url =="/"){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write('<h1>This is home page</h1>');
    //     res.end();
    // }
    // else if(req.url == "/about"){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write('<h1>This is about page</h1>');
    //     res.end();
    // }
    // else if(req.url =="/contact"){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write('<h1>This is contact page</h1>');
    //     res.end();
    // }
});
server.listen(5051);
console.log("Server Run Success");