/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/markmap-view@0.16.0/dist/browser/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,e){"use strict";const n=Math.random().toString(36).slice(2,8);let r=0;function i(){}function a(t,e){const n=(t,r)=>e(t,(()=>{var e;return null==(e=t.children)?void 0:e.map((e=>n(e,t)))}),r);return n(t)}function o(t){if("string"==typeof t){const e=t;t=t=>t.tagName===e}const e=t;return function(){let t=Array.from(this.childNodes);return e&&(t=t.filter((t=>e(t)))),t}}function s(){const t={};return t.promise=new Promise(((e,n)=>{t.resolve=e,t.reject=n})),t}
/*! @gera2ld/jsx-dom v2.2.2 | ISC License */
const l=1,c=2,h="http://www.w3.org/2000/svg",d="http://www.w3.org/1999/xlink",u={show:d,actuate:d,href:d},p=t=>"string"==typeof t||"number"==typeof t,m=t=>(null==t?void 0:t.vtype)===l,f=t=>(null==t?void 0:t.vtype)===c;function g(t,e,...n){return function(t,e){let n;if("string"==typeof t)n=l;else{if("function"!=typeof t)throw new Error("Invalid VNode type");n=c}return{vtype:n,type:t,props:e}}(t,e=Object.assign({},e,{children:1===n.length?n[0]:n}))}function y(t){return t.children}const v={isSvg:!1};function x(t,e){Array.isArray(e)||(e=[e]),(e=e.filter(Boolean)).length&&t.append(...e)}const k={className:"class",labelFor:"for"};function b(t,e,n,r){if(e=k[e]||e,!0===n)t.setAttribute(e,"");else if(!1===n)t.removeAttribute(e);else{const i=r?u[e]:void 0;void 0!==i?t.setAttributeNS(i,e,n):t.setAttribute(e,n)}}function S(t,e){return Array.isArray(t)?t.map((t=>S(t,e))).reduce(((t,e)=>t.concat(e)),[]):w(t,e)}function w(t,e=v){if(null==t||"boolean"==typeof t)return null;if(t instanceof Node)return t;if(f(t)){const{type:n,props:r}=t;if(n===y){const t=document.createDocumentFragment();if(r.children){x(t,S(r.children,e))}return t}return w(n(r),e)}if(p(t))return document.createTextNode(`${t}`);if(m(t)){let n;const{type:r,props:i}=t;if(e.isSvg||"svg"!==r||(e=Object.assign({},e,{isSvg:!0})),n=e.isSvg?document.createElementNS(h,r):document.createElement(r),function(t,e,n){for(const r in e)if("key"!==r&&"children"!==r&&"ref"!==r)if("dangerouslySetInnerHTML"===r)t.innerHTML=e[r].__html;else if("innerHTML"===r||"textContent"===r||"innerText"===r||"value"===r&&["textarea","select"].includes(t.tagName)){const n=e[r];null!=n&&(t[r]=n)}else r.startsWith("on")?t[r.toLowerCase()]=e[r]:b(t,r,e[r],n.isSvg)}(n,i,e),i.children){let t=e;e.isSvg&&"foreignObject"===r&&(t=Object.assign({},t,{isSvg:!1}));const a=S(i.children,t);null!=a&&x(n,a)}const{ref:a}=i;return"function"==typeof a&&a(n),n}throw new Error("mount: Invalid Vnode!")}function z(...t){return w(g(...t))}const E=function(t){const e={};return function(...n){const r=`${n[0]}`;let i=e[r];return i||(i={value:t(...n)},e[r]=i),i.value}}((t=>{document.head.append(z("link",{rel:"preload",as:"script",href:t}))})),C={},j={};async function X(t,e){var n;const r="script"===t.type&&(null==(n=t.data)?void 0:n.src)||"";if(t.loaded||(t.loaded=C[r]),!t.loaded){const n=s();if(t.loaded=n.promise,"script"===t.type&&(document.head.append(z("script",{...t.data,onLoad:()=>n.resolve(),onError:n.reject})),r?C[r]=t.loaded:n.resolve()),"iife"===t.type){const{fn:r,getParams:i}=t.data;r(...(null==i?void 0:i(e))||[]),n.resolve()}}await t.loaded}const A="undefined"!=typeof navigator&&navigator.userAgent.includes("Macintosh"),M=e.scaleOrdinal(e.schemeCategory10),O={autoFit:!1,color:t=>{var e;return M(`${(null==(e=t.state)?void 0:e.path)||""}`)},duration:500,embedGlobalCSS:!0,fitRatio:.95,maxWidth:0,nodeMinHeight:16,paddingX:8,scrollForPan:A,spacingHorizontal:80,spacingVertical:5,initialExpandLevel:-1,zoom:!0,pan:!0,toggleRecursively:!1};
/*! @gera2ld/jsx-dom v2.2.2 | ISC License */
const N="http://www.w3.org/2000/svg",T="http://www.w3.org/1999/xlink",$={show:T,actuate:T,href:T},R=t=>"string"==typeof t||"number"==typeof t,B=t=>1===(null==t?void 0:t.vtype),L=t=>2===(null==t?void 0:t.vtype);function I(t,e){let n;if("string"==typeof t)n=1;else{if("function"!=typeof t)throw new Error("Invalid VNode type");n=2}return{vtype:n,type:t,props:e}}function D(t){return t.children}const H={isSvg:!1};function F(t,e){Array.isArray(e)||(e=[e]),(e=e.filter(Boolean)).length&&t.append(...e)}const P={className:"class",labelFor:"for"};function Y(t,e,n,r){if(e=P[e]||e,!0===n)t.setAttribute(e,"");else if(!1===n)t.removeAttribute(e);else{const i=r?$[e]:void 0;void 0!==i?t.setAttributeNS(i,e,n):t.setAttribute(e,n)}}function _(t,e){return Array.isArray(t)?t.map((t=>_(t,e))).reduce(((t,e)=>t.concat(e)),[]):W(t,e)}function W(t,e=H){if(null==t||"boolean"==typeof t)return null;if(t instanceof Node)return t;if(L(t)){const{type:n,props:r}=t;if(n===D){const t=document.createDocumentFragment();if(r.children){F(t,_(r.children,e))}return t}return W(n(r),e)}if(R(t))return document.createTextNode(`${t}`);if(B(t)){let n;const{type:r,props:i}=t;if(e.isSvg||"svg"!==r||(e=Object.assign({},e,{isSvg:!0})),n=e.isSvg?document.createElementNS(N,r):document.createElement(r),function(t,e,n){for(const r in e)if("key"!==r&&"children"!==r&&"ref"!==r)if("dangerouslySetInnerHTML"===r)t.innerHTML=e[r].__html;else if("innerHTML"===r||"textContent"===r||"innerText"===r||"value"===r&&["textarea","select"].includes(t.tagName)){const n=e[r];null!=n&&(t[r]=n)}else r.startsWith("on")?t[r.toLowerCase()]=e[r]:Y(t,r,e[r],n.isSvg)}(n,i,e),i.children){let t=e;e.isSvg&&"foreignObject"===r&&(t=Object.assign({},t,{isSvg:!1}));const a=_(i.children,t);null!=a&&F(n,a)}const{ref:a}=i;return"function"==typeof a&&a(n),n}throw new Error("mount: Invalid Vnode!")}function V(t){return W(t)}function K(t){var e=0,n=t.children,r=n&&n.length;if(r)for(;--r>=0;)e+=n[r].value;else e=1;t.value=e}function U(t,e){var n,r,i,a,o,s=new J(t),l=+t.value&&(s.value=t.value),c=[s];for(null==e&&(e=G);n=c.pop();)if(l&&(n.value=+n.data.value),(i=e(n.data))&&(o=i.length))for(n.children=new Array(o),a=o-1;a>=0;--a)c.push(r=n.children[a]=new J(i[a])),r.parent=n,r.depth=n.depth+1;return s.eachBefore(q)}function G(t){return t.children}function Z(t){t.data=t.data.data}function q(t){var e=0;do{t.height=e}while((t=t.parent)&&t.height<++e)}function J(t){this.data=t,this.depth=this.height=0,this.parent=null}J.prototype=U.prototype={constructor:J,count:function(){return this.eachAfter(K)},each:function(t){var e,n,r,i,a=this,o=[a];do{for(e=o.reverse(),o=[];a=e.pop();)if(t(a),n=a.children)for(r=0,i=n.length;r<i;++r)o.push(n[r])}while(o.length);return this},eachAfter:function(t){for(var e,n,r,i=this,a=[i],o=[];i=a.pop();)if(o.push(i),e=i.children)for(n=0,r=e.length;n<r;++n)a.push(e[n]);for(;i=o.pop();)t(i);return this},eachBefore:function(t){for(var e,n,r=this,i=[r];r=i.pop();)if(t(r),e=r.children)for(n=e.length-1;n>=0;--n)i.push(e[n]);return this},sum:function(t){return this.eachAfter((function(e){for(var n=+t(e.data)||0,r=e.children,i=r&&r.length;--i>=0;)n+=r[i].value;e.value=n}))},sort:function(t){return this.eachBefore((function(e){e.children&&e.children.sort(t)}))},path:function(t){for(var e=this,n=function(t,e){if(t===e)return t;var n=t.ancestors(),r=e.ancestors(),i=null;t=n.pop(),e=r.pop();for(;t===e;)i=t,t=n.pop(),e=r.pop();return i}(e,t),r=[e];e!==n;)e=e.parent,r.push(e);for(var i=r.length;t!==n;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e},descendants:function(){var t=[];return this.each((function(e){t.push(e)})),t},leaves:function(){var t=[];return this.eachBefore((function(e){e.children||t.push(e)})),t},links:function(){var t=this,e=[];return t.each((function(n){n!==t&&e.push({source:n.parent,target:n})})),e},copy:function(){return U(this).eachBefore(Z)}};const Q={name:"d3-flextree",version:"2.1.2",main:"build/d3-flextree.js",module:"index","jsnext:main":"index",author:{name:"Chris Maloney",url:"http://chrismaloney.org"},description:"Flexible tree layout algorithm that allows for variable node sizes.",keywords:["d3","d3-module","layout","tree","hierarchy","d3-hierarchy","plugin","d3-plugin","infovis","visualization","2d"],homepage:"https://github.com/klortho/d3-flextree",license:"WTFPL",repository:{type:"git",url:"https://github.com/klortho/d3-flextree.git"},scripts:{clean:"rm -rf build demo test","build:demo":"rollup -c --environment BUILD:demo","build:dev":"rollup -c --environment BUILD:dev","build:prod":"rollup -c --environment BUILD:prod","build:test":"rollup -c --environment BUILD:test",build:"rollup -c",lint:"eslint index.js src","test:main":"node test/bundle.js","test:browser":"node test/browser-tests.js",test:"npm-run-all test:*",prepare:"npm-run-all clean build lint test"},dependencies:{"d3-hierarchy":"^1.1.5"},devDependencies:{"babel-plugin-external-helpers":"^6.22.0","babel-preset-es2015-rollup":"^3.0.0",d3:"^4.13.0","d3-selection-multi":"^1.0.1",eslint:"^4.19.1",jsdom:"^11.6.2","npm-run-all":"^4.1.2",rollup:"^0.55.3","rollup-plugin-babel":"^2.7.1","rollup-plugin-commonjs":"^8.0.2","rollup-plugin-copy":"^0.2.3","rollup-plugin-json":"^2.3.0","rollup-plugin-node-resolve":"^3.0.2","rollup-plugin-uglify":"^3.0.0","uglify-es":"^3.3.9"}},{version:tt}=Q,et=Object.freeze({children:t=>t.children,nodeSize:t=>t.data.size,spacing:0});function nt(t){const e=Object.assign({},et,t);function n(t){const n=e[t];return"function"==typeof n?n:()=>n}function r(t){const e=a(function(){const t=i(),e=n("nodeSize"),r=n("spacing");return class extends t{constructor(t){super(t),Object.assign(this,{x:0,y:0,relX:0,prelim:0,shift:0,change:0,lExt:this,lExtRelX:0,lThr:null,rExt:this,rExtRelX:0,rThr:null})}get size(){return e(this.data)}spacing(t){return r(this.data,t.data)}get x(){return this.data.x}set x(t){this.data.x=t}get y(){return this.data.y}set y(t){this.data.y=t}update(){return rt(this),it(this),this}}}(),t,(t=>t.children));return e.update(),e.data}function i(){const t=n("nodeSize"),e=n("spacing");return class n extends U.prototype.constructor{constructor(t){super(t)}copy(){const t=a(this.constructor,this,(t=>t.children));return t.each((t=>t.data=t.data.data)),t}get size(){return t(this)}spacing(t){return e(this,t)}get nodes(){return this.descendants()}get xSize(){return this.size[0]}get ySize(){return this.size[1]}get top(){return this.y}get bottom(){return this.y+this.ySize}get left(){return this.x-this.xSize/2}get right(){return this.x+this.xSize/2}get root(){const t=this.ancestors();return t[t.length-1]}get numChildren(){return this.hasChildren?this.children.length:0}get hasChildren(){return!this.noChildren}get noChildren(){return null===this.children}get firstChild(){return this.hasChildren?this.children[0]:null}get lastChild(){return this.hasChildren?this.children[this.numChildren-1]:null}get extents(){return(this.children||[]).reduce(((t,e)=>n.maxExtents(t,e.extents)),this.nodeExtents)}get nodeExtents(){return{top:this.top,bottom:this.bottom,left:this.left,right:this.right}}static maxExtents(t,e){return{top:Math.min(t.top,e.top),bottom:Math.max(t.bottom,e.bottom),left:Math.min(t.left,e.left),right:Math.max(t.right,e.right)}}}}function a(t,e,n){const r=(e,i)=>{const a=new t(e);Object.assign(a,{parent:i,depth:null===i?0:i.depth+1,height:0,length:1});const o=n(e)||[];return a.children=0===o.length?null:o.map((t=>r(t,a))),a.children&&Object.assign(a,a.children.reduce(((t,e)=>({height:Math.max(t.height,e.height+1),length:t.length+e.length})),a)),a};return r(e,null)}return Object.assign(r,{nodeSize(t){return arguments.length?(e.nodeSize=t,r):e.nodeSize},spacing(t){return arguments.length?(e.spacing=t,r):e.spacing},children(t){return arguments.length?(e.children=t,r):e.children},hierarchy(t,n){const r=void 0===n?e.children:n;return a(i(),t,r)},dump(t){const e=n("nodeSize"),r=t=>n=>{const i=t+"  ",a=t+"    ",{x:o,y:s}=n,l=e(n),c=n.children||[],h=0===c.length?" ":`,${i}children: [${a}${c.map(r(a)).join(a)}${i}],${t}`;return`{ size: [${l.join(", ")}],${i}x: ${o}, y: ${s}${h}},`};return r("\n")(t)}}),r}nt.version=tt;const rt=(t,e=0)=>(t.y=e,(t.children||[]).reduce(((e,n)=>{const[r,i]=e;rt(n,t.y+t.ySize);const a=(0===r?n.lExt:n.rExt).bottom;0!==r&&ot(t,r,i);return[r+1,mt(a,r,i)]}),[0,null]),at(t),pt(t),t),it=(t,e,n)=>{void 0===e&&(e=-t.relX-t.prelim,n=0);const r=e+t.relX;return t.relX=r+t.prelim-n,t.prelim=0,t.x=n+t.relX,(t.children||[]).forEach((e=>it(e,r,t.x))),t},at=t=>{(t.children||[]).reduce(((t,e)=>{const[n,r]=t,i=n+e.shift,a=r+i+e.change;return e.relX+=a,[i,a]}),[0,0])},ot=(t,e,n)=>{const r=t.children[e-1],i=t.children[e];let a=r,o=r.relX,s=i,l=i.relX,c=!0;for(;a&&s;){a.bottom>n.lowY&&(n=n.next);const r=o+a.prelim-(l+s.prelim)+a.xSize/2+s.xSize/2+a.spacing(s);(r>0||r<0&&c)&&(l+=r,st(i,r),lt(t,e,n.index,r)),c=!1;const h=a.bottom,d=s.bottom;h<=d&&(a=ht(a),a&&(o+=a.relX)),h>=d&&(s=ct(s),s&&(l+=s.relX))}!a&&s?dt(t,e,s,l):a&&!s&&ut(t,e,a,o)},st=(t,e)=>{t.relX+=e,t.lExtRelX+=e,t.rExtRelX+=e},lt=(t,e,n,r)=>{const i=t.children[e],a=e-n;if(a>1){const e=r/a;t.children[n+1].shift+=e,i.shift-=e,i.change-=r-e}},ct=t=>t.hasChildren?t.firstChild:t.lThr,ht=t=>t.hasChildren?t.lastChild:t.rThr,dt=(t,e,n,r)=>{const i=t.firstChild,a=i.lExt,o=t.children[e];a.lThr=n;const s=r-n.relX-i.lExtRelX;a.relX+=s,a.prelim-=s,i.lExt=o.lExt,i.lExtRelX=o.lExtRelX},ut=(t,e,n,r)=>{const i=t.children[e],a=i.rExt,o=t.children[e-1];a.rThr=n;const s=r-n.relX-i.rExtRelX;a.relX+=s,a.prelim-=s,i.rExt=o.rExt,i.rExtRelX=o.rExtRelX},pt=t=>{if(t.hasChildren){const e=t.firstChild,n=t.lastChild,r=(e.prelim+e.relX-e.xSize/2+n.relX+n.prelim+n.xSize/2)/2;Object.assign(t,{prelim:r,lExt:e.lExt,lExtRelX:e.lExtRelX,rExt:n.rExt,rExtRelX:n.rExtRelX})}},mt=(t,e,n)=>{for(;null!==n&&t>=n.lowY;)n=n.next;return{lowY:t,index:e,next:n}},ft="/* used for pre-rendering to get the size of each node */\n.markmap-container {\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: -100px;\n  left: -100px;\n  overflow: hidden;\n}\n.markmap-container > .markmap-foreign {\n    display: inline-block;\n  }\n/* first-child for line wrapping, last-child for max-width detection */\n.markmap-container > .markmap-foreign > div:last-child,\n        \n        .markmap-container > .markmap-foreign > div:last-child :not(pre) {\n          white-space: nowrap;\n        }\n.markmap-container > .markmap-foreign > div:last-child code {\n          white-space: inherit;\n        }\n",gt=".markmap {\n  --markmap-max-width: none;\n  --markmap-a-color: #0097e6;\n  --markmap-a-hover-color: #00a8ff;\n  --markmap-code-bg: #f0f0f0;\n  --markmap-code-color: #555;\n  --markmap-highlight-bg: #ffeaa7;\n  --markmap-table-border: 1px solid currentColor;\n  --markmap-font: 300 16px/20px sans-serif;\n\n  font: var(--markmap-font);\n}\n\n  .markmap-link {\n    fill: none;\n  }\n\n  .markmap-node > circle {\n      cursor: pointer;\n    }\n\n  .markmap-foreign {\n    display: inline-block;\n  }\n\n  .markmap-foreign a {\n      color: var(--markmap-a-color);\n    }\n\n  .markmap-foreign a:hover {\n        color: var(--markmap-a-hover-color);\n      }\n\n  .markmap-foreign code {\n      padding: 0.25em;\n      font-size: calc(1em - 2px);\n      color: var(--markmap-code-color);\n      background-color: var(--markmap-code-bg);\n      border-radius: 2px;\n    }\n\n  .markmap-foreign pre {\n      margin: 0;\n    }\n\n  .markmap-foreign pre > code {\n        display: block;\n      }\n\n  .markmap-foreign del {\n      text-decoration: line-through;\n    }\n\n  .markmap-foreign em {\n      font-style: italic;\n    }\n\n  .markmap-foreign strong {\n      font-weight: bold;\n    }\n\n  .markmap-foreign mark {\n      background: var(--markmap-highlight-bg);\n    }\n\n  .markmap-foreign table,\n    .markmap-foreign th,\n    .markmap-foreign td {\n      border-collapse: collapse;\n      border: var(--markmap-table-border);\n    }\n\n  .markmap-foreign img {\n      display: inline-block;\n    }\n\n  .markmap-foreign-testing-max {\n    max-width: var(--markmap-max-width);\n  }\n\n  .markmap-foreign-testing-max img {\n      max-width: var(--markmap-max-width);\n      max-height: none;\n    }\n",yt=gt;function vt(t){const e=t.data;return Math.max(4-2*e.state.depth,1.5)}function xt(t,n){return t[e.minIndex(t,n)]}function kt(t){t.stopPropagation()}const bt=new class{constructor(){this.listeners=[]}tap(t){return this.listeners.push(t),()=>this.revoke(t)}revoke(t){const e=this.listeners.indexOf(t);e>=0&&this.listeners.splice(e,1)}revokeAll(){this.listeners.splice(0)}call(...t){for(const e of this.listeners)e(...t)}};class St{constructor(t,i){this.options=O,this.revokers=[],this.imgCache={},this.handleZoom=t=>{const{transform:e}=t;this.g.attr("transform",e)},this.handlePan=t=>{t.preventDefault();const n=e.zoomTransform(this.svg.node()),r=n.translate(-t.deltaX/n.k,-t.deltaY/n.k);this.svg.call(this.zoom.transform,r)},this.handleClick=(t,e)=>{let n=this.options.toggleRecursively;(A?t.metaKey:t.ctrlKey)&&(n=!n),this.toggleNode(e.data,n)},this.svg=t.datum?t:e.select(t),this.styleNode=this.svg.append("style"),this.zoom=e.zoom().filter((t=>this.options.scrollForPan&&"wheel"===t.type?t.ctrlKey&&!t.button:!(t.ctrlKey&&"wheel"!==t.type||t.button))).on("zoom",this.handleZoom),this.setOptions(i),this.state={id:this.options.id||this.svg.attr("id")||(r+=1,`mm-${n}-${r}`),minX:0,maxX:0,minY:0,maxY:0},this.g=this.svg.append("g"),this.debouncedRefresh=function(t,e){const n={timer:0};function r(){n.timer&&(window.clearTimeout(n.timer),n.timer=0)}function i(){r(),n.args&&(n.result=t(...n.args))}return function(...t){return r(),n.args=t,n.timer=window.setTimeout(i,e),n.result}}((()=>this.setData()),200),this.revokers.push(bt.tap((()=>{this.setData()})))}getStyleContent(){const{style:t}=this.options,{id:e}=this.state,n="function"==typeof t?t(e):"";return[this.options.embedGlobalCSS&&gt,n].filter(Boolean).join("\n")}updateStyle(){this.svg.attr("class",function(t,...e){const n=(t||"").split(" ").filter(Boolean);return e.forEach((t=>{t&&n.indexOf(t)<0&&n.push(t)})),n.join(" ")}(this.svg.attr("class"),"markmap",this.state.id));const t=this.getStyleContent();this.styleNode.text(t)}toggleNode(t,e=!1){var n,r;const i=(null==(n=t.payload)?void 0:n.fold)?0:1;e?a(t,((t,e)=>{t.payload={...t.payload,fold:i},e()})):t.payload={...t.payload,fold:(null==(r=t.payload)?void 0:r.fold)?0:1},this.renderData(t)}initializeData(t){let e=0;const{color:n,nodeMinHeight:r,maxWidth:i,initialExpandLevel:o}=this.options,{id:s}=this.state,l=V(I("div",{className:`markmap-container markmap ${s}-g`})),c=V(I("style",{children:[this.getStyleContent(),ft].join("\n")}));document.body.append(l,c);const h=i?`--markmap-max-width: ${i}px`:"";let d=0,u=0;a(t,((t,r,i)=>{var a,s,c;u+=1,t.children=null==(a=t.children)?void 0:a.map((t=>({...t}))),e+=1;const p=V(I("div",{className:"markmap-foreign markmap-foreign-testing-max",style:h,children:I("div",{dangerouslySetInnerHTML:{__html:t.content}})}));l.append(p),t.state={...t.state,depth:u,id:e,el:p.firstChild},t.state.path=[null==(s=null==i?void 0:i.state)?void 0:s.path,t.state.id].filter(Boolean).join("."),n(t);const m=2===(null==(c=t.payload)?void 0:c.fold);m?d+=1:(d||o>=0&&t.state.depth>=o)&&(t.payload={...t.payload,fold:1}),r(),m&&(d-=1),u-=1}));const p=Array.from(l.childNodes).map((t=>t.firstChild));this._checkImages(l),p.forEach((t=>{var e;null==(e=t.parentNode)||e.append(t.cloneNode(!0))})),a(t,((t,e,n)=>{var i;const a=t.state,o=a.el.getBoundingClientRect();t.content=a.el.innerHTML,a.size=[Math.ceil(o.width)+1,Math.max(Math.ceil(o.height),r)],a.key=[null==(i=null==n?void 0:n.state)?void 0:i.id,a.id].filter(Boolean).join(".")+t.content,e()})),l.remove(),c.remove()}_checkImages(t){t.querySelectorAll("img").forEach((t=>{if(t.width)return;const e=this.imgCache[t.src];(null==e?void 0:e[0])?[t.width,t.height]=e:e||this._loadImage(t.src)}))}_loadImage(t){this.imgCache[t]=[0,0];const e=new Image;e.src=t,e.onload=()=>{this.imgCache[t]=[e.naturalWidth,e.naturalHeight],this.debouncedRefresh()}}setOptions(t){this.options={...this.options,...t},this.options.zoom?this.svg.call(this.zoom):this.svg.on(".zoom",null),this.options.pan?this.svg.on("wheel",this.handlePan):this.svg.on("wheel",null)}setData(t,e){e&&this.setOptions(e),t&&(this.state.data=t),this.state.data&&(this.initializeData(this.state.data),this.updateStyle(),this.renderData())}renderData(t){if(!this.state.data)return;const{spacingHorizontal:n,paddingX:r,spacingVertical:i,autoFit:a,color:s}=this.options,l=nt({}).children((t=>{var e;if(!(null==(e=t.payload)?void 0:e.fold))return t.children})).nodeSize((t=>{const[e,i]=t.data.state.size;return[i,e+(e?2*r:0)+n]})).spacing(((t,e)=>t.parent===e.parent?i:2*i)),c=l.hierarchy(this.state.data);l(c);const h=c.descendants().reverse(),d=c.links(),u=e.linkHorizontal(),p=e.min(h,(t=>t.x-t.xSize/2)),m=e.max(h,(t=>t.x+t.xSize/2)),f=e.min(h,(t=>t.y)),g=e.max(h,(t=>t.y+t.ySize-n));Object.assign(this.state,{minX:p,maxX:m,minY:f,maxY:g}),a&&this.fit();const y=t&&h.find((e=>e.data===t))||c,v=y.data.state.x0??y.x,x=y.data.state.y0??y.y,k=this.g.selectAll(o("g")).data(h,(t=>t.data.state.key)),b=k.enter().append("g").attr("data-depth",(t=>t.data.state.depth)).attr("data-path",(t=>t.data.state.path)).attr("transform",(t=>`translate(${x+y.ySize-t.ySize},${v+y.xSize/2-t.xSize})`)),S=this.transition(k.exit());S.select("line").attr("x1",(t=>t.ySize-n)).attr("x2",(t=>t.ySize-n)),S.select("foreignObject").style("opacity",0),S.attr("transform",(t=>`translate(${y.y+y.ySize-t.ySize},${y.x+y.xSize/2-t.xSize})`)).remove();const w=k.merge(b).attr("class",(t=>{var e;return["markmap-node",(null==(e=t.data.payload)?void 0:e.fold)&&"markmap-fold"].filter(Boolean).join(" ")}));this.transition(w).attr("transform",(t=>`translate(${t.y},${t.x-t.xSize/2})`));const z=w.selectAll(o("line")).data((t=>[t]),(t=>t.data.state.key)).join((t=>t.append("line").attr("x1",(t=>t.ySize-n)).attr("x2",(t=>t.ySize-n))),(t=>t),(t=>t.remove()));this.transition(z).attr("x1",-1).attr("x2",(t=>t.ySize-n+2)).attr("y1",(t=>t.xSize)).attr("y2",(t=>t.xSize)).attr("stroke",(t=>s(t.data))).attr("stroke-width",vt);const E=w.selectAll(o("circle")).data((t=>{var e;return(null==(e=t.data.children)?void 0:e.length)?[t]:[]}),(t=>t.data.state.key)).join((t=>t.append("circle").attr("stroke-width","1.5").attr("cx",(t=>t.ySize-n)).attr("cy",(t=>t.xSize)).attr("r",0).on("click",((t,e)=>this.handleClick(t,e))).on("mousedown",kt)),(t=>t),(t=>t.remove()));this.transition(E).attr("r",6).attr("cx",(t=>t.ySize-n)).attr("cy",(t=>t.xSize)).attr("stroke",(t=>s(t.data))).attr("fill",(t=>{var e;return(null==(e=t.data.payload)?void 0:e.fold)&&t.data.children?s(t.data):"#fff"}));const C=w.selectAll(o("foreignObject")).data((t=>[t]),(t=>t.data.state.key)).join((t=>{const e=t.append("foreignObject").attr("class","markmap-foreign").attr("x",r).attr("y",0).style("opacity",0).on("mousedown",kt).on("dblclick",kt);return e.append("xhtml:div").select((function(t){const e=t.data.state.el.cloneNode(!0);return this.replaceWith(e),e})).attr("xmlns","http://www.w3.org/1999/xhtml"),e}),(t=>t),(t=>t.remove())).attr("width",(t=>Math.max(0,t.ySize-n-2*r))).attr("height",(t=>t.xSize));this.transition(C).style("opacity",1);const j=this.g.selectAll(o("path")).data(d,(t=>t.target.data.state.key)).join((t=>{const e=[x+y.ySize-n,v+y.xSize/2];return t.insert("path","g").attr("class","markmap-link").attr("data-depth",(t=>t.target.data.state.depth)).attr("data-path",(t=>t.target.data.state.path)).attr("d",u({source:e,target:e}))}),(t=>t),(t=>{const e=[y.y+y.ySize-n,y.x+y.xSize/2];return this.transition(t).attr("d",u({source:e,target:e})).remove()}));this.transition(j).attr("stroke",(t=>s(t.target.data))).attr("stroke-width",(t=>vt(t.target))).attr("d",(t=>{const e=t.source,r=t.target,i=[e.y+e.ySize-n,e.x+e.xSize/2],a=[r.y,r.x+r.xSize/2];return u({source:i,target:a})})),h.forEach((t=>{t.data.state.x0=t.x,t.data.state.y0=t.y}))}transition(t){const{duration:e}=this.options;return t.transition().duration(e)}async fit(){const t=this.svg.node(),{width:n,height:r}=t.getBoundingClientRect(),{fitRatio:a}=this.options,{minX:o,maxX:s,minY:l,maxY:c}=this.state,h=c-l,d=s-o,u=Math.min(n/h*a,r/d*a,2),p=e.zoomIdentity.translate((n-h*u)/2-l*u,(r-d*u)/2-o*u).scale(u);return this.transition(this.svg).call(this.zoom.transform,p).end().catch(i)}findElement(t){let e;return this.g.selectAll(o("g")).each((function(n){n.data===t&&(e={data:n,g:this})})),e}async ensureView(t,n){var r;const a=null==(r=this.findElement(t))?void 0:r.data;if(!a)return;const o=this.svg.node(),{spacingHorizontal:s}=this.options,l=o.getBoundingClientRect(),c=e.zoomTransform(o),[h,d]=[a.y,a.y+a.ySize-s+2].map((t=>t*c.k+c.x)),[u,p]=[a.x-a.xSize/2,a.x+a.xSize/2].map((t=>t*c.k+c.y)),m={left:0,right:0,top:0,bottom:0,...n},f=[m.left-h,l.width-m.right-d],g=[m.top-u,l.height-m.bottom-p],y=f[0]*f[1]>0?xt(f,Math.abs)/c.k:0,v=g[0]*g[1]>0?xt(g,Math.abs)/c.k:0;if(y||v){const t=c.translate(y,v);return this.transition(this.svg).call(this.zoom.transform,t).end().catch(i)}}async rescale(t){const n=this.svg.node(),{width:r,height:a}=n.getBoundingClientRect(),o=r/2,s=a/2,l=e.zoomTransform(n),c=l.translate((o-l.x)*(1-t)/l.k,(s-l.y)*(1-t)/l.k).scale(t);return this.transition(this.svg).call(this.zoom.transform,c).end().catch(i)}destroy(){this.svg.on(".zoom",null),this.svg.html(null),this.revokers.forEach((t=>{t()}))}static create(t,e,n=null){const r=new St(t,e);return n&&(r.setData(n),r.fit()),r}}t.Markmap=St,t.defaultColorFn=M,t.defaultOptions=O,t.deriveOptions=function(t){const n={},r={...t},{color:i,colorFreezeLevel:a}=r;if(1===(null==i?void 0:i.length)){const t=i[0];n.color=()=>t}else if(null==i?void 0:i.length){const t=e.scaleOrdinal(i);n.color=e=>t(`${e.state.path}`)}if(a){const t=n.color||O.color;n.color=e=>(e={...e,state:{...e.state,path:e.state.path.split(".").slice(0,a).join(".")}},t(e))}return["duration","maxWidth","initialExpandLevel"].forEach((t=>{const e=r[t];"number"==typeof e&&(n[t]=e)})),["zoom","pan"].forEach((t=>{const e=r[t];null!=e&&(n[t]=!!e)})),n},t.globalCSS=yt,t.isMacintosh=A,t.loadCSS=async function(t){await Promise.all(t.map((t=>async function(t){const e="stylesheet"===t.type&&t.data.href||"";if(t.loaded||(t.loaded=j[e]),!t.loaded){const n=s();t.loaded=n.promise,e&&(j[e]=t.loaded),"style"===t.type?(document.head.append(z("style",{textContent:t.data})),n.resolve()):e&&(document.head.append(z("link",{rel:"stylesheet",...t.data})),fetch(e).then((t=>{if(t.ok)return t.text();throw t})).then((()=>n.resolve()),n.reject))}await t.loaded}(t))))},t.loadJS=async function(t,e){t.forEach((t=>{var e;"script"===t.type&&(null==(e=t.data)?void 0:e.src)&&E(t.data.src)})),e={getMarkmap:()=>window.markmap,...e};for(const n of t)await X(n,e)},t.refreshHook=bt,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}(this.markmap=this.markmap||{},d3);
//# sourceMappingURL=/sm/6368a283d816bcb7549e3ec4bcc0bc77d6a626cb1ffa8961c321ee7b9590723c.map