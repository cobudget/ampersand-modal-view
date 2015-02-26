module.exports = function (hook) {
  return {
    type: function (el, val, previousVal) {
      if (previousVal) { previousVal.remove(); }
      this.registerSubview(val);
      var body = this.queryByHook(hook);
      if (!val.el) {
        val.render();
      }
      body.appendChild(val.el);
    },
    hook: hook,
  };
};
