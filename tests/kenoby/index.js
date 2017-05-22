var test = require('tape');
var kenoby = require('../../index.js');

test('describe instance', function (t) {

  // to run tests take an account with kenoby
  kenoby.setTenant('@tenant');
  kenoby.setAccess('@login', '@password');
  kenoby.getPositions().then(function (data) {
    t.equal(data.constructor, Array );
    t.end();
  }).catch(console.log);
});
