var http =require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){

    if(req.url=="/"){

        //Asy
        // fs.readFile('home.html', function(error,data){

        //     res.writeHead(200,{'content-type':'text/html'});
        //     res.write(data);
        //     res.end();
        // });

        //sync
        let mydata = fs.readFileSync('home.html');
        res.writeHead(200,{'content-type':'text/html'});
        res.write(mydata);
        res.end();
    }
});
server.listen(2020);
console.log("Server connected");