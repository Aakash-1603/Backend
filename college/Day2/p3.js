const http=require('http')
const server =http.createServer((requestAnimationFrame,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(`<h1> World of pawnstrs</h1>`);

})
server.listen(9001,()=>{
    console.log('Server is Running');
})