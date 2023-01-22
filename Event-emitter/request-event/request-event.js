const http = require("http");

const server = http.createServer();

// The callback function we used inside the createServer() is used as a event listener, for which the event we
// bind for the server. 
server.on("request", (req, res)=>{
    res.end("<h1>Hi.....</h1>")
});
server.listen(5000, ()=>{
    console.log("Server is running");
})