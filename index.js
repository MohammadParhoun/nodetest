// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Docker and Jenkinsi and sina!!!');
});

server.listen(80, () => {
  console.log('Server running at http://localhost:80/');
});

