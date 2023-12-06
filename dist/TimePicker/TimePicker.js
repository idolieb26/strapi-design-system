import { jsx as u } from "react/jsx-runtime";
import { useRef as v, useState as R } from "react";
import { Cross as T, Clock as w } from "@strapi/icons";
import I from "styled-components";
import "../Field/Field.js";
import "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import "../Field/FieldContext.js";
import "../Typography/Typography.js";
import { FieldAction as y } from "../Field/FieldAction.js";
import { Flex as A } from "../Flex/Flex.js";
import { useId as H } from "../hooks/useId.js";
import S from "./InputMask/index.js";
import { TextInput as V } from "../TextInput/TextInput.js";
const F = (s, d = 1) => {
  const n = [];
  let e = 0;
  for (let t = 0; t < 24; t++)
    for (e = 0; e < 60; )
      n.push(`${t < 10 ? `0${t}` : t}:${e < 10 ? `0${e}` : e}`), e += d;
  const [l, c] = s?.split(":") ?? [];
  let r = n.reduce((t, m) => {
    const [i] = m.split(":");
    return Math.abs(i - l) < Math.abs(t - l) ? i : t;
  }, n[0].split(":")[0]);
  const $ = n.reduce((t, m) => {
    const i = m.split(":")[1];
    return Math.abs(i - c) < Math.abs(t - c) ? i : t;
  }, n[0].split(":")[1]), o = parseInt(r);
  let a = "am";
  if (o > 11) {
    a = o === 24 ? "am" : "pm";
    const t = o !== 12 ? o - 12 : 12;
    t < 10 ? r = t === 0 ? "12" : `0${t}` : r = t.toString();
  } else
    o === 0 && (a = "am", r = "12");
  return `${r}:${$}${a}`;
}, Y = ({
  id: s,
  value: d,
  step: C = 15,
  clearLabel: n,
  disabled: e = !1,
  onClear: l,
  onChange: c,
  label: r = "",
  ...$
}) => {
  const o = H(s), a = v(null), [t, m] = R(F(d)), i = () => {
    l && (m("00:00am"), l(), a.current.inputWrapperRef.current.focus());
  };
  return u(S, {
    mask: [/[0-2]/, /[0-3]/, ":", /[0-5]/, /[0-9]/, /(a|p)/, /[m]/],
    value: t,
    onChange: (k) => {
      const M = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](a|p)m$/, p = k.target.value;
      if (c && M.test(p)) {
        const b = !p.includes("am"), g = p.replace("am", "").replace("pm", ""), x = parseInt(g.split(":")[1]);
        let f = g.split(":")[0];
        const h = parseInt(f);
        (b && h !== 12 || !b && h === 12) && (f = h + 12), c(`${f}:${x}`);
      }
      m(p);
    },
    disabled: e,
    children: u(V, {
      id: o,
      ref: a,
      label: r,
      startAction: u(P, {
        children: u(w, {})
      }),
      endAction: l ? u(y, {
        label: "close",
        onClick: i,
        "aria-disabled": e || void 0,
        children: u(W, {})
      }) : void 0,
      "aria-autocomplete": "none",
      "aria-label": "close",
      type: "text",
      disabled: e,
      ...$
    })
  });
}, P = I(A)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({
  theme: s
}) => s.colors.neutral500};
  }
`, W = I(T)`
  height: ${11 / 16}rem;
  width: ${11 / 16}rem;

  path {
    fill: ${({
  theme: s
}) => s.colors.neutral600};
  }
`;
export {
  Y as TimePicker
};
