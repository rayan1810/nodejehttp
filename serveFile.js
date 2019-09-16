var http = require('http');
var url = require('url');

http.createServer(function(request, response) 
{
  var pathname = url.parse(request.url).pathname;

  if (request.method === "GET") {
    if (pathname === "/user") {
        response.writeHead(200,{'Content-type':'application/json'});
        response.end('{"Name":"Rohit","Id":"1711981243"}');
    }
    else if (pathname === "/order") {
        response.writeHead(200,{'Content-type':'application/json'});
        response.end('{"OrderName":"Fruits","OId":"1243"}');
    }
    else {
      response.end();
    }
  } 
  
  else {
    response.end();
  }
}).listen(8000, '127.0.0.1');

console.log('Running on 127.0.0.1:8000');
