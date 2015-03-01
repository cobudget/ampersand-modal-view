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
  // body
  var BodyView = View.extend({
    autoRender: true,
    template: [
      '<div class="body-view-test">',
        'body',
      '</div>',
    ].join(''),
  });
  var bodyView = new BodyView();

  // footer
  var FooterView = View.extend({
    autoRender: true,
    template: [
      '<div class="footer-view-test">',
        'footer',
      '</div>',
    ].join(''),
  });
  var footerView = new FooterView();

  var modal = new ModalView({
    title: "Test Modal",
    description: "this is only a test",
    bodyView: bodyView,
    footerView: footerView,
  });
  t.ok(!modal.el);

  modal.openIn('body');

  t.equal(modal.el, select('body > .modal'));
  t.equal(bodyView.el, select('[data-hook="body"] > .body-view-test'))
  t.equal(footerView.el, select('[data-hook="footer"] > .footer-view-test'))
  t.end();
});
