var http = require('http');

http.createServer(function (request, response) {
    console.log(request.headers);
    response.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'tESt': '1111'
        });
    response.write(request.url);
    response.end();
    return;
}).listen(8080);
