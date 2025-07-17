// Importing required core modules
const http = require("http");   // For creating the HTTP server
const fs = require("fs");       // For file operations (like logging)
const url = require("url");     // For parsing URL and query strings
const express=require("express"); // Importing Express.


// Create Express App.

const app=express();
app.get("/",(req,res)=>{
    return res.send("Welcome to server...");
})

app.get("/about",(req,res)=>{
    return res.send("Welcome to About page...")
})

app.get("/Info",(req,res)=>{
    return res.send(`Welcome ${req.query.name} to this website...`)
})









// function Handler(req,res){

//     // Ignore browser's automatic favicon request
//     if (req.url === "/favicon.ico") return res.end();

//     // Parse the incoming URL to separate pathname and query
//     const newurl = url.parse(req.url, true);  // true => converts query string into an object
//     console.log(newurl);  // For debugging: logs the parsed URL

//     // Log the request info (timestamp, method, and URL) into a file
//     const log = `${Date.now()}: ${req.method} ${req.url} New Request\n`;
//     fs.appendFile("request.txt", log, (err) => {
//         if (err) {
//             console.log("Logging Error:", err);
//         }
//     });

//     // Routing logic based on pathname
//     switch (newurl.pathname) {
//         case "/":
//             // Root route (http://localhost:8000/)
//             res.end("Welcome to YouTube");
//             break;

//         case "/channel":
//             // Extract query parameter 'myname' from the URL
//             // Example: http://localhost:8000/channel?myname=Aakash
//             const user = newurl.query.myname || "Guest";

//             // Respond with a personalized message
//             res.end(`Hi ${user}, it's your Channel`);
//             break;

//         case "/form":
//             // Handle GET and POST separately
//             if (req.method === "GET") {
//                 res.end("This is a form");
//             } else if (req.method === "POST") {
//                 res.end("Form submitted successfully!");
//             } else {
//                 res.statusCode = 405;
//                 res.end("Method Not Allowed");
//             }
//             break; // ✅ break added here to stop falling to default

//         default:
//             // Handle all unknown routes (404)
//             res.statusCode = 404;
//             res.end("404 Not Found");
//     }

// }



app.listen(6500,()=>{
    console.log("server started....");
})


// Creating the HTTP server
// const myserver = http.createServer(app);

// // Start the server on port 8000
// myserver.listen(8000, () => {
//     console.log("Server Started on http://localhost:8000");
// });
