var http = require("http");

function process_request(req, res){
    var body = 'Thanks for calling!\n';
    var content_lenght = body.length;
    res.writeHead(200, {
        'Content-Lenght': content_lenght,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}

var s = http.createServer(process_request);
s.listen(8080);