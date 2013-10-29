var http = require('http'),
    assert = require('assert'),
    nano = require('../');

http.globalAgent.maxSockets = 100;
var db = nano('http://localhost:5984/registry');

var i = 0;

function gotDocument(err, doc) {
  if (err) {
    console.error('error: ' + err.message);
  }
  assert(doc._rev, '490-a547c129a59d5672bbfa7672cc70fd2c');
}

for (var i = 0; i < 1000; i++) {
  db.get('mongoose', gotDocument);
}
