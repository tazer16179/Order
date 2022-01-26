exports.ids=[14],exports.modules={47:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n(3),i=n(13),l=n(2),u=n(61),f=n(62),s=n(64),d=n(65),b=function(e){return a.a.createElement("div",null,a.a.createElement(l.Container,null,a.a.createElement(l.Grid,null,(t=e.url,n="https://savingsdealz.com"+(void 0!==t?t:""),a.a.createElement(i.Helmet,{key:Math.random()},a.a.createElement("title",null,"Savingsdealz"),a.a.createElement("meta",{name:"robots",content:"index, follow"}),a.a.createElement("link",{rel:"canonical",href:n}))),a.a.createElement(l.Grid.Row,{id:"sliderBlock"},a.a.createElement(l.Grid.Column,{width:16,verticalAlign:"middle"},a.a.createElement(u.a,null))))),a.a.createElement("div",{id:"bundlePage"},a.a.createElement(l.Container,null,a.a.createElement(l.Grid,null,a.a.createElement(l.Grid.Row,null,a.a.createElement(l.Grid.Column,{width:4,mobile:16,id:"leftSidebar"},a.a.createElement(l.Segment,null,a.a.createElement("div",{className:"header"},"Find Bundle by your needs"),a.a.createElement(d.a,{searchData:{category:"bundle"},buttonTitle:"Find Bundle for you",actionClickFind:e.actionClickFind})),a.a.createElement(l.Segment,null,a.a.createElement(s.a,{searchData:{category:"bundle"},actionCheckedBrands:e.actionCheckedBrands}))),a.a.createElement(l.Grid.Column,{id:"contentBlock",width:9,mobile:16},a.a.createElement(f.a,{searchData:e.searchData})))))));var t,n},m=n(59),y=n(57);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var a=w(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={fetchCartOffers:n(14).a},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(c,e);var t,n,r,o=E(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),C(j(t=o.call(this,e)),"getFilterList",(function(){var e=t.state.searchData;Object(m.a)(e).then((function(e){var n=e.status,r=e.rows;n&&t.setState({filter:r})}),(function(e){alert("Rejected: "+e)}))})),C(j(t),"actionCheckedBrands",(function(e){var n=t.state.searchData,r=Object(y.a)(e),a=Object(y.a)(n);a.brands=r,t.setState({searchData:a})})),C(j(t),"actionClickFind",(function(e){var n=t.state.searchData,r=Object(y.a)(e),a=Object(y.a)(n),o=Object.assign(r,a);t.setState({searchData:o})})),t.state={loading:0,filter:!1,filterData:{},searchData:{category:"bundle"}},t.getFilterList(),t}return t=c,(n=[{key:"render",value:function(){return a.a.createElement(b,h({},this.state,{actionClickFind:this.actionClickFind,actionCheckedBrands:this.actionCheckedBrands}))}}])&&v(t.prototype,n),r&&v(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(a.a.Component);t.default=Object(c.withRouter)(Object(o.connect)((function(e){return{getCartOffers:e.getCartOffers}}),k)(S))}};