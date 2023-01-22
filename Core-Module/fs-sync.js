// const fs = require("fs");

// import content1 from "../Core-Module/content1.txt"
const {readFileSync, writeFileSync} = require("fs");
// Read the file using sync method.
// const fileOne = fs.readFileSync("./content1","utf-8");
const fileOne = readFileSync("content1.txt","utf-8");
const fileTwo = readFileSync("content2.txt","utf-8");

// Write the file content using "sync" method.
writeFileSync(
    "contentJoined.txt",
    `The content of file one: ${fileOne},\nThe content of file two: ${fileTwo}`,
    {flag:"a"} // a denotes to append. If we declare flag means, whenever the page is running the coontent is appende
    //and the new content displayed along with the previous content.Orelse, new one will override previous one.
)
console.log("Files written successfully");