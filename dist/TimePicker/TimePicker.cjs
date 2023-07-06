"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("react/jsx-runtime"),h=require("react"),f=require("@strapi/icons"),I=require("styled-components");require("../Field/Field.cjs");require("../Field/FieldLabel.cjs");require("../Field/FieldInput.cjs");require("../Field/FieldContext.cjs");require("../Typography/Typography.cjs");const $=require("../Field/FieldAction.cjs"),T=require("../Flex/Flex.cjs"),k=require("../hooks/useId.cjs"),C=require("./InputMask/index.cjs"),M=require("../TextInput/TextInput.cjs"),v=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},x=v(I),R=(e,o=1)=>{const i=[];let s=0;for(let t=0;t<24;t++)for(s=0;s<60;)i.push(`${t<10?`0${t}`:t}:${s<10?`0${s}`:s}`),s+=o;const[r,c]=e?.split(":")??[],a=i.reduce((t,l)=>{const[n]=l.split(":");return Math.abs(n-r)<Math.abs(t-r)?n:t},i[0].split(":")[0]),d=i.reduce((t,l)=>{const n=l.split(":")[1];return Math.abs(n-c)<Math.abs(t-c)?n:t},i[0].split(":")[1]);return`${a}:${d}`},_=({id:e,value:o,step:j=15,clearLabel:i,disabled:s=!1,onClear:r,onChange:c,label:a="",...d})=>{const t=k.useId(e),l=h.useRef(null),[n,m]=h.useState(R(o)),F=()=>{r&&(r(),l.current.inputWrapperRef.current.focus())},b=q=>{const y=/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,p=q.target.value;c&&y.test(p)&&c(p),m(p)},g=[/[0-2]/,/[0-3]/,":",/[0-5]/,/[0-9]/];return u.jsx(C,{mask:g,value:n,onChange:b,disabled:s,children:u.jsx(M.TextInput,{id:t,ref:l,label:a,startAction:u.jsx(A,{children:u.jsx(f.Clock,{})}),endAction:r?u.jsx($.FieldAction,{label:"close",onClick:F,"aria-disabled":s||void 0,children:u.jsx(S,{})}):void 0,"aria-autocomplete":"none","aria-label":"close",type:"text",disabled:s,...d})})},A=x.default(T.Flex)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,S=x.default(f.Cross)`
  height: ${11/16}rem;
  width: ${11/16}rem;

  path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`;exports.TimePicker=_;
