var u = process.env.NODE_ENV !== "production", i = function() {
};
if (u) {
  var g = function(e, r) {
    var a = arguments.length;
    r = new Array(a > 1 ? a - 1 : 0);
    for (var n = 1; n < a; n++)
      r[n - 1] = arguments[n];
    var c = 0, t = "Warning: " + e.replace(/%s/g, function() {
      return r[c++];
    });
    typeof console < "u" && console.error(t);
    try {
      throw new Error(t);
    } catch {
    }
  };
  i = function(o, e, r) {
    var a = arguments.length;
    r = new Array(a > 2 ? a - 2 : 0);
    for (var n = 2; n < a; n++)
      r[n - 2] = arguments[n];
    if (e === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    o || g.apply(null, [e].concat(r));
  };
}
const s = i;
export {
  s as default
};
