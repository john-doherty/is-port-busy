# is-port-busy

A Node.js module to check if a TCP port is busy.

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

[ISC License](LICENSE) &copy; 2016 [John Doherty](https://courseof.life/johndoherty)