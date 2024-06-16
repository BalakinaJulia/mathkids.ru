const http = require('http');

const server = http.createServer((req, res) => {
if (req.method === 'GET') {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World');
}
});

const port = 3005;
server.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});