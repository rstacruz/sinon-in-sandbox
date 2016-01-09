# sinon-in-sandbox

> Performs certain actions inside a Sinon sandbox

## Usage

```js
var sandbox = require('sinon-in-sandbox')

sandbox((sinon) => {
  // use sinon here. it'll automatically be cleaned up afterwards.
})
```

## Thanks

**sinon-in-sandbox** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/sinon-in-sandbox/contributors
