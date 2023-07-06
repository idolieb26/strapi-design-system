import { findLastIndex as P, repeat as m } from "./helpers.js";
import u from "./parse-mask.js";
class F {
  constructor(t) {
    this.maskOptions = u(t);
  }
  isCharacterAllowedAtPosition = (t, e) => {
    const { maskPlaceholder: i } = this.maskOptions;
    return this.isCharacterFillingPosition(t, e) ? !0 : i ? i[e] === t : !1;
  };
  isCharacterFillingPosition = (t, e) => {
    const { mask: i } = this.maskOptions;
    if (!t || e >= i.length)
      return !1;
    if (!this.isPositionEditable(e))
      return i[e] === t;
    const r = i[e];
    return new RegExp(r).test(t);
  };
  isPositionEditable = (t) => {
    const { mask: e, permanents: i } = this.maskOptions;
    return t < e.length && i.indexOf(t) === -1;
  };
  isValueEmpty = (t) => t.split("").every((e, i) => !this.isPositionEditable(i) || !this.isCharacterFillingPosition(e, i));
  isValueFilled = (t) => this.getFilledLength(t) === this.maskOptions.lastEditablePosition + 1;
  getDefaultSelectionForValue = (t) => {
    const e = this.getFilledLength(t), i = this.getRightEditablePosition(e);
    return { start: i, end: i };
  };
  getFilledLength = (t) => {
    const e = t.split("");
    return P(e, (r, l) => this.isPositionEditable(l) && this.isCharacterFillingPosition(r, l)) + 1;
  };
  getStringFillingLengthAtPosition = (t, e) => t.split("").reduce((l, a) => this.insertCharacterAtPosition(l, a, l.length), m(" ", e)).length - e;
  getLeftEditablePosition = (t) => {
    for (let e = t; e >= 0; e--)
      if (this.isPositionEditable(e))
        return e;
    return null;
  };
  getRightEditablePosition = (t) => {
    const { mask: e } = this.maskOptions;
    for (let i = t; i < e.length; i++)
      if (this.isPositionEditable(i))
        return i;
    return null;
  };
  formatValue = (t) => {
    const { maskPlaceholder: e, mask: i } = this.maskOptions;
    if (!e) {
      for (t = this.insertStringAtPosition("", t, 0); t.length < i.length && !this.isPositionEditable(t.length); )
        t += i[t.length];
      return t;
    }
    return this.insertStringAtPosition(e, t, 0);
  };
  clearRange = (t, e, i) => {
    if (!i)
      return t;
    const r = e + i, { maskPlaceholder: l, mask: a } = this.maskOptions, h = t.split("").map((c, n) => {
      const s = this.isPositionEditable(n);
      return !l && n >= r && !s ? "" : n < e || n >= r ? c : s ? l ? l[n] : "" : a[n];
    }).join("");
    return this.formatValue(h);
  };
  insertCharacterAtPosition = (t, e, i) => {
    const { mask: r, maskPlaceholder: l } = this.maskOptions;
    if (i >= r.length)
      return t;
    const a = this.isCharacterAllowedAtPosition(e, i), h = this.isPositionEditable(i), c = this.getRightEditablePosition(i), n = l && c ? e === l[c] : null, s = t.slice(0, i);
    if (a || !h) {
      const g = a ? e : r[i];
      t = s + g;
    }
    return !a && !h && !n && (t = this.insertCharacterAtPosition(t, e, i + 1)), t;
  };
  insertStringAtPosition = (t, e, i) => {
    const { mask: r, maskPlaceholder: l } = this.maskOptions;
    if (!e || i >= r.length)
      return t;
    const a = e.split(""), h = this.isValueFilled(t) || !!l, c = t.slice(i);
    return t = a.reduce((n, s) => this.insertCharacterAtPosition(n, s, n.length), t.slice(0, i)), h ? t += c.slice(t.length - i) : this.isValueFilled(t) ? t += r.slice(t.length).join("") : t = c.split("").filter((s, g) => this.isPositionEditable(i + g)).reduce((s, g) => {
      const d = this.getRightEditablePosition(
        s.length
      );
      return d === null ? s : (this.isPositionEditable(s.length) || (s += r.slice(s.length, d).join("")), this.insertCharacterAtPosition(s, g, s.length));
    }, t), t;
  };
  processChange = (t, e) => {
    const { mask: i, prefix: r, lastEditablePosition: l } = this.maskOptions, { value: a, selection: h } = t, c = e.value, n = e.selection;
    let s = a, g = "", d = 0, f = 0, o = Math.min(n.start, h.start);
    return h.end > n.start ? (g = s.slice(n.start, h.end), d = this.getStringFillingLengthAtPosition(
      g,
      o
    ), d ? f = n.length : f = 0) : s.length < c.length && (f = c.length - s.length), s = c, f && (f === 1 && !n.length && (o = n.start === h.start ? this.getRightEditablePosition(h.start) : this.getLeftEditablePosition(h.start)), s = this.clearRange(s, o, f)), s = this.insertStringAtPosition(
      s,
      g,
      o
    ), o += d, o >= i.length ? o = i.length : o < r.length && !d ? o = r.length : o >= r.length && o < l && d && (o = this.getRightEditablePosition(o)), s = this.formatValue(s), {
      value: s,
      enteredString: g,
      selection: { start: o, end: o }
    };
  };
}
export {
  F as default
};
