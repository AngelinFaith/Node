const {readFile, writeFile} = require("fs");

console.log("Start"); // Synchronous function
// readFile() has 3 parameters path, encoding type and the call back function.
readFile("content1.txt", "utf-8", (err, res)=>{
    if(err){
        console.log(err);
        return;
    }
    const firstFile = res; // content of content1 file is assigned to this firstFile variable.
    // Inside the first file call back function, we are going to perform second opeartion.
    readFile("content2.txt", "utf-8", (err, res)=>{
        if(err){
            console.log(err);
            return;
        }
        const secondFile = res;
        writeFile("content-asyc.txt", `The content in fileOne: ${firstFile} \nThe content in fileTwo: ${secondFile}`, (err, res)=> {
            if(err){
                console.log(err);
                return;
            }
            console.log("The file written successfully");
        });
    });
});

console.log("End"); // Synchronous function

// Output:
//Start End The file written successfully.
// The synchronous function executes fast, because Asynchronous function needs time to complete all the request.