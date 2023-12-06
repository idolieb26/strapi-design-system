import { jsx as u } from "react/jsx-runtime";
import { useRef as v, useState as H } from "react";
import { Cross as R, Clock as T } from "@strapi/icons";
import I from "styled-components";
import "../Field/Field.js";
import "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import "../Field/FieldContext.js";
import "../Typography/Typography.js";
import { FieldAction as w } from "../Field/FieldAction.js";
import { Flex as y } from "../Flex/Flex.js";
import { useId as A } from "../hooks/useId.js";
import S from "./InputMask/index.js";
import { TextInput as V } from "../TextInput/TextInput.js";
const F = (s, d = 1) => {
  const i = [];
  let t = 0;
  for (let e = 0; e < 24; e++)
    for (t = 0; t < 60; )
      i.push(`${e < 10 ? `0${e}` : e}:${t < 10 ? `0${t}` : t}`), t += d;
  const [l, c] = s?.split(":") ?? [];
  let r = i.reduce((e, m) => {
    const [n] = m.split(":");
    return Math.abs(n - l) < Math.abs(e - l) ? n : e;
  }, i[0].split(":")[0]);
  const g = i.reduce((e, m) => {
    const n = m.split(":")[1];
    return Math.abs(n - c) < Math.abs(e - c) ? n : e;
  }, i[0].split(":")[1]), o = parseInt(r);
  let a = "am";
  if (console.log("intHour:", o), o > 11) {
    a = o === 24 ? "am" : "pm";
    const e = o !== 12 ? o - 12 : 12;
    console.log("hourNumber:", e), e < 10 ? r = e === 0 ? "12" : `0${e}` : r = e.toString();
  } else
    o === 0 ? (console.log("else if :", o), a = "am", r = "12") : console.log("else:", o);
  return `${r}:${g} ${a}`;
}, Y = ({
  id: s,
  value: d,
  step: C = 15,
  clearLabel: i,
  disabled: t = !1,
  onClear: l,
  onChange: c,
  label: r = "",
  ...g
}) => {
  const o = A(s), a = v(null), [e, m] = H(F(d)), n = () => {
    l && (m("00:00am"), l(), a.current.inputWrapperRef.current.focus());
  };
  return u(S, {
    mask: [/[0-2]/, /[0-3]/, ":", /[0-5]/, /[0-9]/, /(a|p)/, /[m]/],
    value: e,
    onChange: (k) => {
      const M = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](a|p)m$/, p = k.target.value;
      if (c && M.test(p)) {
        const $ = !p.includes("am"), b = p.replace("am", "").replace("pm", ""), x = parseInt(b.split(":")[1]);
        let f = b.split(":")[0];
        const h = parseInt(f);
        ($ && h !== 12 || !$ && h === 12) && (f = h + 12), c(`${f}:${x}`);
      }
      m(p);
    },
    disabled: t,
    children: u(V, {
      id: o,
      ref: a,
      label: r,
      startAction: u(N, {
        children: u(T, {})
      }),
      endAction: l ? u(w, {
        label: "close",
        onClick: n,
        "aria-disabled": t || void 0,
        children: u(P, {})
      }) : void 0,
      "aria-autocomplete": "none",
      "aria-label": "close",
      type: "text",
      disabled: t,
      ...g
    })
  });
}, N = I(y)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({
  theme: s
}) => s.colors.neutral500};
  }
`, P = I(R)`
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
