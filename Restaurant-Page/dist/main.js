(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>m});var t=r(81),i=r.n(t),a=r(645),o=r.n(a),c=r(667),s=r.n(c),d=new URL(r(43),r.b),l=new URL(r(424),r.b),p=o()(i()),u=s()(d),g=s()(l);p.push([e.id,'@font-face{\r\n    font-family:"DancingScript";\r\n    src:url('+u+");\r\n    font-weight:bold;\r\n    font-style:normal;\r\n}\r\n\r\n*{\r\n    padding:0;\r\n    margin:0;\r\n    \r\n}\r\n\r\n\r\nhtml{\r\n    height: 100%;\r\n    margin:0;\r\n    background-image:url("+g+');\r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    background-position:center;\r\n    display:flex;\r\n    background-attachment: fixed;\r\n    flex-direction:column;\r\n    /*align-items:center;*/\r\n    font-family:sans-serif;\r\n    \r\n\r\n}\r\n\r\n\r\n.head{\r\n    padding:1rem;\r\n    margin-bottom:2rem;\r\n    margin:0 auto;\r\n    background-color:black;\r\n    color:white;\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    opacity:0.7;\r\n    \r\n    \r\n    \r\n}\r\n.page{\r\n\r\n    list-style-type:none;\r\n    display:flex;\r\n    gap:2rem;\r\n    margin:2rem 2rem;\r\n}\r\n\r\n\r\nul{\r\n    list-style-type:none;\r\n    display:flex;\r\n}\r\n\r\nli{\r\n    font-family:sans-serif;\r\n    font-size:25px;\r\n    \r\n}\r\n\r\n.clicked{\r\n    \r\n    border-bottom: 2px white solid;\r\n    padding-bottom:1rem;\r\n    font-weight:bold;\r\n    color:red;\r\n   \r\n}\r\n\r\n\r\n.h1{\r\n    font-family:"DancingScript";\r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    margin:2rem 1rem 1.5rem;\r\n    \r\n    padding: 1rem;\r\n   \r\n}\r\n\r\n.brief{\r\n\r\n    width:40%;\r\n    padding:1rem;\r\n    margin:5rem auto;\r\n    background:black;\r\n    color:#fff;\r\n    font-size:16px;\r\n    opacity:0.8;\r\n    \r\n}\r\n\r\n.background{\r\n    padding:1rem;\r\n    line-height:1.5rem;\r\n}\r\n\r\n.food{\r\n    display:flex;\r\n    justify-content:center;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    padding:1rem;\r\n    gap:1rem;\r\n}\r\n\r\n.homeContent{\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n}\r\n\r\n.menu{\r\n    display:grid;\r\n    margin:5rem auto;\r\n    grid-template-columns: 1fr 1fr;\r\n    padding:1rem;\r\n    width:50%;\r\n    gap:1rem;\r\n    background-color:black;\r\n    opacity:0.7;\r\n    color:white;\r\n}',""]);const m=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},o=[],c=0;c<e.length;c++){var s=e[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=r(p),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(g);else{var m=i(g,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function i(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,i){var a=t(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=r(a[o]);n[c].references--}for(var s=t(e,i),d=0;d<a.length;d++){var l=r(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,i&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},43:(e,n,r)=>{e.exports=r.p+"images/3e7e73f4e34e4945f363.ttf"},424:(e,n,r)=>{e.exports=r.p+"images/48805706788fcb173666.jpg"}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),i=r.n(t),a=r(569),o=r.n(a),c=r(565),s=r.n(c),d=r(216),l=r.n(d),p=r(589),u=r.n(p),g=r(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=o().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),n()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;const f=r.p+"images/d55729b8062ecfe59340.jpg",h=()=>{const e=document.createElement("div");e.setAttribute("class","homeContent");const n=document.createElement("div");n.setAttribute("class","brief");const r=new Image(350,280);r.src=f,r.style.borderRadius="70%",r.style.marginTop="2rem",e.appendChild(r);const t=document.createElement("h2");t.setAttribute("class","h2"),t.textContent="The most authentic and delicious dumpling in America",n.appendChild(t);const i=document.createElement("p");return i.setAttribute("class","background"),i.textContent="Every dumpling is carefully weighted and handmade and stuffed with top quality pork and the freshest vegetables in a blend of seasonings. In the mean time,     it adds the freshest ginger and green onion, every bite is a refresh entertainment.",n.appendChild(i),e.appendChild(n),e},b=r.p+"images/800bddef573b51ae67b8.jpg",y=r.p+"images/a930f1394c5a76104de7.jpg",v=r.p+"images/b1d4018aa23255207ea8.jpg",w=r.p+"images/d2371b8b467f0fbe22ac.jpg",x=r.p+"images/80f84507d047a55f0aff.jpg",k=r.p+"images/2ffd1e6c42d37ded00dd.jpg",C=r.p+"images/6c1d05d93588f872a6ff.jpg",E=r.p+"images/9a4824dd2affd40388a1.jpg",j=r.p+"images/a1a7efb2666d656c385f.jpg",T=r.p+"images/42fa86c855b28ae0ad86.jpg";var A=document.getElementById("content");A.setAttribute("class","main"),A.appendChild(function(){const e=document.createElement("main"),n=document.getElementById("home"),r=document.createElement("div");return n.classList.add("clicked"),r.appendChild(h()),document.querySelectorAll(".item").forEach((e=>{e.addEventListener("click",(n=>{document.querySelectorAll(".item").forEach((e=>{e.classList.contains("clicked")&&e.classList.toggle("clicked")})),e.classList.toggle("clicked"),r.innerHTML=null,"Menu"==n.target.innerHTML?r.appendChild((()=>{const e=document.createElement("div");let n=[];const r={name:"steam-dumplings",src:b,price:"$14.35",ingredient:"ingredient: pork, shrimp, flour, cooking oil, ground ginger, ground onion, salt"},t={name:"lobster-dumplings",src:y,price:"$14.99",ingredient:"ingredient: lobster, flour, cooking oil, ground ginger, ground green onion, salt"},i={name:"beef potstickers",src:v,price:"$12.99",ingredient:"ingredient: beef, celery, flour, water, cooking oil, ground green onion, salt"},a={name:"soup dumplings",src:w,price:"$15.59",ingredient:"ingredient:flour, water, pork, crab, broth,ginger, green onion, cook wine, salt"},o={name:"Chinese huajuan",src:x,price:"$9.99",ingredient:"ingredient: flour, water, purple sweet potatoes, yeast, sugar"},c={name:"mangTou",src:E,price:"$8.56",ingredient:"ingredient: flour, water, yeast, sugar"},s={name:"wonton",src:C,price:"$15.99",ingredient:"ingredient: flour, shrimp, pork, green leaf, ginger, green onion"},d={name:"sesame sticky ball",src:j,price:"$8.55",ingredient:"ingredient: sticky-rice-flour, red bean, sesame, sugar"},l={name:"stirFry lotus mushroom shrimp",src:k,price:"$15.59",ingredient:"ingredient: lotus, pork, black mushroom, green vegetable, white mushroom, red ground pepper"},p={name:"stirFry spicy crayfish",src:T,price:"$25.99",ingredient:"ingredient: crayfish, ground garlic, cooking oil, green onion, ginger, cook wine, sichuang pepper"};n.push(r),n.push(t),n.push(i),n.push(a),n.push(o),n.push(c),n.push(s),n.push(d),n.push(l),n.push(p),e.setAttribute("class","menu");for(let r=0;r<n.length;r++){let t=document.createElement("figure");t.setAttribute("class","food");let i=new Image(250,200);i.src=n[r].src,i.style.borderRadius="70%";let a=document.createElement("p");a.textContent=n[r].name+"  "+n[r].price;let o=document.createElement("p");o.textContent=n[r].ingredient,t.appendChild(i),t.appendChild(a),t.appendChild(o),e.appendChild(t)}return e})()):"Contact"==n.target.innerHTML?r.appendChild((()=>{const e=document.createElement("div");return e.textContent="contact",e})()):r.appendChild(h())}))})),e.appendChild(r),e}())})()})();