import{R as l,j as e}from"./index-K7slfJfR.js";const E=l.createContext({}),w=!0;function P({baseColor:i,highlightColor:o,width:r,height:c,borderRadius:d,circle:u,direction:x,duration:f,enableAnimation:p=w}){const s={};return x==="rtl"&&(s["--animation-direction"]="reverse"),typeof f=="number"&&(s["--animation-duration"]=`${f}s`),p||(s["--pseudo-element-display"]="none"),(typeof r=="string"||typeof r=="number")&&(s.width=r),(typeof c=="string"||typeof c=="number")&&(s.height=c),(typeof d=="string"||typeof d=="number")&&(s.borderRadius=d),u&&(s.borderRadius="50%"),typeof i<"u"&&(s["--base-color"]=i),typeof o<"u"&&(s["--highlight-color"]=o),s}function g({count:i=1,wrapper:o,className:r,containerClassName:c,containerTestId:d,circle:u=!1,style:x,...f}){var p,s,j;const _=l.useContext(E),k={...f};for(const[n,a]of Object.entries(f))typeof a>"u"&&delete k[n];const h={..._,...k,circle:u},O={...x,...P(h)};let C="react-loading-skeleton";r&&(C+=` ${r}`);const T=(p=h.inline)!==null&&p!==void 0?p:!1,m=[],y=Math.ceil(i);for(let n=0;n<y;n++){let a=O;if(y>i&&n===y-1){const v=(s=a.width)!==null&&s!==void 0?s:"100%",S=i%1,$=typeof v=="number"?v*S:`calc(${v} * ${S})`;a={...a,width:$}}const N=l.createElement("span",{className:C,style:a,key:n},"‌");T?m.push(N):m.push(l.createElement(l.Fragment,{key:n},N,l.createElement("br",null)))}return l.createElement("span",{className:c,"data-testid":d,"aria-live":"polite","aria-busy":(j=h.enableAnimation)!==null&&j!==void 0?j:w},o?m.map((n,a)=>l.createElement(o,{key:a},n)):m)}function b({children:i,...o}){return l.createElement(E.Provider,{value:o},i)}function t(){return e.jsxs("div",{className:"card-content",children:[e.jsx(g,{circle:!0,className:"circle-card"}),e.jsx("div",{className:"skeleton-line",children:e.jsx(g,{})})]})}function R(){return e.jsxs("div",{className:"skeleton-wrapper",children:[e.jsx(b,{baseColor:"#202020",highlightColor:"#444",children:e.jsx("div",{className:"skeleton-wrapper",children:e.jsxs("div",{className:"card",children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]})})}),e.jsx(b,{baseColor:"#202020",highlightColor:"#444",children:e.jsx("div",{className:"skeleton-wrapper",children:e.jsxs("div",{className:"card",children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]})})}),e.jsx(b,{baseColor:"#202020",highlightColor:"#444",children:e.jsx("div",{className:"skeleton-wrapper",children:e.jsxs("div",{className:"card",children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]})})})]})}const M=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{M as C,g as S,b as a,R as b};
