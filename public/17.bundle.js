(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{778:function(e,t,n){"use strict";n.r(t);var r=n(0);var i=n.n(r);var a=n(88);var o=n(20);var c=n(32);var l=n(804);var u=n(797);var f=n(822);var s=n(777);var p=n(808);var d=n(925);var m=n(951);var y=n(906);var v=n(907);var b=n(824);var h=n.n(b);var g=n(996);var E=n(358);var w=n(927);function O(){O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return O.apply(this,arguments)}var j=[1,2,3,4,5,6,7,8,9,0];var C={dots:true,infinite:true,speed:500,slidesToShow:3,slidesToScroll:1,variableWidth:true,adaptiveHeight:true,customPaging:function e(t){return i.a.createElement("div",{className:"slider-paging"})}};var P=function e(t){return i.a.createElement(h.a,O({},C,{className:"top-horizontal-block"}),t.data?Object.keys(t.data).map(function(e){return i.a.createElement(g["a"],{style:{width:230}},i.a.createElement(g["a"].Header,null,i.a.createElement(E["a"],{src:t.data[e]["image"]})),i.a.createElement(g["a"].Content,null,i.a.createElement("div",{className:"title"},t.data[e]["name"])),i.a.createElement(g["a"].Content,{extra:true},i.a.createElement(s["a"],{verticalAlign:"middle"},i.a.createElement(s["a"].Column,{width:6},i.a.createElement("div",{className:"price"},"$",t.data[e]["price"])),i.a.createElement(s["a"].Column,{width:10,textAlign:"right"},i.a.createElement(y["a"],{as:c["b"],to:t.data[e]["url"],primary:true,content:"Buy now"})))))}):Object.keys(j).map(function(e){return i.a.createElement(w["a"],{style:{width:230}},i.a.createElement(w["a"].Image,null),i.a.createElement(w["a"].Header,null,i.a.createElement(w["a"].Line,{length:"full"}),i.a.createElement(w["a"].Line,{length:"full"}),i.a.createElement(w["a"].Line,{length:"full"}),i.a.createElement(w["a"].Line,{length:"full"}),i.a.createElement(w["a"].Line,{length:"full"})))}))};var _=P;function S(e){"@babel/helpers - typeof";return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function R(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function D(e,t,n){if(t)k(e.prototype,t);if(n)k(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function N(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)T(e,t)}function T(e,t){T=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return T(e,t)}function z(a){var o=x();return function e(){var t=B(a),n;if(o){var r=B(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return A(this,n)}}function A(e,t){if(t&&(S(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return I(e)}function I(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function x(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function B(e){B=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return B(e)}function L(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var $=function(e){N(a,e);var n=z(a);function a(e,t){var r;R(this,a);r=n.call(this,e,t);L(I(r),"getData",function(){var e=r.props.getData();e.then(function(e){var t=e.status,n=e.rows;if(t){r.setState({data:n})}},function(e){alert("Rejected: "+e)})});r.state={loading:0,data:false};r.getData();return r}D(a,[{key:"render",value:function e(){return i.a.createElement(_,this.state)}}]);return a}(i.a.Component);var H=$;var q=H;var M=n(806);var Q=function e(t){var n=typeof t!=="undefined"?t:"";var r="https://savingsdealz.com"+n;return i.a.createElement(l["Helmet"],{key:Math.random()},i.a.createElement("title",null,"Savingsdealz"),i.a.createElement("meta",{name:"robots",content:"index, follow"}),i.a.createElement("link",{rel:"canonical",href:r}))};var V=function e(t){return i.a.createElement("div",null,Q(t.url),i.a.createElement(u["a"],null,i.a.createElement(f["a"],{id:"breadcrumb"},i.a.createElement(f["a"].Section,{link:true,as:c["b"],to:"/"},"Main"),i.a.createElement(f["a"].Divider,{icon:"right chevron"}),i.a.createElement(f["a"].Section,{active:true},"Offer")),i.a.createElement(s["a"],{id:"offerBlock"},i.a.createElement(s["a"].Row,{stretched:true},i.a.createElement(s["a"].Column,{width:11},i.a.createElement(p["a"],{className:"info-block"},i.a.createElement(d["a"].Group,null,i.a.createElement(d["a"],null,t.info["ribbon"]&&i.a.createElement("div",{className:"ribbon"},t.info["ribbon"]),i.a.createElement(d["a"].Image,{size:"tiny",className:"logo",verticalAlign:"middle",src:t.info["image"]}),i.a.createElement(d["a"].Content,null,i.a.createElement(d["a"].Header,{className:"title"},t.info["title"]),i.a.createElement(d["a"].Meta,null,t.info["subtitle"]),i.a.createElement(d["a"].Description,null,i.a.createElement("div",{className:"price-block"},t.info["price"]&&i.a.createElement("span",{className:"price"},"$",t.info["price"]),t.info["old_price"]&&i.a.createElement("span",{className:"old-price"},"$",t.info["old_price"]))),i.a.createElement(d["a"].Extra,null,i.a.createElement(m["a"],{className:"quantity",type:"number",name:t.info["id"],onChange:t.handleInputChangeQuantity,value:t.offer["quantity"],min:1}),i.a.createElement(y["a"],{primary:true,content:"Add to cart",onClick:t.handleClicAddToCart})),t.info["user_used"]&&i.a.createElement(d["a"].Description,null,t.info["user_used"]," users used this coupon")))),i.a.createElement("p",null,i.a.createElement("span",{className:"category"},"Category: ")," ",i.a.createElement("span",{className:"category-value"},t.info["category"])))),i.a.createElement(s["a"].Column,{width:5},i.a.createElement(p["a"],null,i.a.createElement("div",{className:"header-top color-red"},"BEST VPN DEALS"),i.a.createElement(v["a"],{getData:M["a"]})))),i.a.createElement(s["a"].Row,null,i.a.createElement(s["a"].Column,null,i.a.createElement(p["a"],{className:"info-block"},i.a.createElement("div",{className:"header-top color-red"},"People who viewed this item also viewed"),i.a.createElement(q,{getData:M["a"]})))))))};var G=V;var J=n(805);var Z=n(124);function K(e){"@babel/helpers - typeof";return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function U(){U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return U.apply(this,arguments)}function W(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function X(e,t,n){if(t)F(e.prototype,t);if(n)F(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function Y(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)ee(e,t)}function ee(e,t){ee=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return ee(e,t)}function te(a){var o=ae();return function e(){var t=oe(a),n;if(o){var r=oe(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return ne(this,n)}}function ne(e,t){if(t&&(K(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return re(e)}function re(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function ae(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function oe(e){oe=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return oe(e)}function ie(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var ce={fetchCartOffers:Z["b"]};var le=function e(t){return{getCartOffers:t.getCartOffers}};var ue=function(e){Y(o,e);var r=te(o);function o(e){var a;W(this,o);a=r.call(this,e);ie(re(a),"parseType",function(e){var t=e.split("-");return t[t.length-1]});ie(re(a),"getOfferInfo",function(){var e=a.state.offerId;var t=Object(M["b"])({offerId:e});t.then(function(e){var t=e.status,n=e.row;if(t){a.setState({info:n})}},function(e){alert("Rejected: "+e)})});ie(re(a),"handleInputChangeQuantity",function(e,t){var n=t.name,r=t.value;e.preventDefault();a.setState({offer:{id:n,quantity:r}})});ie(re(a),"handleClicAddToCart",function(){var e=a.state.offer;var t=a.props.getCartOffers;console.log("offer----\x3e",e);var n=t.concat([e]);console.log("a----\x3e",n);a.props.fetchCartOffers(n)});var t=e.match.params.offer;var n=a.parseType(t);a.state={loading:0,offerId:n,offer:{id:n,quantity:1},info:false};a.getOfferInfo();return a}X(o,[{key:"render",value:function e(){return i.a.createElement(G,U({},this.state,{handleInputChangeQuantity:this.handleInputChangeQuantity,handleClicAddToCart:this.handleClicAddToCart}))}}]);return o}(i.a.Component);var fe=t["default"]=Object(o["f"])(Object(a["b"])(le,ce)(ue))},805:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n.d(t,"b",function(){return o});function r(e){var t={};for(var n in e){t[n]=e[n]}return t}function a(e){if(e==46||e==8||e==9||e==27||e==110||e==190||e==65&&ctrlKey===true||e>=35&&e<=39){return true}else{if((e<48||e>57)&&(e<96||e>105)){return false}}return true}function o(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}function i(e,t){if(!t)t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);if(!r)return null;if(!r[2])return"";return decodeURIComponent(r[2].replace(/\+/g," "))}function c(e){e=e.toString();return e.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")}},806:function(e,t,n){"use strict";n.d(t,"e",function(){return o});n.d(t,"a",function(){return i});n.d(t,"d",function(){return c});n.d(t,"b",function(){return l});n.d(t,"c",function(){return u});n.d(t,"f",function(){return f});var r=n(45);var a=n.n(r);function o(e){return a()("https://api.savingsdealz.com/offer/top-suggestions",{method:"post",data:e,withCredentials:true}).then(function(e){return e.data}).catch(function(e){console.log(e)})}function i(e){return a()("https://api.savingsdealz.com/offer/best-vpn-deals",{method:"post",data:e,withCredentials:true}).then(function(e){return e.data}).catch(function(e){console.log(e)})}function c(e){return a()("https://api.savingsdealz.com/offer/recommendations",{method:"post",data:e,withCredentials:true}).then(function(e){return e.data}).catch(function(e){console.log(e)})}function l(e){return a()("https://api.savingsdealz.com/offer/info",{method:"post",data:e,withCredentials:true}).then(function(e){return e.data}).catch(function(e){console.log(e)})}function u(e){return a()("https://api.savingsdealz.com/offer/list",{method:"post",data:e,withCredentials:true}).then(function(e){return e.data}).catch(function(e){console.log(e)})}function f(e){return a()("https://api.savingsdealz.com/order/payer_email",{method:"post",data:e,withCredentials:true}).then(function(e){return e.data}).catch(function(e){console.log(e)})}},907:function(e,t,n){"use strict";var r=n(0);var o=n.n(r);var a=n(32);var i=n(925);var c=n(927);var l=[1,2,3];var u=function e(t){return o.a.createElement(i["a"].Group,{divided:true,id:"bestVpnDeals"},!t.data?Object.keys(l).map(function(e){return o.a.createElement(c["a"],null,o.a.createElement(c["a"].Header,{image:true},o.a.createElement(c["a"].Line,null),o.a.createElement(c["a"].Line,null)))}):Object.keys(t.data).map(function(e){return o.a.createElement(i["a"],null,o.a.createElement(i["a"].Image,{verticalAlign:"middle",src:t.data[e]["image"],size:"tiny"}),o.a.createElement(i["a"].Content,{verticalAlign:"middle"},o.a.createElement(i["a"].Header,{as:a["b"],to:t.data[e]["url"]},t.data[e]["title"]),o.a.createElement(i["a"].Meta,null,o.a.createElement(a["b"],{to:t.data[e]["vendor_url"]},"Visit ",t.data[e]["vendor_name"])),o.a.createElement(i["a"].Description,null,t.data[e]["description"])))}))};var f=u;function s(e){"@babel/helpers - typeof";return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function m(e,t,n){if(t)d(e.prototype,t);if(n)d(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function y(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)v(e,t)}function v(e,t){v=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return v(e,t)}function b(a){var o=E();return function e(){var t=w(a),n;if(o){var r=w(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return h(this,n)}}function h(e,t){if(t&&(s(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return g(e)}function g(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function E(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function w(e){w=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return w(e)}function O(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var j=function(e){y(a,e);var n=b(a);function a(e,t){var r;p(this,a);r=n.call(this,e,t);O(g(r),"getData",function(){var e=r.props.getData();e.then(function(e){var t=e.status,n=e.rows;if(t){r.setState({data:n})}},function(e){alert("Rejected: "+e)})});r.state={loading:0,data:false};r.getData();return r}m(a,[{key:"render",value:function e(){return o.a.createElement(f,this.state)}}]);return a}(o.a.Component);var C=j;var P=t["a"]=C}}]);