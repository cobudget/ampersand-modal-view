var test = require('tape');
var View = require('ampersand-view');
var select = require('dom-select');

var ModalView;

test("should require module", function (t) {
  ModalView = require('./');
  t.ok(ModalView);
  t.end();
});

test("should open simple modal in body", function (t) {
  var BodyView = View.extend({
    autoRender: true,
    template: [
      '<div class="body-view-test">',
        'content',
      '</div>',
    ].join(''),
  });
  var bodyView = new BodyView();
  var modal = new ModalView({
    title: "Test Modal",
    description: "this is only a test",
    bodyView: bodyView,
  });
  modal.openIn('body');

  t.equal(modal.el, select('body > .modal'));
  t.equal(bodyView.el, select('[data-hook="body"] > .body-view-test'))
  t.end();
});
