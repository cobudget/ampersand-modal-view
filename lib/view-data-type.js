module.exports = {
  set: function setViewType(nv) {
    var f = 'function';
    // Consider it a view if it follows the view conventions of Ampersand.
    if (typeof nv.render === f && typeof nv.remove === f && nv.el) {
      return {
        val: nv,
        type: 'view',
      };
    }
    else {
      return {
        val: nv,
        type: typeof nv,
      };
    }
  },

  compare: function compareViewType(a, b) {
    return a === b;
  },
};
