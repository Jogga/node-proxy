var http = require('http');
var httpProxy = require('http-proxy');

var options = {
    router: {

        // Node Apps
        'example01.tld': '127.0.0.1:8000',
        'example02.tld': '127.0.0.1:8001',
		'example03.tld': '127.0.0.1:8002',

        // Apache Sites. Configure Apache to listen to port 9000
        'example04.tld': '127.0.0.1:9000',
        'example05.tld': '127.0.0.1:9000',
    }
};

var proxyServer = httpProxy.createServer(
    require('connect-no-www')(false), options);

// This server should listen to Port 80, to handle incoming requests
proxyServer.listen(80);
