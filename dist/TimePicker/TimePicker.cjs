"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("react/jsx-runtime"),j=require("react"),g=require("@strapi/icons"),k=require("styled-components");require("../Field/Field.cjs");require("../Field/FieldLabel.cjs");require("../Field/FieldInput.cjs");require("../Field/FieldContext.cjs");require("../Typography/Typography.cjs");const C=require("../Field/FieldAction.cjs"),v=require("../Flex/Flex.cjs"),R=require("../hooks/useId.cjs"),_=require("./InputMask/index.cjs"),A=require("../TextInput/TextInput.cjs"),S=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},I=S(k),P=(t,m=1)=>{const r=[];let s=0;for(let e=0;e<24;e++)for(s=0;s<60;)r.push(`${e<10?`0${e}`:e}:${s<10?`0${s}`:s}`),s+=m;const[l,u]=t?.split(":")??[];let n=r.reduce((e,c)=>{const[i]=c.split(":");return Math.abs(i-l)<Math.abs(e-l)?i:e},r[0].split(":")[0]);const h=r.reduce((e,c)=>{const i=c.split(":")[1];return Math.abs(i-u)<Math.abs(e-u)?i:e},r[0].split(":")[1]);let a="am";if(parseInt(n)>11){a="pm";const e=parseInt(n)-12;e<10?n=`0${e}`:n=e.toString(),console.log("default hours: ",n,e)}return`${n}:${h}${a}`},w=({id:t,value:m,step:$=15,clearLabel:r,disabled:s=!1,onClear:l,onChange:u,label:n="",...h})=>{const a=R.useId(t),e=j.useRef(null),[c,i]=j.useState(P(m)),F=()=>{l&&(i("00:00am"),l(),e.current.inputWrapperRef.current.focus())},b=y=>{const T=/^([0-1]?[0-9]|2[0-3]):[0-5][0-9](a|p)m$/,d=y.target.value;if(u&&T.test(d)){const M=!d.includes("am"),f=d.replace("am","").replace("pm",""),x=parseInt(f.split(":")[1]);let p=f.split(":")[0];M&&(p=parseInt(p)+12),console.log("~~~~~~~~: ",`${p}:${x}`),u(`${p}:${x}`)}i(d)},q=[/[0-2]/,/[0-3]/,":",/[0-5]/,/[0-9]/,/(a|p)/,/[m]/];return o.jsx(_,{mask:q,value:c,onChange:b,disabled:s,children:o.jsx(A.TextInput,{id:a,ref:e,label:n,startAction:o.jsx(L,{children:o.jsx(g.Clock,{})}),endAction:l?o.jsx(C.FieldAction,{label:"close",onClick:F,"aria-disabled":s||void 0,children:o.jsx(V,{})}):void 0,"aria-autocomplete":"none","aria-label":"close",type:"text",disabled:s,...h})})},L=I.default(v.Flex)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,V=I.default(g.Cross)`
  height: ${11/16}rem;
  width: ${11/16}rem;

  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`;exports.TimePicker=w;
