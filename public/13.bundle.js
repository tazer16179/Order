(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{818:function(e,t,n){"use strict";n.r(t);var r=n(0);var a=n.n(r);var i=n(91);var o=n(16);var l=n(838);var c=n(831);var u=n(811);var s=n(841);var f=n(880);var d=n(945);var p=n(943);var m=n(946);var h=function e(t){var n=typeof t!=="undefined"?t:"";var r="https://savingsdealz.com"+n;return a.a.createElement(l["Helmet"],{key:Math.random()},a.a.createElement("title",null,"Savingsdealz"),a.a.createElement("meta",{name:"robots",content:"index, follow"}),a.a.createElement("link",{rel:"canonical",href:r}))};var b=function e(t){return a.a.createElement("div",null,a.a.createElement(c["a"],null,a.a.createElement(u["a"],null,h(t.url),a.a.createElement(u["a"].Row,{id:"sliderBlock"},a.a.createElement(u["a"].Column,{width:16,verticalAlign:"middle"},a.a.createElement(f["a"],null))))),a.a.createElement("div",{id:"bundlePage"},a.a.createElement(c["a"],null,a.a.createElement(u["a"],null,a.a.createElement(u["a"].Row,null,a.a.createElement(u["a"].Column,{width:4,mobile:16,id:"leftSidebar"},a.a.createElement(s["a"],null,a.a.createElement("div",{className:"header"},"Find Bundle by your needs"),a.a.createElement(m["a"],{searchData:{category:"bundle"},buttonTitle:"Find Bundle for you",actionClickFind:t.actionClickFind})),a.a.createElement(s["a"],null,a.a.createElement(p["a"],{searchData:{category:"bundle"},actionCheckedBrands:t.actionCheckedBrands}))),a.a.createElement(u["a"].Column,{id:"contentBlock",width:9,mobile:16},a.a.createElement(d["a"],{searchData:t.searchData})))))))};var v=b;var y=n(852);var g=n(839);var O=n(127);function E(e){"@babel/helpers - typeof";return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function w(){w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return w.apply(this,arguments)}function j(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function P(e,t,n){if(t)k(e.prototype,t);if(n)k(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function C(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)S(e,t)}function S(e,t){S=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return S(e,t)}function L(a){var i=R();return function e(){var t=_(a),n;if(i){var r=_(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return x(this,n)}}function x(e,t){if(t&&(E(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return B(e)}function B(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function R(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _(e){_=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _(e)}function N(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var T={fetchCartOffers:O["b"]};var D=function e(t){return{getCartOffers:t.getCartOffers}};var F=function(e){C(n,e);var t=L(n);function n(e){var i;j(this,n);i=t.call(this,e);N(B(i),"getFilterList",function(){var e=i.state.searchData;var t=Object(y["a"])(e);t.then(function(e){var t=e.status,n=e.rows;if(t){i.setState({filter:n})}},function(e){alert("Rejected: "+e)})});N(B(i),"actionCheckedBrands",function(e){var t=i.state.searchData;var n=Object(g["a"])(e);var r=Object(g["a"])(t);r["brands"]=n;i.setState({searchData:r})});N(B(i),"actionClickFind",function(e){var t=i.state.searchData;var n=Object(g["a"])(e);var r=Object(g["a"])(t);var a=Object.assign(n,r);i.setState({searchData:a})});i.state={loading:0,filter:false,filterData:{},searchData:{category:"bundle"}};i.getFilterList();return i}P(n,[{key:"render",value:function e(){return a.a.createElement(v,w({},this.state,{actionClickFind:this.actionClickFind,actionCheckedBrands:this.actionCheckedBrands}))}}]);return n}(a.a.Component);var z=t["default"]=Object(o["g"])(Object(i["b"])(D,T)(F))},839:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n.d(t,"b",function(){return i});function r(e){var t={};for(var n in e){t[n]=e[n]}return t}function a(e){if(e==46||e==8||e==9||e==27||e==110||e==190||e==65&&ctrlKey===true||e>=35&&e<=39){return true}else{if((e<48||e>57)&&(e<96||e>105)){return false}}return true}function i(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}function o(e,t){if(!t)t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);if(!r)return null;if(!r[2])return"";return decodeURIComponent(r[2].replace(/\+/g," "))}function l(e){e=e.toString();return e.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")}},841:function(e,t,n){"use strict";var r=n(5);var S=n.n(r);var a=n(114);var i=n(6);var L=n.n(i);var o=n(0);var x=n.n(o);var B=n(24);var R=n(167);var _=n(168);var N=n(8);function p(e){var t=e.children,n=e.className,r=e.compact,a=e.content,i=e.horizontal,o=e.piled,l=e.raised,c=e.size,u=e.stacked;var s=L()("ui",c,Object(B["a"])(r,"compact"),Object(B["a"])(i,"horizontal"),Object(B["a"])(o,"piled"),Object(B["a"])(l,"raised"),Object(B["a"])(u,"stacked"),"segments",n);var f=Object(R["a"])(p,e);var d=Object(_["a"])(p,e);return x.a.createElement(d,S()({},f,{className:s}),N["a"].isNil(t)?a:t)}p.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"];p.propTypes=false?undefined:{};var l=p;function c(e){var t=e.children,n=e.className,r=e.content;var a=L()("inline",n);var i=Object(R["a"])(c,e);var o=Object(_["a"])(c,e);return x.a.createElement(o,S()({},i,{className:a}),N["a"].isNil(t)?r:t)}c.handledProps=["as","children","className","content"];c.propTypes=false?undefined:{};var u=c;function T(e){var t=e.attached,n=e.basic,r=e.children,a=e.circular,i=e.className,o=e.clearing,l=e.color,c=e.compact,u=e.content,s=e.disabled,f=e.floated,d=e.inverted,p=e.loading,m=e.placeholder,h=e.padded,b=e.piled,v=e.raised,y=e.secondary,g=e.size,O=e.stacked,E=e.tertiary,w=e.textAlign,j=e.vertical;var k=L()("ui",l,g,Object(B["a"])(n,"basic"),Object(B["a"])(a,"circular"),Object(B["a"])(o,"clearing"),Object(B["a"])(c,"compact"),Object(B["a"])(s,"disabled"),Object(B["a"])(d,"inverted"),Object(B["a"])(p,"loading"),Object(B["a"])(m,"placeholder"),Object(B["a"])(b,"piled"),Object(B["a"])(v,"raised"),Object(B["a"])(y,"secondary"),Object(B["a"])(O,"stacked"),Object(B["a"])(E,"tertiary"),Object(B["a"])(j,"vertical"),Object(B["b"])(t,"attached"),Object(B["b"])(h,"padded"),Object(B["d"])(w),Object(B["e"])(f,"floated"),"segment",i);var P=Object(R["a"])(T,e);var C=Object(_["a"])(T,e);return x.a.createElement(C,S()({},P,{className:k}),N["a"].isNil(r)?u:r)}T.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"];T.Group=l;T.Inline=u;T.propTypes=false?undefined:{};var s=t["a"]=T},852:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(260);var a=n.n(r);var i={status:true,rows:{categories:{type:"checkbox",title:"Category",data:[{id:1,name:"VPN"},{id:2,name:"Hosting"},{id:3,name:"Filesharing"}]},duration:{type:"checkbox",title:"Duration",data:[{id:1,name:"1 month"},{id:2,name:"2 month"},{id:3,name:"3 month"},{id:4,name:"12 month"}]}}};var o={status:true,rows:{countries:{type:"dropdown",title:"Country",multiple:true,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]},technologies:{type:"checkbox",title:"Techonoly",multiple:true,data:[{id:1,name:"L2TP"},{id:2,name:"TLS"},{id:3,name:"PPTP"}]},licenses:{type:"dropdown",title:"License for",multiple:true,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]},servers:{type:"dropdown",title:"Servers",multiple:true,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]}}};function l(e){console.log("getFilterList----\x3e",e);var t=e["category"]=="bundle"?i:o;return new Promise(function(e){setTimeout(function(){e(t)},3e3)})}},880:function(e,t,n){"use strict";var r=n(0);var i=n.n(r);var a=n(861);var o=n.n(a);var l=n(384);var c=n(966);function u(e){var t=e.className,n=e.style,r=e.onClick;return i.a.createElement(l["a"],{alt:"One slide",src:"/images/arrow-left.svg",onClick:r,className:"custom-slick prev mobile hidden",width:20,height:20})}function s(e){var t=e.className,n=e.style,r=e.onClick;return i.a.createElement(l["a"],{alt:"Two slide",src:"/images/arrow-right.svg",onClick:r,className:"custom-slick next mobile hidden",width:20,height:20})}var f={dots:true,infinite:true,speed:500,slidesToShow:1,slidesToScroll:1,prevArrow:i.a.createElement(u,null),nextArrow:i.a.createElement(s,null),customPaging:function e(t){return i.a.createElement("div",{className:"slider-paging"})}};var d=function e(t){return i.a.createElement(o.a,f,!t.slides?i.a.createElement("div",null,i.a.createElement(c["a"],{id:"previewSlide"},i.a.createElement(c["a"].Image,null))):Object.keys(t.slides).map(function(e){return i.a.createElement("div",{key:"slide-"+t.slides["id"]},i.a.createElement(l["a"],{alt:"slider-image",src:t.slides[e]["image"]}))}))};var p=d;var m=n(260);var h={status:true,rows:[{id:1,image:"https://api.savingsdealz.com/images/slider/slide-1.png"},{id:2,image:"https://api.savingsdealz.com/images/slider/slide-2.png"},{id:3,image:"https://api.savingsdealz.com/images/slider/slide-3.png"},{id:4,image:"https://api.savingsdealz.com/images/slider/slide-4.png"},{id:5,image:"https://api.savingsdealz.com/images/slider/slide-5.png"}]};function b(e){console.log("getSliderList----\x3e",e);return new Promise(function(e){setTimeout(function(){e(h)},2e3)})}function v(e){"@babel/helpers - typeof";return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function O(e,t,n){if(t)g(e.prototype,t);if(n)g(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function E(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)w(e,t)}function w(e,t){w=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return w(e,t)}function j(a){var i=C();return function e(){var t=S(a),n;if(i){var r=S(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return k(this,n)}}function k(e,t){if(t&&(v(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return P(e)}function P(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function C(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function S(e){S=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return S(e)}function L(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var x=function(e){E(a,e);var n=j(a);function a(e,t){var r;y(this,a);r=n.call(this,e,t);L(P(r),"getSliderList",function(){var e=b();e.then(function(e){var t=e.status,n=e.rows;if(t){r.setState({slides:n})}},function(e){alert("Rejected: "+e)})});r.state={loading:0,slides:false};r.getSliderList();return r}O(a,[{key:"render",value:function e(){return i.a.createElement(p,this.state)}}]);return a}(i.a.Component);var B=x;var R=t["a"]=B},943:function(e,t,n){"use strict";var r=n(0);var a=n.n(r);var i=n(1031);var o=n(966);var l=function e(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"header"},"Brands"),a.a.createElement(i["a"],null,t.brands?a.a.createElement(i["a"].Group,{grouped:true},Object.keys(t.brands).map(function(e){return a.a.createElement(i["a"].Checkbox,{onChange:t.handleInputChangeCheckBox,checked:t.checkBrands.indexOf(t.brands[e]["id"])!=-1,value:t.brands[e]["id"],label:t.brands[e]["name"]})})):a.a.createElement(i["a"].Field,null,a.a.createElement(o["a"],{fluid:true},a.a.createElement(o["a"].Line,{length:"short"}),a.a.createElement(o["a"].Line,{length:"full"}),a.a.createElement(o["a"].Line,{length:"full"}),a.a.createElement(o["a"].Line,{length:"full"}),a.a.createElement(o["a"].Line,{length:"full"}),a.a.createElement(o["a"].Line,{length:"short"}),a.a.createElement(o["a"].Line,{length:"full"}),a.a.createElement(o["a"].Line,{length:"full"}),a.a.createElement(o["a"].Line,{length:"full"}),a.a.createElement(o["a"].Line,{length:"full"}),a.a.createElement(o["a"].Line,{length:"short"}),a.a.createElement(o["a"].Line,{length:"full"}),a.a.createElement(o["a"].Line,{length:"full"}),a.a.createElement(o["a"].Line,{length:"full"}),a.a.createElement(o["a"].Line,{length:"full"})))))};var c=l;var u={status:true,rows:[{id:1,name:"ExpressVPN"},{id:2,name:"NordVPN"},{id:3,name:"VPNsecure"},{id:4,name:"VPNium"},{id:5,name:"VPNshazam"},{id:6,name:"VPNmonster"},{id:7,name:"Private internet access"}]};function s(e){console.log("getBrandList----\x3e",e);return new Promise(function(e){setTimeout(function(){e(u)},4e3)})}function f(e){"@babel/helpers - typeof";return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(){d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return d.apply(this,arguments)}function p(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function h(e,t,n){if(t)m(e.prototype,t);if(n)m(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function b(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)v(e,t)}function v(e,t){v=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return v(e,t)}function y(a){var i=E();return function e(){var t=w(a),n;if(i){var r=w(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return g(this,n)}}function g(e,t){if(t&&(f(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return O(e)}function O(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function E(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function w(e){w=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return w(e)}function j(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var k=function(e){b(r,e);var n=y(r);function r(e,t){var a;p(this,r);a=n.call(this,e,t);j(O(a),"getBrandList",function(){var e=a.state.searchData;var t=s(e);t.then(function(e){var t=e.status,n=e.rows;if(t){a.setState({brands:n})}},function(e){alert("Rejected: "+e)})});j(O(a),"handleInputChangeCheckBox",function(e,t){var n=t.value;var r=a.state.checkBrands;if(r.indexOf(n)!==-1){r.splice(r.indexOf(n),1)}else{r.push(n)}a.props.actionCheckedBrands(r);a.setState({checkBrands:r})});a.state={loading:0,searchData:e.searchData,brands:false,checkBrands:[]};a.getBrandList();return a}h(r,[{key:"render",value:function e(){return a.a.createElement(c,d({},this.state,{handleInputChangeCheckBox:this.handleInputChangeCheckBox}))}}]);return r}(a.a.Component);var P=k;var C=t["a"]=P},946:function(e,t,n){"use strict";var r=n(0);var d=n.n(r);var p=n(1031);var a=n(966);var i=function e(t){return d.a.createElement(p["a"],null,t.filter?Object.keys(t.filter).map(function(e){return d.a.createElement(d.a.Fragment,null,d.a.createElement(p["a"].Group,{inline:true,className:"subheader"},d.a.createElement("label",{className:"subheader"},t.filter[e]["title"])),t.getInput(e,t.filter[e]))}):d.a.createElement(p["a"].Field,null,d.a.createElement(a["a"],{fluid:true},d.a.createElement(a["a"].Line,{length:"short"}),d.a.createElement(a["a"].Line,{length:"full"}),d.a.createElement(a["a"].Line,{length:"full"}),d.a.createElement(a["a"].Line,{length:"full"}),d.a.createElement(a["a"].Line,{length:"full"}),d.a.createElement(a["a"].Line,{length:"short"}),d.a.createElement(a["a"].Line,{length:"full"}),d.a.createElement(a["a"].Line,{length:"full"}),d.a.createElement(a["a"].Line,{length:"full"}),d.a.createElement(a["a"].Line,{length:"full"}),d.a.createElement(a["a"].Line,{length:"short"}),d.a.createElement(a["a"].Line,{length:"full"}),d.a.createElement(a["a"].Line,{length:"full"}),d.a.createElement(a["a"].Line,{length:"full"}),d.a.createElement(a["a"].Line,{length:"full"}))),d.a.createElement(p["a"].Button,{className:"center-button",primary:true,content:t.buttonTitle,onClick:t.handleClickFindButton,disabled:!t.filter}))};var o=i;var l=n(852);function c(e){"@babel/helpers - typeof";return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return u.apply(this,arguments)}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function m(e,t,n){if(t)f(e.prototype,t);if(n)f(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function h(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)b(e,t)}function b(e,t){b=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return b(e,t)}function v(a){var i=O();return function e(){var t=E(a),n;if(i){var r=E(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return y(this,n)}}function y(e,t){if(t&&(c(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return g(e)}function g(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function O(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function E(e){E=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return E(e)}function w(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var j=function(e){h(r,e);var n=v(r);function r(e,t){var f;s(this,r);f=n.call(this,e,t);w(g(f),"getFilterList",function(){var e=f.props.searchData;var t=Object(l["a"])(e);t.then(function(e){var t=e.status,n=e.rows;if(t){f.setState({filter:n})}},function(e){alert("Rejected: "+e)})});w(g(f),"getInput",function(e,t){var n=f.state.filterData;var r=t.type,a=t.title,i=t.multiple,o=t.data;if(!r)r="text";var l=false;switch(r){case"text":case"number":case"email":l=d.a.createElement(p["a"].Input,{fluid:true,type:r,placeholder:a,name:e,value:n[e]||"",onChange:f.handleInputChangeEdit});break;case"dropdown":var c=[];for(var u in o){c.push({key:u+o[u]["id"],text:o[u]["name"],value:o[u]["id"]})}l=d.a.createElement(p["a"].Select,{fluid:true,inline:true,name:e,options:c,placeholder:a,multiple:i?true:false,value:i?n[e]?n[e]:[]:n[e],onChange:f.handleInputChangeEdit});break;case"checkbox":l=[];for(var s in o){l.push(d.a.createElement(p["a"].Checkbox,{label:o[s]["name"],value:o[s]["name"],name:e,onChange:f.handleInputChangeCheckBox,checked:n.hasOwnProperty(e)==true&&n[e].indexOf(o[s]["name"])!=-1}))}break}return l});w(g(f),"handleInputChangeCheckBox",function(e,t){var n=t.name,r=t.value;var a=f.state.filterData;if(a.hasOwnProperty(n)&&a[n].indexOf(r)!==-1){a[n].splice(a[n].indexOf(r),1)}else{if(!a.hasOwnProperty(n)){a[n]=[]}a[n].push(r)}f.setState({filterData:a})});w(g(f),"handleInputChangeEdit",function(e,t){var n=t.name,r=t.value;e.preventDefault();var a=f.state.filterData;a[n]=r;f.setState({filterData:a})});w(g(f),"handleClickFindButton",function(){var e=f.state.filterData;f.props.actionClickFind(e)});f.state={loading:0,buttonTitle:e.buttonTitle,filter:false,filterData:{}};f.getFilterList();return f}m(r,[{key:"render",value:function e(){return d.a.createElement(o,u({},this.state,{getInput:this.getInput,handleClickFindButton:this.handleClickFindButton}))}}]);return r}(d.a.Component);var k=j;var P=t["a"]=k}}]);