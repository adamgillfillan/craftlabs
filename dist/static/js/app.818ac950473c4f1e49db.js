webpackJsonp([1],{"+oEK":function(e,t){},"7zck":function(e,t){},"9akU":function(e,t){},F9gw:function(e,t){},Lsok:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=n("3EgV"),s=n.n(a),o=(n("7zck"),{render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{temporary:"",absolute:""},model:{value:e.sideNav,callback:function(t){e.sideNav=t},expression:"sideNav"}},[n("v-list",e._l(e.menuItems,function(t){return n("v-list-tile",{key:t.title,attrs:{to:t.link}},[n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-tile-content",[e._v(e._s(t.title))])],1)}))],1),e._v(" "),n("v-toolbar",{staticClass:"deep-purple darken-",attrs:{dark:""}},[n("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up ",on:{click:function(t){e.sideNav=!e.sideNav}}}),e._v(" "),n("v-toolbar-title",[n("router-link",{staticClass:"craftlabs__link",attrs:{to:"/",tag:"span"}},[e._v("craftlabs")])],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",{staticClass:"hidden-xs-only"},e._l(e.menuItems,function(t){return n("v-btn",{key:t.title,attrs:{flat:"",to:t.link}},[n("v-icon",{attrs:{left:"",dark:""}},[e._v(e._s(t.icon))]),e._v("\n        "+e._s(t.title)+"\n      ")],1)}))],1),e._v(" "),n("main",[n("router-view")],1)],1)},staticRenderFns:[]});var i=n("VU/8")({data:function(){return{sideNav:!1,menuItems:[{icon:"store",title:"View Store",link:"/store"},{icon:"person",title:"Profile",link:"/profile"},{icon:"face",title:"Register",link:"/register"},{icon:"lock_open",title:"Login",link:"/login"}]}}},o,!1,function(e){n("+oEK")},null,null).exports,c=n("/ocq"),l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var u=n("VU/8")({name:"Home",data:function(){return{msg:"Coming Soon - Crafts Storefront Manager"}}},l,!1,function(e){n("F9gw")},"data-v-f267ceb0",null).exports,v=n("Xxa5"),p=n.n(v),d=n("exGp"),m=n.n(d),f=n("mtWM"),_=n.n(f),g=function(e){return _.a.create({baseURL:"http://craftlabs.herokuapps.com/v1/"}).post("register",e)},h={name:"Register",data:function(){return{msg:"Register brah",username:"",password:"",errorMsg:""}},methods:{register:function(){var e=this;return m()(p.a.mark(function t(){var n;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g({username:e.username,password:e.password});case 3:n=t.sent,console.log("register2",n),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0.response),e.errorMsg=t.t0.response.data.message;case 11:case"end":return t.stop()}},t,e,[[0,7]])}))()}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[n("div",[n("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{id:"username",type:"text",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),n("div",[n("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),e.errorMsg?n("div",[e._v(e._s(e.errorMsg))]):e._e()])])},staticRenderFns:[]};var b=n("VU/8")(h,k,!1,function(e){n("jYsl")},"data-v-39ece486",null).exports,w={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  Login page\n")])},staticRenderFns:[]};var x=n("VU/8")({name:"Login",data:function(){return{}}},w,!1,function(e){n("Lsok")},"data-v-67bfa6f2",null).exports,R={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  Profile page\n")])},staticRenderFns:[]};var N=n("VU/8")({name:"Profile",data:function(){return{}}},R,!1,function(e){n("x25k")},"data-v-bb754aa2",null).exports,U={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  Store page\n")])},staticRenderFns:[]};var E=n("VU/8")({name:"Store",data:function(){return{}}},U,!1,function(e){n("9akU")},"data-v-2cba3dce",null).exports;r.a.use(c.a);var y=new c.a({mode:"history",routes:[{path:"/",name:"Home",component:u},{path:"/register",name:"Register",component:b},{path:"/login",name:"Login",component:x},{path:"/profile",name:"Profile",component:N},{path:"/store",name:"Store",component:E}]});r.a.config.productionTip=!1,r.a.use(s.a),new r.a({el:"#app",router:y,components:{App:i},template:"<App/>"})},jYsl:function(e,t){},x25k:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.818ac950473c4f1e49db.js.map