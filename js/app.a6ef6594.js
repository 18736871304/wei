(function(e){function t(t){for(var r,o,c=t[0],l=t[1],i=t[2],f=0,s=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(s.length)s.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-1c0e2bf4":"4ee5ff5b","chunk-543ea8ee":"fb19040c"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-1c0e2bf4":1,"chunk-543ea8ee":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1c0e2bf4":"22d516a0","chunk-543ea8ee":"31e4694a"}[e]+".css",a=l.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===a))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){i=s[c],f=i.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,l.nc&&f.setAttribute("nonce",l.nc),f.src=c(e);var s=new Error;i=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("7faf"),n("2877")),c={},l=Object(u["a"])(c,o,a,!1,null,null,null),i=l.exports,f=(n("d3b7"),n("8c4f"));r["default"].use(f["a"]);var s=[{path:"/",redirect:"/home"},{path:"/home",redirect:"/welcome",component:function(){return n.e("chunk-543ea8ee").then(n.bind(null,"c3b0"))},children:[{path:"/welcome",component:function(){return n.e("chunk-1c0e2bf4").then(n.bind(null,"73f0"))}}]}],d=new f["a"]({routes:s}),p=d,h=n("2f62");r["default"].use(h["a"]);var v=new h["a"].Store({state:{name:"这是vuex中的",isCollapse:!1,nav:[],asideColor:"#5F4B8B",aTextColor:"#FFFFFF",aActiveColor:"#ff6600",headerBColor:"#5F4B8B",headerColor:"#FFFFFF"},mutations:{setCollapseState:function(e,t){console.log(t),e.isCollapse=t},Navs:function(e){return e.nav}},getters:{CollapseState:function(e){return e.isCollapse},HeaderBColor:function(e){return e.headerBColor},HeaderColor:function(e){return e.headerColor},AsideColor:function(e){return e.asideColor},ATextColor:function(e){return e.aTextColor},ActiveColor:function(e){return e.aActiveColor},DoubleOpen:function(e){return e.doubleOpen}},actions:{setNavs:function(e,t){e.commit("Navs",t)}},modules:{}}),m=n("bc3a"),b=n.n(m),g=n("5c96"),y=n.n(g);n("0fae");r["default"].config.productionTip=!1,r["default"].prototype.$http=b.a,r["default"].use(y.a),new r["default"]({router:p,store:v,render:function(e){return e(i)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";var r=n("b8ff"),o=n.n(r);o.a},b8ff:function(e,t,n){}});
//# sourceMappingURL=app.a6ef6594.js.map