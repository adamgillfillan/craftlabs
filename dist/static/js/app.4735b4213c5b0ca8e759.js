webpackJsonp([1],{"7zck":function(t,e){},"9akU":function(t,e){},F9gw:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),s=r("3EgV"),o=r.n(s),a=(r("7zck"),{render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{temporary:"",absolute:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[r("v-list",t._l(t.menuItems,function(e){return r("v-list-tile",{key:e.title,attrs:{to:e.link}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-tile-content",[t._v(t._s(e.title))])],1)}))],1),t._v(" "),r("v-toolbar",{staticClass:"deep-purple darken-",attrs:{dark:""}},[r("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up ",on:{click:function(e){t.sideNav=!t.sideNav}}}),t._v(" "),r("v-toolbar-title",[r("router-link",{staticClass:"craftlabs__link",attrs:{to:"/",tag:"span"}},[t._v("craftlabs")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",{staticClass:"hidden-xs-only"},t._l(t.menuItems,function(e){return r("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[r("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}))],1),t._v(" "),r("main",[r("router-view")],1)],1)},staticRenderFns:[]});var i=r("VU/8")({data:function(){return{sideNav:!1}},computed:{menuItems:function(){var t=[{icon:"face",title:"Register",link:"/register"},{icon:"lock_open",title:"Login",link:"/login"}];return this.userIsAuthenticated&&(t=[{icon:"lock",title:"Logout",link:"/logout"},{icon:"store",title:"View Store",link:"/store"},{icon:"person",title:"Profile",link:"/profile"}]),t},userIsAuthenticated:function(){return!!this.$store.getters.user}}},a,!1,function(t){r("kQBl")},null,null).exports,u=r("/ocq"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var c=r("VU/8")({name:"Home",data:function(){return{msg:"Coming Soon - Crafts Storefront Manager"}}},l,!1,function(t){r("F9gw")},"data-v-f267ceb0",null).exports,d={name:"Register",data:function(){return{username:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password!==this.confirmPassword?"Passwords do not match":""},user:function(){return this.$store.getters.user}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push({name:"Store"})}},methods:{register:function(){this.$store.dispatch("signUserUp",{username:this.username,password:this.password})}}},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("v-card",[r("v-card-text",[r("v-container",[r("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"username",label:"Username",id:"username",type:"text",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-btn",{attrs:{type:"submit"}},[t._v("Sign up")])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]},f=r("VU/8")(d,m,!1,null,null,null).exports,v={name:"Login",data:function(){return{username:"",password:"",confirmPassword:"",errorMsg:""}},computed:{user:function(){return this.$store.getters.user}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push({name:"Store"})}},methods:{login:function(){this.$store.dispatch("signUserIn",{username:this.username,password:this.password})}}},p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("v-card",[r("v-card-text",[r("v-container",[r("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"username",label:"Username",id:"username",type:"text",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-btn",{attrs:{type:"submit"}},[t._v("Login")])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]},h=r("VU/8")(v,p,!1,null,null,null).exports,w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  Profile page\n")])},staticRenderFns:[]};var g=r("VU/8")({name:"Profile",data:function(){return{}}},w,!1,function(t){r("x25k")},"data-v-bb754aa2",null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},x=r("VU/8")({name:"Logout",mounted:function(){this.$store.dispatch("logout"),this.$router.push({name:"Home"})}},_,!1,null,null,null).exports,b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  Store page\n")])},staticRenderFns:[]};var k=r("VU/8")({name:"Store",data:function(){return{}}},b,!1,function(t){r("9akU")},"data-v-2cba3dce",null).exports;n.a.use(u.a);var y=new u.a({mode:"history",routes:[{path:"/",name:"Home",component:c},{path:"/register",name:"Register",component:f},{path:"/login",name:"Login",component:h},{path:"/profile",name:"Profile",component:g},{path:"/logout",name:"Logout",component:x},{path:"/store",name:"Store",component:k}]}),U=r("NYxO"),P=r("mtWM"),$=r.n(P),R=function(){return $.a.create({baseURL:"http://craftlabs.herokuapps.com/v1/"})},S=function(t){return R().post("register",t)},F=function(t){return R().post("login",t)},N=function(){return R().get("logout")};n.a.use(U.a);var V=new U.a.Store({state:{user:null},mutations:{setUser:function(t,e){t.user=e},logout:function(t){console.log("setting user state to null"),t.user=null}},actions:{signUserUp:function(t,e){var r=t.commit;S({username:e.username,password:e.password}).then(function(t){r("setUser",t.data.user.id)}).catch(function(t){console.error("err: ",t)})},signUserIn:function(t,e){var r=t.commit;F({username:e.username,password:e.password}).then(function(t){r("setUser",t.data.user.id)}).catch(function(t){console.error("err: ",t)})},logout:function(t){var e=t.commit;N().then(function(){e("logout")}).catch(function(t){console.error("err: ",t)})}},getters:{user:function(t){return t.user}}});n.a.config.productionTip=!1,n.a.use(o.a),new n.a({el:"#app",router:y,store:V,components:{App:i},template:"<App/>"})},kQBl:function(t,e){},x25k:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4735b4213c5b0ca8e759.js.map