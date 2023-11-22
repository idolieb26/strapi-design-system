import { jsx as m } from "react/jsx-runtime";
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
const F = (r, d = 1) => {
  const o = [];
  let e = 0;
  for (let t = 0; t < 24; t++)
    for (e = 0; e < 60; )
      o.push(`${t < 10 ? `0${t}` : t}:${e < 10 ? `0${e}` : e}`), e += d;
  const [n, u] = r?.split(":") ?? [];
  let i = o.reduce((t, a) => {
    const [s] = a.split(":");
    return Math.abs(s - n) < Math.abs(t - n) ? s : t;
  }, o[0].split(":")[0]);
  const $ = o.reduce((t, a) => {
    const s = a.split(":")[1];
    return Math.abs(s - u) < Math.abs(t - u) ? s : t;
  }, o[0].split(":")[1]), l = parseInt(i);
  let c = "am";
  if (l > 11) {
    c = l === 24 ? "am" : "pm";
    const t = l !== 12 ? l - 12 : 12;
    t < 10 ? i = `0${t}` : i = t.toString();
  }
  return `${i}:${$}${c}`;
}, Y = ({
  id: r,
  value: d,
  step: C = 15,
  clearLabel: o,
  disabled: e = !1,
  onClear: n,
  onChange: u,
  label: i = "",
  ...$
}) => {
  const l = H(r), c = v(null), [t, a] = R(F(d)), s = () => {
    n && (a("00:00am"), n(), c.current.inputWrapperRef.current.focus());
  };
  return m(S, {
    mask: [/[0-2]/, /[0-3]/, ":", /[0-5]/, /[0-9]/, /(a|p)/, /[m]/],
    value: t,
    onChange: (k) => {
      const M = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](a|p)m$/, p = k.target.value;
      if (u && M.test(p)) {
        const b = !p.includes("am"), g = p.replace("am", "").replace("pm", ""), x = parseInt(g.split(":")[1]);
        let f = g.split(":")[0];
        const h = parseInt(f);
        (b && h !== 12 || !b && h === 12) && (f = h + 12), u(`${f}:${x}`);
      }
      a(p);
    },
    disabled: e,
    children: m(V, {
      id: l,
      ref: c,
      label: i,
      startAction: m(P, {
        children: m(w, {})
      }),
      endAction: n ? m(y, {
        label: "close",
        onClick: s,
        "aria-disabled": e || void 0,
        children: m(W, {})
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
  theme: r
}) => r.colors.neutral500};
  }
`, W = I(T)`
  height: ${11 / 16}rem;
  width: ${11 / 16}rem;

  path {
    fill: ${({
  theme: r
}) => r.colors.neutral600};
  }
`;
export {
  Y as TimePicker
};
