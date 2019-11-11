'use strict';

const http = require('http');
const Gun = require('gun/gun');
const httpServer = http.createServer();

function gunServer(options = {}) {
  const directories = options.directories || [];
  const params = { port: options.port || 4000 };
  const gun = new Gun({ web: httpServer });

  httpServer.listent(params.port);

  return {
    name: 'gunServer',
    generateBundle() {
      console.log(`gun-server running on ${params.port}`);
    }
  };
}

module.exports = gunServer;
