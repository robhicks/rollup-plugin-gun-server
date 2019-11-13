rollup-plugin-live-server
=========================

# Why this thing

This will spin up a local [Gun server](https://gun.eco/) for testing.

# Use

```
npm i rollup-plugin-gun-server -D
```

```Javascript
// rollup.config.js
import {gunServer} from 'rollup-plugin-gun-server';
// or
const gunServer = require('rollup-plugin-gun-server');

export default {
    input: client,
    plugins: [ gunServer({ port: 8001 }) ],
    output: {
      file: 'dist/my-fabulous-thingy.js',
      format: 'es'
    }
}
```

# How it works
It spins up a gun server for local testing. It grabs gun by using require('gun/gun') so it doesn't provide any persistence.
Not having persistence during development with Gun is important because otherwise deleting data is hard.

The server will be available at 'ws://localhost:{port}/gun'.
