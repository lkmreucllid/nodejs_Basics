//require directive to load http module
var http = require('https');
/*
http.craeteServer() to create Server
.listen(8081) to bind the created server at port 8081

*/

http.createServer(function(request, response){
    //HTTP Status: 200 : OK
    response.writeHead(200,{'Content-Type':'text/plain'});
    //Send the response body as "Hello World"
        response.end('Hello World');
}).listen(8081);
console.log('Server running at 127.00.0.8081');
