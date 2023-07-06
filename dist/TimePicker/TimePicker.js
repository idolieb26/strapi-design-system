import { jsx as l } from "react/jsx-runtime";
import { useRef as x, useState as v } from "react";
import { Cross as R, Clock as T } from "@strapi/icons";
import g from "styled-components";
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
const F = (r, f = 1) => {
  const n = [];
  let e = 0;
  for (let t = 0; t < 24; t++)
    for (e = 0; e < 60; )
      n.push(`${t < 10 ? `0${t}` : t}:${e < 10 ? `0${e}` : e}`), e += f;
  const [i, a] = r?.split(":") ?? [];
  let o = n.reduce((t, m) => {
    const [s] = m.split(":");
    return Math.abs(s - i) < Math.abs(t - i) ? s : t;
  }, n[0].split(":")[0]);
  const h = n.reduce((t, m) => {
    const s = m.split(":")[1];
    return Math.abs(s - a) < Math.abs(t - a) ? s : t;
  }, n[0].split(":")[1]);
  let u = "am";
  if (parseInt(o) > 11) {
    u = "pm";
    const t = parseInt(o) - 12;
    t < 10 ? o = `0${t}` : o = t.toString(), console.log("default hours: ", o, t);
  }
  return `${o}:${h}${u}`;
}, X = ({
  id: r,
  value: f,
  step: b = 15,
  clearLabel: n,
  disabled: e = !1,
  onClear: i,
  onChange: a,
  label: o = "",
  ...h
}) => {
  const u = A(r), t = x(null), [m, s] = v(F(f)), I = () => {
    i && (s("00:00am"), i(), t.current.inputWrapperRef.current.focus());
  };
  return l(S, {
    mask: [/[0-2]/, /[0-3]/, ":", /[0-5]/, /[0-9]/, /(a|p)/, /[m]/],
    value: m,
    onChange: (C) => {
      const k = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](a|p)m$/, c = C.target.value;
      if (a && k.test(c)) {
        const M = !c.includes("am"), d = c.replace("am", "").replace("pm", ""), $ = parseInt(d.split(":")[1]);
        let p = d.split(":")[0];
        M && (p = parseInt(p) + 12), console.log("~~~~~~~~: ", `${p}:${$}`), a(`${p}:${$}`);
      }
      s(c);
    },
    disabled: e,
    children: l(V, {
      id: u,
      ref: t,
      label: o,
      startAction: l(P, {
        children: l(T, {})
      }),
      endAction: i ? l(w, {
        label: "close",
        onClick: I,
        "aria-disabled": e || void 0,
        children: l(W, {})
      }) : void 0,
      "aria-autocomplete": "none",
      "aria-label": "close",
      type: "text",
      disabled: e,
      ...h
    })
  });
}, P = g(y)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({
  theme: r
}) => r.colors.neutral500};
  }
`, W = g(R)`
  height: ${11 / 16}rem;
  width: ${11 / 16}rem;

  path {
    fill: ${({
  theme: r
}) => r.colors.neutral600};
  }
`;
export {
  X as TimePicker
};
