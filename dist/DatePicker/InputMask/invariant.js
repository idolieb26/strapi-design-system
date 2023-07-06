var u = process.env.NODE_ENV, l = function(i, e, r, a, o, t, s, v) {
  if (u !== "production" && e === void 0)
    throw new Error("invariant requires an error message argument");
  if (!i) {
    var n;
    if (e === void 0)
      n = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var d = [r, a, o, t, s, v], f = 0;
      n = new Error(
        e.replace(/%s/g, function() {
          return d[f++];
        })
      ), n.name = "Invariant Violation";
    }
    throw n.framesToPop = 1, n;
  }
};
export {
  l as default
};
