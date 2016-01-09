var test = require('tape')
var sandbox = require('./index')

test('sandbox', function (t) {
  t.plan(0)

  var obj = {
    fail: function () { t.fail('not supposed to happen') }
  }

  sandbox(function (sinon) {
    sinon.stub(obj, 'fail')
    obj.fail()
  })

  t.end()
})

test('sandbox cleaning', function (t) {
  t.plan(1)

  var obj = {
    ok: function () { t.ok('supposed to happen') }
  }

  sandbox(function (sinon) {
    sinon.stub(obj, 'ok')
  })

  obj.ok()
  t.end()
})
