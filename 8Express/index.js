// creating server....

const http=require("http");



const server=http.createServer((req,res)=>{

    console.log("New Request for server");
    res.end("Hello This is Aakash urff Akdon");
}) ;

// server ko chalne ke liye cahiye port..

server.listen(3300,()=> console.log("Server is Running"));



// ------------------------------------------- //



// ✅ **Explanation**:
// - You're importing Node.js's built-in `http` module.
// - This module allows you to create an HTTP server using JavaScript (no need to install anything separately).

// ---

// ### ```js
// const server = http.createServer((req, res) => {
//     console.log("New Request for server");
//     res.end("Hello");
// });


// ✅ Explanation:

// http.createServer() creates a web server.

// It takes a callback function (req, res) that is called every time a client makes a request.

// req: request object (contains info like method, URL, headers).

// res: response object (used to send a response back to the client).

// console.log("New Request for server"): logs in the terminal every time the server receives a request.

// res.end("Hello"): ends the response and sends "Hello" to the client.

