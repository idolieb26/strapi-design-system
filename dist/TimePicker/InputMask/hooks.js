import { useCallback as c, useRef as d, useEffect as m, useLayoutEffect as E } from "react";
import { cancelDefer as L, defer as V } from "./utils/defer.js";
import { getInputSelection as D, isInputFocused as S, setInputSelection as R } from "./utils/input.js";
import { isDOMElement as w } from "./utils/helpers.js";
function g(u) {
  return c(() => {
    let t = u.current;
    const e = typeof window < "u" && w(t);
    if (!t || !e)
      return null;
    if (t.nodeName !== "INPUT" && (t = t.querySelector("input")), !t)
      throw new Error(
        "react-input-mask: inputComponent doesn't contain input node"
      );
    return t;
  }, [u]);
}
function y(u) {
  const t = d(null), e = c(() => {
    if (t.current !== null)
      return;
    function r() {
      u(), t.current = V(r);
    }
    r();
  }, [u]), n = c(() => {
    L(t.current), t.current = null;
  }, []);
  return m(() => {
    t.current && (n(), e());
  }, [e, n]), m(L, []), [e, n];
}
function N(u, t) {
  const e = d({ start: null, end: null }), n = g(u), r = c(() => {
    const o = n();
    return D(o);
  }, [n]), l = c(() => e.current, []), f = c(
    (o) => {
      const a = n();
      !a || !S(a) || (R(a, o.start, o.end), e.current = r());
    },
    [n, r]
  ), i = c(() => {
    e.current = r();
  }, [r]), [s, p] = y(i);
  return E(() => {
    if (!t)
      return;
    const o = n();
    return o.addEventListener("focus", s), o.addEventListener("blur", p), S(o) && s(), () => {
      o.removeEventListener("focus", s), o.removeEventListener("blur", p), p();
    };
  }), { getSelection: r, getLastSelection: l, setSelection: f };
}
function b(u, t) {
  const e = g(u), n = d(t), r = c(() => e().value, [e]), l = c(() => n.current, []), f = c(
    (i) => {
      n.current = i;
      const s = e();
      s && (s.value = i);
    },
    [e]
  );
  return {
    getValue: r,
    getLastValue: l,
    setValue: f
  };
}
function h(u, t) {
  const e = d(), { getSelection: n, getLastSelection: r, setSelection: l } = N(
    e,
    t
  ), { getValue: f, getLastValue: i, setValue: s } = b(e, u);
  function p() {
    return {
      value: i(),
      selection: r()
    };
  }
  function o() {
    return {
      value: f(),
      selection: n()
    };
  }
  function a({ value: v, selection: I }) {
    s(v), l(I);
  }
  return {
    inputRef: e,
    getInputState: o,
    getLastInputState: p,
    setInputState: a
  };
}
function k(u) {
  const t = d();
  return m(() => {
    t.current = u;
  }), t.current;
}
export {
  g as useInputElement,
  h as useInputState,
  k as usePrevious
};
