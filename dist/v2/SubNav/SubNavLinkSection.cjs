"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("react"),m=require("@strapi/icons"),h=require("prop-types"),x=require("styled-components"),l=require("../../Box/Box.cjs"),b=require("../../Flex/Flex.cjs"),S=require("../../hooks/useId.cjs"),k=require("../../Typography/Typography.cjs"),d=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=d(o),r=d(h),i=d(x),q=i.default(l.Box)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,E=i.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,v=i.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,s=({label:e,children:c,id:p})=>{const[n,f]=o.useState(!0),u=S.useId(p),g=()=>{f(a=>!a)};return t.default.createElement(l.Box,null,t.default.createElement(q,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4},t.default.createElement(b.Flex,{justifyContent:"space-between"},t.default.createElement(E,{onClick:g,"aria-expanded":n,"aria-controls":u},t.default.createElement(v,{rotated:n},t.default.createElement(m.CarretDown,{"aria-hidden":!0})),t.default.createElement(l.Box,{paddingLeft:2},t.default.createElement(k.Typography,{as:"span",fontWeight:"semiBold",textColor:"neutral800"},e))))),n&&t.default.createElement("ul",{id:u},o.Children.map(c,(a,y)=>t.default.createElement("li",{key:y},a))))};s.defaultProps={id:void 0};s.propTypes={children:r.default.node.isRequired,id:r.default.string,label:r.default.string.isRequired};exports.SubNavLinkSection=s;
