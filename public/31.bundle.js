(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{817:function(e,t,n){"use strict";n.r(t);var r=n(0);var a=n.n(r);var o=n(843);var i=n(837);var c=n(814);var u={status:true,rows:[{id:1,question:"What is VPN",answer:"This is a programm for ...",index:0},{id:2,question:"What is VPN",answer:"This is a programm for ...",index:1},{id:3,question:"What is VPN",answer:"This is a programm for ...",index:2}]};function l(e){console.log("getFAQlist----\x3e",e);return new Promise(function(e){setTimeout(function(){e(u)},200)})}var f=n(887);var s=n(888);var p=n(1030);var y=n(109);var m=[1,2,3];var d=function e(t){var n=t.activeIndex,r=t.handleClick,o=t.data;return a.a.createElement(f["a"].Group,{divided:true,id:"bestVpnDeals"},!o?Object.keys(m).map(function(e){return a.a.createElement(s["a"],null,a.a.createElement(s["a"].Header,{image:true},a.a.createElement(s["a"].Line,null)))}):Object.keys(o).map(function(e){return a.a.createElement(p["a"],{styled:true,className:"accordingInFaq"},a.a.createElement(p["a"].Title,{active:n===o[e]["index"],index:o[e]["index"],onClick:r},a.a.createElement(y["a"],{name:"dropdown"}),o[e]["question"]),a.a.createElement(p["a"].Content,{active:n===o[e]["index"]},a.a.createElement("p",null,o[e]["answer"])))}))};var b=d;function v(e){"@babel/helpers - typeof";return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(){h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return h.apply(this,arguments)}function g(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function E(e,t,n){if(t)w(e.prototype,t);if(n)w(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function O(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)j(e,t)}function j(e,t){j=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return j(e,t)}function P(o){var a=k();return function e(){var t=R(o),n;if(a){var r=R(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return x(this,n)}}function x(e,t){if(t&&(v(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _(e)}function _(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function k(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function R(e){R=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return R(e)}function S(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var C=function(e){O(r,e);var n=P(r);function r(e,t){var a;g(this,r);a=n.call(this,e,t);S(_(a),"getData",function(){var e=a.props.getData();e.then(function(e){var t=e.status,n=e.rows;if(t){a.setState({data:n})}},function(e){alert("Rejected: "+e)})});S(_(a),"handleClick",function(e,t){var n=t.index;var r=a.state.activeIndex;var o=r===n?-1:n;a.setState({activeIndex:o})});a.state={loading:0,data:false,activeIndex:0};a.getData();return a}E(r,[{key:"render",value:function e(){var t=this.state.activeIndex;var n=this.state.data;return a.a.createElement(d,h({handleClick:this.handleClick},this.state))}}]);return r}(a.a.Component);var T=C;var D=T;var I=function e(){return a.a.createElement(o["Helmet"],{key:Math.random()},a.a.createElement("title",null,"FAQ"),a.a.createElement("meta",{property:"og:title",content:"FAQ"}),a.a.createElement("meta",{property:"og:url",content:"https://savingsdealz.com/articles"}),a.a.createElement("meta",{property:"og:image",content:"https://savingsdealz.com/images/logo.png"}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:image:width",content:"50"}),a.a.createElement("meta",{property:"og:image:height",content:"50"}),a.a.createElement("meta",{name:"description",content:"FAQ in the best VPN site"}),a.a.createElement("meta",{name:"robots",content:"index, follow"}),a.a.createElement("script",{type:"application/ld+json"},'\n        {\n          "@context": "https://schema.org",\n          "@type": "Organization",\n          name: "savingsdealz",\n          url: "https://savingsdealz.com/",\n        }\n    '))};var q=function e(t){return a.a.createElement("div",null,I(),a.a.createElement(i["a"],null,a.a.createElement(c["a"],null,a.a.createElement(c["a"].Row,{columns:1,textAlign:"center"},a.a.createElement(c["a"].Column,null,a.a.createElement(D,{getData:l}))))))};var z=q;function A(e){"@babel/helpers - typeof";return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function F(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function V(e,t,n){if(t)N(e.prototype,t);if(n)N(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function B(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)Q(e,t)}function Q(e,t){Q=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return Q(e,t)}function W(o){var a=G();return function e(){var t=L(o),n;if(a){var r=L(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return H(this,n)}}function H(e,t){if(t&&(A(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return J(e)}function J(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function G(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function L(e){L=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return L(e)}var M=function(e){B(n,e);var t=W(n);function n(e){F(this,n);return t.call(this,e)}V(n,[{key:"render",value:function e(){return a.a.createElement(z,null)}}]);return n}(a.a.Component);var K=t["default"]=M}}]);