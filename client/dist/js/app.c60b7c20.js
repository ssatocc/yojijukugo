(function(){"use strict";var n={3068:function(n,t,o){var i=o(7764),r=o(4108),e=o(9096);function u(n,t,o,i,u,c){return(0,r.Wz)(),(0,r.An)(r.ae,null,[(0,r.QD)("h1",null,[(0,r.QD)("ruby",null,[(0,r.mY)((0,e.WA)(u.yojijukugo)+" ",1),(0,r.QD)("rt",null,(0,e.WA)(u.yojijukugoFuri),1)])]),(0,r.QD)("h3",null,(0,e.WA)(u.description),1),(0,r.QD)("h3",null,(0,e.WA)(u.descriptionEn),1),(0,r.QD)("button",{onClick:t[0]||(t[0]=(...n)=>c.init&&c.init(...n))},"次へ")],64)}var c=o(2964),a={name:"App",components:{},data(){return{nodeEnv:"",baseUrl:"",yojijukugo:"",yojijukugoFuri:"",description:"",descriptionEn:""}},mounted(){this.nodeEnv="production",this.baseUrl="production"===this.nodeEnv?"":"http://127.0.0.1:5000",this.init()},methods:{async init(){try{const n=await c.c.get(this.baseUrl+"/api/yojijukugo");this.yojijukugo=n.data.yojijukugo,this.yojijukugoFuri=n.data.yojijukugo_furi,this.description=n.data.description,this.descriptionEn=n.data.description_en}catch(n){alert(n)}}}},f=o(4100);const l=(0,f.c)(a,[["render",u]]);var s=l;(0,i.W0)(s).mount("#app")}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var e=t[i]={exports:{}};return n[i].call(e.exports,e,e.exports,o),e.exports}o.m=n,function(){var n=[];o.O=function(t,i,r,e){if(!i){var u=1/0;for(l=0;l<n.length;l++){i=n[l][0],r=n[l][1],e=n[l][2];for(var c=!0,a=0;a<i.length;a++)(!1&e||u>=e)&&Object.keys(o.O).every((function(n){return o.O[n](i[a])}))?i.splice(a--,1):(c=!1,e<u&&(u=e));if(c){n.splice(l--,1);var f=r();void 0!==f&&(t=f)}}return t}e=e||0;for(var l=n.length;l>0&&n[l-1][2]>e;l--)n[l]=n[l-1];n[l]=[i,r,e]}}(),function(){o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,{a:t}),t}}(),function(){o.d=function(n,t){for(var i in t)o.o(t,i)&&!o.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={524:0};o.O.j=function(t){return 0===n[t]};var t=function(t,i){var r,e,u=i[0],c=i[1],a=i[2],f=0;if(u.some((function(t){return 0!==n[t]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(a)var l=a(o)}for(t&&t(i);f<u.length;f++)e=u[f],o.o(n,e)&&n[e]&&n[e][0](),n[e]=0;return o.O(l)},i=self["webpackChunkclient"]=self["webpackChunkclient"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[999],(function(){return o(3068)}));i=o.O(i)})();
//# sourceMappingURL=app.c60b7c20.js.map