"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react/jsx-runtime"),b=require("react"),F=require("@strapi/icons"),C=require("styled-components");require("../Field/Field.cjs");require("../Field/FieldLabel.cjs");require("../Field/FieldInput.cjs");require("../Field/FieldContext.cjs");require("../Typography/Typography.cjs");const v=require("../Field/FieldAction.cjs"),R=require("../Flex/Flex.cjs"),_=require("../hooks/useId.cjs"),A=require("./InputMask/index.cjs"),S=require("../TextInput/TextInput.cjs"),H=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},I=H(C),P=(t,h=1)=>{const r=[];let s=0;for(let e=0;e<24;e++)for(s=0;s<60;)r.push(`${e<10?`0${e}`:e}:${s<10?`0${s}`:s}`),s+=h;const[o,d]=t?.split(":")??[];let i=r.reduce((e,c)=>{const[l]=c.split(":");return Math.abs(l-o)<Math.abs(e-o)?l:e},r[0].split(":")[0]);const x=r.reduce((e,c)=>{const l=c.split(":")[1];return Math.abs(l-d)<Math.abs(e-d)?l:e},r[0].split(":")[1]),n=parseInt(i);let u="am";if(console.log("intHour:",n),n>11){u=n===24?"am":"pm";const e=n!==12?n-12:12;console.log("hourNumber:",e),e<10?i=e===0?"12":`0${e}`:i=e.toString()}else n===0?(console.log("else if :",n),u="am",i="12"):console.log("else:",n);return`${i}:${x}${u}`},w=({id:t,value:h,step:$=15,clearLabel:r,disabled:s=!1,onClear:o,onChange:d,label:i="",...x})=>{const n=_.useId(t),u=b.useRef(null),[e,c]=b.useState(P(h)),l=()=>{o&&(c("00:00am"),o(),u.current.inputWrapperRef.current.focus())},q=T=>{const M=/^([0-1]?[0-9]|2[0-3]):[0-5][0-9](a|p)m$/,p=T.target.value;if(d&&M.test(p)){const j=!p.includes("am"),g=p.replace("am","").replace("pm",""),k=parseInt(g.split(":")[1]);let m=g.split(":")[0];const f=parseInt(m);(j&&f!==12||!j&&f===12)&&(m=f+12),d(`${m}:${k}`)}c(p)},y=[/[0-2]/,/[0-3]/,":",/[0-5]/,/[0-9]/,/(a|p)/,/[m]/];return a.jsx(A,{mask:y,value:e,onChange:q,disabled:s,children:a.jsx(S.TextInput,{id:n,ref:u,label:i,startAction:a.jsx(L,{children:a.jsx(F.Clock,{})}),endAction:o?a.jsx(v.FieldAction,{label:"close",onClick:l,"aria-disabled":s||void 0,children:a.jsx(V,{})}):void 0,"aria-autocomplete":"none","aria-label":"close",type:"text",disabled:s,...x})})},L=I.default(R.Flex)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,V=I.default(F.Cross)`
  height: ${11/16}rem;
  width: ${11/16}rem;

  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`;exports.TimePicker=w;
