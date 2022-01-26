exports.ids=[9],exports.modules={44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),l=n(3),c=n(13),i=n(2),u=function(e){return r.a.createElement("div",null,(e.url,r.a.createElement(c.Helmet,{key:Math.random()},r.a.createElement("title",null,"Savingsdealz"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}))),r.a.createElement(i.Container,null,r.a.createElement(i.Breadcrumb,{id:"breadcrumb"},r.a.createElement(i.Breadcrumb.Section,{link:!0,as:l.Link,to:"/"},"Main"),r.a.createElement(i.Breadcrumb.Divider,{icon:"right chevron"}),r.a.createElement(i.Breadcrumb.Section,{active:!0},"Checkout")),r.a.createElement(i.Grid,{id:"checkoutBlock"},r.a.createElement(i.Grid.Column,{computer:10,mobile:16},"  ",r.a.createElement(i.Grid,null,r.a.createElement(i.Grid.Row,null,r.a.createElement(i.Grid.Column,null,r.a.createElement(i.Segment,null,r.a.createElement(i.Header,{as:"h1"},"Review item and shipping"),r.a.createElement(i.Item.Group,null,Object.keys(e.offers).map((function(t){return r.a.createElement(i.Item,{key:"c-"+e.offers[t].id},r.a.createElement(i.Item.Image,{size:"tiny",src:e.offers[t].image}),r.a.createElement(i.Item.Content,null,r.a.createElement(i.Item.Header,{as:"a"},e.offers[t].title),r.a.createElement(i.Item.Meta,null,e.offers[t].subtitle),r.a.createElement(i.Item.Extra,null,r.a.createElement(i.Input,{className:"quantity",type:"number",name:e.offers[t].id,onChange:e.handleInputChangeQuantity,value:e.offers[t].quantity,min:0}),r.a.createElement("span",{className:"price"},"$",e.offers[t].price)),e.offers[t].user_used&&r.a.createElement(i.Item.Description,null,e.offers[t].user_used," users used this coupon")))})))))),r.a.createElement(i.Grid.Row,null,r.a.createElement(i.Grid.Column,null,r.a.createElement(i.Segment,null,r.a.createElement(i.Header,{as:"h1"},"Pay with"),r.a.createElement(i.Table,{basic:"very",verticalAlign:"middle",collapsing:!0,id:"paymentMethods"},Object.keys(e.paymentMethods).map((function(t){return r.a.createElement(i.Table.Row,null,r.a.createElement(i.Table.Cell,null,r.a.createElement(i.Checkbox,{size:"big",value:e.paymentMethods[t].id,onChange:e.handleChangePaymentMethod,checked:e.checkPayment==e.paymentMethods[t].id})),r.a.createElement(i.Table.Cell,null,r.a.createElement(i.Image,{className:"payment-method-logo",src:e.paymentMethods[t].image})),r.a.createElement(i.Table.Cell,null,e.paymentMethods[t].name))})))))))),r.a.createElement(i.Grid.Column,{id:"payBlock",computer:6,mobile:16},r.a.createElement(i.Segment,null,r.a.createElement(i.List,{verticalAlign:"middle"},r.a.createElement(i.List.Item,null,r.a.createElement(i.List.Content,{floated:"right"},"$",e.total.total),r.a.createElement(i.List.Content,null,"Subtotal (",e.total.items," item",e.total.items>1&&"s",")")),r.a.createElement(i.Divider,null),r.a.createElement(i.List.Item,{className:"order-total"},r.a.createElement(i.List.Content,{floated:"right"},"$",e.total.total),r.a.createElement(i.List.Content,null,"Order total"))),e.checkPayment&&0!=e.total.total?r.a.createElement(i.Button,{fluid:!0,color:"red",content:"Confirm and pay",disabled:!e.checkPayment||0==e.total.total,onClick:e.handleClickToPay,loading:e.loadingPayButton}):r.a.createElement(i.Popup,{content:0==e.total.total?"Item list is empty":"Please select payment method",on:"click",pinned:!0,trigger:r.a.createElement(i.Button,{fluid:!0,color:"red",content:"Confirm and pay"})})))),r.a.createElement(i.Modal,{closeIcon:!0,dimmer:"inverted",size:"mini",open:e.openSendEmailModal},r.a.createElement(i.Modal.Header,null,"Enter your email to receive a coupon to activate your VPN premium account."),r.a.createElement(i.Modal.Content,{className:"coupon-modal"},r.a.createElement(i.Form,null,r.a.createElement(i.Form.Input,{type:"email",onChange:e.handleChangePayerEmail,value:e.payerEmail&&e.payerEmail}),r.a.createElement(i.Form.Button,{fluid:!0,color:"red",content:"PAY",onClick:e.handleClickToPay}))))))},m=n(4),s=n.n(m);var f=n(9),d=n(57),p=n(14),y=n(40),h=n.n(y);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=k(e);if(t){var r=k(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return P(this,n)}}function P(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={fetchCartOffers:p.a},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(l,e);var t,n,a,o=C(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),M(O(t=o.call(this,e)),"getPaymentMethods",(function(){var e;s()("https://api.savingsdealz.com/payment-method/list",{method:"post",data:e,withCredentials:!0}).then((function(e){return e.data})).catch((function(e){console.log(e)})).then((function(e){var n=e.status,a=e.rows;n&&t.setState({paymentMethods:a})}),(function(e){alert("Rejected: "+e)}))})),M(O(t),"getCartOffers",(function(){Object(f.b)().then((function(e){var n=e.status,a=e.rows;e.total;n&&(t.setState({offers:a}),t.calculateTotal(a))}),(function(e){alert("Rejected: "+e)}))})),M(O(t),"calculateTotal",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.state.offers;e&&(n=e);var a={subtotal:0,tax:0,total:0,items:0};for(var r in n){var o=n[r],l=o.price,c=o.quantity,i=o.tax;a.subtotal+=Math.round(l*c*100)/100,a.tax+=Math.round(100*i)/100,a.items++}a.total=Math.round(100*(a.subtotal+a.tax))/100,t.setState({total:a})})),M(O(t),"handleInputChangeQuantity",(function(e,n){var a=n.name,r=n.value;e.preventDefault();var o=t.state.offers,l=t.props.getCartOffers,c=Object(d.a)(o);for(var i in c){var u=c[i].id;if(u==a){for(var m in c[i].quantity=parseInt(r),l)l[m].id==u&&(l[m].quantity=parseInt(r));0==r&&delete c[i];break}}t.props.fetchCartOffers(l),t.setState({offers:c}),t.calculateTotal(c)})),M(O(t),"handleChangePaymentMethod",(function(e,n){var a=n.value;t.setState({checkPayment:a})})),M(O(t),"handleClickToPay",(function(){var e=t.state,n=e.checkPayment,a=e.payerEmail,r=Object(f.d)({payment_method_id:n,payer_email:a});t.setState({loadingPayButton:!0}),r.then((function(e){var a=e.status,r=e.paylink;a&&(4==n?t.sendPmPayForm(r):location.href=r)}),(function(e){alert("Rejected: "+e)}))})),M(O(t),"handleChangePayerEmail",(function(e,n){var a=n.value;t.setState({payerEmail:a})})),t.state={loading:0,paymentMethods:!1,checkPayment:!1,offers:!1,total:!1,loadingPayButton:!1,payerEmail:"",openSendEmailModal:!1},t.getPaymentMethods(),t.getCartOffers(),t}return t=l,(n=[{key:"sendPmPayForm",value:function(e){var t=JSON.parse(e),n="";n+='<form action="https://perfectmoney.com/api/step1.asp" method="post">',Object.keys(t).map((function(e){return n+='<input type="hidden" name="'+e+'" value="'+t[e]+'">'})),n+="</form>";var a=h()(n);h()("body").append(a),a.submit()}},{key:"render",value:function(){return r.a.createElement(u,b({},this.state,{handleInputChangeQuantity:this.handleInputChangeQuantity,handleClickToPay:this.handleClickToPay,handleChangePaymentMethod:this.handleChangePaymentMethod,handleChangePayerEmail:this.handleChangePayerEmail}))}}])&&v(t.prototype,n),a&&v(t,a),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.a.Component);t.default=Object(l.withRouter)(Object(o.connect)((function(e){return{getCartOffers:e.getCartOffers,getUser:e.getUser}}),j)(w))},57:function(e,t,n){"use strict";function a(e){var t={};for(var n in e)t[n]=e[n];return t}function r(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}))}};