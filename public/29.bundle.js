(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{830:function(e,t,n){"use strict";n.r(t);var r=n(0);var i=n.n(r);var l=n(383);var c=n(1030);var s=n(853);var a=n(28);var o=n(845);var u=n(839);var p=n(871);var m=n(816);var f=n(851);var y=n(974);var d=function e(t){var n=typeof t!=="undefined"?t:"";var r="https://savingsdealz.com"+n;return i.a.createElement(o["Helmet"],{key:Math.random()},i.a.createElement("title",null,"2022 s vpn Compare tool free and Good"),i.a.createElement("meta",{name:"robots",content:"all"}),i.a.createElement("link",{rel:"canonical",href:r}))};var h=function e(n){return i.a.createElement("div",null,d(n.url),i.a.createElement(u["a"],null,i.a.createElement(p["a"],{id:"breadcrumb"},i.a.createElement(p["a"].Section,{link:true,as:a["b"],to:"/"},"Main"),i.a.createElement(p["a"].Divider,{icon:"right chevron"}),i.a.createElement(p["a"].Section,{link:true,as:a["b"],to:"/compare"},"Compare"),i.a.createElement(p["a"].Divider,{icon:"right chevron"}),i.a.createElement(p["a"].Section,{active:true},"Compare ",n.vendors.join(" with "))),i.a.createElement(m["a"],{id:"compareVendorBlock"},i.a.createElement(m["a"].Row,null,i.a.createElement(m["a"].Column,{width:16},i.a.createElement(f["a"],null,i.a.createElement(y["a"],{basic:"very",textAlign:"center"},i.a.createElement(y["a"].Body,null,Object.keys(n.compareInfo).map(function(t){return i.a.createElement(y["a"].Row,null,i.a.createElement(y["a"].Cell,{width:3,textAlign:"left"},n.compareInfo[t]["title"]),Object.keys(n.compareInfo[t]["cells"]).map(function(e){return i.a.createElement(y["a"].Cell,{width:5},n.getTableCell(n.compareInfo[t]["type"],n.compareInfo[t]["cells"][e]))}))})))))))))};var v=h;var g=n(888);function b(e){"@babel/helpers - typeof";return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function w(){w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return w.apply(this,arguments)}function P(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function E(e,t,n){if(t)S(e.prototype,t);if(n)S(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function k(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)C(e,t)}function C(e,t){C=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return C(e,t)}function A(a){var o=T();return function e(){var t=x(a),n;if(o){var r=x(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return O(this,n)}}function O(e,t){if(t&&(b(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return j(e)}function j(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function T(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function x(e){x=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return x(e)}function N(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var G=function(e){k(o,e);var r=A(o);function o(e){var a;P(this,o);a=r.call(this,e);N(j(a),"parseType",function(e){var t=e.replace("compare-","");var n=t.split("-with-");return n});N(j(a),"getCompareVendorsInfo",function(){var e=a.state.vendors;var t=Object(g["a"])(e);t.then(function(e){var t=e.status,n=e.info,r=e.rows;if(t){a.setState({info:n,compareInfo:r})}},function(e){alert("Rejected: "+e)})});N(j(a),"getTableCell",function(e,t){switch(e){case"image":return i.a.createElement(l["a"],{src:t});break;case"text":return t;break;case"checkbox":if(parseInt(t)){return i.a.createElement(l["a"],{alt:"check",src:"/images/check.png"})}else{return i.a.createElement(l["a"],{alt:"cancel",src:"/images/cancel.png"})}break;case"dropdown":var n=[];var r=1;for(var a in t){n.push(t[r]);r++;if(r>=8){break}}return i.a.createElement(i.a.Fragment,null,n.join(", "),i.a.createElement(c["a"],{trigger:i.a.createElement("span",{className:"more-button"},"more"),size:"mini",dimmer:"inverted",className:"modal-countries",closeIcon:true},i.a.createElement(c["a"].Content,{image:true,scrolling:true},i.a.createElement(c["a"].Description,null,i.a.createElement(s["a"],null,"All countries"),Object.keys(t).map(function(e){return i.a.createElement("p",null,t[e])})))));break}});var t=e.match.params.vendors;var n=a.parseType(t);a.state={loading:0,vendors:n,info:false,compareInfo:false};a.getCompareVendorsInfo();return a}E(o,[{key:"render",value:function e(){return i.a.createElement(v,w({},this.state,{getTableCell:this.getTableCell}))}}]);return o}(i.a.Component);var I=t["default"]=G},888:function(e,t,n){"use strict";n.d(t,"b",function(){return a});n.d(t,"c",function(){return i});n.d(t,"a",function(){return c});var r={status:true,row:{id:1,name:"ExpressVPN",image:"/images/vpn-4.png",title:"ExpressVPN 1 year premium with 50% off",category:"VPN",descriptions:[{title:"48 Countries To Choose From",text:"<p>Our secure vpn access servers are monitored.  They’re access controlled & we are the only ones that operate them — no one else.  They do not permanently store IP addresses nor do they store logs.  Each server supports all popular protocols including: OpenVPN, HTTP Proxy, Smart DNS, Obfuscation & SSH SOCKS. With the very best server locations and low ping times, you will always find a fast server close to you.</p>"},{title:"No Logs Ever",text:"<p>We take your privacy very seriously. We do not store any logs of the websites you visit, we never will and never have. If required we will move jurisdictions and go above and beyond for you.</p>"},{title:"Bypass Internet Censorship",text:"<p>Many Countries including United Kingdom, France, Germany, East Asia, Central Asia, The Middle East/North Africa, Australia and many more employ internet censorship or filtering.  By using VPNSecure you can take back your freedom and enjoy un-restricted internet. In heavily restricted regions we offer obfuscation (Stealth VPN) built right into our hand crafted VPN client.</p>"},{title:"Choose Cipher Strength",text:"<p>Depending on your use case, you may want to encrypt your internet connection but also get the best speed available.  We give you the option to choose your encryption cipher, from a low cipher of 64bits, to high encryption using AES-256. This gives you the freedom and ability to choose the type of connection you prefer. </p>"},{title:"Meta Search",text:"<p>Meta Search is a metasearch engine, with the aim of protecting the privacy of its users. Metasearch does not share users IP addresses or search history with the search engines from which it gathers results. Meta Search will proxy results from leading search engines, so you don't have too. It's the privacy search engine, included in all premium VPN plans.</p>"}]}};function a(e){console.log("getVendorInfo----\x3e",e);return new Promise(function(e){setTimeout(function(){e(r)},200)})}var o={status:1,rows:[{id:"1",name:"VPNSecure.me",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",user_used:"2588"},{id:"2",name:"VPNShazam.com",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",user_used:"786"},{id:"3",name:"Ivacy.com",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",user_used:"181"},{id:"4",name:"NordVPN.com",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",user_used:"2554"}]};function i(e){console.log("getCompareList----\x3e",e);return new Promise(function(e){setTimeout(function(){e(o)},3e3)})}var l={status:true,info:[{id:1,name:"Surfhark",image:"/images/vpn-2.png"},{id:2,name:"PrivateVPN",image:"/images/vpn-3.png"},{id:3,name:"VPN",image:"/images/vpn-4.png"}],rows:[{title:"Company",type:"image",cells:["/images/vpn-2.png","/images/vpn-3.png","/images/vpn-4.png"]},{title:"Technoly",type:"text",cells:["L2TP","L2TP","L2TP"]},{title:"Number of devices per license",type:"text",cells:["2","7","4"]},{title:"Country",type:"dropdown",cells:[["USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland"],["USA","Germany","Poland"],["USA","Germany","Poland"]]},{title:"Number of servers",type:"text",cells:["150","100","500"]},{title:"Mobile app",type:"checkbox",cells:["1","1","1"]},{title:"Keep logs",type:"checkbox",cells:["1","0","0"]},{title:"Switch Kill",type:"checkbox",cells:["0","1","1"]}]};function c(e){console.log("getCompareVendorsInfo----\x3e",e);return new Promise(function(e){setTimeout(function(){e(l)},200)})}}}]);