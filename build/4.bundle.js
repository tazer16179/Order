exports.ids=[4],exports.modules={50:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),l=n(3),c=n(13),i=[1,2,3,4,5],d=function(e){return a.a.createElement("div",null,(e.url,a.a.createElement(c.Helmet,{key:Math.random()},a.a.createElement("title",null,"2022 s vpn Compare tool free and Good"),a.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}))),a.a.createElement(o.Container,null,a.a.createElement(o.Breadcrumb,{id:"breadcrumb"},a.a.createElement(o.Breadcrumb.Section,{link:!0,as:l.Link,to:"/"},"Main"),a.a.createElement(o.Breadcrumb.Divider,{icon:"right chevron"}),a.a.createElement(o.Breadcrumb.Section,{active:!0},"Compare")),a.a.createElement(o.Grid,null,a.a.createElement(o.Grid.Row,{stretched:!0,id:"compareBlock"},a.a.createElement(o.Grid.Column,{width:16},a.a.createElement(o.Segment,null,a.a.createElement(o.Header,{as:"h1",textAlign:"center"},"VPN provide comparison",a.a.createElement(o.Header.Subheader,null,"Side - by - side comparison of features? prices and review. Select up to 3 VPNs")),a.a.createElement(o.Form,null,a.a.createElement(o.Form.Group,{widths:"equal"},a.a.createElement(o.Form.Dropdown,{placeholder:"Select vendor",clearable:!0,fluid:!0,search:!0,selection:!0,name:"vendor1",value:e.compareVendors.vendor1,options:e.getVendorsListOptions(),loading:!e.vendorsList,onChange:e.handleInputChangeVendors}),a.a.createElement("label",{className:"vs-divided"},"VS"),a.a.createElement(o.Form.Dropdown,{placeholder:"Select vendor",clearable:!0,fluid:!0,search:!0,selection:!0,name:"vendor2",value:e.compareVendors.vendor2,options:e.getVendorsListOptions(),loading:!e.vendorsList,onChange:e.handleInputChangeVendors}),a.a.createElement("label",{className:"vs-divided"},"VS"),a.a.createElement(o.Form.Dropdown,{placeholder:"Select vendor",clearable:!0,fluid:!0,search:!0,selection:!0,name:"vendor3",value:e.compareVendors.vendor3,options:e.getVendorsListOptions(),loading:!e.vendorsList,onChange:e.handleInputChangeVendors})),a.a.createElement(o.Button,{as:l.Link,to:e.getCompareUrl(),disabled:e.checkCompareVendorButtonDisabled(),primary:!0,className:"compare-button"},"Compare"))))),a.a.createElement(o.Grid.Row,null,a.a.createElement(o.Grid.Column,{width:16},a.a.createElement(o.Segment,null,a.a.createElement(o.Grid,{columns:1},a.a.createElement(o.Grid.Column,{textAlign:"left"},a.a.createElement(o.Form,null,a.a.createElement(o.Form.Group,{widths:"equal"},e.filter?Object.keys(e.filter).map((function(t){return a.a.createElement(o.Form.Field,{fluid:!0},a.a.createElement("label",{className:"subheader"},e.filter[t].title),e.getInput(t,e.filter[t]))})):a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Form.Field,{fluid:!0},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Form.Field,{fluid:!0},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Form.Field,{fluid:!0},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Form.Field,{fluid:!0},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"short"}),a.a.createElement(o.Placeholder.Line,{length:"full"})))))))),a.a.createElement(o.Divider,null),a.a.createElement(o.Grid,{columns:1},a.a.createElement(o.Grid.Column,null,a.a.createElement(o.Table,{basic:!0,id:"compareListTable"},e.vendorsList?Object.keys(e.vendorsList).map((function(t){return a.a.createElement(o.Table.Row,null,a.a.createElement(o.Table.Cell,null,e.vendorsList[t].name),a.a.createElement(o.Table.Cell,{textAlign:"center"},a.a.createElement(o.Image,{src:e.vendorsList[t].image})),a.a.createElement(o.Table.Cell,{textAlign:"center"},e.vendorsList[t].user_used," users used this coupon"),a.a.createElement(o.Table.Cell,{textAlign:"center"},a.a.createElement(o.Checkbox,{label:"Add to comparison",value:e.vendorsList[t].id,onChange:e.handleInputChangeAddComprassion,checked:e.checkCompareVendorChecked(e.vendorsList[t].id),disabled:e.checkCompareVendorDisabled(e.vendorsList[t].id)})))})):Object.keys(i).map((function(e){return a.a.createElement(o.Table.Row,null,a.a.createElement(o.Table.Cell,null,a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Table.Cell,{textAlign:"center"},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Table.Cell,{textAlign:"center"},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"full"}))),a.a.createElement(o.Table.Cell,{textAlign:"center"},a.a.createElement(o.Placeholder,{fluid:!0},a.a.createElement(o.Placeholder.Line,{length:"full"}))))})))))))))))},s=n(60),u=n(59);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var a=E(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(c,e);var t,n,r,l=v(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),C(b(t=l.call(this,e)),"getVendorsList",(function(){var e=t.state.filterData;t.setState({vendorsList:!1}),Object(s.c)(e).then((function(e){var n=e.status,r=e.rows;n&&t.setState({vendorsList:r})}),(function(e){alert("Rejected: "+e)}))})),C(b(t),"getVendorsListOptions",(function(){var e=t.state.vendorsList,n=[];for(var r in e)n.push({key:e[r].id,value:e[r].id,text:e[r].name});return n})),C(b(t),"handleInputChangeVendors",(function(e,n){var r=n.name,a=n.value;e.preventDefault();var o=t.state.compareVendors;o[r]=a,t.setState({compareVendors:o})})),C(b(t),"getCompareUrl",(function(){var e=t.state.compareVendors;if(!e)return!1;var n=e.vendor1,r=e.vendor2,a=e.vendor3,o="/compare-",l=[];return n&&l.push(t.checkVendorToUrl(n)),r&&l.push(t.checkVendorToUrl(r)),a&&l.push(t.checkVendorToUrl(a)),o+=l.join("-with-")})),C(b(t),"checkVendorToUrl",(function(e){var n=t.state.vendorsList;if(!e)return"";var r="";for(var a in n)if(n[a]&&n[a].id==e){r=n[a].name;break}return r.replace(/\s/gi,"-").replace("/","-").toLowerCase()})),C(b(t),"getFilterList",(function(){var e=t.state.filterData;Object(u.a)(e).then((function(e){var n=e.status,r=e.rows;n&&t.setState({filter:r})}),(function(e){alert("Rejected: "+e)}))})),C(b(t),"getInput",(function(e,n){var r=t.state.filterData,l=n.type,c=n.title,i=n.multiple,d=n.data;l||(l="text");var s=!1;switch(l){case"text":case"number":case"email":s=a.a.createElement(o.Form.Input,{fluid:!0,type:l,placeholder:c,name:e,value:r[e]||"",onChange:t.handleInputChangeEdit});break;case"dropdown":var u=[];for(var m in d)u.push({key:m+d[m].id,text:d[m].name,value:d[m].id});s=a.a.createElement(o.Form.Select,{fluid:!0,inline:!0,name:e,options:u,placeholder:c,multiple:!!i,value:i?r[e]?r[e]:[]:r[e],onChange:t.handleInputChangeEdit});break;case"checkbox":for(var h in s=[],d)s.push(a.a.createElement(o.Form.Checkbox,{label:d[h].name,value:d[h].name,name:e,onChange:t.handleInputChangeCheckBox,checked:1==r.hasOwnProperty(e)&&-1!=r[e].indexOf(d[h].name)}))}return s})),C(b(t),"handleInputChangeCheckBox",(function(e,n){var r=n.name,a=n.value,o=t.state.filterData;o.hasOwnProperty(r)&&-1!==o[r].indexOf(a)?o[r].splice(o[r].indexOf(a),1):(o.hasOwnProperty(r)||(o[r]=[]),o[r].push(a)),t.setState({filterData:o}),t.getVendorsList()})),C(b(t),"handleInputChangeAddComprassion",(function(e,n){var r=n.value,a=t.state.compareVendors;a.vendor1==r?a.vendor1=null:a.vendor2==r?a.vendor2=null:a.vendor3==r?a.vendor3=null:a.vendor1?a.vendor2?a.vendor3||(a.vendor3=r):a.vendor2=r:a.vendor1=r,t.setState({compareVendors:a})})),C(b(t),"handleInputChangeEdit",(function(e,n){var r=n.name,a=n.value;e.preventDefault();var o=t.state.filterData;o[r]=a,t.setState({filterData:o}),t.getVendorsList()})),C(b(t),"checkCompareVendorDisabled",(function(e){var n=t.state.compareVendors;return e!=n.vendor1&&e!=n.vendor2&&e!=n.vendor3&&!!(n.vendor1&&n.vendor2&&n.vendor3)})),C(b(t),"checkCompareVendorChecked",(function(e){var n=t.state.compareVendors;return e==n.vendor1||e==n.vendor2||e==n.vendor3})),C(b(t),"checkCompareVendorButtonDisabled",(function(){var e=t.state.compareVendors,n=0;return e.vendor1&&n++,e.vendor2&&n++,e.vendor3&&n++,n<2})),t.state={loading:0,vendorsList:!1,compareVendors:{},filter:!1,filterData:{category:"vpn"}},t.getVendorsList(),t.getFilterList(),t}return t=c,(n=[{key:"render",value:function(){return a.a.createElement(d,h({},this.state,{getVendorsListOptions:this.getVendorsListOptions,handleInputChangeVendors:this.handleInputChangeVendors,getCompareUrl:this.getCompareUrl,getInput:this.getInput,handleInputChangeEdit:this.handleInputChangeEdit,handleInputChangeAddComprassion:this.handleInputChangeAddComprassion,checkCompareVendorDisabled:this.checkCompareVendorDisabled,checkCompareVendorChecked:this.checkCompareVendorChecked,checkCompareVendorButtonDisabled:this.checkCompareVendorButtonDisabled}))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(a.a.Component);t.default=y},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4),a=n.n(r);function o(e){return a()("https://api.savingsdealz.com/filter/list",{method:"post",data:e,withCredentials:!0}).then((function(e){return e.data})).catch((function(e){console.log(e)}))}},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return c}));var r=n(4),a=n.n(r);function o(e){return a()("https://api.savingsdealz.com/vendor/info",{method:"post",data:e,withCredentials:!0}).then((function(e){return e.data})).catch((function(e){console.log(e)}))}function l(e){return a()("https://api.savingsdealz.com/vendor/list",{method:"post",data:e,withCredentials:!0}).then((function(e){return e.data})).catch((function(e){console.log(e)}))}function c(e){return a()("https://api.savingsdealz.com/vendor/compare/info",{method:"post",data:e,withCredentials:!0}).then((function(e){return e.data})).catch((function(e){console.log(e)}))}}};