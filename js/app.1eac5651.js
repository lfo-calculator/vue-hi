(function(e){function t(t){for(var n,r,c=t[0],l=t[1],s=t[2],p=0,h=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(h.length)h.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==i[l]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-hi/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-toolbar-title",[e._v("Hawaii LFO Calculator")])],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/lfo-calculator/vue-hi",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Github repo")]),a("v-icon",[e._v("mdi-open-in-new")])],1)],1),a("v-main",[a("HelloWorld")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:a("748b"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-1 font-weight-bold mb-3"},[e._v(" Welcome to the Hawaii LFO Calculator ")])]),n("v-col",{attrs:{cols:"12"}},[n("v-autocomplete",{attrs:{disabled:e.isUpdating,items:e.regulations,filled:"",chips:"",color:"blue-grey lighten-2",label:"Select one or more charges to evaluate","item-text":"name","item-value":"name",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[n("v-chip",e._b({attrs:{"input-value":t.selected,close:""},on:{click:t.select,"click:close":function(a){return e.remove(t.item)}}},"v-chip",t.attrs,!1),[e._v(" "+e._s(t.item.name)+" ")])]}},{key:"item",fn:function(t){return["object"!==typeof t.item?[n("v-list-item-content",{domProps:{textContent:e._s(t.item)}})]:[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}}),n("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.item.section)}})],1)]]}}]),model:{value:e.charges,callback:function(t){e.charges=t},expression:"charges"}})],1)],1)],1)},c=[],l=(a("b0c0"),a("a434"),{data:function(){return{autoUpdate:!0,charges:[],isUpdating:!1,regulations:[{name:"Methamphetamine Trafficking",url:"https://sammade.github.io/aloha-io/title-37/chapter-712/section-712-1240_7/",section:"712-1240.7"},{name:"Burglary in the first degree",url:"https://sammade.github.io/aloha-io/title-37/chapter-708/section-708-810/",section:"708-810"},{name:"Graffiti; sentencing",url:"https://sammade.github.io/aloha-io/title-37/chapter-708/section-708-823_6/",section:"708-823.6"},{name:"Shoplifting",url:"https://sammade.github.io/aloha-io/title-37/chapter-708/section-708-833_5/",section:"708-833.5"},{name:"Sexual assault in the first degree",url:"https://sammade.github.io/aloha-io/title-37/chapter-707/section-707-730/",section:"707-730"},{name:"Drive on right side of roadway; exceptions",url:"https://sammade.github.io/aloha-io/title-17/chapter-291c/section-291c-41/",section:"291C-41"},{name:"Habitually operating a vehicle under the influence of an intoxicant",url:"https://sammade.github.io/aloha-io/title-17/chapter-291e/section-291e-61_5/",section:"291E-61.5"},{name:"Operating a vehicle after license and privilege have been suspended or revoked for operating a vehicle under the influence of an intoxicant; penalties",url:"https://sammade.github.io/aloha-io/title-17/chapter-291e/section-291e-62/",section:"291E-62"}]}},watch:{isUpdating:function(e){var t=this;e&&setTimeout((function(){return t.isUpdating=!1}),3e3)}},methods:{remove:function(e){var t=this.charges.indexOf(e.name);t>=0&&this.charges.splice(t,1)}}}),s=l,u=a("2877"),p=a("6544"),h=a.n(p),m=a("c6a6"),f=a("cc20"),d=a("62ad"),v=a("a523"),g=a("adda"),b=a("5d23"),y=a("0fd9"),_=Object(u["a"])(s,r,c,!1,null,null,null),w=_.exports;h()(_,{VAutocomplete:m["a"],VChip:f["a"],VCol:d["a"],VContainer:v["a"],VImg:g["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VRow:y["a"]});var x={name:"App",components:{HelloWorld:w},data:function(){return{}}},O=x,C=a("7496"),V=a("40dc"),j=a("8336"),k=a("132d"),P=a("f6c4"),S=a("2fa4"),F=a("2a7f"),T=Object(u["a"])(O,i,o,!1,null,null,null),H=T.exports;h()(T,{VApp:C["a"],VAppBar:V["a"],VBtn:j["a"],VIcon:k["a"],VMain:P["a"],VSpacer:S["a"],VToolbarTitle:F["a"]});var M=a("f309");n["a"].use(M["a"]);var L=new M["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#673AB7",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});a("d5e8"),a("5363");n["a"].config.productionTip=!1,new n["a"]({vuetify:L,render:function(e){return e(H)}}).$mount("#app")},"748b":function(e,t,a){e.exports=a.p+"img/HI_seal.21f404c9.png"}});
//# sourceMappingURL=app.1eac5651.js.map