const http = require("http");

// while runing the port 5000 in the browser, this server starts running.
// Using this method, we can able to access the request which is send by user and able to send the response to the user.
const server = http.createServer((req, res) => {
    // url is one of the property of request object. Using url we can track the request send by user in the browser tap as url.
    // If the req url is base url, we create a response for that.
    // if(req.url === "/"){
    //     //Response can be of any type. text, HTML or JSON.
    //     res.end(`<h1>Iam the response for the request</h1>`);
    // } else if(req.url === "/about"){
    //     res.end(`<h1>About page</h1>`);
    // } else if(req.url === "/project"){
    //     res.end("Project page");
    // } else if(req.url === "/contact"){
    //     res.end("Contact page");
    // } else {
    //     res.end(`<p>Page not found</p>`);
    // }

    // we can use switch case instead of if/else.
    switch(req.url) {
        case "/":
            res.end(`<h1>Iam the response for the request</h1>`);
            break;
        case "/about":
            res.end(`<h1>About page</h1>`);
            break;
        case "/project":
            res.end("Project page");
            break;
        case "/contacts":
            res.end("Contacts page");
            break;
        default:
            res.end(`<p>Page not found</p>`);
            break;
    }
})

server.listen(5000, ()=>
    console.log('server is running in: http://localhost:5000')
);