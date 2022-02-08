(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{821:function(e,t,n){"use strict";n.r(t);var a=n(0);var m=n.n(a);var p=n(1031);var r=n(32);var o=n(838);var l=n(831);var i=n(862);var s=n(811);var c=n(841);var u=n(851);var d=n(942);var f=n(966);var h=n(963);var v=n(965);var g=n(383);var y=n(1028);var b=[1,2,3,4,5];var E=function e(t){return m.a.createElement(o["Helmet"],{key:Math.random()},m.a.createElement("title",null,"2022’s VPN Compare Tool – Free and Good"),m.a.createElement("meta",{property:"og:title",content:"2022’s VPN Compare Tool – Free and Good"}),m.a.createElement("meta",{property:"og:url",content:"https://savingsdealz.com/compare"}),m.a.createElement("meta",{property:"og:image",content:"https://savingsdealz.com/images/logo.png"}),m.a.createElement("meta",{property:"og:type",content:"article"}),m.a.createElement("meta",{property:"og:image:width",content:"50"}),m.a.createElement("meta",{property:"og:image:height",content:"50"}),m.a.createElement("meta",{name:"description",content:"Compare the best VPNs and find yours now. VPN experts compare and rate the best VPNs on the market in 2022. "}),m.a.createElement("meta",{name:"robots",content:"all"}))};var C=function e(t){return m.a.createElement("div",null,E(t.url),m.a.createElement(l["a"],null,m.a.createElement(i["a"],{id:"breadcrumb"},m.a.createElement(i["a"].Section,{link:true,as:r["b"],to:"/"},"Main"),m.a.createElement(i["a"].Divider,{icon:"right chevron"}),m.a.createElement(i["a"].Section,{active:true},"Compare")),m.a.createElement(s["a"],null,m.a.createElement(s["a"].Row,{stretched:true,id:"compareBlock"},m.a.createElement(s["a"].Column,{width:16},m.a.createElement(c["a"],null,m.a.createElement(u["a"],{as:"h1",textAlign:"center"},"VPN providers comparison",m.a.createElement(u["a"].Subheader,{as:"h2"},"Parallel comparison of features, reviews and prices. Choose up to 3 VPNs")),m.a.createElement(p["a"],null,m.a.createElement(p["a"].Group,{widths:"equal"},m.a.createElement(p["a"].Dropdown,{placeholder:"Select vendor",clearable:true,fluid:true,search:true,selection:true,name:"vendor1",value:t.compareVendors["vendor1"],options:t.getVendorsListOptions(),loading:!t.vendorsList,onChange:t.handleInputChangeVendors}),m.a.createElement("label",{className:"vs-divided"},"VS"),m.a.createElement(p["a"].Dropdown,{placeholder:"Select vendor",clearable:true,fluid:true,search:true,selection:true,name:"vendor2",value:t.compareVendors["vendor2"],options:t.getVendorsListOptions(),loading:!t.vendorsList,onChange:t.handleInputChangeVendors}),m.a.createElement("label",{className:"vs-divided"},"VS"),m.a.createElement(p["a"].Dropdown,{placeholder:"Select vendor",clearable:true,fluid:true,search:true,selection:true,name:"vendor3",value:t.compareVendors["vendor3"],options:t.getVendorsListOptions(),loading:!t.vendorsList,onChange:t.handleInputChangeVendors})),m.a.createElement(d["a"],{as:r["b"],to:t.getCompareUrl(),disabled:t.checkCompareVendorButtonDisabled(),primary:true,className:"compare-button"},"Compare"))),m.a.createElement("h2",{className:"block-titleH2"},"Compare VPNs by Top Features"))),m.a.createElement(s["a"].Row,null,m.a.createElement(s["a"].Column,{width:16},m.a.createElement(c["a"],null,m.a.createElement(s["a"],{columns:1},m.a.createElement(s["a"].Column,{textAlign:"left"},m.a.createElement(p["a"],null,m.a.createElement(p["a"].Group,{widths:"equal"},t.filter?Object.keys(t.filter).map(function(e){return m.a.createElement(p["a"].Field,{fluid:true},m.a.createElement("label",{className:"subheader"},t.filter[e]["title"]),t.getInput(e,t.filter[e]))}):m.a.createElement(m.a.Fragment,null,m.a.createElement(p["a"].Field,{fluid:true},m.a.createElement(f["a"],{fluid:true},m.a.createElement(f["a"].Line,{length:"short"}),m.a.createElement(f["a"].Line,{length:"full"}))),m.a.createElement(p["a"].Field,{fluid:true},m.a.createElement(f["a"],{fluid:true},m.a.createElement(f["a"].Line,{length:"short"}),m.a.createElement(f["a"].Line,{length:"full"}))),m.a.createElement(p["a"].Field,{fluid:true},m.a.createElement(f["a"],{fluid:true},m.a.createElement(f["a"].Line,{length:"short"}),m.a.createElement(f["a"].Line,{length:"full"}))),m.a.createElement(p["a"].Field,{fluid:true},m.a.createElement(f["a"],{fluid:true},m.a.createElement(f["a"].Line,{length:"short"}),m.a.createElement(f["a"].Line,{length:"full"})))))))),m.a.createElement(h["a"],null),m.a.createElement(s["a"],{columns:1},m.a.createElement(s["a"].Column,null,m.a.createElement(v["a"],{basic:true,id:"compareListTable"},t.vendorsList?Object.keys(t.vendorsList).map(function(e){return m.a.createElement(v["a"].Row,null,m.a.createElement(v["a"].Cell,null,t.vendorsList[e]["name"]),m.a.createElement(v["a"].Cell,{textAlign:"center"},m.a.createElement(g["a"],{alt:"banner",src:t.vendorsList[e]["image"]})),m.a.createElement(v["a"].Cell,{textAlign:"center"},t.vendorsList[e]["user_used"]," users used this coupon"),m.a.createElement(v["a"].Cell,{textAlign:"center"},m.a.createElement(y["a"],{label:"Add to comparison",value:t.vendorsList[e]["id"],onChange:t.handleInputChangeAddComprassion,checked:t.checkCompareVendorChecked(t.vendorsList[e]["id"]),disabled:t.checkCompareVendorDisabled(t.vendorsList[e]["id"])})))}):Object.keys(b).map(function(e){return m.a.createElement(v["a"].Row,null,m.a.createElement(v["a"].Cell,null,m.a.createElement(f["a"],{fluid:true},m.a.createElement(f["a"].Line,{length:"full"}))),m.a.createElement(v["a"].Cell,{textAlign:"center"},m.a.createElement(f["a"],{fluid:true},m.a.createElement(f["a"].Line,{length:"full"}))),m.a.createElement(v["a"].Cell,{textAlign:"center"},m.a.createElement(f["a"],{fluid:true},m.a.createElement(f["a"].Line,{length:"full"}))),m.a.createElement(v["a"].Cell,{textAlign:"center"},m.a.createElement(f["a"],{fluid:true},m.a.createElement(f["a"].Line,{length:"full"}))))}))))))))))};var w=C;var P=n(879);var V=n(852);function S(e){"@babel/helpers - typeof";return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(){k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n){if(Object.prototype.hasOwnProperty.call(n,a)){e[a]=n[a]}}}return e};return k.apply(this,arguments)}function L(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function A(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}function x(e,t,n){if(t)A(e.prototype,t);if(n)A(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function O(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)N(e,t)}function N(e,t){N=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return N(e,t)}function U(r){var o=D();return function e(){var t=G(r),n;if(o){var a=G(this).constructor;n=Reflect.construct(t,arguments,a)}else{n=t.apply(this,arguments)}return I(this,n)}}function I(e,t){if(t&&(S(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return T(e)}function T(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function D(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function G(e){G=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return G(e)}function j(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var F=function(e){O(n,e);var t=U(n);function n(e){var d;L(this,n);d=t.call(this,e);j(T(d),"getVendorsList",function(){var e=d.state.filterData;d.setState({vendorsList:false});var t=Object(P["c"])(e);t.then(function(e){var t=e.status,n=e.rows;if(t){d.setState({vendorsList:n})}},function(e){alert("Rejected: "+e)})});j(T(d),"getVendorsListOptions",function(){var e=d.state.vendorsList;var t=[];for(var n in e){t.push({key:e[n]["id"],value:e[n]["id"],text:e[n]["name"]})}return t});j(T(d),"handleInputChangeVendors",function(e,t){var n=t.name,a=t.value;e.preventDefault();var r=d.state.compareVendors;r[n]=a;d.setState({compareVendors:r})});j(T(d),"getCompareUrl",function(){var e=d.state.compareVendors;if(!e)return false;var t=e.vendor1,n=e.vendor2,a=e.vendor3;var r="/compare-";var o=[];if(t){o.push(d.checkVendorToUrl(t))}if(n){o.push(d.checkVendorToUrl(n))}if(a){o.push(d.checkVendorToUrl(a))}r+=o.join("-with-");var l=r=="/compare-"?"/compare":r;return l});j(T(d),"checkVendorToUrl",function(e){var t=d.state.vendorsList;if(!e)return"";var n="";for(var a in t){if(!t[a])continue;if(t[a]["id"]==e){n=t[a]["name"];break}}return n.replace(/\s/gi,"-").replace("/","-").toLowerCase()});j(T(d),"getFilterList",function(){var e=d.state.filterData;var t=Object(V["a"])(e);t.then(function(e){var t=e.status,n=e.rows;if(t){d.setState({filter:n})}},function(e){alert("Rejected: "+e)})});j(T(d),"getInput",function(e,t){var n=d.state.filterData;var a=t.type,r=t.title,o=t.multiple,l=t.data;if(!a)a="text";var i=false;switch(a){case"text":case"number":case"email":i=m.a.createElement(p["a"].Input,{fluid:true,type:a,placeholder:r,name:e,value:n[e]||"",onChange:d.handleInputChangeEdit});break;case"dropdown":var s=[];for(var c in l){s.push({key:c+l[c]["id"],text:l[c]["name"],value:l[c]["id"]})}i=m.a.createElement(p["a"].Select,{fluid:true,inline:true,name:e,options:s,placeholder:r,multiple:o?true:false,value:o?n[e]?n[e]:[]:n[e],onChange:d.handleInputChangeEdit});break;case"checkbox":i=[];for(var u in l){i.push(m.a.createElement(p["a"].Checkbox,{label:l[u]["name"],value:l[u]["name"],name:e,onChange:d.handleInputChangeCheckBox,checked:n.hasOwnProperty(e)==true&&n[e].indexOf(l[u]["name"])!=-1}))}break}return i});j(T(d),"handleInputChangeCheckBox",function(e,t){var n=t.name,a=t.value;var r=d.state.filterData;if(r.hasOwnProperty(n)&&r[n].indexOf(a)!==-1){r[n].splice(r[n].indexOf(a),1)}else{if(!r.hasOwnProperty(n)){r[n]=[]}r[n].push(a)}d.setState({filterData:r});d.getVendorsList()});j(T(d),"handleInputChangeAddComprassion",function(e,t){var n=t.value;var a=d.state.compareVendors;if(a["vendor1"]==n){a["vendor1"]=null}else if(a["vendor2"]==n){a["vendor2"]=null}else if(a["vendor3"]==n){a["vendor3"]=null}else if(!a["vendor1"]){a["vendor1"]=n}else if(!a["vendor2"]){a["vendor2"]=n}else if(!a["vendor3"]){a["vendor3"]=n}d.setState({compareVendors:a})});j(T(d),"handleInputChangeEdit",function(e,t){var n=t.name,a=t.value;e.preventDefault();var r=d.state.filterData;r[n]=a;d.setState({filterData:r});d.getVendorsList()});j(T(d),"checkCompareVendorDisabled",function(e){var t=d.state.compareVendors;if(e==t["vendor1"]||e==t["vendor2"]||e==t["vendor3"])return false;return t["vendor1"]&&t["vendor2"]&&t["vendor3"]?true:false});j(T(d),"checkCompareVendorChecked",function(e){var t=d.state.compareVendors;if(e==t["vendor1"]||e==t["vendor2"]||e==t["vendor3"])return true;return false});j(T(d),"checkCompareVendorButtonDisabled",function(){var e=d.state.compareVendors;var t=0;if(e["vendor1"]){t++}if(e["vendor2"]){t++}if(e["vendor3"]){t++}return t<2?true:false});d.state={loading:0,vendorsList:false,compareVendors:{},filter:false,filterData:{category:"vpn"}};d.getVendorsList();d.getFilterList();return d}x(n,[{key:"render",value:function e(){return m.a.createElement(w,k({},this.state,{getVendorsListOptions:this.getVendorsListOptions,handleInputChangeVendors:this.handleInputChangeVendors,getCompareUrl:this.getCompareUrl,getInput:this.getInput,handleInputChangeEdit:this.handleInputChangeEdit,handleInputChangeAddComprassion:this.handleInputChangeAddComprassion,checkCompareVendorDisabled:this.checkCompareVendorDisabled,checkCompareVendorChecked:this.checkCompareVendorChecked,checkCompareVendorButtonDisabled:this.checkCompareVendorButtonDisabled,checkUrl:this.checkUrl}))}}]);return n}(m.a.Component);var _=t["default"]=F},852:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(260);var r=n.n(a);var o={status:true,rows:{categories:{type:"checkbox",title:"Category",data:[{id:1,name:"VPN"},{id:2,name:"Hosting"},{id:3,name:"Filesharing"}]},duration:{type:"checkbox",title:"Duration",data:[{id:1,name:"1 month"},{id:2,name:"2 month"},{id:3,name:"3 month"},{id:4,name:"12 month"}]}}};var l={status:true,rows:{countries:{type:"dropdown",title:"Country",multiple:true,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]},technologies:{type:"checkbox",title:"Techonoly",multiple:true,data:[{id:1,name:"L2TP"},{id:2,name:"TLS"},{id:3,name:"PPTP"}]},licenses:{type:"dropdown",title:"License for",multiple:true,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]},servers:{type:"dropdown",title:"Servers",multiple:true,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]}}};function i(e){console.log("getFilterList----\x3e",e);var t=e["category"]=="bundle"?o:l;return new Promise(function(e){setTimeout(function(){e(t)},3e3)})}},879:function(e,t,n){"use strict";n.d(t,"b",function(){return r});n.d(t,"c",function(){return l});n.d(t,"a",function(){return s});var a={status:true,row:{id:1,name:"ExpressVPN",image:"/images/vpn-4.png",title:"ExpressVPN 1 year premium with 50% off",category:"VPN",descriptions:[{title:"48 Countries To Choose From",text:"<p>Our secure vpn access servers are monitored.  They’re access controlled & we are the only ones that operate them — no one else.  They do not permanently store IP addresses nor do they store logs.  Each server supports all popular protocols including: OpenVPN, HTTP Proxy, Smart DNS, Obfuscation & SSH SOCKS. With the very best server locations and low ping times, you will always find a fast server close to you.</p>"},{title:"No Logs Ever",text:"<p>We take your privacy very seriously. We do not store any logs of the websites you visit, we never will and never have. If required we will move jurisdictions and go above and beyond for you.</p>"},{title:"Bypass Internet Censorship",text:"<p>Many Countries including United Kingdom, France, Germany, East Asia, Central Asia, The Middle East/North Africa, Australia and many more employ internet censorship or filtering.  By using VPNSecure you can take back your freedom and enjoy un-restricted internet. In heavily restricted regions we offer obfuscation (Stealth VPN) built right into our hand crafted VPN client.</p>"},{title:"Choose Cipher Strength",text:"<p>Depending on your use case, you may want to encrypt your internet connection but also get the best speed available.  We give you the option to choose your encryption cipher, from a low cipher of 64bits, to high encryption using AES-256. This gives you the freedom and ability to choose the type of connection you prefer. </p>"},{title:"Meta Search",text:"<p>Meta Search is a metasearch engine, with the aim of protecting the privacy of its users. Metasearch does not share users IP addresses or search history with the search engines from which it gathers results. Meta Search will proxy results from leading search engines, so you don't have too. It's the privacy search engine, included in all premium VPN plans.</p>"}]}};function r(e){console.log("getVendorInfo----\x3e",e);return new Promise(function(e){setTimeout(function(){e(a)},200)})}var o={status:1,rows:[{id:"1",name:"VPNSecure.me",image:"https://api.savingsdealz.com/images/vpnsecure-logo.png",user_used:"2588"},{id:"2",name:"VPNShazam.com",image:"https://api.savingsdealz.com/images/vpn-shazam-logo.png",user_used:"786"},{id:"3",name:"Ivacy.com",image:"https://api.savingsdealz.com/images/vpn-ivacy-logo.jpg",user_used:"181"},{id:"4",name:"NordVPN.com",image:"https://api.savingsdealz.com/images/vpn-nordvpn-logo.png",user_used:"2554"}]};function l(e){console.log("getCompareList----\x3e",e);return new Promise(function(e){setTimeout(function(){e(o)},3e3)})}var i={status:true,info:[{id:1,name:"Surfhark",image:"/images/vpn-2.png"},{id:2,name:"PrivateVPN",image:"/images/vpn-3.png"},{id:3,name:"VPN",image:"/images/vpn-4.png"}],rows:[{title:"Company",type:"image",cells:["/images/vpn-2.png","/images/vpn-3.png","/images/vpn-4.png"]},{title:"Technoly",type:"text",cells:["L2TP","L2TP","L2TP"]},{title:"Number of devices per license",type:"text",cells:["2","7","4"]},{title:"Country",type:"dropdown",cells:[["USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland","USA","Germany","Poland"],["USA","Germany","Poland"],["USA","Germany","Poland"]]},{title:"Number of servers",type:"text",cells:["150","100","500"]},{title:"Mobile app",type:"checkbox",cells:["1","1","1"]},{title:"Keep logs",type:"checkbox",cells:["1","0","0"]},{title:"Switch Kill",type:"checkbox",cells:["0","1","1"]}]};function s(e){console.log("getCompareVendorsInfo----\x3e",e);return new Promise(function(e){setTimeout(function(){e(i)},200)})}}}]);