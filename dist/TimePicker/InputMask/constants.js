const o = [
  "disabled",
  "onBlur",
  "onChange",
  "onFocus",
  "onMouseDown",
  "readOnly",
  "value"
], a = {
  9: /[0-9]/,
  a: /[A-Za-z]/,
  "*": /[A-Za-z0-9]/
};
export {
  o as CONTROLLED_PROPS,
  a as defaultFormatChars
};
