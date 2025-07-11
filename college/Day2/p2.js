const http=require('http');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Connect-Type','text/html');
    res.end('Hello World');
})
server.listen(9000,()=>{
    console.log('Server running');
})