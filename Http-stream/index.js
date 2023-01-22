const {readFileSync, createReadStream} = require("fs")
const http = require("http");

 
const server = http.createServer((req, res)=>{
    // Read the content and display it in the browser using the server.
    // const fileContent = readFileSync("content1.txt", "utf-8");
    // res.end(`The content in content1 .txt is ${fileContent}`);

    const fileStream = createReadStream("content.txt", {encoding: "utf-8"});
    fileStream.on("open", () => {
        fileStream.pipe(res)
    });
    fileStream.on("error",(err)=>{
        console.log(err);
    })
});

server.listen(5000, ()=>{
    console.log("server is running");
});