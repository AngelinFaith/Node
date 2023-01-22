 const {createReadStream} = require("fs");

// Stream- break the large file into hunk of smaller files.
// Each and every chunk will be send to the server to cient one by one.
// chunk can also be calle as "buffer".
// We can define size of chunk file. By default its 64kb.

// Properties.
// last buffer- remainder.
// highWaterMark - define the size of the buffer.

// When we read the file using stream, it will break the large files into small chunk files.
// const stream = createReadStream("content.txt");

// To display the content as it is. 
// const stream = createReadStream("content.txt", "utf-8");

const stream = createReadStream("content.txt", {highWaterMark: 30000});

stream.on("data", (result) => {
    console.log(result);
});

stream.on("error", (err) => {
    console.log(err);
});