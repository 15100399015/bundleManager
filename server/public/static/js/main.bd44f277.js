/*! For license information please see main.bd44f277.js.LICENSE.txt */
(()=>{"use strict";var t,e,r,n={9600:(t,e,r)=>{r(80);var n=r(6122),o=r(7294),i=r(745),a=r(9655),u=r(9250),c=r(5893);function l(){return(0,c.jsx)("div",{className:"solidui-layout default",children:(0,c.jsx)("section",{className:"solidui-main",children:(0,c.jsx)(u.j3,{})})})}r(4151);var s=r(4842),f=(r(7956),r(8573)),d=(r(4682),r(965)),h=(r(4972),r(6904)),p=(r(6481),r(4078));r(9601),r(9753),r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(8309),r(1038),r(4916),r(8674),r(9070),r(2443),r(9341),r(3706),r(2703),r(8011),r(489),r(9554),r(4747),r(8304),r(5069),r(6649),r(6078),r(9653),r(7941),r(7327),r(5003),r(9337),r(3321);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e=function(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===y(e)?e:String(e)}(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=r(2956).Z.create({baseURL:"",timeout:1e4,headers:{"Content-Type":"application/json;charset=utf-8"},withCredentials:!0});function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return b.get(t,g({params:e},r))}function j(t,e){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};switch(t){case"get":default:r=w(e,n,o);break;case"post":r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return b.post(t,e,g({},r))}(e,n,o);break;case"put":r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return b.put(t,e,g({},r))}(e,n,o);break;case"delete":r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return b.delete(t,g({data:e},r))}(e,n,o)}return new Promise((function(t,e){r.then((function(e){var r=e.data,n=r.message,o=r.code,i=r.data;0===o?t({ok:!0,data:i}):(h.ZP.warning(n),t({ok:!1,message:n}))})).catch((function(t){var r=JSON.stringify(t);h.ZP.warning(r),e(t)}))}))}b.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),b.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));const x={get:function(t){return j("get",t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})},post:function(t){return j("post",t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})},put:function(t){return j("put",t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})},delete:function(t){return j("delete",t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}};const O={bundle:{list:function(t){return x.get("/api/bundle/list",t)},delete:function(t){return x.delete("/api/bundle/delete",{id:t})}}};function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function P(){P=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),u=new E(o||[]);return n(a,"_invoke",{value:j(t,r,u)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function d(){}function h(){}function p(){}var y={};c(y,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==e&&r.call(g,i)&&(y=g);var m=p.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,u){var c=s(t[n],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==S(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=x(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=p,n(m,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(m),c(m,u,"Generator"),c(m,i,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function k(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function E(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){k(i,n,o,a,u,"next",t)}function u(t){k(i,n,o,a,u,"throw",t)}a(void 0)}))}}function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var T=r(640),I=r.n(T);const N=function(t){var e=function(t){var e=L((0,o.useState)(""),2),r=e[0],n=e[1],i=L((0,o.useState)({size:10,current:1}),2),a=i[0],u=i[1],c=L((0,o.useState)(0),2),l=c[0],s=c[1],f=L((0,o.useState)([]),2),d=f[0],p=f[1],y=function(){var t=E(P().mark((function t(){var e,n;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.bundle.list({pageNumber:a.current,pageSize:a.size,name:r});case 2:(e=t.sent).ok&&e.data&&(p(null===(n=e.data)||void 0===n?void 0:n.list),s(e.data.total));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=E(P().mark((function t(e){return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.bundle.delete(e.id);case 2:t.sent.ok&&(h.ZP.success("删除成功"),y());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){y()}),[a.size,a.current]),{dataSource:d,columns:t,searchValue:r,onChangeSearchValue:n,page:a,total:l,setPage:function(t){u(Object.assign(a,t))},onSearch:function(){y()},onDelete:v}}([{title:"name",dataIndex:"name",key:"id"},{title:"version",dataIndex:"version",key:"id"},{title:"buildTime",dataIndex:"buildTime",key:"id"},{title:"publishTime",dataIndex:"publishTime",key:"id"},{title:"pullCount",dataIndex:"pullCount",key:"id"},{title:"bundleSize",dataIndex:"bundleSize",key:"id",render:function(t,e,r){return t+"mb"}},{title:"ossUrl",dataIndex:"ossUrl",key:"id",render:function(t,e,r){return(0,c.jsx)("a",{onClick:function(){return g(t)},children:"复制"})}},{title:"description",dataIndex:"description",key:"id"},{title:"action",key:"id",render:function(t){return(0,c.jsxs)(p.Z,{wrap:!0,children:[(0,c.jsx)("a",{onClick:function(){return v(t.ossUrl)},children:"下载"}),(0,c.jsx)("a",{onClick:function(){return y(t)},children:"删除"})]})}}]),r=e.dataSource,n=e.columns,i=e.page,a=e.total,u=e.setPage,l=e.onSearch,y=e.onDelete,v=function(t){window.open(t)},g=function(t){I()(t,{}),h.ZP.success("以复制")};return(0,c.jsxs)("div",{style:{padding:15},children:[(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:15},children:[(0,c.jsx)("div",{children:(0,c.jsx)(d.Z,{placeholder:"bundleName"})}),(0,c.jsx)("div",{children:(0,c.jsx)(p.Z,{wrap:!0,children:(0,c.jsx)(f.Z,{type:"primary",onClick:l,children:"搜索"})})})]}),(0,c.jsx)(s.Z,{pagination:{current:i.current,pageSize:i.size,total:a,onChange:function(t,e){u({size:e,current:t})}},rowKey:"id",bordered:!0,dataSource:r,columns:n,size:"small"})]})};const C=[{path:"/",element:(0,c.jsx)(l,{}),children:[{path:"/",element:(0,c.jsx)(N,{})}]}];var Z=(0,a.cP)(C);const z=function(){return(0,c.jsx)(u.pG,{router:Z})};var G=document.getElementById("root");G&&(0,i.s)(G).render((0,c.jsx)(n.ZP,{children:(0,c.jsx)(z,{})}))}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={id:t,loaded:!1,exports:{}};return n[t](r,r.exports,i),r.loaded=!0,r.exports}i.m=n,t=[],i.O=(e,r,n,o)=>{if(!r){var a=1/0;for(s=0;s<t.length;s++){for(var[r,n,o]=t[s],u=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((t=>i.O[t](r[c])))?r.splice(c--,1):(u=!1,o<a&&(a=o));if(u){t.splice(s--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[r,n,o]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},r=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);i.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var u=2&n&&t;"object"==typeof u&&!~e.indexOf(u);u=r(u))Object.getOwnPropertyNames(u).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,i.d(o,a),o},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{var t={179:0};i.O.j=e=>0===t[e];var e=(e,r)=>{var n,o,[a,u,c]=r,l=0;if(a.some((e=>0!==t[e]))){for(n in u)i.o(u,n)&&(i.m[n]=u[n]);if(c)var s=c(i)}for(e&&e(r);l<a.length;l++)o=a[l],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(s)},r=self.webpackChunkbundleManager_web=self.webpackChunkbundleManager_web||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var a=i.O(void 0,[216],(()=>i(9600)));a=i.O(a)})();