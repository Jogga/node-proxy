var http = require('http');
var httpProxy = require('http-proxy');

var options = {
    router: {
        'ambition.me': '127.0.0.1:8000',
        'jogga.org': '127.0.0.1:9000'
    }
};

var proxyServer = httpProxy.createServer(
    require('connect-no-www')(false), options);

proxyServer.listen(80);


/*

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

*/



