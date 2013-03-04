var HOST = process.env.IP;
var PORT = process.env.PORT;

var http = require("http");

// when the daemon started
var starttime = (new Date()).getTime();

var mem = process.memoryUsage();
// every 10 seconds poll for the memory.
setInterval(function() {
    mem = process.memoryUsage();
}, 10 * 1000);

var fu = require("./fu"),
    util = require("util"),
    url = require("url"),
    qs = require("querystring");

//http.createServer(function(request, response) {
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World");
//  response.end();
//}).listen(PORT);

fu.listen(Number(process.env.PORT || PORT), HOST);

fu.get("/", fu.staticHandler("index.html"));
//fu.get("/style.css", fu.staticHandler("style.css"));
//fu.get("/client.js", fu.staticHandler("client.js"));
//fu.get("/jquery-1.2.6.min.js", fu.staticHandler("jquery-1.2.6.min.js"));


fu.get("/who", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('sss');
    res.end();
});
