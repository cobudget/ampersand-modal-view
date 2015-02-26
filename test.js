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
  var ContentView = View.extend({
    autoRender: true,
    template: [
      '<div class="content-view-test">',
        'content',
      '</div>',
    ].join(''),
  });
  var contentView = new ContentView();
  var modal = new ModalView({
    title: "Test Modal",
    description: "this is only a test",
    contentView: contentView,
  });
  modal.openIn('body');

  t.equal(modal.el, select('body > .modal-overlay'));
  t.equal(contentView.el, select('[data-hook="content"] > .content-view-test'))
  t.end();
});
