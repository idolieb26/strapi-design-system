function n(e) {
  return requestAnimationFrame(e);
}
function r(e) {
  cancelAnimationFrame(e);
}
export {
  r as cancelDefer,
  n as defer
};
