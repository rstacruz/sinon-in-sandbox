# sinon-in-sandbox

> Performs certain actions inside a Sinon sandbox

## Usage

```js
var sandbox = require('sinon-in-sandbox')

sandbox((sinon) => {
  // use sinon here. it'll automatically be cleaned up afterwards.
})
```

## Example

Here's an example using [tape][]:

```js
var test = require('tape')

test('do things', (t) => {
  sandbox((sinon) => {
    sinon.stub($, 'ajax')
    $.ajax('http://www.google.com')
    t.ok($.ajax.calledOnce)
    t.end()
  })
})
```

[tape]: https://github.com/substack/tape

## Thanks

**sinon-in-sandbox** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/sinon-in-sandbox/contributors
