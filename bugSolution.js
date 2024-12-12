```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle requests
  if (req.url === '/error') {
    res.statusCode = 500;
    res.end('Internal Server Error');
    return;
  }
    res.end('Hello World!');
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```