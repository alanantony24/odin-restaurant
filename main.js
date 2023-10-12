(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,'* {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: sw;\n}\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #f2f2f2;\n  margin: 0;\n  padding: 0;\n  min-height: 400px;\n   margin-bottom: 100px;\n   clear: both\n}\nheader {\n  background-color: #00796b;\n  color: #fff;\n  text-align: center;\n  padding: 10px 0;\n}\nnav {\n  display: flex;\n  justify-content: space-evenly;\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n}\n/* Style the buttons inside the tab */\nnav button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n  font-size: 17px;\n}\n/* Change background color of buttons on hover */\nnav button:hover {\n  background-color: #ddd;\n}\n/* Create an active/current tablink class */\n.active {\n  background-color: #ccc;\n}\n\n/* Style the tab content */\n#tabContent {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.homePageImage {\n  width: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.homePageDescription {\n  margin: 20px 20px;\n  font-size: 20px;\n  text-align: center;\n}\n\n#menu-items-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 70px;\n  border: 2px outset black;\n}\n\n.menu-item {\n  margin: 10px 0;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.menu-item-name {\n  font-weight: bold;\n  font-size: 18px;\n  color: #333;\n}\n\n.menu-item-price {\n  font-style: italic;\n  color: #777;\n  margin-left: 10px;\n}\n\n.menu-item-name::before {\n  content: "•";\n  margin-right: 10px;\n  font-size: 18px;\n  color: #333;\n}\n\n.contactUsContainer {\n  width: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n#footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n}\n',""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=(e,t)=>{const n=document.createElement("button");n.setAttribute("id",e);const o=document.createElement("span");return o.textContent=t,n.appendChild(o),n.classList.add("tab"),n},t=n.p+"8b6feb48599ce8baee2e.jpg",o=()=>{const e=document.getElementById("tabContent");e.textContent="";const n=(()=>{const e=document.createElement("section"),n=document.createElement("h2");n.textContent="At this restaurant we serve authentic Kerala food, ranging from Kasargod Neerdosha to Kozhikode Halwa",e.appendChild(n);const o=new Image;o.src=t,o.classList.add("homePageImage"),e.appendChild(o);const r=document.createElement("p");return r.textContent="Experience the rich and diverse flavors of Kerala at our restaurant. Our culinary journey takes you through the vibrant spices and mouthwatering dishes of this beautiful South Indian state. From the spicy seafood delicacies to the comforting coconut-based curries, our menu is a true reflection of Kerala's gastronomic heritage. Join us for an unforgettable dining experience that will transport your taste buds to the enchanting land of Kerala",r.classList.add("homePageDescription"),e.appendChild(r),e})();(e=>{const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementById("home").classList.add("active")})(),e.appendChild(n)},r=()=>{const e=document.getElementById("tabContent");e.textContent="",function(e){const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementById("contact").classList.add("active")}();const t=document.createElement("section");t.classList.add("contactUsContainer");const n=document.createElement("h2");n.textContent="Contact Us",t.appendChild(n);const o=document.createElement("p");o.textContent="308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104 | HP : 62190819",t.appendChild(o),e.appendChild(t)},a=()=>{const e=document.getElementById("tabContent");e.textContent="",(e=>{const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementById("menu").classList.add("active")})();const t=document.createElement("section");t.id="menu-items-container",[{name:"Appam",price:"$5.99"},{name:"Puttu",price:"$4.99"},{name:"Idiyappam",price:"$6.99"},{name:"Sadya",price:"$12.99"},{name:"Karimeen Pollichathu",price:"$14.99"}].forEach((e=>{const n=document.createElement("div");n.className="menu-item";const o=document.createElement("span");o.className="menu-item-name",o.textContent=e.name;const r=document.createElement("span");r.className="menu-item-price",r.textContent=e.price,n.appendChild(o),n.appendChild(r),t.appendChild(n)})),e.appendChild(t)};var c=n(379),i=n.n(c),s=n(795),d=n.n(s),l=n(569),u=n.n(l),p=n(565),m=n.n(p),f=n(216),h=n.n(f),g=n(589),v=n.n(g),b=n(426),y={};y.styleTagTransform=v(),y.setAttributes=m(),y.insert=u().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=h(),i()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals,(()=>{const t=document.getElementById("content"),n=(()=>{const e=document.createElement("header");e.setAttribute("id","header");const t=document.createElement("h1");return t.textContent="Kerala Restaurant",e.appendChild(t),e})();t.appendChild(n);const o=(()=>{const t=document.createElement("nav");t.setAttribute("id","navbar");const n=e("home","HOME"),o=e("menu","MENU"),r=e("contact","CONTACT");return t.appendChild(n),t.appendChild(o),t.appendChild(r),t})();t.appendChild(o);const r=(()=>{const e=document.createElement("main");return e.setAttribute("id","tabContent"),e})();t.appendChild(r);const a=(()=>{const e=document.createElement("footer");e.setAttribute("id","footer");const t=document.createElement("h3");return t.textContent="Made with <3 by Alan",e.appendChild(t),e})();t.appendChild(a)})(),o(),(()=>{const e=document.getElementById("home"),t=document.getElementById("menu"),n=document.getElementById("contact");e.addEventListener("click",o),t.addEventListener("click",a),n.addEventListener("click",r)})()})()})();