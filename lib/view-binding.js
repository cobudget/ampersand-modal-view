module.exports = function (hook) {
  return {
    type: function (el, val, previousVal) {
      if (previousVal) { previousVal.remove(); }
      this.renderSubview(val, el);
    },
    hook: hook,
  };
};
