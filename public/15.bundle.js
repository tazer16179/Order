(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{779:function(e,t,a){"use strict";a.r(t);var r=a(0);var n=a.n(r);var c=a(32);var i=a(804);var o=a(797);var l=a(822);var s=a(808);var u=a(823);var d=a(994);var f=[{key:"cooperation",text:"Cooperation",value:"cooperation"}];var v=function e(t){return n.a.createElement(i["Helmet"],{key:Math.random()},n.a.createElement("title",null,"Savingsdealz"),n.a.createElement("meta",{name:"robots",content:"index, follow"}))};var p=function e(t){return n.a.createElement("div",null,v(t.url),n.a.createElement(o["a"],null,n.a.createElement(l["a"],{id:"breadcrumb"},n.a.createElement(l["a"].Section,{link:true,as:c["b"],to:"/"},"Main"),n.a.createElement(l["a"].Divider,{icon:"right chevron"}),n.a.createElement(l["a"].Section,{active:true},"Contact us")),n.a.createElement(s["a"],{id:"signinBlock"},n.a.createElement(u["a"],{as:"h1",textAlign:"center"},"Contact us"),n.a.createElement(d["a"],null,n.a.createElement(d["a"].Input,{fluid:true,label:"Email",placeholder:"Email",required:true}),n.a.createElement(d["a"].Select,{label:"Question",options:f,defaultValue:f[0].value,required:true}),n.a.createElement(d["a"].TextArea,{label:"Message",required:true}),n.a.createElement(d["a"].Button,{primary:true,fluid:true,color:"red",content:"Sent"})))))};var b=p;var m=a(805);var h=a(45);var O=a.n(h);function y(e){return O()("https://api.savingsdealz.com/support/add",{method:"post",data:e,withCredentials:true}).then(function(e){return e.data}).catch(function(e){console.log(e)})}function j(e){"@babel/helpers - typeof";return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function g(){g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return g.apply(this,arguments)}function E(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function N(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?E(Object(a),!0).forEach(function(e){A(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function w(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function k(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function P(e,t,a){if(t)k(e.prototype,t);if(a)k(e,a);Object.defineProperty(e,"prototype",{writable:false});return e}function S(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)C(e,t)}function C(e,t){C=Object.setPrototypeOf||function e(t,a){t.__proto__=a;return t};return C(e,t)}function T(n){var c=_();return function e(){var t=R(n),a;if(c){var r=R(this).constructor;a=Reflect.construct(t,arguments,r)}else{a=t.apply(this,arguments)}return z(this,a)}}function z(e,t){if(t&&(j(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return x(e)}function x(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function R(e){R=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return R(e)}function A(e,t,a){if(t in e){Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true})}else{e[t]=a}return e}var D=function(e){S(a,e);var t=T(a);function a(e){var r;w(this,a);r=t.call(this,e);A(x(r),"handleSubmit",function(e){e.preventDefault();if(!r.validateFormValues()){return false}r.setState({loading:1});var t=N({},r.state);var a=y(t);a.then(function(e){var t=e.status;if(t){}},function(e){alert("Rejected: "+e)})});A(x(r),"validateFormValues",function(){var e=r.state.support.email;var t=false,a=t.email_error;if(!Object(m["b"])(e)){a=true}if(a){r.setState({email_error:a});return false}return true});r.state={loading:0};return r}P(a,[{key:"componentWillReceiveProps",value:function e(t){}},{key:"render",value:function e(){return n.a.createElement(b,g({},this.state,{handleSubmit:this.handleSubmit,handleInputChange:this.handleInputChange,handleChangeType:this.handleChangeType}))}}]);return a}(n.a.Component);var G=t["default"]=D},805:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a.d(t,"b",function(){return c});function r(e){var t={};for(var a in e){t[a]=e[a]}return t}function n(e){if(e==46||e==8||e==9||e==27||e==110||e==190||e==65&&ctrlKey===true||e>=35&&e<=39){return true}else{if((e<48||e>57)&&(e<96||e>105)){return false}}return true}function c(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}function i(e,t){if(!t)t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=a.exec(t);if(!r)return null;if(!r[2])return"";return decodeURIComponent(r[2].replace(/\+/g," "))}function o(e){e=e.toString();return e.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")}},808:function(e,t,a){"use strict";var r=a(5);var S=a.n(r);var n=a(112);var c=a(6);var C=a.n(c);var i=a(0);var T=a.n(i);var z=a(24);var x=a(163);var _=a(164);var R=a(8);function v(e){var t=e.children,a=e.className,r=e.compact,n=e.content,c=e.horizontal,i=e.piled,o=e.raised,l=e.size,s=e.stacked;var u=C()("ui",l,Object(z["a"])(r,"compact"),Object(z["a"])(c,"horizontal"),Object(z["a"])(i,"piled"),Object(z["a"])(o,"raised"),Object(z["a"])(s,"stacked"),"segments",a);var d=Object(x["a"])(v,e);var f=Object(_["a"])(v,e);return T.a.createElement(f,S()({},d,{className:u}),R["a"].isNil(t)?n:t)}v.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"];v.propTypes=false?undefined:{};var o=v;function l(e){var t=e.children,a=e.className,r=e.content;var n=C()("inline",a);var c=Object(x["a"])(l,e);var i=Object(_["a"])(l,e);return T.a.createElement(i,S()({},c,{className:n}),R["a"].isNil(t)?r:t)}l.handledProps=["as","children","className","content"];l.propTypes=false?undefined:{};var s=l;function A(e){var t=e.attached,a=e.basic,r=e.children,n=e.circular,c=e.className,i=e.clearing,o=e.color,l=e.compact,s=e.content,u=e.disabled,d=e.floated,f=e.inverted,v=e.loading,p=e.placeholder,b=e.padded,m=e.piled,h=e.raised,O=e.secondary,y=e.size,j=e.stacked,g=e.tertiary,E=e.textAlign,N=e.vertical;var w=C()("ui",o,y,Object(z["a"])(a,"basic"),Object(z["a"])(n,"circular"),Object(z["a"])(i,"clearing"),Object(z["a"])(l,"compact"),Object(z["a"])(u,"disabled"),Object(z["a"])(f,"inverted"),Object(z["a"])(v,"loading"),Object(z["a"])(p,"placeholder"),Object(z["a"])(m,"piled"),Object(z["a"])(h,"raised"),Object(z["a"])(O,"secondary"),Object(z["a"])(j,"stacked"),Object(z["a"])(g,"tertiary"),Object(z["a"])(N,"vertical"),Object(z["b"])(t,"attached"),Object(z["b"])(b,"padded"),Object(z["d"])(E),Object(z["e"])(d,"floated"),"segment",c);var k=Object(x["a"])(A,e);var P=Object(_["a"])(A,e);return T.a.createElement(P,S()({},k,{className:w}),R["a"].isNil(r)?s:r)}A.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"];A.Group=o;A.Inline=s;A.propTypes=false?undefined:{};var u=t["a"]=A},822:function(e,t,a){"use strict";var r=a(5);var d=a.n(r);var n=a(112);var c=a(359);var f=a.n(c);var i=a(6);var v=a.n(i);var o=a(0);var p=a.n(o);var b=a(163);var m=a(164);var h=a(8);var l=a(28);var s=a.n(l);var u=a(21);var O=a.n(u);var y=a(236);var j=a(173);function g(e){var t=e.children,a=e.className,r=e.content,n=e.icon;var c=v()("divider",a);var i=Object(b["a"])(g,e);var o=Object(m["a"])(g,e);if(!O()(n)){return j["a"].create(n,{defaultProps:s()({},i,{className:c}),autoGenerateKey:false})}if(!O()(r)){return p.a.createElement(o,d()({},i,{className:c}),r)}return p.a.createElement(o,d()({},i,{className:c}),h["a"].isNil(t)?"/":t)}g.handledProps=["as","children","className","content","icon"];g.propTypes=false?undefined:{};g.create=Object(y["e"])(g,function(e){return{icon:e}});var E=g;var N=a(16);var w=a.n(N);var k=a(17);var P=a.n(k);var S=a(18);var C=a.n(S);var T=a(15);var z=a.n(T);var x=a(3);var _=a.n(x);var R=a(19);var A=a.n(R);var D=a(1);var G=a.n(D);var I=a(7);var K=a.n(I);var $=a(24);var B=function(e){A()(u,e);function u(){var e;var r;w()(this,u);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++){a[n]=arguments[n]}r=C()(this,(e=z()(u)).call.apply(e,[this].concat(a)));G()(_()(r),"computeElementType",function(){var e=r.props,t=e.link,a=e.onClick;if(t||a)return"a"});G()(_()(r),"handleClick",function(e){return K()(r.props,"onClick",e,r.props)});return r}P()(u,[{key:"render",value:function e(){var t=this.props,a=t.active,r=t.children,n=t.className,c=t.content,i=t.href;var o=v()(Object($["a"])(a,"active"),"section",n);var l=Object(b["a"])(u,this.props);var s=Object(m["a"])(u,this.props,this.computeElementType);return p.a.createElement(s,d()({},l,{className:o,href:i,onClick:this.handleClick}),h["a"].isNil(r)?c:r)}}]);return u}(o["Component"]);G()(B,"handledProps",["active","as","children","className","content","href","link","onClick"]);B.propTypes=false?undefined:{};B.create=Object(y["e"])(B,function(e){return{content:e,link:true}});function q(e){var t=e.children,a=e.className,n=e.divider,c=e.icon,i=e.sections,r=e.size;var o=v()("ui",r,"breadcrumb",a);var l=Object(b["a"])(q,e);var s=Object(m["a"])(q,e);if(!h["a"].isNil(t)){return p.a.createElement(s,d()({},l,{className:o}),t)}var u=[];f()(i,function(e,t){var a=B.create(e);u.push(a);if(t!==i.length-1){var r="".concat(a.key,"_divider")||false;u.push(E.create({content:n,icon:c,key:r}))}});return p.a.createElement(s,d()({},l,{className:o}),u)}q.handledProps=["as","children","className","divider","icon","sections","size"];q.propTypes=false?undefined:{};q.Divider=E;q.Section=B;var M=t["a"]=q},823:function(e,t,a){"use strict";var r=a(5);var N=a.n(r);var n=a(112);var c=a(6);var w=a.n(c);var i=a(0);var k=a.n(i);var P=a(24);var S=a(163);var C=a(164);var T=a(8);var z=a(173);var x=a(358);var o=a(236);function l(e){var t=e.children,a=e.className,r=e.content;var n=w()("sub header",a);var c=Object(S["a"])(l,e);var i=Object(C["a"])(l,e);return k.a.createElement(i,N()({},c,{className:n}),T["a"].isNil(t)?r:t)}l.handledProps=["as","children","className","content"];l.propTypes=false?undefined:{};l.create=Object(o["e"])(l,function(e){return{content:e}});var _=l;function s(e){var t=e.children,a=e.className,r=e.content;var n=w()("content",a);var c=Object(S["a"])(s,e);var i=Object(C["a"])(s,e);return k.a.createElement(i,N()({},c,{className:n}),T["a"].isNil(t)?r:t)}s.handledProps=["as","children","className","content"];s.propTypes=false?undefined:{};var R=s;function A(e){var t=e.attached,a=e.block,r=e.children,n=e.className,c=e.color,i=e.content,o=e.disabled,l=e.dividing,s=e.floated,u=e.icon,d=e.image,f=e.inverted,v=e.size,p=e.sub,b=e.subheader,m=e.textAlign;var h=w()("ui",c,v,Object(P["a"])(a,"block"),Object(P["a"])(o,"disabled"),Object(P["a"])(l,"dividing"),Object(P["e"])(s,"floated"),Object(P["a"])(u===true,"icon"),Object(P["a"])(d===true,"image"),Object(P["a"])(f,"inverted"),Object(P["a"])(p,"sub"),Object(P["b"])(t,"attached"),Object(P["d"])(m),"header",n);var O=Object(S["a"])(A,e);var y=Object(C["a"])(A,e);if(!T["a"].isNil(r)){return k.a.createElement(y,N()({},O,{className:h}),r)}var j=z["a"].create(u,{autoGenerateKey:false});var g=x["a"].create(d,{autoGenerateKey:false});var E=_.create(b,{autoGenerateKey:false});if(j||g){return k.a.createElement(y,N()({},O,{className:h}),j||g,(i||E)&&k.a.createElement(R,null,i,E))}return k.a.createElement(y,N()({},O,{className:h}),i,E)}A.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"];A.propTypes=false?undefined:{};A.Content=R;A.Subheader=_;var u=t["a"]=A}}]);