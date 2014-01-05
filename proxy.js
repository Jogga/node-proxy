var http = require('http');
var httpProxy = require('http-proxy');


httpProxy.createServer(function (req, res, proxy) {    

    // Host Variable
    var host = req.headers.host;
    
    // Port Router 
    // (apache on 9000, node servers on 8000, 8001,...)
    function portRouter() {
        
        // Regex for subdomains
        if ( /(?: .*\.)?ambition\.me/.test(host)) {

            // Return Port number 
            return 8000; 
        
        } else {
            
            // Default Port (apache is listening)
            return 9000;
        }
    };

    // Assign Port Number
    var port = portRouter();    

    // Proxy the request
    proxy.proxyRequest(req, res, {
        host: host, 
        port: port
    });
}).listen(80);



// Testserver, please ignore

http.createServer(function (req, res) {
    res.writeHead( 200, {"Content-Type": "text/plain"});
    res.write('Echo service: \nUrl: ' + req.url);
    res.write('\nHeaders:\n' + JSON.stringify(req.headers, true, 2));
    res.end();
}).listen(8000);
