import { jsx as l } from "react/jsx-runtime";
import { useRef as C, useState as k } from "react";
import { Cross as x, Clock as I } from "@strapi/icons";
import h from "styled-components";
import "../Field/Field.js";
import "../Field/FieldLabel.js";
import "../Field/FieldInput.js";
import "../Field/FieldContext.js";
import "../Typography/Typography.js";
import { FieldAction as M } from "../Field/FieldAction.js";
import { Flex as v } from "../Flex/Flex.js";
import { useId as R } from "../hooks/useId.js";
import w from "./InputMask/index.js";
import { TextInput as y } from "../TextInput/TextInput.js";
const A = (o, u = 1) => {
  const s = [];
  let e = 0;
  for (let t = 0; t < 24; t++)
    for (e = 0; e < 60; )
      s.push(`${t < 10 ? `0${t}` : t}:${e < 10 ? `0${e}` : e}`), e += u;
  const [n, a] = o?.split(":") ?? [], c = s.reduce((t, i) => {
    const [r] = i.split(":");
    return Math.abs(r - n) < Math.abs(t - n) ? r : t;
  }, s[0].split(":")[0]), m = s.reduce((t, i) => {
    const r = i.split(":")[1];
    return Math.abs(r - a) < Math.abs(t - a) ? r : t;
  }, s[0].split(":")[1]);
  return `${c}:${m}`;
}, N = ({
  id: o,
  value: u,
  step: d = 15,
  clearLabel: s,
  disabled: e = !1,
  onClear: n,
  onChange: a,
  label: c = "",
  ...m
}) => {
  const t = R(o), i = C(null), [r, f] = k(A(u)), $ = () => {
    n && (n(), i.current.inputWrapperRef.current.focus());
  };
  return l(w, {
    mask: [/[0-2]/, /[0-3]/, ":", /[0-5]/, /[0-9]/],
    value: r,
    onChange: (b) => {
      const g = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, p = b.target.value;
      a && g.test(p) && a(p), f(p);
    },
    disabled: e,
    children: l(y, {
      id: t,
      ref: i,
      label: c,
      startAction: l(T, {
        children: l(I, {})
      }),
      endAction: n ? l(M, {
        label: "close",
        onClick: $,
        "aria-disabled": e || void 0,
        children: l(V, {})
      }) : void 0,
      "aria-autocomplete": "none",
      "aria-label": "close",
      type: "text",
      disabled: e,
      ...m
    })
  });
}, T = h(v)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({
  theme: o
}) => o.colors.neutral500};
  }
`, V = h(x)`
  height: ${11 / 16}rem;
  width: ${11 / 16}rem;

  path {
    fill: ${({
  theme: o
}) => o.colors.neutral600};
  }
`;
export {
  N as TimePicker
};
