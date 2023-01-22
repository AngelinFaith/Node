const path = require("path");

console.log(path.sep); // \

// To create a custom path.
const fileName = path.join("/node/", "modules","demo.txt");
console.log(fileName);

const baseFile = path.basename(fileName);
console.log(baseFile);

// Combine both path using resolve().
const absolute = path.resolve(__dirname, "/node/", "modules","demo.txt");