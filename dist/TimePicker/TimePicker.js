import { jsx as a } from "react/jsx-runtime";
import { useRef as x, useState as v } from "react";
import { Cross as R, Clock as T } from "@strapi/icons";
import $ from "styled-components";
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
const F = (s, p = 1) => {
  const n = [];
  let e = 0;
  for (let t = 0; t < 24; t++)
    for (e = 0; e < 60; )
      n.push(`${t < 10 ? `0${t}` : t}:${e < 10 ? `0${e}` : e}`), e += p;
  const [i, l] = s?.split(":") ?? [];
  let o = n.reduce((t, m) => {
    const [r] = m.split(":");
    return Math.abs(r - i) < Math.abs(t - i) ? r : t;
  }, n[0].split(":")[0]);
  const f = n.reduce((t, m) => {
    const r = m.split(":")[1];
    return Math.abs(r - l) < Math.abs(t - l) ? r : t;
  }, n[0].split(":")[1]);
  let u = "am";
  if (parseInt(o) > 11) {
    u = "pm";
    const t = parseInt(o) - 12;
    t < 10 ? o = `0${t}` : o = t.toString();
  }
  return `${o}:${f}${u}`;
}, X = ({
  id: s,
  value: p,
  step: b = 15,
  clearLabel: n,
  disabled: e = !1,
  onClear: i,
  onChange: l,
  label: o = "",
  ...f
}) => {
  const u = A(s), t = x(null), [m, r] = v(F(p)), g = () => {
    i && (r("00:00am"), i(), t.current.inputWrapperRef.current.focus());
  };
  return a(S, {
    mask: [/[0-2]/, /[0-9]/, ":", /[0-5]/, /[0-9]/, /(a|p)/, /[m]/],
    value: m,
    onChange: (I) => {
      const C = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](a|p)m$/, c = I.target.value;
      if (l && C.test(c)) {
        const k = !c.includes("am"), d = c.replace("am", "").replace("pm", ""), M = parseInt(d.split(":")[1]);
        let h = d.split(":")[0];
        k && (h = parseInt(h) + 12), l(`${h}:${M}`);
      }
      r(c);
    },
    disabled: e,
    children: a(V, {
      id: u,
      ref: t,
      label: o,
      startAction: a(P, {
        children: a(T, {})
      }),
      endAction: i ? a(w, {
        label: "close",
        onClick: g,
        "aria-disabled": e || void 0,
        children: a(W, {})
      }) : void 0,
      "aria-autocomplete": "none",
      "aria-label": "close",
      type: "text",
      disabled: e,
      ...f
    })
  });
}, P = $(y)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({
  theme: s
}) => s.colors.neutral500};
  }
`, W = $(R)`
  height: ${11 / 16}rem;
  width: ${11 / 16}rem;

  path {
    fill: ${({
  theme: s
}) => s.colors.neutral600};
  }
`;
export {
  X as TimePicker
};
