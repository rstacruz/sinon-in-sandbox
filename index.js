module.exports = function sandbox (fn) {
  var sandbox = require('sinon').sandbox.create()
  try { fn(sandbox) }
  finally { sandbox.restore() }
}
