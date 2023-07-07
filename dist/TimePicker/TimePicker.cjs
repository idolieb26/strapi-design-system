"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("react/jsx-runtime"),x=require("react"),j=require("@strapi/icons"),k=require("styled-components");require("../Field/Field.cjs");require("../Field/FieldLabel.cjs");require("../Field/FieldInput.cjs");require("../Field/FieldContext.cjs");require("../Typography/Typography.cjs");const C=require("../Field/FieldAction.cjs"),v=require("../Flex/Flex.cjs"),R=require("../hooks/useId.cjs"),_=require("./InputMask/index.cjs"),A=require("../TextInput/TextInput.cjs"),S=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},I=S(k),P=(t,p=1)=>{const r=[];let s=0;for(let e=0;e<24;e++)for(s=0;s<60;)r.push(`${e<10?`0${e}`:e}:${s<10?`0${s}`:s}`),s+=p;const[l,c]=t?.split(":")??[];let i=r.reduce((e,o)=>{const[n]=o.split(":");return Math.abs(n-l)<Math.abs(e-l)?n:e},r[0].split(":")[0]);const m=r.reduce((e,o)=>{const n=o.split(":")[1];return Math.abs(n-c)<Math.abs(e-c)?n:e},r[0].split(":")[1]);let a="am";if(parseInt(i)>11){a="pm";const e=parseInt(i)-12;e<10?i=`0${e}`:i=e.toString()}return`${i}:${m}${a}`},w=({id:t,value:p,step:F=15,clearLabel:r,disabled:s=!1,onClear:l,onChange:c,label:i="",...m})=>{const a=R.useId(t),e=x.useRef(null),[o,n]=x.useState(P(p)),b=()=>{l&&(n("00:00am"),l(),e.current.inputWrapperRef.current.focus())},g=q=>{const y=/^([0-1]?[0-9]|2[0-3]):[0-5][0-9](a|p)m$/,d=q.target.value;if(c&&y.test(d)){const T=!d.includes("am"),f=d.replace("am","").replace("pm",""),M=parseInt(f.split(":")[1]);let h=f.split(":")[0];T&&(h=parseInt(h)+12),c(`${h}:${M}`)}n(d)},$=[/[0-2]/,/[0-9]/,":",/[0-5]/,/[0-9]/,/(a|p)/,/[m]/];return u.jsx(_,{mask:$,value:o,onChange:g,disabled:s,children:u.jsx(A.TextInput,{id:a,ref:e,label:i,startAction:u.jsx(L,{children:u.jsx(j.Clock,{})}),endAction:l?u.jsx(C.FieldAction,{label:"close",onClick:b,"aria-disabled":s||void 0,children:u.jsx(V,{})}):void 0,"aria-autocomplete":"none","aria-label":"close",type:"text",disabled:s,...m})})},L=I.default(v.Flex)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,V=I.default(j.Cross)`
  height: ${11/16}rem;
  width: ${11/16}rem;

  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`;exports.TimePicker=w;
