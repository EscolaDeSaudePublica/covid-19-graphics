(function(e){function t(t){for(var n,o,c=t[0],d=t[1],u=t[2],f=0,l=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);i&&i(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,c=1;c<a.length;c++){var d=a[c];0!==r[d]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var i=d;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,r,s,o,c,d,u=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},f=[],l=a("2877"),b={},j=Object(l["a"])(b,i,f,!1,null,null,null),p=j.exports,m=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CurvaEpidemiologica")},v=[],g=(a("99af"),a("d81d"),a("13d5"),a("ac1f"),a("1276"),a("96cf"),a("1da1")),y=a("1fca"),k=a("bc3a"),w=a.n(k),x=w.a.create({baseURL:"http://64.227.31.11/api"}),O=x,C={extends:y["b"],data:function(){return{data:[],options:{maintainAspectRatio:!1,legend:{display:!1}}}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.get("/casos-ceara-por-dia");case 2:a=t.sent,n=[],a.data.reduce((function(e,t){return e[t.data]||(e[t.data]={data:t.data,quantidade:0,obitos:0},n.push(e[t.data])),e[t.data].quantidade+=t.quantidade,e[t.data].obitos+=t.obitos,e}),{}),e.data={labels:n.map((function(e){var t=e.data.split("-");return"".concat(t[2],"/").concat(t[1])})),datasets:[{label:"Número de Casos Confirmados",data:n.map((function(e){return e.quantidade})),backgroundColor:"rgba(52, 152, 219, 0.2)",borderColor:"rgb(52, 152, 219)"},{label:"Número de óbitos",data:n.map((function(e){return e.obitos})),backgroundColor:"rgba(250, 184, 34, 0.2)",borderColor:"rgb(250,184,34)"}]},e.renderChart(e.data,e.options);case 7:case"end":return t.stop()}}),t)})))()}},z=C,_=Object(l["a"])(z,n,r,!1,null,null,null),R=_.exports,q={name:"Home",components:{CurvaEpidemiologica:R}},D=q,P=Object(l["a"])(D,h,v,!1,null,null,null),S=P.exports,E=(a("4de4"),{extends:y["a"],data:function(){return{colors:["#fb397a","#1fbb87","#5d78ff","#fab822","#0088ff"],data:[],options:{maintainAspectRatio:!1,legend:{display:!1,segmentShowStroke:!1}}}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.get("/casos-ceara-por-dia");case 2:a=t.sent,n=null,r=a.data,n=r.reduce((function(e,t){return new Date(e.data)>new Date(t.data)?e:t})),s=e.filterByDate(r,n),e.data={labels:s.map((function(e){return e.municipio})),datasets:[{label:"Número de Casos Confirmados",data:s.map((function(e){return e.quantidade})),backgroundColor:e.selectRandomColor(s)}]},e.renderChart(e.data,e.options);case 9:case"end":return t.stop()}}),t)})))()},methods:{filterByDate:function(e,t){return e.filter((function(e){if(t.data==e.data)return e}))},selectRandomColor:function(e){var t=this;return e.map((function(e){return t.colors[Math.floor(Math.random()*t.colors.length)]}))}}}),M=E,N=Object(l["a"])(M,s,o,!1,null,null,null),A=N.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("table",{staticClass:"table"},[a("tbody",e._l(e.cities,(function(t){return a("tr",{key:t.municipio},[a("td",[e._v(e._s(t.municipio))]),a("td",{staticClass:"text-right"},[e._v(e._s(t.quantidade))])])})),0)])])},$=[],B={data:function(){return{cities:[]}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.get("/casos-ceara-por-dia");case 2:a=t.sent,n=null,r=a.data,n=r.reduce((function(e,t){return new Date(e.data)>new Date(t.data)?e:t})),s=e.filterByDate(r,n),e.cities=e.orderArray(s);case 8:case"end":return t.stop()}}),t)})))()},methods:{filterByDate:function(e,t){return e.filter((function(e){if(t.data==e.data)return e}))},orderArray:function(e){return e.sort((function(e,t){return e.quantidade>t.quantidade?-1:e.quantidade<t.quantidade?1:0}))}}},U=B,G=Object(l["a"])(U,T,$,!1,null,null,null),H=G.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("CasosPorDia")],1)},L=[],F={extends:y["b"],data:function(){return{data:[],options:{maintainAspectRatio:!1,legend:{display:!1}}}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.get("/casos-novos-ceara-por-dia");case 2:a=t.sent,e.data={labels:a.data.map((function(e){var t=e.data.split("-");return"".concat(t[2],"/").concat(t[1])})),datasets:[{label:"Novos casos por dia",data:a.data.map((function(e){return e.qtdnovoscasos})),backgroundColor:"rgba(52, 152, 219, 0.2)",borderColor:"rgb(52, 152, 219)"}]},e.renderChart(e.data,e.options);case 5:case"end":return t.stop()}}),t)})))()}},I=F,K=Object(l["a"])(I,c,d,!1,null,null,null),Q=K.exports,V={components:{CasosPorDia:Q}},W=V,X=Object(l["a"])(W,J,L,!1,null,null,null),Y=X.exports;u["a"].use(m["a"]);var Z=[{path:"/",name:"Home",component:S},{path:"/rosca-casos-por-municipio",name:"RoscaCasosPorMunicipio",component:A},{path:"/tabela-casos-por-municipio",name:"Tabela",component:H},{path:"/casos-por-dia",name:"CasosPorDia",component:Y}],ee=new m["a"]({mode:"history",base:"/",routes:Z}),te=ee,ae=a("1f1a");u["a"].use(ae["a"]);a("944d");u["a"].config.productionTip=!1,new u["a"]({router:te,render:function(e){return e(p)}}).$mount("#app")},"944d":function(e,t,a){}});
//# sourceMappingURL=app.f9938df3.js.map