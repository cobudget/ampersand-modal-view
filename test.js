var test = require('tape');

var ModalView;

test("should require module", function (t) {
  ModalView = require('./');
  t.ok(ModalView);
  t.end();
});
