(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order_reports"],{"085c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("订单管理")]),r("el-breadcrumb-item",[t._v("订单列表")])],1),r("el-card",[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.queryInfo.query,callback:function(e){t.$set(t.queryInfo,"query",e)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.ordersList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"order_number",label:"订单编号"}}),r("el-table-column",{attrs:{prop:"order_price",label:"订单价格",width:"80px"}}),r("el-table-column",{attrs:{prop:"pay_status",label:"是否付款",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"===e.row.pay_status?r("el-tag",{attrs:{type:"warning"}},[t._v("未付款")]):r("el-tag",{attrs:{type:"success"}},[t._v("已付款")])]}}])}),r("el-table-column",{attrs:{prop:"is_send",label:"是否发货",width:"80px"}}),r("el-table-column",{attrs:{prop:"create_time",label:"下单时间",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("dateFormat")(e.row.create_time))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{icon:"el-icon-edit",type:"primary",size:"mini"},on:{click:function(r){return t.editOrder(e.row)}}}),r("el-button",{attrs:{icon:"el-icon-location",type:"success",size:"mini"},on:{click:t.showProgress}})]}}])})],1),r("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[10,15,20,40],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total,background:""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"修改地址",visible:t.editOrderDialogVisible,width:"50%"},on:{"update:visible":function(e){t.editOrderDialogVisible=e},close:t.addressDialogClosed}},[r("el-form",{ref:"addressFormRef",attrs:{model:t.addressForm,rules:t.addressFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"省市区/县",prop:"adress1"}},[r("el-input",{model:{value:t.addressForm.adress1,callback:function(e){t.$set(t.addressForm,"adress1",e)},expression:"addressForm.adress1"}})],1),r("el-form-item",{attrs:{label:"详细地址",prop:"adress2"}},[r("el-input",{model:{value:t.addressForm.adress2,callback:function(e){t.$set(t.addressForm,"adress2",e)},expression:"addressForm.adress2"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.editOrderDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.editOrderDialogVisible=!1}}},[t._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"物流进度",visible:t.progressVisible,width:"50%"},on:{"update:visible":function(e){t.progressVisible=e}}},[r("span",[t._v("获取物流信息失败，服务器异常")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.progressVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.progressVisible=!1}}},[t._v("确 定")])],1)])],1)},o=[],a=r("1da1"),i=(r("96cf"),{data:function(){return{queryInfo:{query:"",pagesize:10,pagenum:1},ordersList:[],total:0,editOrderDialogVisible:!1,addressForm:{adress1:"",adress2:""},addressFormRules:{adress1:[{required:!0,message:"请输入省市区/县",trigger:"blur"}],adress2:[{required:!0,message:"请输入详细地址",trigger:"blur"}]},progressVisible:!1}},created:function(){this.getOrdersList()},methods:{getOrdersList:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("orders",{params:t.queryInfo});case 2:if(r=e.sent,n=r.data,200===n.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("获取订单列表失败"));case 6:t.$message.success("获取订单列表成功"),t.ordersList=n.data.goods,t.total=n.data.total;case 9:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){this.queryInfo.pagesize=t,this.getOrdersList()},handleCurrentChange:function(t){this.queryInfo.pagenum=t,this.getOrdersList()},editOrder:function(t){this.editOrderDialogVisible=!0},addressDialogClosed:function(){this.$refs.addressFormRef.resetFields()},showProgress:function(){this.$message.error("获取物流进度失败"),this.progressVisible=!0}}}),s=i,c=r("2877"),l=Object(c["a"])(s,n,o,!1,null,"9d4dbfb4",null);e["default"]=l.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}},"7fa5":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("数据统计")]),r("el-breadcrumb-item",[t._v("数据报告")])],1),r("el-card",[r("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"main"}})])],1)},o=[],a=r("1da1"),i=(r("96cf"),r("164e")),s=r("60bb"),c=r.n(s),l={data:function(){return{options:{title:{text:"用户来源"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#E9EEF3"}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{boundaryGap:!1}],yAxis:[{type:"value"}]}}},created:function(){},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,n,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i["init"](document.getElementById("main")),e.next=3,t.$http.get("reports/type/1");case 3:if(n=e.sent,o=n.data,200===o.meta.status){e.next=7;break}return e.abrupt("return",t.$message.error("获取折线图数据失败"));case 7:a=c.a.merge(o.data,t.options),r.setOption(a);case 9:case"end":return e.stop()}}),e)})))()},methods:{}},u=l,d=r("2877"),f=Object(d["a"])(u,n,o,!1,null,"b4f772ac",null);e["default"]=f.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(V){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new q(n||[]);return a._invoke=k(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(V){return{type:"throw",arg:V}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",m={};function g(){}function y(){}function v(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(I([])));x&&x!==r&&n.call(x,a)&&(b=x);var _=v.prototype=g.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,s){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function k(t,e,r){var n=d;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return S()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=E(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function I(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=_.constructor=v,v.constructor=y,y.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(O.prototype),O.prototype[i]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(_),c(_,s,"Generator"),_[a]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=order_reports.85a8d992.js.map