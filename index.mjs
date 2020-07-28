const http = require('http');
const Gun = require('gun');

function gunServer(options = {}) {
  const params = { port: options.port || 4000 };
  const httpServer = http.createServer();
  httpServer.listen(params.port);
  const gun = new Gun({ radisk: false, web: httpServer });


  return {
    name: 'gunServer',
    generateBundle() {
      console.log(`gun-server running on ${params.port}`);
    }
  };
}

export { gunServer };
