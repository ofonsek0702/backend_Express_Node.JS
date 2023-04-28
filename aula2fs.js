const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

const host = '127.0.0.1'
const port = 3333

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const pathName = parseUrl.pathname; 
    
    if (pathName === '/') { 
        res.writeHead(200,{'Content-Type':'text/html'})
       fs.readFile('aula2home.html', function(err,arquivo){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(arquivo)
            res.end()
        }) 
      } 
    else if (pathName === '/form') {        
        
        res.writeHead(200,{'Content-Type':'text/html'})

        const name = parseUrl.query.name

        if(!name)
            fs.readFile('aula2.html', function(err,arquivo){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(arquivo)
                res.end()
            })
         else{
            res.end(`<h2>Welcome ${name} to the NodeJs Course</h2>`)
         }

      }     
    else {        
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end('404 Not Found');
      } 
  });
  
  server.listen(port, host,() => {
    console.log(`Server running at http://${host}:${port}`);
  });