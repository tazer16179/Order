exports.ids=[3],exports.modules={59:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),l=n(3),i=n(12),c=n(2),u=n(73),s=n(76),f=n(74),d=n(77),m=function(e){return a.a.createElement("div",null,a.a.createElement(c.Container,null,a.a.createElement(c.Grid,null,(t=e.url,n="https://savingsdealz.com"+(void 0!==t?t:""),a.a.createElement(i.Helmet,{key:Math.random()},a.a.createElement("title",null,"Savingsdealz"),a.a.createElement("meta",{name:"robots",content:"index, follow"}),a.a.createElement("link",{rel:"canonical",href:n}))),a.a.createElement(c.Grid.Row,{id:"sliderBlock"},a.a.createElement(c.Grid.Column,{width:16,verticalAlign:"middle"},a.a.createElement(u.a,null))))),a.a.createElement("div",{id:"bundlePage"},a.a.createElement(c.Container,null,a.a.createElement(c.Grid,null,a.a.createElement(c.Grid.Row,null,a.a.createElement(c.Grid.Column,{width:4,mobile:16,id:"leftSidebar"},a.a.createElement(c.Segment,null,a.a.createElement("div",{className:"header"},"Find Bundle by your needs"),a.a.createElement(d.a,{searchData:{category:"bundle"},buttonTitle:"Find Bundle for you",actionClickFind:e.actionClickFind})),a.a.createElement(c.Segment,null,a.a.createElement(f.a,{searchData:{category:"bundle"},actionCheckedBrands:e.actionCheckedBrands}))),a.a.createElement(c.Grid.Column,{id:"contentBlock",width:9,mobile:16},a.a.createElement(s.a,{searchData:e.searchData})))))));var t,n},h=n(71),p=n(69);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var a=O(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={fetchCartOffers:n(14).a},C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(l,e);var t,n,r,o=E(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),j(w(t=o.call(this,e)),"getFilterList",(function(){var e=t.state.searchData;Object(h.a)(e).then((function(e){var n=e.status,r=e.rows;n&&t.setState({filter:r})}),(function(e){alert("Rejected: "+e)}))})),j(w(t),"actionCheckedBrands",(function(e){var n=t.state.searchData,r=Object(p.a)(e),a=Object(p.a)(n);a.brands=r,t.setState({searchData:a})})),j(w(t),"actionClickFind",(function(e){var n=t.state.searchData,r=Object(p.a)(e),a=Object(p.a)(n),o=Object.assign(r,a);t.setState({searchData:o})})),t.state={loading:0,filter:!1,filterData:{},searchData:{category:"bundle"}},t.getFilterList(),t}return t=l,(n=[{key:"render",value:function(){return a.a.createElement(m,b({},this.state,{actionClickFind:this.actionClickFind,actionCheckedBrands:this.actionCheckedBrands}))}}])&&g(t.prototype,n),r&&g(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(a.a.Component);t.default=Object(l.withRouter)(Object(o.connect)((function(e){return{getCartOffers:e.getCartOffers}}),k)(C))},69:function(e,t,n){"use strict";function r(e){var t={};for(var n in e)t[n]=e[n];return t}function a(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}))},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(13);var r={status:!0,rows:{categories:{type:"checkbox",title:"Category",data:[{id:1,name:"VPN"},{id:2,name:"Hosting"},{id:3,name:"Filesharing"}]},duration:{type:"checkbox",title:"Duration",data:[{id:1,name:"1 month"},{id:2,name:"2 month"},{id:3,name:"3 month"},{id:4,name:"12 month"}]}}},a={status:!0,rows:{countries:{type:"dropdown",title:"Country",multiple:!0,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]},technologies:{type:"checkbox",title:"Techonoly",multiple:!0,data:[{id:1,name:"L2TP"},{id:2,name:"TLS"},{id:3,name:"PPTP"}]},licenses:{type:"dropdown",title:"License for",multiple:!0,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]},servers:{type:"dropdown",title:"Servers",multiple:!0,data:[{id:1,name:"Andora"},{id:2,name:"Germany"},{id:3,name:"USA"}]}}};function o(e){console.log("getFilterList----\x3e",e);var t="bundle"==e.category?r:a;return new Promise((function(e){setTimeout((function(){e(t)}),3e3)}))}},73:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(4),n(3),n(44)),l=n.n(o),i=n(2);function c(e){e.className,e.style;var t=e.onClick;return a.a.createElement(i.Image,{alt:"One slide",src:"/images/arrow-left.svg",onClick:t,className:"custom-slick prev mobile hidden",width:20,height:20})}function u(e){e.className,e.style;var t=e.onClick;return a.a.createElement(i.Image,{alt:"Two slide",src:"/images/arrow-right.svg",onClick:t,className:"custom-slick next mobile hidden",width:20,height:20})}var s={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,prevArrow:a.a.createElement(c,null),nextArrow:a.a.createElement(u,null),customPaging:function(e){return a.a.createElement("div",{className:"slider-paging"})}},f=function(e){return a.a.createElement(l.a,s,e.slides?Object.keys(e.slides).map((function(t){return a.a.createElement("div",{key:"slide-"+e.slides.id},a.a.createElement(i.Image,{alt:"slider-image",src:e.slides[t].image}))})):a.a.createElement("div",null,a.a.createElement(i.Placeholder,{id:"previewSlide"},a.a.createElement(i.Placeholder.Image,null))))},d=(n(13),{status:!0,rows:[{id:1,image:"https://api.savingsdealz.com/images/slider/slide-1.png"},{id:2,image:"https://api.savingsdealz.com/images/slider/slide-2.png"},{id:3,image:"https://api.savingsdealz.com/images/slider/slide-3.png"},{id:4,image:"https://api.savingsdealz.com/images/slider/slide-4.png"},{id:5,image:"https://api.savingsdealz.com/images/slider/slide-5.png"}]});function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(l,e);var t,n,r,o=y(l);function l(e,t){var n,r,a,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),n=o.call(this,e,t),r=g(n),i=function(){var e;(console.log("getSliderList----\x3e",e),new Promise((function(e){setTimeout((function(){e(d)}),2e3)}))).then((function(e){var t=e.status,r=e.rows;t&&n.setState({slides:r})}),(function(e){alert("Rejected: "+e)}))},(a="getSliderList")in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i,n.state={loading:0,slides:!1},n.getSliderList(),n}return t=l,(n=[{key:"render",value:function(){return a.a.createElement(f,this.state)}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(a.a.Component);t.a=E},74:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(4),n(3),n(2)),l=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"header"},"Brands"),a.a.createElement(o.Form,null,e.brands?a.a.createElement(o.Form.Group,{grouped:!0},Object.keys(e.brands).map((function(t){return a.a.createElement(o.Form.Checkbox,{onChange:e.handleInputChangeCheckBox,checked:-1!=e.checkBrands.indexOf(e.brands[t].id),value:e.brands[t].id,label:e.brands[t].name})}))):a.a.createElement(o.Form.Field,null,a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"})))))},i={status:!0,rows:[{id:1,name:"ExpressVPN"},{id:2,name:"NordVPN"},{id:3,name:"VPNsecure"},{id:4,name:"VPNium"},{id:5,name:"VPNshazam"},{id:6,name:"VPNmonster"},{id:7,name:"Private internet access"}]};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var a=p(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(c,e);var t,n,r,o=d(c);function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),y(h(n=o.call(this,e,t)),"getBrandList",(function(){var e,t=n.state.searchData;(e=t,console.log("getBrandList----\x3e",e),new Promise((function(e){setTimeout((function(){e(i)}),4e3)}))).then((function(e){var t=e.status,r=e.rows;t&&n.setState({brands:r})}),(function(e){alert("Rejected: "+e)}))})),y(h(n),"handleInputChangeCheckBox",(function(e,t){var r=t.value,a=n.state.checkBrands;-1!==a.indexOf(r)?a.splice(a.indexOf(r),1):a.push(r),n.props.actionCheckedBrands(a),n.setState({checkBrands:a})})),n.state={loading:0,searchData:e.searchData,brands:!1,checkBrands:[]},n.getBrandList(),n}return t=c,(n=[{key:"render",value:function(){return a.a.createElement(l,u({},this.state,{handleInputChangeCheckBox:this.handleInputChangeCheckBox}))}}])&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(a.a.Component);t.a=b},77:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),l=(n(4),function(e){return a.a.createElement(o.Form,null,e.filter?Object.keys(e.filter).map((function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Form.Group,{inline:!0,className:"subheader"},a.a.createElement("label",{className:"subheader"},e.filter[t].title)),e.getInput(t,e.filter[t]))})):a.a.createElement(o.Form.Field,null,a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}),a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Form.Button,{className:"center-button",primary:!0,content:e.buttonTitle,onClick:e.handleClickFindButton,disabled:!e.filter}))}),i=n(71);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var a=p(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(m,e);var t,n,r,c=d(m);function m(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),y(h(n=c.call(this,e,t)),"getFilterList",(function(){var e=n.props.searchData;Object(i.a)(e).then((function(e){var t=e.status,r=e.rows;t&&n.setState({filter:r})}),(function(e){alert("Rejected: "+e)}))})),y(h(n),"getInput",(function(e,t){var r=n.state.filterData,l=t.type,i=t.title,c=t.multiple,u=t.data;l||(l="text");var s=!1;switch(l){case"text":case"number":case"email":s=a.a.createElement(o.Form.Input,{fluid:!0,type:l,placeholder:i,name:e,value:r[e]||"",onChange:n.handleInputChangeEdit});break;case"dropdown":var f=[];for(var d in u)f.push({key:d+u[d].id,text:u[d].name,value:u[d].id});s=a.a.createElement(o.Form.Select,{fluid:!0,inline:!0,name:e,options:f,placeholder:i,multiple:!!c,value:c?r[e]?r[e]:[]:r[e],onChange:n.handleInputChangeEdit});break;case"checkbox":for(var m in s=[],u)s.push(a.a.createElement(o.Form.Checkbox,{label:u[m].name,value:u[m].name,name:e,onChange:n.handleInputChangeCheckBox,checked:1==r.hasOwnProperty(e)&&-1!=r[e].indexOf(u[m].name)}))}return s})),y(h(n),"handleInputChangeCheckBox",(function(e,t){var r=t.name,a=t.value,o=n.state.filterData;o.hasOwnProperty(r)&&-1!==o[r].indexOf(a)?o[r].splice(o[r].indexOf(a),1):(o.hasOwnProperty(r)||(o[r]=[]),o[r].push(a)),n.setState({filterData:o})})),y(h(n),"handleInputChangeEdit",(function(e,t){var r=t.name,a=t.value;e.preventDefault();var o=n.state.filterData;o[r]=a,n.setState({filterData:o})})),y(h(n),"handleClickFindButton",(function(){var e=n.state.filterData;n.props.actionClickFind(e)})),n.state={loading:0,buttonTitle:e.buttonTitle,filter:!1,filterData:{}},n.getFilterList(),n}return t=m,(n=[{key:"render",value:function(){return a.a.createElement(l,u({},this.state,{getInput:this.getInput,handleClickFindButton:this.handleClickFindButton}))}}])&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),m}(a.a.Component);t.a=b}};