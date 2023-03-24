const http = require("http");
const port = 3000;

const routes = {
    '/': 'You\'re on a Node route',
    '/books': 'Book route ahead',
    '/66': 'I\'m on a highway to hell'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Server started at  http://localhost:${port}`);
});
