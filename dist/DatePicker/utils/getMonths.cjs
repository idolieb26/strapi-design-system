"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=()=>{const e=new Intl.DateTimeFormat(void 0,{month:"long"}).format;return Array(12).fill(null).map((o,t)=>e(new Date(1970,t,1)))};exports.getMonths=n;