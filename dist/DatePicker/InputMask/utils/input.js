function o(e, t, n) {
  n === void 0 && (n = t), e.setSelectionRange(t, n);
}
function c(e) {
  const t = e.selectionStart, n = e.selectionEnd;
  return {
    start: t,
    end: n,
    length: n - t
  };
}
function i(e) {
  const t = e.ownerDocument;
  return t.hasFocus() && t.activeElement === e;
}
export {
  c as getInputSelection,
  i as isInputFocused,
  o as setInputSelection
};
