(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{817:function(e,t,n){"use strict";n.r(t);var r=n(0);var a=n.n(r);var o=n(843);var i=n(837);var c=n(814);var u=n(854);var l={status:true,rows:[{id:1,question:"What is VPN",answer:"This is a programm for ...",index:0},{id:2,question:"What is VPN",answer:"This is a programm for ...",index:1},{id:3,question:"What is VPN",answer:"This is a programm for ...",index:2}]};function f(e){console.log("getFAQlist----\x3e",e);return new Promise(function(e){setTimeout(function(){e(l)},200)})}var s=n(887);var p=n(888);var y=n(1030);var m=n(109);var d=[1,2,3];var b=function e(t){var n=t.activeIndex,r=t.handleClick,o=t.data;return a.a.createElement(s["a"].Group,{divided:true,id:"bestVpnDeals"},!o?Object.keys(d).map(function(e){return a.a.createElement(p["a"],null,a.a.createElement(p["a"].Header,{image:true},a.a.createElement(p["a"].Line,null)))}):Object.keys(o).map(function(e){return a.a.createElement(y["a"],{styled:true,className:"accordingInFaq"},a.a.createElement(y["a"].Title,{active:n===o[e]["index"],index:o[e]["index"],onClick:r},a.a.createElement(m["a"],{name:"dropdown"}),o[e]["question"]),a.a.createElement(y["a"].Content,{active:n===o[e]["index"]},a.a.createElement("p",null,o[e]["answer"])))}))};var v=b;function h(e){"@babel/helpers - typeof";return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(){g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return g.apply(this,arguments)}function w(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function O(e,t,n){if(t)E(e.prototype,t);if(n)E(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function j(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)P(e,t)}function P(e,t){P=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return P(e,t)}function x(o){var a=R();return function e(){var t=S(o),n;if(a){var r=S(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return k(this,n)}}function k(e,t){if(t&&(h(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _(e)}function _(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function R(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function S(e){S=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return S(e)}function C(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var T=function(e){j(r,e);var n=x(r);function r(e,t){var a;w(this,r);a=n.call(this,e,t);C(_(a),"getData",function(){var e=a.props.getData();e.then(function(e){var t=e.status,n=e.rows;if(t){a.setState({data:n})}},function(e){alert("Rejected: "+e)})});C(_(a),"handleClick",function(e,t){var n=t.index;var r=a.state.activeIndex;var o=r===n?-1:n;a.setState({activeIndex:o})});a.state={loading:0,data:false,activeIndex:0};a.getData();return a}O(r,[{key:"render",value:function e(){var t=this.state.activeIndex;var n=this.state.data;return a.a.createElement(b,g({handleClick:this.handleClick},this.state))}}]);return r}(a.a.Component);var q=T;var A=q;var D=function e(){return a.a.createElement(o["Helmet"],{key:Math.random()},a.a.createElement("title",null,"Frequently Asked Questions"),a.a.createElement("meta",{property:"og:title",content:"FAQ"}),a.a.createElement("meta",{property:"og:url",content:"https://savingsdealz.com/articles"}),a.a.createElement("meta",{property:"og:image",content:"https://savingsdealz.com/images/logo.png"}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:image:width",content:"50"}),a.a.createElement("meta",{property:"og:image:height",content:"50"}),a.a.createElement("meta",{name:"description",content:"FAQ in the best VPN site"}),a.a.createElement("meta",{name:"robots",content:"index, follow"}),a.a.createElement("script",{type:"application/ld+json"},'\n        {\n          "@context": "https://schema.org",\n          "@type": "Organization",\n          name: "savingsdealz",\n          url: "https://savingsdealz.com/",\n        }\n    '))};var F=function e(t){return a.a.createElement("div",{className:"block-title-question"},D(),a.a.createElement(i["a"],null,a.a.createElement(i["a"],null,a.a.createElement(c["a"],null,a.a.createElement(c["a"].Row,{columns:1},a.a.createElement(c["a"].Column,null,a.a.createElement(u["a"],{as:"h1",textAlign:"center"},"Frequently Asked Questions (FAQ)"))))),a.a.createElement(c["a"],null,a.a.createElement(c["a"].Row,{columns:1,textAlign:"center"},a.a.createElement(c["a"].Column,null,a.a.createElement(A,{getData:f}))))))};var I=F;function N(e){"@babel/helpers - typeof";return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function Q(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function V(e,t,n){if(t)z(e.prototype,t);if(n)z(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function B(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)W(e,t)}function W(e,t){W=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return W(e,t)}function H(o){var a=L();return function e(){var t=M(o),n;if(a){var r=M(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return J(this,n)}}function J(e,t){if(t&&(N(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return G(e)}function G(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function L(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function M(e){M=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return M(e)}var K=function(e){B(n,e);var t=H(n);function n(e){Q(this,n);return t.call(this,e)}V(n,[{key:"render",value:function e(){return a.a.createElement(I,null)}}]);return n}(a.a.Component);var U=t["default"]=K}}]);