// If we import the whole file like this, without initialized in variabe. The action performed in the 
// specific file is displayed in the node.Or you can store it in the variable to display the specific information.
require("./module1.js");
const module2 = require("./module2.js"); 
const module3 = require("./module3.js");
const sendMessage = require("./module4.js");

require("./module5.js");

sendMessage.sendMessage("Good Morning");
// If we pass only method in exports instead of inside the {}, we can call the function directly.
//sendMessage("Good Morning");

