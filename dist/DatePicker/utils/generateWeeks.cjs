"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const D=require("../compareDates.cjs"),M=7*6,f=(e,g)=>{const i=new Date(e.getFullYear(),e.getMonth(),1),l=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),c=new Date(e.getFullYear(),e.getMonth(),0).getDate(),s=i.getDay(),h=l+s,r=[];let a=0,u=0,n=0,o;for(let t=0;t<M;t++)t>6&&t%7===0&&n++,r[n]||(r[n]=[]),t<s?o={date:new Date(e.getFullYear(),e.getMonth()-1,c-s+t+1),outsideMonth:!0}:t<h?o={date:new Date(e.getFullYear(),e.getMonth(),t-s+1)}:o={date:new Date(e.getFullYear(),e.getMonth()+1,t-s-l+1),outsideMonth:!0},D.isDateEqual(g,o.date)&&(a=n+1,u=r[n].length,o.isSelected=!0),r[n].push(o);return[r,a,u]};exports.generateWeeks=f;
