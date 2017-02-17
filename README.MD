# is-port-busy

[![Shippable branch](https://img.shields.io/shippable/5818b23cffe90f0e00ac83de/master.svg)](https://app.shippable.com/projects/5818b23cffe90f0e00ac83de) [![npm](https://img.shields.io/npm/dt/is-port-busy.svg)](https://www.npmjs.com/package/is-port-busy) [![Linked In](https://img.shields.io/badge/Linked-In-blue.svg)](https://www.linkedin.com/in/john-i-doherty) [![Twitter Follow](https://img.shields.io/twitter/follow/CambridgeMVP.svg?style=social&label=Twitter&style=plastic)](https://twitter.com/CambridgeMVP)

A simple node module to check if a TCP port is busy on the local machine.

## Installation

```bash
$ npm install --save is-port-busy
```

## Example

```js
var isPortBusy = require('is-port-busy');

isPortBusy(8080).then(function(){
    console.log('yes');
})
.catch(function(){
    console.log('no');
});
```

## Running tests

Install dev dependencies and run tests:

```
$ npm install -d && npm test
```

## License

Licensed under [ISC License](LICENSE) &copy; [John Doherty](https://twitter.com/CambridgeMVP)