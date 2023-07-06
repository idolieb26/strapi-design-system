import O, { forwardRef as G, useLayoutEffect as J } from "react";
import { findDOMNode as K } from "react-dom";
import u from "prop-types";
import { usePrevious as Q, useInputState as R, useInputElement as Z } from "./hooks.js";
import { validateMaxLength as $, validateMaskPlaceholder as ee, validateChildren as te } from "./validate-props.js";
import { defer as ne } from "./utils/defer.js";
import { isInputFocused as g } from "./utils/input.js";
import { toString as ae, isFunction as le, getElementDocument as oe } from "./utils/helpers.js";
import ue from "./utils/mask.js";
import se from "./children-wrapper.js";
const I = G(function(e, d) {
  const {
    alwaysShowMask: w,
    children: M,
    mask: y,
    maskPlaceholder: L,
    beforeMaskedStateChange: i,
    ...V
  } = e;
  $(e), ee(e);
  const s = new ue({ mask: y, maskPlaceholder: L }), c = !!y, E = !V.disabled && !V.readOnly, S = e.value !== null && e.value !== void 0, B = Q(c), X = ae(
    (S ? e.value : e.defaultValue) || ""
  ), {
    inputRef: k,
    getInputState: r,
    setInputState: f,
    getLastInputState: m
  } = R(X, c), D = Z(k);
  function Y(t) {
    const l = r(), a = m();
    let o = s.processChange(l, a);
    i && (o = i({
      currentState: l,
      previousState: a,
      nextState: o
    })), f(o), e.onChange && e.onChange(t);
  }
  function _(t) {
    k.current = t.target;
    const l = r().value;
    if (c && !s.isValueFilled(l)) {
      let a = s.formatValue(l), o = s.getDefaultSelectionForValue(a), n = {
        value: a,
        selection: o
      };
      i && (n = i({
        currentState: r(),
        nextState: n
      }), a = n.value, o = n.selection), f(n), a !== l && e.onChange && e.onChange(t), ne(() => {
        f(m());
      });
    }
    e.onFocus && e.onFocus(t);
  }
  function N(t) {
    const l = r().value, a = m().value;
    if (c && !w && s.isValueEmpty(a)) {
      let o = "", n = {
        value: o,
        selection: { start: null, end: null }
      };
      i && (n = i({
        currentState: r(),
        nextState: n
      }), o = n.value), f(n), o !== l && e.onChange && e.onChange(t);
    }
    e.onBlur && e.onBlur(t);
  }
  function U(t) {
    const l = D(), { value: a } = r(), o = oe(l);
    if (!g(l) && !s.isValueFilled(a)) {
      const n = t.clientX, C = t.clientY, v = new Date().getTime(), h = (F) => {
        if (o.removeEventListener("mouseup", h), !g(l))
          return;
        const W = Math.abs(F.clientX - n), q = Math.abs(F.clientY - C), b = Math.max(W, q), p = new Date().getTime() - v;
        if (b <= 10 && p <= 200 || b <= 5 && p <= 300) {
          const T = m(), z = s.getDefaultSelectionForValue(
            T.value
          ), A = {
            ...T,
            selection: z
          };
          f(A);
        }
      };
      o.addEventListener("mouseup", h);
    }
    e.onMouseDown && e.onMouseDown(t);
  }
  if (c && S) {
    const t = D();
    let a = t && g(t) || w || e.value ? s.formatValue(e.value) : e.value;
    i && (a = i({
      nextState: { value: a, selection: { start: null, end: null } }
    }).value), f({
      ...m(),
      value: a
    });
  }
  const x = m(), j = x.selection, H = x.value;
  J(() => {
    if (!c)
      return;
    const t = D(), l = g(t), a = j, o = r();
    let n = { ...o };
    if (!S) {
      const C = o.value, v = s.formatValue(C), h = s.isValueEmpty(v);
      !h || l || w ? n.value = v : h && !l && (n.value = "");
    }
    l && !B ? n.selection = s.getDefaultSelectionForValue(
      n.value
    ) : S && l && a && a.start !== null && a.end !== null && (n.selection = a), i && (n = i({
      currentState: o,
      nextState: n
    })), f(n);
  });
  const P = {
    ...V,
    onFocus: _,
    onBlur: N,
    onChange: c && E ? Y : e.onChange,
    onMouseDown: c && E ? U : e.onMouseDown,
    ref: (t) => {
      k.current = K(t), le(d) ? d(t) : d !== null && typeof d == "object" && (d.current = t);
    },
    value: c && S ? H : e.value
  };
  return M ? (te(e, M), /* @__PURE__ */ O.createElement(se, { ...P }, M)) : /* @__PURE__ */ O.createElement("input", { ...P });
});
I.displayName = "InputMask";
I.defaultProps = {
  alwaysShowMask: !1,
  maskPlaceholder: "_"
};
I.propTypes = {
  alwaysShowMask: u.bool,
  beforeMaskedStateChange: u.func,
  children: u.element,
  mask: u.oneOfType([
    u.string,
    u.arrayOf(
      u.oneOfType([u.string, u.instanceOf(RegExp)])
    )
  ]),
  maskPlaceholder: u.string,
  onFocus: u.func,
  onBlur: u.func,
  onChange: u.func,
  onMouseDown: u.func
};
export {
  I as default
};
