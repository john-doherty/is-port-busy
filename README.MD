# is-port-busy

[![npm](https://img.shields.io/npm/dt/is-port-busy.svg)](https://www.npmjs.com/package/is-port-busy) [![Linked In](https://img.shields.io/badge/Linked-In-blue.svg)](https://www.linkedin.com/in/john-i-doherty) [![Twitter Follow](https://img.shields.io/twitter/follow/CambridgeMVP.svg?style=social&label=Twitter&style=plastic)](https://twitter.com/CambridgeMVP)

A node module to check if a TCP port is busy on the local machine.

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

## License

Licensed under [ISC License](LICENSE) &copy; [John Doherty](https://twitter.com/CambridgeMVP)