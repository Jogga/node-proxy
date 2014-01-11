var http = require('http');
var httpProxy = require('http-proxy');



// Proxy Server
httpProxy.createServer(function (req, res, proxy) {    

    // Set Host Variable
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
