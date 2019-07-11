var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello John, this is your first Jenkins job');
});
server.listen(8080);
