//1. Server Setup:
const http = require('http');
const server = http.createServer((req, res) => {

});

// Listen on port 5500
server.listen(5500, () => {
  res.end('Server is listening on port 5500');
});

//2. Route Handling:
const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the Home Page');
      res.end();
    } else if (req.url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the About Page');
      res.end();
    } else if (req.url === '/contact') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the Contact Page');
      res.end();
    }
  });
  
//3. File Operations:

const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/file-write') {
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Failed to write file');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('File written successfully');
        res.end();
      }
    });
  }
});

//4.Response Termination:

res.end();
