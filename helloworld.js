var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello John, this is your 2nd github trigger');
});
server.listen(8080);
