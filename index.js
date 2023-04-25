const http = require('http')
const url = require('url')
const path = require('path')

const host = '127.0.0.1'
const port = 3333

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const pathName = parseUrl.pathname; 
    const ext = path.extname(pathName).toLowerCase();

    if (pathName === '/') {        
        res.statusCode = 200
        res.setHeader('Content-Type','text/plain')
        res.end('First Server in nodeJS')
      } 
    else if (pathName === '/orlando') {        
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')
        res.end('<h2>Welcome Orlando to the NodeJs Course</h2>')
      } 
    else if (ext === '.html') {        
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')
        res.end(`<h3>Path: ${pathName}. Extension: ${ext}</h3>`);
      } 
    else {
        res.statusCode = 404
        res.setHeader('Content-Type','text/plain')
        res.end('404 Not Found');
      } 
  });
  
  server.listen(port, host,() => {
    console.log(`Server running at http://${host}:${port}`);
  });

