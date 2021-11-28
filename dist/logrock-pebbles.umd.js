var Z=Object.defineProperty;var O=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var T=(n,a,c)=>a in n?Z(n,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):n[a]=c,_=(n,a)=>{for(var c in a||(a={}))q.call(a,c)&&T(n,c,a[c]);if(O)for(var c of O(a))L.call(a,c)&&T(n,c,a[c]);return n};var z=(n,a)=>{var c={};for(var s in n)q.call(n,s)&&a.indexOf(s)<0&&(c[s]=n[s]);if(n!=null&&O)for(var s of O(n))a.indexOf(s)<0&&L.call(n,s)&&(c[s]=n[s]);return c};(function(n,a){typeof exports=="object"&&typeof module!="undefined"?a(exports,require("styled-components"),require("react"),require("styled-breakpoints")):typeof define=="function"&&define.amd?define(["exports","styled-components","react","styled-breakpoints"],a):(n=typeof globalThis!="undefined"?globalThis:n||self,a(n["@logrock/pebbles"]={},n["styled-components"],n.React,n.styledBreakpoints))})(this,function(n,a,c,s){"use strict";function k(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var d=k(a),D=k(c),S={exports:{}},$={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var P=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;function F(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function U(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var o={},i=0;i<10;i++)o["_"+String.fromCharCode(i)]=i;var t=Object.getOwnPropertyNames(o).map(function(l){return o[l]});if(t.join("")!=="0123456789")return!1;var e={};return"abcdefghijklmnopqrst".split("").forEach(function(l){e[l]=l}),Object.keys(Object.assign({},e)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}U();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=D.default,N=60103;if($.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var E=Symbol.for;N=E("react.element"),$.Fragment=E("react.fragment")}var H=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function C(r,o,i){var t,e={},l=null,f=null;i!==void 0&&(l=""+i),o.key!==void 0&&(l=""+o.key),o.ref!==void 0&&(f=o.ref);for(t in o)M.call(o,t)&&!A.hasOwnProperty(t)&&(e[t]=o[t]);if(r&&r.defaultProps)for(t in o=r.defaultProps,o)e[t]===void 0&&(e[t]=o[t]);return{$$typeof:N,type:r,key:l,ref:f,props:e,_owner:H.current}}$.jsx=C,$.jsxs=C,S.exports=$;const x=S.exports.jsx,J=d.default.div`
  ${({theme:r})=>a.css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    padding-top: ${r.spacings.xs};
    padding-bottom: ${r.spacings.xs};

    background-color: ${r.navbar.background};
  `}
`,Y=d.default.div`
  ${({theme:r})=>a.css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: ${r.breakpoints.widescreen};
    padding-right: ${r.spacings.md};
    padding-left: ${r.spacings.md};
  `}
`,j=({children:r})=>x(J,{children:x(Y,{children:r})});j.Logo=d.default.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`,j.Navigation=d.default.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`,j.NavigationItem=d.default.div`
  ${({theme:r,active:o})=>a.css`
    a {
      display: flex;
      flex-flow: row nowrap;
      padding: ${r.spacings.md};

      border-bottom-width: ${r.spacings.xxs};
      border-bottom-style: solid;
      border-bottom-color: ${o?r.navbar.navigation.item.active.border:r.navbar.navigation.item.regular.border};

      color: ${o?r.navbar.navigation.item.active.color:r.navbar.navigation.item.regular.color};
      text-decoration: none;
    }
    &:hover {
      border-color: ${r.navbar.navigation.item.hover.border};

      background-color: ${r.navbar.navigation.item.hover.background};
    }

    &:active {
      border-color: ${r.navbar.navigation.item.active.border};

      background-color: ${r.navbar.navigation.item.active.background};
    }
  `}
`;const G=d.default.h1`
  ${({theme:r,inverted:o})=>{var i,t,e,l,f,p,u,g,b,v,y,w;return a.css`
    color: ${(e=(t=(i=r==null?void 0:r.typography)==null?void 0:i.header1)==null?void 0:t[o?"inverted":"regular"])==null?void 0:e.color};
    font-size: ${(p=(f=(l=r==null?void 0:r.typography)==null?void 0:l.header1)==null?void 0:f[o?"inverted":"regular"])==null?void 0:p.fontSize};
    font-weight: ${(b=(g=(u=r==null?void 0:r.typography)==null?void 0:u.header1)==null?void 0:g[o?"inverted":"regular"])==null?void 0:b.fontWeight};
    text-decoration: ${(w=(y=(v=r==null?void 0:r.typography)==null?void 0:v.header1)==null?void 0:y[o?"inverted":"regular"])==null?void 0:w.textDecoration};
  `}}
`,R=a.css`
  ${({theme:r,inverted:o})=>{var i,t,e,l,f,p,u,g,b,v,y,w;return a.css`
    color: ${(e=(t=(i=r==null?void 0:r.typography)==null?void 0:i.link)==null?void 0:t[o?"inverted":"regular"])==null?void 0:e.color};
    font-size: ${(p=(f=(l=r==null?void 0:r.typography)==null?void 0:l.link)==null?void 0:f[o?"inverted":"regular"])==null?void 0:p.fontSize};
    font-weight: ${(b=(g=(u=r==null?void 0:r.typography)==null?void 0:u.link)==null?void 0:g[o?"inverted":"regular"])==null?void 0:b.fontWeight};
    text-decoration: ${(w=(y=(v=r==null?void 0:r.typography)==null?void 0:v.link)==null?void 0:y[o?"inverted":"regular"])==null?void 0:w.textDecoration};
  `}}
`,K=i=>{var t=i,{component:r}=t,o=z(t,["component"]);if(r){const l=d.default(r)`
      ${R}
    `;return x(l,_({},o))}const e=d.default.a`
    ${R}
  `;return x(e,_({},o))},Q=d.default.p`
  ${({theme:r,inverted:o})=>{var i,t,e,l,f,p,u,g,b,v,y,w;return a.css`
    flex-flow: row;

    color: ${(e=(t=(i=r==null?void 0:r.typography)==null?void 0:i.paragraph)==null?void 0:t[o?"inverted":"regular"])==null?void 0:e.color};
    font-size: ${(p=(f=(l=r==null?void 0:r.typography)==null?void 0:l.paragraph)==null?void 0:f[o?"inverted":"regular"])==null?void 0:p.fontSize};
    font-weight: ${(b=(g=(u=r==null?void 0:r.typography)==null?void 0:u.paragraph)==null?void 0:g[o?"inverted":"regular"])==null?void 0:b.fontWeight};
    text-decoration: ${(w=(y=(v=r==null?void 0:r.typography)==null?void 0:v.paragraph)==null?void 0:y[o?"inverted":"regular"])==null?void 0:w.textDecoration};
  `}}
`,V=d.default.section`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  ${({theme:r})=>a.css`
    ${s.up("mobile")} {
      max-width: ${r.breakpoints.mobile};
    }
    ${s.up("tablet")} {
      max-width: ${r.breakpoints.tablet};
    }
    ${s.up("desktop")} {
      max-width: ${r.breakpoints.desktop};
    }
    ${s.up("widescreen")} {
      max-width: ${r.breakpoints.widescreen};
    }
    ${s.up("fullhd")} {
      max-width: ${r.breakpoints.fullhd};
    }
  `}
`,X=({children:r})=>x(V,{children:r});n.Container=X,n.Header1=G,n.Link=K,n.NavBar=j,n.Paragraph=Q,Object.defineProperty(n,"__esModule",{value:!0}),n[Symbol.toStringTag]="Module"});
