function r(n) {
  return n?.ownerDocument;
}
function u(n) {
  return r(n)?.defaultView;
}
function i(n) {
  const e = u(n);
  return !!e && n instanceof e.HTMLElement;
}
function f(n) {
  return typeof n == "function";
}
function c(n, e) {
  for (let t = n.length - 1; t >= 0; t--) {
    const o = n[t];
    if (e(o, t))
      return t;
  }
  return -1;
}
function l(n, e = 1) {
  let t = "";
  for (let o = 0; o < e; o++)
    t += n;
  return t;
}
function s(n) {
  return `${n}`;
}
export {
  c as findLastIndex,
  r as getElementDocument,
  u as getElementWindow,
  i as isDOMElement,
  f as isFunction,
  l as repeat,
  s as toString
};
