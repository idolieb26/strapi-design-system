"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=200,u=15,c=(s,a)=>{const t=new Date().getFullYear(),n=s?.getFullYear()??t-l,o=a?.getFullYear()??t+u,r=[];for(let e=n;e<=o;e++)r.push(e);return r};exports.getYears=c;