(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{1016:function(e,t,r){"use strict";var n=r(1017),a=n.CopyToClipboard;a.CopyToClipboard=a;e.exports=a},1017:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.CopyToClipboard=void 0;var u=n(r(0));var s=n(r(1018));function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){a=function e(t){return typeof t}}else{a=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return a(e)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);if(e)n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable});r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};if(e%2){o(r,true).forEach(function(e){g(t,e,r[e])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))}else{o(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}}return t}function f(e,t){if(e==null)return{};var r=i(e,t);var n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++){n=o[a];if(t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;r[n]=e[n]}}return r}function i(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var a,o;for(o=0;o<n.length;o++){a=n[o];if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function d(e,t,r){if(t)p(e.prototype,t);if(r)p(e,r);return e}function m(e,t){if(t&&(a(t)==="object"||typeof t==="function")){return t}return y(e)}function v(e){v=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return v(e)}function y(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function b(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)h(e,t)}function h(e,t){h=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return h(e,t)}function g(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var w=function(e){b(a,e);function a(){var e;var l;c(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}l=m(this,(e=v(a)).call.apply(e,[this].concat(r)));g(y(l),"onClick",function(e){var t=l.props,r=t.text,n=t.onCopy,a=t.children,o=t.options;var i=u["default"].Children.only(a);var c=(0,s["default"])(r,o);if(n){n(r,c)}if(i&&i.props&&typeof i.props.onClick==="function"){i.props.onClick(e)}});return l}d(a,[{key:"render",value:function e(){var t=this.props,r=t.text,n=t.onCopy,a=t.options,o=t.children,i=f(t,["text","onCopy","options","children"]);var c=u["default"].Children.only(o);return u["default"].cloneElement(c,l({},i,{onClick:this.onClick}))}}]);return a}(u["default"].PureComponent);t.CopyToClipboard=w;g(w,"defaultProps",{onCopy:undefined,options:undefined})},1018:function(e,t,r){"use strict";var s=r(1019);var f={"text/plain":"Text","text/html":"Url",default:"Text"};var p="Copy to clipboard: #{key}, Enter";function d(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function n(r,n){var a,t,e,o,i,c,l=false;if(!n){n={}}a=n.debug||false;try{e=s();o=document.createRange();i=document.getSelection();c=document.createElement("span");c.textContent=r;c.style.all="unset";c.style.position="fixed";c.style.top=0;c.style.clip="rect(0, 0, 0, 0)";c.style.whiteSpace="pre";c.style.webkitUserSelect="text";c.style.MozUserSelect="text";c.style.msUserSelect="text";c.style.userSelect="text";c.addEventListener("copy",function(e){e.stopPropagation();if(n.format){e.preventDefault();if(typeof e.clipboardData==="undefined"){a&&console.warn("unable to use e.clipboardData");a&&console.warn("trying IE specific stuff");window.clipboardData.clearData();var t=f[n.format]||f["default"];window.clipboardData.setData(t,r)}else{e.clipboardData.clearData();e.clipboardData.setData(n.format,r)}}if(n.onCopy){e.preventDefault();n.onCopy(e.clipboardData)}});document.body.appendChild(c);o.selectNodeContents(c);i.addRange(o);var u=document.execCommand("copy");if(!u){throw new Error("copy command was unsuccessful")}l=true}catch(e){a&&console.error("unable to copy using execCommand: ",e);a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",r);n.onCopy&&n.onCopy(window.clipboardData);l=true}catch(e){a&&console.error("unable to copy using clipboardData: ",e);a&&console.error("falling back to prompt");t=d("message"in n?n.message:p);window.prompt(t,r)}}finally{if(i){if(typeof i.removeRange=="function"){i.removeRange(o)}else{i.removeAllRanges()}}if(c){document.body.removeChild(c)}e()}return l}e.exports=n},1019:function(e,t){e.exports=function(){var t=document.getSelection();if(!t.rangeCount){return function(){}}var e=document.activeElement;var r=[];for(var n=0;n<t.rangeCount;n++){r.push(t.getRangeAt(n))}switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}t.removeAllRanges();return function(){t.type==="Caret"&&t.removeAllRanges();if(!t.rangeCount){r.forEach(function(e){t.addRange(e)})}e&&e.focus()}}},1023:function(e,t,r){"use strict";var n=r(848);var u=r.n(n);var a=r(29);var i=r.n(a);var o=r(17);var c=r.n(o);var l=r(18);var s=r.n(l);var f=r(19);var p=r.n(f);var d=r(15);var m=r.n(d);var v=r(3);var y=r.n(v);var b=r(20);var h=r.n(b);var g=r(1);var w=r.n(g);var O=r(89);var E=r.n(O);var P=r(58);var C=r.n(P);var k=r(7);var j=r.n(k);var x=r(0);var S=r.n(x);var I=r(167);var N=r(168);var _=r(341);var A=r(811);var D=r(277);var R=r(810);var T=r(5);var V=r.n(T);var M=r(6);var B=r.n(M);var W=r(24);var z=r(8);var G=r(254);var H=r(841);function U(e){var t=e.active,r=e.children,n=e.className,a=e.content,o=e.loading;var i=B()(Object(W["a"])(t,"active"),Object(W["a"])(o,"loading"),"tab",n);var c=Object(I["a"])(U,e);var l=Object(N["a"])(U,e);var u={};if(l===H["a"]){u.attached="bottom"}return S.a.createElement(l,V()({},u,c,{className:i}),z["a"].isNil(r)?a:r)}U.handledProps=["active","as","children","className","content","loading"];U.defaultProps={as:H["a"],active:true};U.propTypes=false?undefined:{};U.create=Object(G["e"])(U,function(e){return{content:e}});var Y=U;var K=function(e){h()(o,e);function o(){var e;var n;c()(this,o);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++){r[a]=arguments[a]}n=p()(this,(e=m()(o)).call.apply(e,[this].concat(r)));w()(y()(n),"handleItemClick",function(e,t){var r=t.index;j()(n.props,"onTabChange",e,i()({},n.props,{activeIndex:r}));n.trySetState({activeIndex:r})});return n}s()(o,[{key:"getInitialAutoControlledState",value:function e(){return{activeIndex:0}}},{key:"renderItems",value:function e(){var t=this.props,r=t.panes,n=t.renderActiveOnly;var a=this.state.activeIndex;if(n)return j()(C()(r,"[".concat(a,"]")),"render",this.props);return E()(r,function(e,t){var r=e.pane;return Y.create(r,{overrideProps:{active:t===a}})})}},{key:"renderMenu",value:function e(){var t=this.props,r=t.menu,n=t.panes,a=t.menuPosition;var o=this.state.activeIndex;if(r.tabular===true&&a==="right"){r.tabular="right"}return R["a"].create(r,{autoGenerateKey:false,overrideProps:{items:E()(n,"menuItem"),onItemClick:this.handleItemClick,activeIndex:o}})}},{key:"renderVertical",value:function e(t){var r=this.props,n=r.grid,a=r.menuPosition;var o=n.paneWidth,i=n.tabWidth,c=u()(n,["paneWidth","tabWidth"]);var l=a||t.props.tabular==="right"&&"right"||"left";return S.a.createElement(A["a"],c,l==="left"&&D["a"].create({width:i,children:t},{autoGenerateKey:false}),D["a"].create({width:o,children:this.renderItems(),stretched:true},{autoGenerateKey:false}),l==="right"&&D["a"].create({width:i,children:t},{autoGenerateKey:false}))}},{key:"render",value:function e(){var t=this.renderMenu();var r=Object(I["a"])(o,this.props);var n=Object(N["a"])(o,this.props);if(t.props.vertical){return S.a.createElement(n,r,this.renderVertical(t))}return S.a.createElement(n,r,t.props.attached!=="bottom"&&t,this.renderItems(),t.props.attached==="bottom"&&t)}}]);return o}(_["a"]);w()(K,"autoControlledProps",["activeIndex"]);w()(K,"defaultProps",{grid:{paneWidth:12,tabWidth:4},menu:{attached:true,tabular:true},renderActiveOnly:true});w()(K,"Pane",Y);w()(K,"handledProps",["activeIndex","as","defaultActiveIndex","grid","menu","menuPosition","onTabChange","panes","renderActiveOnly"]);K.propTypes=false?undefined:{};var q=t["a"]=K},814:function(e,t,r){"use strict";r.r(t);var n=r(0);var a=r.n(n);var o=r(1016);var i=r(1023);var c=r(1031);var l=r(851);var u=r(965);var s=r(1021);var f=r(177);var p=r(32);var d=r(838);var m=r(831);var v=r(862);var y=function e(t){var r=typeof t!=="undefined"?t:"";var n="https://savingsdealz.com"+r;return a.a.createElement(d["Helmet"],{key:Math.random()},a.a.createElement("title",null,"Savingsdealz"),a.a.createElement("meta",{name:"robots",content:"index, follow"}),a.a.createElement("link",{rel:"canonical",href:n}))};var b=function e(t){return a.a.createElement("div",null,y(t.url),a.a.createElement(m["a"],null,a.a.createElement(v["a"],{id:"breadcrumb"},a.a.createElement(v["a"].Section,{link:true,as:p["b"],to:"/"},"Main"),a.a.createElement(v["a"].Divider,{icon:"right chevron"}),a.a.createElement(v["a"].Section,{active:true},"Account")),a.a.createElement(i["a"],{id:"accountBlock",panes:t.getPanes()})))};var h=b;var g=r(272);var w=r(260);var O={status:true,rows:[{item:"Nord VPN 1 month premium",price:5,code:"sdfwfd2efsdfsdfssdf",link:"www.zbigz.com"},{item:"Nord VPN 1 month premium",price:5,code:"sdfwfd2efsdfsdfssdf",link:""},{item:"Nord VPN 1 month premium",price:5,code:"sdfwfd2efsdfsdfssdf",link:""},{item:"Nord VPN 1 month premium",price:5,code:"sdfwfd2efsdfsdfssdf",link:""},{item:"Nord VPN 1 month premium",price:5,code:"sdfwfd2efsdfsdfssdf",link:""},{item:"Nord VPN 1 month premium",price:5,code:"sdfwfd2efsdfsdfssdf",link:""},{item:"Nord VPN 1 month premium",price:5,code:"sdfwfd2efsdfsdfssdf",link:""},{item:"Nord VPN 1 month premium",price:5,code:"sdfwfd2efsdfsdfssdf",link:""},{item:"Nord VPN 1 month premium",price:5,code:"sdfwfd2efsdfsdfssdf",link:""},{item:"Nord VPN 1 month premium",price:5,code:"sdfwfd2efsdfsdfssdf",link:""}]};function E(e){console.log("getAccountOrders----\x3e",e);return new Promise(function(e){setTimeout(function(){e(O)},200)})}function P(e){"@babel/helpers - typeof";return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function C(){C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};return C.apply(this,arguments)}function k(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function x(e,t,r){if(t)j(e.prototype,t);if(r)j(e,r);Object.defineProperty(e,"prototype",{writable:false});return e}function S(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)I(e,t)}function I(e,t){I=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return I(e,t)}function N(a){var o=D();return function e(){var t=R(a),r;if(o){var n=R(this).constructor;r=Reflect.construct(t,arguments,n)}else{r=t.apply(this,arguments)}return _(this,r)}}function _(e,t){if(t&&(P(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return A(e)}function A(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function D(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function R(e){R=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return R(e)}function T(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var V=function(e){S(r,e);var t=N(r);function r(e){var n;k(this,r);n=t.call(this,e);T(A(n),"getAccountInfo",function(){var e=Object(g["b"])();e.then(function(e){var t=e.status,r=e.row;if(t){n.setState({accountInfo:r})}},function(e){alert("Rejected: "+e)})});T(A(n),"getAccountOrders",function(){var e=E();e.then(function(e){var t=e.status,r=e.rows;if(t){n.setState({orders:r})}},function(e){alert("Rejected: "+e)})});T(A(n),"getPanes",function(){var e=n.state,t=e.accountInfo,r=e.orders;return[{menuItem:"Account info",render:function e(){return a.a.createElement(i["a"].Pane,null,a.a.createElement(c["a"],{className:"edit-account-form"},a.a.createElement(c["a"].Group,{widths:"equal"},a.a.createElement(c["a"].Input,{fluid:true,label:"Your email",placeholder:"Your email",value:t["email"]}),a.a.createElement(c["a"].Input,{fluid:true,label:"Your password",placeholder:"Your password",type:"password",value:t["password"]})),a.a.createElement(c["a"].Group,{widths:"equal",className:"edit-account-button"},a.a.createElement(c["a"].Button,{basic:true,fluid:true,color:"red",content:"Edit"}),a.a.createElement(c["a"].Button,{primary:true,fluid:true,content:"Save"}))))}},{menuItem:"Purchase",render:function e(){return a.a.createElement(i["a"].Pane,{id:"purchaseBlock"},a.a.createElement(l["a"],{as:"h1",textAlign:"center"},"Your last purchase"),a.a.createElement(u["a"],{basic:true,celled:true,textAlign:"center"},a.a.createElement(u["a"].Header,null,a.a.createElement(u["a"].Row,null,a.a.createElement(u["a"].HeaderCell,null,"№"),a.a.createElement(u["a"].HeaderCell,null,"Item"),a.a.createElement(u["a"].HeaderCell,null,"Price"),a.a.createElement(u["a"].HeaderCell,null,"Code"))),a.a.createElement(u["a"].Body,null,Object.keys(r).map(function(e){return a.a.createElement(u["a"].Row,null,a.a.createElement(u["a"].Cell,null,parseInt(e)+1),a.a.createElement(u["a"].Cell,null,r[e]["item"]),a.a.createElement(u["a"].Cell,null,"$",r[e]["price"]),a.a.createElement(u["a"].Cell,null,a.a.createElement(s["a"],{closeIcon:true,dimmer:"inverted",trigger:a.a.createElement("a",{className:"show-coupon"},"Show Code"),size:"mini"},a.a.createElement(s["a"].Content,{className:"coupon-modal"},a.a.createElement("p",null,"Your code - ",a.a.createElement("span",{className:"coupon"},r[e]["code"]),a.a.createElement(o["CopyToClipboard"],{text:r[e]["code"]},a.a.createElement(f["a"],{name:"copy outline"}))),r[e]["link"]&&a.a.createElement("p",null,"Follow this link ",a.a.createElement("a",{className:"link",target:"_blank",href:r[e]["link"]},r[e]["link"])," to activate your code")))))}))))}}]});n.state={loading:0,accountInfo:false,orders:false};n.getAccountInfo();n.getAccountOrders();return n}x(r,[{key:"componentWillReceiveProps",value:function e(t){}},{key:"render",value:function e(){return a.a.createElement(h,C({},this.state,{getPanes:this.getPanes}))}}]);return r}(a.a.Component);var M=t["default"]=V},848:function(e,t,r){var i=r(849);function n(e,t){if(e==null)return{};var r=i(e,t);var n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++){n=o[a];if(t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;r[n]=e[n]}}return r}e.exports=n,e.exports.__esModule=true,e.exports["default"]=e.exports},849:function(e,t){function r(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var a,o;for(o=0;o<n.length;o++){a=n[o];if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}e.exports=r,e.exports.__esModule=true,e.exports["default"]=e.exports}}]);