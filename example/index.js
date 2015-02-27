var select = require('dom-select');
var View = require('ampersand-view');
var ModalView = require('../');

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
  size: "lg",
  bodyView: bodyView,
  footerView: footerView,
});

var openModalButton = select(".open-modal")
openModalButton.addEventListener("click", function (ev) {
  modal.openIn('body');
});
