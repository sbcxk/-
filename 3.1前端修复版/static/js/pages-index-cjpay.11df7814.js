(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-cjpay"],{1403:function(t,e,n){"use strict";n.r(e);var o=n("a0f1"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"51a5":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-image[data-v-3fdd3616]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-3fdd3616]{width:100%;height:100%}.u-image__loading[data-v-3fdd3616], .u-image__error[data-v-3fdd3616]{position:absolute;top:0;left:0;width:100%;height:100%;\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"78c3":function(t,e,n){"use strict";n.r(e);var o=n("af6a"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},a0f1:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=o},a38b:function(t,e,n){"use strict";n.r(e);var o=n("a3ac"),a=n("78c3");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var r,d=n("f0c5"),u=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"8f1f84d4",null,!1,o["a"],r);e["default"]=u.exports},a3ac:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uModal:n("0298").default,uImage:n("e8be").default,uLoading:n("4b40").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._v("正在支付中，若此页面没有任何提醒标识支付平台未成功通知……"),n("u-modal",{attrs:{"confirm-text":0==t.dd.type?"复制微信":"复制QQ","show-cancel-button":!0,title:"抽到啦!!!"},on:{cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.quxiao.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.fzwx(t.dd.wx)}},model:{value:t.showas,callback:function(e){t.showas=e},expression:"showas"}},[n("v-uni-view",{staticStyle:{padding:"20rpx"}},[this.$u.test.isEmpty(t.dd.img)?t._e():n("u-image",{attrs:{width:"150rpx",height:"150rpx",src:t.dd.img},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ylimg(t.dd.img)}}},[n("u-loading",{attrs:{slot:"loading"},slot:"loading"}),n("v-uni-view",{staticStyle:{"font-size":"24rpx"},attrs:{slot:"error"},slot:"error"},[t._v("加载失败")])],1),t._v(t._s(0==t.dd.type?"微信":"QQ")+"："+t._s(t.dd.wx)),n("br"),t._v("备注："+t._s(null==t.dd.msg?"无备注":t.dd.msg)),n("br"),0==t.dd.code?n("v-uni-view",{staticStyle:{color:"red"}},[t._v(t._s(t.dd.message))]):t._e()],1)],1)],1)},i=[]},af6a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{url:"",showas:!1,dd:{}}},onUnload:function(){console.log("关闭了支付"),clearInterval(uni.getStorageSync("hcc"))},methods:{fzwx:function(t){this.$fz(t),window.location.href="/"},quxiao:function(){window.location.href="/"},getCode:function(){var t=this;uni.setNavigationBarTitle({title:"检测支付中……"});var e=1,n=setInterval((function(){uni.setStorageSync("hcc",n),e>100?clearInterval(n):t.$api("/pay/getcPay","post",{out_trade_no:t.$route.query.out_trade_no}).then((function(e){500!=e.data.code&&0!=e.data.code?1==e.data.data.code?(t.$do.alert({title:"提醒",message:"恭喜您抽到了一个".concat(0==e.data.data.sex?"女生":"男生","盲盒，请前往个人中心查看哦~"),theme:"round-button"}).then((function(){window.location.href="/"})),clearInterval(n),t.$to.clear()):(t.dd=e.data.data,t.showas=!0,clearInterval(n),t.$to.clear()):444==e.data.code?(t.$to(e.data.msg),setTimeout((function(){window.location.href="/"}),1e3)):404==e.data.code&&t.$do.alert({title:"提示",message:"没抽到哦，暂时没有数据~"}).then((function(){window.location.href="/"})),console.log(e.data)}))}),2e3)}},onLoad:function(){if(this.$u.test.isEmpty(this.$route.query.out_trade_no)||this.$u.test.isEmpty(this.$route.query.money)){console.log("非支付成功");var t=this.$route.query.out_trade_no;window.location.href=uni.getStorageSync(t)}else console.log("支付成功回调");this.getCode()}};e.default=o},b351:function(t,e,n){var o=n("51a5");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("49768909",o,!0,{sourceMap:!1,shadowMode:!1})},e6d6:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uIcon:n("5074").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():n("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?n("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):n("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?n("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):n("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},i=[]},e8be:function(t,e,n){"use strict";n.r(e);var o=n("e6d6"),a=n("1403");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("f03a");var r,d=n("f0c5"),u=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"3fdd3616",null,!1,o["a"],r);e["default"]=u.exports},f03a:function(t,e,n){"use strict";var o=n("b351"),a=n.n(o);a.a}}]);