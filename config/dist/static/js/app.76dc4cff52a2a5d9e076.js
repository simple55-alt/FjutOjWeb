webpackJsonp([7],{"1Xo3":function(t,e){},"47Ih":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};n.d(o,"setLogin",function(){return b});var i=n("7+uW"),a=n("Dd8w"),r=n.n(a),l=n("R4Sj"),s=(n("OMJi"),{name:"Head",data:function(){return{type:2}},computed:r()({comp:function(){return this.username+""}},Object(l.c)(["loadingState"]),Object(l.d)(["username","userstate"])),methods:{all:function(){this.$store.commit("setLogin",{username:"LUBIN",userstate:!0})}},beforeCreate:function(){this.$store.commit("setLogin",{username:"lubin",userstate:!1})}}),d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-box"},[n("ul",{staticClass:"head-box-ul"},[n("el-dropdown",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticStyle:{float:"right"}},[n("li",{staticClass:"head-box-ul li",on:{click:t.all}},[t._v(t._s(t.comp))]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("练习")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("积分")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("正式")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("趣味")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("Diy")])],1)],1),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:!t.userstate,expression:"!userstate"}]},[n("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"Login"}},[t._v("Login")])],1),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:!t.userstate,expression:"!userstate"}],staticStyle:{"border-left":"1px solid #eeeeee"}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"Register"}},[t._v("Register")])],1),t._v(" "),n("li",{staticStyle:{float:"left"}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",{staticStyle:{float:"left"}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"Problem"}},[t._v("Problem")])],1),t._v(" "),n("li",{staticStyle:{float:"left"}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"Submit"}},[t._v("Status")])],1),t._v(" "),n("li",{staticStyle:{float:"left"}},[t._v("Discuss")]),t._v(" "),n("li",{staticStyle:{float:"left"}},[t._v("Challenge")]),t._v(" "),n("li",{staticStyle:{float:"left"}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"Mall"}},[t._v("Mall")])],1),t._v(" "),n("el-dropdown",{staticStyle:{float:"left"}},[n("li",{staticClass:"head-box-ul li"},[t._v("Contest")]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("练习")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("积分")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("正式")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("趣味")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("Diy")])],1)],1),t._v(" "),n("el-dropdown",{staticStyle:{float:"left"}},[n("li",{staticStyle:{float:"left"}},[t._v("Rank")]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("荣誉榜")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("活跃榜")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("现役榜")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("组队榜")])],1)],1)],1)])},staticRenderFns:[]};var u={data:function(){return{date:(new Date).toString()}},mounted:function(){var t=this;this.timer=setInterval(function(){t.date=(new Date).toString()},1e3)},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foot-box"},[n("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("li",{staticStyle:{float:"right"}},[t._v("系统时间："+t._s(t.date))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("h2",[this._v("T^T Online Judge")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("ul",{staticClass:"foot-information"},[e("li",[this._v("Bug反馈")]),this._v(" |\n          "),e("li",[this._v("Faq")]),this._v(" |\n          "),e("li",[this._v("闽ICP备17026590号-1")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticStyle:{float:"left"}},[this._v("当前版本："),e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"#"}},[this._v("3.22")])])}]};var v={name:"App",components:{Head:n("VU/8")(s,d,!1,function(t){n("1Xo3")},null,null).exports,Foot:n("VU/8")(u,c,!1,function(t){n("47Ih")},null,null).exports},data:function(){return{loading:!1}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],attrs:{id:"app"}},[e("Head"),this._v(" "),e("div",{staticStyle:{width:"100%","background-color":"#fafafa"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1),this._v(" "),e("Foot")],1)},staticRenderFns:[]};var _=n("VU/8")(v,m,!1,function(t){n("unvb")},null,null).exports,f=n("/ocq");i.a.use(f.a);var p=new f.a({mode:"history",routes:[{path:"",component:function(){return n.e(1).then(n.bind(null,"bvEa"))}},{path:"/Login",name:"Login",component:function(){return n.e(0).then(n.bind(null,"kvsw"))}},{path:"/Register",name:"Register",component:function(){return n.e(4).then(n.bind(null,"pAGS"))}},{path:"/Problem",name:"Problem",component:function(){return n.e(2).then(n.bind(null,"59k4"))}},{path:"/Submit",name:"Submit",component:function(){return n.e(5).then(n.bind(null,"hdVW"))}},{path:"/Mall",name:"Mall",component:function(){return n.e(3).then(n.bind(null,"db/y"))}}]}),h=n("glag"),w=n.n(h),b=(n("xlLU"),function(t,e){return(0,t.commit)("setLogin",e)});i.a.use(l.a);var g=new l.a.Store({state:{uesrname:null,userstate:null},mutations:{setLogin:function(t,e){t.username=e.username,t.userstate=e.userstate,console.log("我在mutation里面"+t.username)}},actions:o,getters:{loadingState:function(t){return console.log("我在getter里面"+t.username),t.userstate}}});i.a.config.productionTip=!1,i.a.config.devtools=!0,i.a.use(w.a),new i.a({el:"#app",router:p,store:g,components:{App:_},template:"<App/>"})},unvb:function(t,e){},xlLU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.76dc4cff52a2a5d9e076.js.map