// "client"
// "server:development"
// "server:production"
// "test"
process.env.NODE_ENV = 'client';
process.env.NODE_PATH = [
  __dirname + '/../src',
  __dirname + '/..'
].join(':');
require('module')._initPaths();
