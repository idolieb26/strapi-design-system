import { defaultFormatChars as u } from "../constants.js";
function g({ mask: n, maskPlaceholder: i }) {
  const e = [];
  if (!n)
    return {
      maskPlaceholder: null,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: []
    };
  if (typeof n == "string") {
    let t = !1, f = "";
    n.split("").forEach((r) => {
      !t && r === "\\" ? t = !0 : ((t || !u[r]) && e.push(f.length), f += r, t = !1);
    }), n = f.split("").map((r, s) => e.indexOf(s) === -1 ? u[r] : r);
  } else
    n.forEach((t, f) => {
      typeof t == "string" && e.push(f);
    });
  i && (i.length === 1 ? i = n.map((t, f) => e.indexOf(f) !== -1 ? t : i) : i = i.split(""), e.forEach((t) => {
    i[t] = n[t];
  }), i = i.join(""));
  const l = e.filter((t, f) => t === f).map((t) => n[t]).join("");
  let p = n.length - 1;
  for (; e.indexOf(p) !== -1; )
    p--;
  return {
    maskPlaceholder: i,
    prefix: l,
    mask: n,
    lastEditablePosition: p,
    permanents: e
  };
}
export {
  g as default
};
