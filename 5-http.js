 const http = require('http');

 const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome HoME Page');
    }
    if(req.url=== '/about'){
        res.end('This is about page');
    }
    res.end(`
    <h1>this is a basic h1 tagg</h1>
<a href='/'></a>
    `)
})

server.listen(5000, console.log('listening!'));

 /*
const server = http.createServer((req, res)=>{
    res.write('Home Pagee! ');
    res.end();
 })
*/