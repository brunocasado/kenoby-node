var test = require('tape');
var kenoby = require('../../index.js');

test('describe instance', function (t) {

  kenoby.setTenant('58c821a0a1f3f6001a3bdd26');
  kenoby.setAccess('caiom@drconsulta.com', 'drcKenoby123');
  kenoby.getPositions().then(function (data) {
    t.equal(data.constructor, Array );
    t.end();
  }).catch(console.log);
});
