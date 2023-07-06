import s from "./invariant.js";
import o from "./warning.js";
import { CONTROLLED_PROPS as l } from "./constants.js";
function m(t) {
  o(
    !t.maxLength || !t.mask,
    "react-input-mask: maxLength property shouldn't be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length."
  );
}
function c(t) {
  const { mask: a, maskPlaceholder: e } = t;
  s(
    !a || !e || e.length === 1 || e.length === a.length,
    `react-input-mask: maskPlaceholder should either be a single character or have the same length as the mask:
mask: ${a}
maskPlaceholder: ${e}`
  );
}
function k(t, a) {
  const e = l.filter(
    (n) => a.props[n] != null && a.props[n] !== t[n]
  );
  s(
    !e.length,
    `react-input-mask: the following props should be passed to the InputMask component, not to children: ${e.join(
      ","
    )}`
  );
}
export {
  k as validateChildren,
  c as validateMaskPlaceholder,
  m as validateMaxLength
};
