// Synatx to import core module.
// const varName - require("module_name");

const os = require("os");

// To get the user info of the system.
// console.log(os.userInfo());
const user = os.userInfo();
console.log(user.username);

// To get the uptime of the system.
console.log(`Uptime of the system ${os.uptime()} seconds`);

const osInfo
 = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(osInfo);