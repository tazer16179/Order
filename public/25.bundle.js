(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{793:function(e,t,a){"use strict";a.r(t);var r=a(0);var n=a.n(r);var c=a(32);var o=a(804);var i=a(797);var l=a(808);var s=a(823);var u=function e(){var t="https://savingsdealz.com";return n.a.createElement(o["Helmet"],{key:Math.random()},n.a.createElement("title",null,"404 Page not found | Savingsdealz"),n.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),n.a.createElement("link",{rel:"canonical",href:t}))};var d=function e(){return n.a.createElement("div",null,u(),n.a.createElement(i["a"],null,n.a.createElement(l["a"],null,n.a.createElement(s["a"],{as:"h1",textAlign:"center"},"404",n.a.createElement(s["a"].Subheader,null,"The page you requested cannot be found! Perhaps it was deleted, or you entered an invalid address.")),n.a.createElement("p",null,"In any case, we will help to find the necessary information for you - you can return to the ",n.a.createElement(c["b"],{to:"/"},"main page")," to get started with her search for the information you need."))))};var f=d;function b(e){"@babel/helpers - typeof";return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function p(){p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return p.apply(this,arguments)}function v(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function m(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function h(e,t,a){if(t)m(e.prototype,t);if(a)m(e,a);Object.defineProperty(e,"prototype",{writable:false});return e}function y(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)O(e,t)}function O(e,t){O=Object.setPrototypeOf||function e(t,a){t.__proto__=a;return t};return O(e,t)}function j(n){var c=E();return function e(){var t=w(n),a;if(c){var r=w(this).constructor;a=Reflect.construct(t,arguments,r)}else{a=t.apply(this,arguments)}return g(this,a)}}function g(e,t){if(t&&(b(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return N(e)}function N(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function E(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function w(e){w=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return w(e)}var P=function(e){y(a,e);var t=j(a);function a(e){v(this,a);return t.call(this,e)}h(a,[{key:"render",value:function e(){return n.a.createElement(f,p({},this.state,{url:this.props.match.url}))}}]);return a}(n.a.Component);var k=t["default"]=P},808:function(e,t,a){"use strict";var r=a(5);var z=a.n(r);var n=a(112);var c=a(6);var T=a.n(c);var o=a(0);var S=a.n(o);var x=a(24);var _=a(163);var R=a(164);var A=a(8);function b(e){var t=e.children,a=e.className,r=e.compact,n=e.content,c=e.horizontal,o=e.piled,i=e.raised,l=e.size,s=e.stacked;var u=T()("ui",l,Object(x["a"])(r,"compact"),Object(x["a"])(c,"horizontal"),Object(x["a"])(o,"piled"),Object(x["a"])(i,"raised"),Object(x["a"])(s,"stacked"),"segments",a);var d=Object(_["a"])(b,e);var f=Object(R["a"])(b,e);return S.a.createElement(f,z()({},d,{className:u}),A["a"].isNil(t)?n:t)}b.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"];b.propTypes=false?undefined:{};var i=b;function l(e){var t=e.children,a=e.className,r=e.content;var n=T()("inline",a);var c=Object(_["a"])(l,e);var o=Object(R["a"])(l,e);return S.a.createElement(o,z()({},c,{className:n}),A["a"].isNil(t)?r:t)}l.handledProps=["as","children","className","content"];l.propTypes=false?undefined:{};var s=l;function G(e){var t=e.attached,a=e.basic,r=e.children,n=e.circular,c=e.className,o=e.clearing,i=e.color,l=e.compact,s=e.content,u=e.disabled,d=e.floated,f=e.inverted,b=e.loading,p=e.placeholder,v=e.padded,m=e.piled,h=e.raised,y=e.secondary,O=e.size,j=e.stacked,g=e.tertiary,N=e.textAlign,E=e.vertical;var w=T()("ui",i,O,Object(x["a"])(a,"basic"),Object(x["a"])(n,"circular"),Object(x["a"])(o,"clearing"),Object(x["a"])(l,"compact"),Object(x["a"])(u,"disabled"),Object(x["a"])(f,"inverted"),Object(x["a"])(b,"loading"),Object(x["a"])(p,"placeholder"),Object(x["a"])(m,"piled"),Object(x["a"])(h,"raised"),Object(x["a"])(y,"secondary"),Object(x["a"])(j,"stacked"),Object(x["a"])(g,"tertiary"),Object(x["a"])(E,"vertical"),Object(x["b"])(t,"attached"),Object(x["b"])(v,"padded"),Object(x["d"])(N),Object(x["e"])(d,"floated"),"segment",c);var P=Object(_["a"])(G,e);var k=Object(R["a"])(G,e);return S.a.createElement(k,z()({},P,{className:w}),A["a"].isNil(r)?s:r)}G.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"];G.Group=i;G.Inline=s;G.propTypes=false?undefined:{};var u=t["a"]=G},823:function(e,t,a){"use strict";var r=a(5);var E=a.n(r);var n=a(112);var c=a(6);var w=a.n(c);var o=a(0);var P=a.n(o);var k=a(24);var z=a(163);var T=a(164);var S=a(8);var x=a(173);var _=a(358);var i=a(236);function l(e){var t=e.children,a=e.className,r=e.content;var n=w()("sub header",a);var c=Object(z["a"])(l,e);var o=Object(T["a"])(l,e);return P.a.createElement(o,E()({},c,{className:n}),S["a"].isNil(t)?r:t)}l.handledProps=["as","children","className","content"];l.propTypes=false?undefined:{};l.create=Object(i["e"])(l,function(e){return{content:e}});var R=l;function s(e){var t=e.children,a=e.className,r=e.content;var n=w()("content",a);var c=Object(z["a"])(s,e);var o=Object(T["a"])(s,e);return P.a.createElement(o,E()({},c,{className:n}),S["a"].isNil(t)?r:t)}s.handledProps=["as","children","className","content"];s.propTypes=false?undefined:{};var A=s;function G(e){var t=e.attached,a=e.block,r=e.children,n=e.className,c=e.color,o=e.content,i=e.disabled,l=e.dividing,s=e.floated,u=e.icon,d=e.image,f=e.inverted,b=e.size,p=e.sub,v=e.subheader,m=e.textAlign;var h=w()("ui",c,b,Object(k["a"])(a,"block"),Object(k["a"])(i,"disabled"),Object(k["a"])(l,"dividing"),Object(k["e"])(s,"floated"),Object(k["a"])(u===true,"icon"),Object(k["a"])(d===true,"image"),Object(k["a"])(f,"inverted"),Object(k["a"])(p,"sub"),Object(k["b"])(t,"attached"),Object(k["d"])(m),"header",n);var y=Object(z["a"])(G,e);var O=Object(T["a"])(G,e);if(!S["a"].isNil(r)){return P.a.createElement(O,E()({},y,{className:h}),r)}var j=x["a"].create(u,{autoGenerateKey:false});var g=_["a"].create(d,{autoGenerateKey:false});var N=R.create(v,{autoGenerateKey:false});if(j||g){return P.a.createElement(O,E()({},y,{className:h}),j||g,(o||N)&&P.a.createElement(A,null,o,N))}return P.a.createElement(O,E()({},y,{className:h}),o,N)}G.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"];G.propTypes=false?undefined:{};G.Content=A;G.Subheader=R;var u=t["a"]=G}}]);