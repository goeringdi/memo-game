(()=>{var e,t,n={},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return n[e](a,a.exports,i),a.exports}i.m=n,i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>e+".bundle.js",i.miniCssF=e=>e+".css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="memo-game:",i.l=(n,o,a,l)=>{if(e[n])e[n].push(o);else{var c,r;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){c=u;break}}c||(r=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",t+a),c.src=n),e[n]=[o];var p=(t,o)=>{c.onerror=c.onload=null,clearTimeout(m);var i=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((e=>e(o))),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),r&&document.head.appendChild(c)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{if("undefined"!=typeof document){var e={179:0};i.f.miniCss=(t,n)=>{e[t]?n.push(e[t]):0!==e[t]&&{868:1}[t]&&n.push(e[t]=(e=>new Promise(((t,n)=>{var o=i.miniCssF(e),a=i.p+o;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=(l=n[o]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===e||i===t))return l}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var l;if((i=(l=a[o]).getAttribute("data-href"))===e||i===t)return l}})(o,a))return t();((e,t,n,o,i)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=n=>{if(a.onerror=a.onload=null,"load"===n.type)o();else{var l=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=l,r.request=c,a.parentNode.removeChild(a),i(r)}},a.href=t,document.head.appendChild(a)})(e,a,0,t,n)})))(t).then((()=>{e[t]=0}),(n=>{throw delete e[t],n})))}}})(),(()=>{var e={179:0};i.f.j=(t,n)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((n,i)=>o=e[t]=[n,i]));n.push(o[2]=a);var l=i.p+i.u(t),c=new Error;i.l(l,(n=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",c.name="ChunkLoadError",c.type=a,c.request=l,o[1](c)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,a,[l,c,r]=n,s=0;if(l.some((t=>0!==e[t]))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);r&&r(i)}for(t&&t(n);s<l.length;s++)a=l[s],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunkmemo_game=self.webpackChunkmemo_game||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),i.e(868).then(i.bind(i,868)),window.application={blocks:{},screens:{},renderScreen:function(e){window.application.blocks[e]?this.blocks[e]:console.log("Такого экрана нет")},renderBlock:function(e,t){window.application.blocks[e]?this.blocks[e](t):console.log("Такого блока нет")},timers:[]};const a=document.querySelector(".container");function l(){a.textContent="";const e=document.createElement("div");e.classList.add("infoGame");const t=document.createElement("div");t.classList.add("timeBox");const n=document.createElement("div");n.classList.add("timerNameBox");const o=document.createElement("p");o.classList.add("minName"),o.textContent="min";const i=document.createElement("p");i.classList.add("secName"),i.textContent="sec";const s=document.createElement("div");s.classList.add("timerBox");const d=document.createElement("p");d.classList.add("min"),d.textContent="00.";const u=document.createElement("p");u.classList.add("sec"),u.textContent="00";const p=document.createElement("button");p.classList.add("button"),p.classList.add("buttonNewStart"),p.textContent="Начать заново";const m=document.createElement("div");let h,f;function g(e,t){return f=Math.floor(36*Math.random())+1,f}m.classList.add("cardsBox"),a.appendChild(e),a.appendChild(m),e.appendChild(t),t.appendChild(n),t.appendChild(s),s.appendChild(d),s.appendChild(u),n.appendChild(o),n.appendChild(i),e.appendChild(p),"1"===window.application.level?h=3:"2"===window.application.level?h=6:"3"===window.application.level&&(h=9);const v=[];for(let e=0;e<h;e++)g(),v.includes(f)?(g(),v.push(f)):v.push(f),console.log(v);console.log(v),v.push(...v),console.log(v),v.sort((()=>Math.random()-.5)),console.log(v);for(let e=0;e<v.length;e++){const t=document.createElement("div");t.classList.add("item"),3===h?t.classList.add("card3"):6===h?t.classList.add("card6"):9===h&&t.classList.add("card9"),m.appendChild(t);const n=document.createElement("img");n.src="img/"+v[e]+".png",n.classList.add("image"),t.appendChild(n)}const C=document.querySelectorAll(".item");let b=0,w=0;window.application.timers.push(setTimeout((function(){C.forEach((e=>{const t=document.createElement("div");t.classList.add("shirt"),e.appendChild(t)}))}),5e3)),window.application.timers.push(setTimeout((function(){setInterval((function(){b++,u.textContent=b,b<10&&(u.textContent="0"+b),60===b&&(b=0,w++,d.textContent=w+".",w<10&&(d.textContent="0"+w+"."))}),1e3),document.querySelector(".buttonNewStart").addEventListener("click",(function(e){e.preventDefault(),l()}))}),4e3));let E=[],L=0;C.forEach((e=>{e.addEventListener("click",(function(){e.children.length>1&&(e.removeChild(e.lastElementChild),E.push(e.firstElementChild),console.log(E),console.log(e.firstElementChild.attributes.src.nodeValue),E.length>=2&&(E[0].attributes.src.nodeValue===E[1].attributes.src.nodeValue?(console.log("ok"),E=[],C.forEach((e=>{if(1===e.children.length){L+=1,console.log(L);const e=4*h;console.log(e),L===e&&c()}}))):r()))}))}))}function c(){a.textContent="win"}function r(){a.textContent="lose"}window.application.renderScreen("level"),window.application.screens.level=function(){a.textContent="";const e=document.createElement("div");e.classList="levelBox";const t=document.createElement("p");t.classList="title",t.textContent="Выбери сложность";const n=document.createElement("div");n.classList="levelNumberBox";const o=document.createElement("div");o.classList="number one",o.textContent="1";const i=document.createElement("div");i.classList="number two",i.textContent="2";const l=document.createElement("div");l.classList="number three",l.textContent="3";const c=document.createElement("button");c.classList="button",c.textContent="Старт",a.appendChild(e),e.appendChild(t),e.appendChild(n),e.appendChild(c),n.appendChild(o),n.appendChild(i),n.appendChild(l),function(){const e=document.querySelectorAll(".number");e.forEach((t=>{t.addEventListener("click",(function(t){e.forEach((e=>{e.classList.contains("change")&&e.classList.remove("change")}));const n=t.target;n.classList.add("change"),window.application.level=n.textContent,console.log(window.application.level)}))}))}()}(),document.querySelector("button").addEventListener("click",(function(e){e.preventDefault(),l(),console.log("click")})),window.application.screens.game=l,window.application.screens.win=c,window.application.screens.lose=r})();