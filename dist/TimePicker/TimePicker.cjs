"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("react/jsx-runtime"),I=require("react"),b=require("@strapi/icons"),C=require("styled-components");require("../Field/Field.cjs");require("../Field/FieldLabel.cjs");require("../Field/FieldInput.cjs");require("../Field/FieldContext.cjs");require("../Typography/Typography.cjs");const v=require("../Field/FieldAction.cjs"),R=require("../Flex/Flex.cjs"),_=require("../hooks/useId.cjs"),A=require("./InputMask/index.cjs"),S=require("../TextInput/TextInput.cjs"),P=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},g=P(C),w=(t,f=1)=>{const i=[];let s=0;for(let e=0;e<24;e++)for(s=0;s<60;)i.push(`${e<10?`0${e}`:e}:${s<10?`0${s}`:s}`),s+=f;const[r,a]=t?.split(":")??[];let l=i.reduce((e,u)=>{const[n]=u.split(":");return Math.abs(n-r)<Math.abs(e-r)?n:e},i[0].split(":")[0]);const x=i.reduce((e,u)=>{const n=u.split(":")[1];return Math.abs(n-a)<Math.abs(e-a)?n:e},i[0].split(":")[1]),o=parseInt(l);let d="am";if(o>11){d=o===24?"am":"pm";const e=o!==12?o-12:12;e<10?l=`0${e}`:l=e.toString()}return`${l}:${x}${d}`},H=({id:t,value:f,step:$=15,clearLabel:i,disabled:s=!1,onClear:r,onChange:a,label:l="",...x})=>{const o=_.useId(t),d=I.useRef(null),[e,u]=I.useState(w(f)),n=()=>{r&&(u("00:00am"),r(),d.current.inputWrapperRef.current.focus())},q=T=>{const M=/^([0-1]?[0-9]|2[0-3]):[0-5][0-9](a|p)m$/,p=T.target.value;if(a&&M.test(p)){const j=!p.includes("am"),F=p.replace("am","").replace("pm",""),k=parseInt(F.split(":")[1]);let m=F.split(":")[0];const h=parseInt(m);(j&&h!==12||!j&&h===12)&&(m=h+12),a(`${m}:${k}`)}u(p)},y=[/[0-2]/,/[0-3]/,":",/[0-5]/,/[0-9]/,/(a|p)/,/[m]/];return c.jsx(A,{mask:y,value:e,onChange:q,disabled:s,children:c.jsx(S.TextInput,{id:o,ref:d,label:l,startAction:c.jsx(L,{children:c.jsx(b.Clock,{})}),endAction:r?c.jsx(v.FieldAction,{label:"close",onClick:n,"aria-disabled":s||void 0,children:c.jsx(V,{})}):void 0,"aria-autocomplete":"none","aria-label":"close",type:"text",disabled:s,...x})})},L=g.default(R.Flex)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,V=g.default(b.Cross)`
  height: ${11/16}rem;
  width: ${11/16}rem;

  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`;exports.TimePicker=H;
