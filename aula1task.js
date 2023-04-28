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
    else if (pathName === '/form') {        
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')

        const name = parseUrl.query.name

        if(!name)
            res.end( `<h1>Name attribute</h1>
                  <form name="myForm" method="get">
                  <label for="fname">First name:</label>
                  <input type="text" id="name" name="name"><br><br>
                  <label for="lname">Last name:</label>
                  <input type="text" id="lname" name="lname"><br><br>
                  <input type="submit" value="Send data">
                  </form>`)
         else{
            res.end(`<h2>Welcome ${name} to the NodeJs Course</h2>`)
         }

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

