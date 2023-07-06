"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const y=require("react/jsx-runtime"),m=require("../Box/Box.cjs"),s=require("../helpers/keyboardKeys.cjs"),b=({tagName:r,attributeName:d="",...f})=>{const c=()=>{const e=document.activeElement;return e?r?e.tagName.toLowerCase()===r:e.hasAttribute(d):!1},l=e=>r?e.querySelectorAll(r):e.querySelectorAll(`[${d}]`),i=e=>{switch(e.key){case s.KeyboardKeys.RIGHT:case s.KeyboardKeys.DOWN:{if(c()){e.preventDefault();const n=document.activeElement,t=[...l(e.currentTarget)],o=t.findIndex(a=>a===n),u=o+1<t.length?o+1:0;t[u].focus()}break}case s.KeyboardKeys.LEFT:case s.KeyboardKeys.UP:{if(c()){e.preventDefault();const n=document.activeElement,t=[...l(e.currentTarget)],o=t.findIndex(a=>a===n),u=o-1>-1?o-1:t.length-1;t[u].focus()}break}case s.KeyboardKeys.HOME:{c()&&(e.preventDefault(),l(e.currentTarget).item(0).focus());break}case s.KeyboardKeys.END:{if(c()){e.preventDefault();const n=l(e.currentTarget);n.item(n.length-1).focus()}break}}};return y.jsx(m.Box,{onKeyDown:i,...f})};exports.KeyboardNavigable=b;
