(function(t){function e(e){for(var c,o,r=e[0],l=e[1],d=e[2],i=0,b=[];i<r.length;i++)o=r[i],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(t[c]=l[c]);u&&u(e);while(b.length)b.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],c=!0,o=1;o<a.length;o++){var r=a[o];0!==n[r]&&(c=!1)}c&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var c={},o={app:0},n={app:0},s=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c19e3":"d31c69e9","chunk-3a2f3149":"c6659c79","chunk-97f98c5e":"8fe702e5"}[t]+".js"}function l(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-3a2f3149":1,"chunk-97f98c5e":1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var c="css/"+({}[t]||t)+"."+{"chunk-2d0c19e3":"31d6cfe0","chunk-3a2f3149":"8427812c","chunk-97f98c5e":"8488a272"}[t]+".css",n=l.p+c,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var d=s[r],i=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(i===c||i===n))return e()}var b=document.getElementsByTagName("style");for(r=0;r<b.length;r++){d=b[r],i=d.getAttribute("data-href");if(i===c||i===n)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var c=e&&e.target&&e.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete o[t],u.parentNode.removeChild(u),a(s)},u.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){o[t]=0})));var c=n[t];if(0!==c)if(c)e.push(c[2]);else{var s=new Promise((function(e,a){c=n[t]=[e,a]}));e.push(c[2]=s);var d,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=r(t);var b=new Error;d=function(e){i.onerror=i.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",b.name="ChunkLoadError",b.type=c,b.request=o,a[1](b)}n[t]=void 0}};var u=setTimeout((function(){d({type:"timeout",target:i})}),12e4);i.onerror=i.onload=d,document.head.appendChild(i)}return Promise.all(e)},l.m=t,l.c=c,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)l.d(a,c,function(e){return t[e]}.bind(null,c));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=e,d=d.slice();for(var b=0;b<d.length;b++)e(d[b]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0351":function(t,e,a){},"15c1":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const o=Object(c["I"])("data-v-aa9e3b32");Object(c["t"])("data-v-aa9e3b32");const n={class:"list-component col-md-2 pt-3 card radius20 shadow pb-2 my-2 ml-3 mr-3"},s={class:""},r={class:"d-flex justify-content-between"},l=Object(c["g"])("button",{class:"btn border-0 bg-transparent",type:"submit"},[Object(c["g"])("i",{class:"fas fa-plus"})],-1);Object(c["r"])();const d=o((function(t,e,a,o,d,i){const b=Object(c["x"])("task-component");return Object(c["q"])(),Object(c["d"])("div",n,[Object(c["g"])("div",s,[Object(c["g"])("h2",r,[Object(c["f"])(Object(c["A"])(a.listProp.body)+" ",1),Object(c["g"])("i",{class:"fas fa-ellipsis-h",onClick:e[1]||(e[1]=(...t)=>o.deleteList(...t))})]),(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(o.tasks,t=>(Object(c["q"])(),Object(c["d"])(b,{key:t,"task-prop":t},null,8,["task-prop"]))),128))]),Object(c["g"])("form",{class:"form-group d-flex justify-content-center mt-2",onSubmit:e[3]||(e[3]=Object(c["H"])((...t)=>o.addTask(...t),["prevent"]))},[l,Object(c["G"])(Object(c["g"])("input",{class:"border-0",type:"text",name:"task",placeholder:"Add a task...","onUpdate:modelValue":e[2]||(e[2]=t=>o.state.newTask.body=t)},null,512),[[c["D"],o.state.newTask.body]])],32)])}));var i=a("83fc"),b=a("617f"),u=a("9523"),p={name:"ListComponent",props:{listProp:Object},components:{TaskComponent:u["TaskComponent"]},setup(t){const e=Object(c["u"])({newTask:{listId:t.listProp._id}});return Object(c["o"])(async()=>{await b["a"].getTasks(t.listProp._id)}),{state:e,profile:Object(c["b"])(()=>i["a"].profile),lists:Object(c["b"])(()=>t.listProp),tasks:Object(c["b"])(()=>i["a"].tasks[t.listProp._id]),addTask(){b["a"].addTask(e.newTask),e.newTask.body=""},deleteList(){b["a"].deleteList(t.listProp)}}}};p.render=d,p.__scopeId="data-v-aa9e3b32";e["default"]=p},"2b20":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return r}));var c=a("bc3a"),o=a.n(c);const n=window.location.origin.includes("localhost")?"http://localhost:3000":"",s=o.a.create({baseURL:n,timeout:8e3}),r=function(t){s.defaults.headers.authorization=t}},"2cb6":function(t,e,a){"use strict";a("9144")},"3dda":function(t,e,a){"use strict";a("be62")},"41cb":function(t,e,a){"use strict";var c=a("6c02"),o=a("8816"),n=a("9e4d");function s(t){return()=>a("a2f9")(`./${t}.vue`)}const r=[{path:"/",name:"Home",component:s("HomePage")},{path:"/about",name:"About",component:s("AboutPage")},{path:"/profile",name:"Profile",component:s("ProfilePage"),beforeEnter:o["a"]},{path:"/activeboard/:boardId",name:"ActiveBoardPage",component:n["default"],beforeEnter:o["a"]}],l=Object(c["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(c["b"])(),routes:r});e["a"]=l},"56d7":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const o=Object(c["g"])("footer",null,null,-1);function n(t,e,a,n,s,r){const l=Object(c["x"])("Navbar"),d=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("header",null,[Object(c["g"])(l)]),Object(c["g"])("main",null,[Object(c["g"])(d,null,{default:Object(c["F"])(({Component:t})=>[(Object(c["q"])(),Object(c["d"])(Object(c["y"])(t)))]),_:1})]),o],64)}var s=a("83fc"),r={name:"App",setup(){return{appState:Object(c["b"])(()=>s["a"])}}};a("9cdc");r.render=n;var l=r;function d(t){const e=a("ccc2");e.keys().forEach(a=>{const c=e(a),o=c.default||c,n=o.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(n,o)})}var i=a("41cb"),b=a("4989"),u=a.n(b),p=a("f0bd"),f=a("af87"),m=a.n(f);const O=Object(c["c"])(l);d(O),O.use(i["a"],u.a,p["default"],m.a).mount("#app")},"617f":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var c=a("2b20"),o=a("83fc"),n=a("8a4e");class s{async getBoards(){try{const t=await c["a"].get("/boards");o["a"].boards=t.data}catch(t){n["a"].error(t)}}async createBoard(t){try{await c["a"].post("/boards/",t),this.getBoards()}catch(e){n["a"].error(e)}}async removeBoard(t){try{await c["a"].delete("/boards/"+t),this.getBoards()}catch(e){n["a"].error(e)}}async showActiveBoard(t){try{const e=o["a"].boards.find(e=>e._id===t);o["a"].activeBoard=e}catch(e){n["a"].error(e)}}async getLists(t){try{const e=await c["a"].get("/boards/"+t+"/lists");o["a"].activeBoardLists=e.data}catch(e){n["a"].error(e)}}async deleteList(t){try{await c["a"].delete("/lists/"+t._id),this.getLists(t.boardId)}catch(e){n["a"].error(e)}}async createList(t){try{await c["a"].post("/lists/",t),this.getLists(t.boardId)}catch(e){n["a"].error(e)}}async getTasks(t){try{const e=await c["a"].get("/lists/"+t+"/tasks");o["a"].tasks[t]=e.data}catch(e){n["a"].error(e)}}async addTask(t){try{await c["a"].post("/tasks/",t),this.getTasks(t.listId)}catch(e){n["a"].log(e)}}async moveTask(t,e){try{const a=e.listId;e.listId=t,await c["a"].put("tasks/"+e._id,e),this.getTasks(e.listId),this.getTasks(a)}catch(a){n["a"].error(a)}}async deleteTask(t){try{await c["a"].delete("/tasks/"+t._id),this.getTasks(t.listId)}catch(e){n["a"].error(e)}}async getComments(t){try{const e=await c["a"].get("/tasks/"+t+"/comments");o["a"].comments[t]=e.data}catch(e){n["a"].error(e)}}async createComment(t){try{await c["a"].post("/comments/",t),this.getComments(t.taskId)}catch(e){n["a"].log(e)}}async deleteComment(t){try{await c["a"].delete("/comments/"+t._id),this.getComments(t.taskId)}catch(e){n["a"].error(e)}}}const r=new s},6588:function(t,e,a){"use strict";a("0351")},"6c3f":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var c=a("83fc"),o=a("8a4e"),n=a("2b20");class s{async getProfile(){try{const t=await n["a"].get("/profile");c["a"].profile=t.data}catch(t){o["a"].error("HAVE YOU STARTED YOUR SERVER YET???",t)}}}const r=new s},"77be":function(t,e,a){},"7b76":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const o=Object(c["I"])("data-v-b2d141ca");Object(c["t"])("data-v-b2d141ca");const n={class:"board-component col-sm-3 mt-3 card radius20 shadow"},s={class:"row justify-content-between d-flex p-2"},r=Object(c["g"])("i",{class:"fas fa-times fa-lg"},null,-1);Object(c["r"])();const l=o((function(t,e,a,l,d,i){const b=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("div",n,[Object(c["g"])("div",s,[Object(c["g"])(b,{to:{name:"ActiveBoardPage",params:{boardId:a.boardProp._id}}},{default:o(()=>[Object(c["g"])("h2",null,Object(c["A"])(a.boardProp.title),1)]),_:1},8,["to"]),Object(c["g"])("button",{class:"border-0 bg-transparent",onClick:e[1]||(e[1]=(...t)=>l.removeBoard(...t))},[r])])])}));var d=a("617f"),i={name:"BoardComponent",props:{boardProp:Object},components:{},setup(t){const e=Object(c["u"])({});return{state:e,removeBoard(){d["a"].removeBoard(t.boardProp._id)}}}};a("2cb6");i.render=l,i.__scopeId="data-v-b2d141ca";e["default"]=i},"83fc":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var c=a("7a23");const o=Object(c["u"])({user:{},profile:{},boards:[],activeBoard:{},activeBoardLists:[],tasks:{},comments:{}})},8574:function(t,e,a){"use strict";a.r(e);var c=a("7a23");const o=Object(c["I"])("data-v-f59c399e");Object(c["t"])("data-v-f59c399e");const n={class:"comment-component"},s={class:"col-12 d-flex justify-content-between"};Object(c["r"])();const r=o((function(t,e,a,o,r,l){return Object(c["q"])(),Object(c["d"])("div",n,[Object(c["g"])("div",s,[Object(c["g"])("h6",null,Object(c["A"])(a.commentProp.body),1),Object(c["g"])("span",{class:"deleteX",onClick:e[1]||(e[1]=(...t)=>o.deleteComment(...t))},"×")])])}));var l=a("617f"),d={name:"CommentComponent",props:{commentProp:Object},setup(t){return{deleteComment(){l["a"].deleteComment(t.commentProp)}}},components:{}};a("3dda");d.render=r,d.__scopeId="data-v-f59c399e";e["default"]=d},"8a4e":function(t,e,a){"use strict";function c(t,e){window.location.origin.includes("localhost")&&console[t](...e)}a.d(e,"a",(function(){return o}));const o={log(){c("log",arguments)},error(){c("error",arguments)},warn(){c("warn",arguments)},assert(){c("assert",arguments)},trace(){c("trace",arguments)}}},9144:function(t,e,a){},9523:function(t,e,a){"use strict";a.r(e);var c=a("7a23");const o=Object(c["I"])("data-v-2ffd6212");Object(c["t"])("data-v-2ffd6212");const n={class:"task-component ml-2 mr-2 pb-2 pt-2"},s={class:"row shadow radius20 d-flex align-items-center"},r={class:"col-10 pt-3"},l={class:"col-2"},d=Object(c["g"])("i",{class:"fas fa-arrow-right"},null,-1),i={id:"accordion"},b={class:"row justify-content-around"},u=Object(c["g"])("div",{class:"col-3"},[Object(c["g"])("div",{id:"headingOne"},[Object(c["g"])("button",{class:"btn btn-link text-success","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},[Object(c["g"])("i",{class:"fas fa-comment"})])])],-1),p={class:"col-3"},f={id:"headingTwo"},m={class:"btn btn-link collapsed text-dark","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},O=Object(c["e"])('<div class="col-3" data-v-2ffd6212><div id="headingThree" data-v-2ffd6212><button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne" data-v-2ffd6212><i class="fas fa-share" data-v-2ffd6212></i></button></div><div id="collapseOne" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion" data-v-2ffd6212><div class="card-body" data-v-2ffd6212></div></div></div>',1),g={id:"v-model-select",class:"row justify-content-center"},j=Object(c["g"])("option",{disabled:"",value:"",class:"border-0"}," Move lists... ",-1),v={class:"col-12 pt-1"},h={class:"row justify-content-center text-center"},y={id:"collapseOne",class:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"};Object(c["r"])();const k=o((function(t,e,a,o,k,w){const C=Object(c["x"])("comment-component");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",n,[Object(c["g"])("div",s,[Object(c["g"])("div",r,[Object(c["g"])("p",null,Object(c["A"])(a.taskProp.body),1)]),Object(c["g"])("div",l,[Object(c["g"])("button",{class:"btn bg-transparent border-0 text-dark",type:"button","data-toggle":"collapse","data-target":"#collapseExp"+a.taskProp._id,"aria-expanded":"false","aria-controls":"collapseExample"},[d],8,["data-target"])])])]),Object(c["g"])("div",{class:"collapse",id:"collapseExp"+a.taskProp._id},[Object(c["g"])("div",i,[Object(c["g"])("div",b,[u,Object(c["g"])("div",p,[Object(c["g"])("div",f,[Object(c["g"])("button",m,[Object(c["g"])("i",{class:"fas fa-trash-alt",onClick:e[1]||(e[1]=(...t)=>o.deleteTask(...t))})])])]),O])]),Object(c["g"])("div",g,[Object(c["G"])(Object(c["g"])("select",{onChange:e[2]||(e[2]=Object(c["H"])((...t)=>o.moveTask(...t),["prevent"])),"onUpdate:modelValue":e[3]||(e[3]=t=>o.state.selected=t),id:"collapsethree"},[j,(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(o.lists,t=>(Object(c["q"])(),Object(c["d"])("option",{class:"text-light",key:t,value:t._id},Object(c["A"])(t.body),9,["value"]))),128))],544),[[c["C"],o.state.selected]])]),Object(c["g"])("div",v,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(o.comments,t=>(Object(c["q"])(),Object(c["d"])(C,{key:t,"comment-prop":t},null,8,["comment-prop"]))),128)),Object(c["g"])("div",h,[Object(c["g"])("div",y,[Object(c["g"])("form",{class:"form-group",onSubmit:e[5]||(e[5]=Object(c["H"])((...t)=>o.createComment(...t),["prevent"]))},[Object(c["G"])(Object(c["g"])("input",{class:"form-control border-0 text-center",type:"text",placeholder:"Enter Comment","onUpdate:modelValue":e[4]||(e[4]=t=>o.state.newComment.body=t)},null,512),[[c["D"],o.state.newComment.body]])],32)])])])],8,["id"])],64)}));var w=a("8574"),C=a("83fc"),P=a("617f"),T={name:"TaskComponent",components:{CommentComponent:w["CommentComponent"]},props:{taskProp:Object},setup(t){const e=Object(c["u"])({newComment:{listId:t.taskProp.listId,taskId:t.taskProp._id},selected:""});return Object(c["o"])(()=>{P["a"].getComments(t.taskProp._id)}),{state:e,tasks:Object(c["b"])(()=>t.taskProp),comments:Object(c["b"])(()=>C["a"].comments[t.taskProp._id]),lists:Object(c["b"])(()=>C["a"].activeBoardLists),createComment(){P["a"].createComment(e.newComment),e.newComment.body=""},moveTask(){P["a"].moveTask(e.selected,t.taskProp)},deleteTask(){P["a"].deleteTask(t.taskProp)}}}};T.render=k,T.__scopeId="data-v-2ffd6212";e["default"]=T},"9cdc":function(t,e,a){"use strict";a("d673")},"9d8d":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const o=Object(c["I"])("data-v-14317086");Object(c["t"])("data-v-14317086");const n={class:"navbar navbar-expand-lg navbar-dark bg-dark"},s=Object(c["g"])("h5",null,[Object(c["g"])("i",{class:"far fa-list-alt mr-3"}),Object(c["f"])(" Kanban 2 - Electric Boogaloo! ")],-1),r=Object(c["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["g"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarText"},d={class:"navbar-nav mr-auto"},i={class:"nav-item"},b=Object(c["f"])(" Home "),u={class:"navbar-text"},p={key:1,class:"dropdown"},f={class:"mx-3"},m=Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Profile ",-1);Object(c["r"])();const O=o((function(t,e,a,O,g,j){const v=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("nav",n,[Object(c["g"])(v,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:o(()=>[s]),_:1}),r,Object(c["g"])("div",l,[Object(c["g"])("ul",d,[Object(c["g"])("li",i,[Object(c["g"])(v,{to:{name:"Home"},class:"nav-link"},{default:o(()=>[b]),_:1})])]),Object(c["g"])("span",u,[O.user.isAuthenticated?(Object(c["q"])(),Object(c["d"])("div",p,[Object(c["g"])("div",{class:"dropdown-toggle",onClick:e[2]||(e[2]=t=>O.state.dropOpen=!O.state.dropOpen)},[Object(c["g"])("img",{src:O.user.picture,alt:"user photo",height:"40",class:"rounded-circle"},null,8,["src"]),Object(c["g"])("span",f,Object(c["A"])(O.user.name),1)]),Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:O.state.dropOpen}],onClick:e[4]||(e[4]=t=>O.state.dropOpen=!1)},[Object(c["g"])(v,{to:{name:"Profile"}},{default:o(()=>[m]),_:1}),Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[3]||(e[3]=(...t)=>O.logout(...t))}," logout ")],2)])):(Object(c["q"])(),Object(c["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>O.login(...t))}," Login "))])])])}));var g=a("8816"),j=a("83fc");const v="dev-2rswc7ro.us.auth0.com",h="tPL91gGajCTMVoucYkI4LjgFr2trFOhf",y="https://kanbantooelectricboogaloo.com";var k=a("41cb"),w=a("2b20"),C=a("6c3f");const P=Object(g["b"])({domain:v,clientId:h,audience:y,onRedirectCallback:t=>{k["a"].push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});P.on(P.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(w["b"])(P.bearer),await C["a"].getProfile(),j["a"].user=P.user}));var T={name:"Navbar",setup(){const t=Object(c["u"])({dropOpen:!1});return{state:t,user:Object(c["b"])(()=>j["a"].user),async login(){P.loginWithPopup()},async logout(){await P.logout({returnTo:window.location.origin})}}}};a("f2d4");T.render=O,T.__scopeId="data-v-14317086";e["default"]=T},"9e4d":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const o=Object(c["I"])("data-v-c9311c6a");Object(c["t"])("data-v-c9311c6a");const n={class:"activeboard-page container-fluid"},s={class:"row pt-5"},r={class:"col-12 jumbotron-fluid text-center"},l={class:"container"},d={class:"display-4 text-light"},i=Object(c["g"])("p",{class:"lead text-light"}," Welcome to your board! ",-1),b=Object(c["g"])("button",{type:"button",class:"btn border-0 background-none text-light rounded-pill","data-toggle":"modal","data-target":"#listModal"},[Object(c["f"])(" Add a new list "),Object(c["g"])("i",{class:"fas fa-plus ml-2"})],-1),u={class:"row justify-content-around pt-3"},p={class:"modal fade",id:"listModal",tabindex:"-1",role:"dialog","aria-labelledby":"listModalLabel","aria-hidden":"true"},f={class:"modal-dialog",role:"document"},m={class:"modal-content"},O=Object(c["g"])("div",{class:"modal-header"},[Object(c["g"])("h3",{class:"modal-title",id:"listModalLabel"}," List Title "),Object(c["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),g={class:"modal-body"},j={class:"col-8 offset-2 my-2"},v=Object(c["e"])('<div class="modal-footer" data-v-c9311c6a><button type="button" class="btn border-0 bg-transparent" data-dismiss="modal" data-v-c9311c6a> Close <i class="fas fa-window-close fa-lg ml-2" data-v-c9311c6a></i></button><button type="submit" class="btn border-0 bg-transparent" data-v-c9311c6a> Create List <i class="fas fa-clipboard-list fa-lg ml-2" data-v-c9311c6a></i></button></div>',1);Object(c["r"])();const h=o((function(t,e,a,o,h,y){const k=Object(c["x"])("ListComponent");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",n,[Object(c["g"])("div",s,[Object(c["g"])("div",r,[Object(c["g"])("div",l,[Object(c["g"])("h3",d,Object(c["A"])(o.activeBoard.title),1),i,b])])]),Object(c["g"])("div",u,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(o.lists,t=>(Object(c["q"])(),Object(c["d"])(k,{key:t.body,"list-prop":t},null,8,["list-prop"]))),128))])]),Object(c["g"])("div",p,[Object(c["g"])("div",f,[Object(c["g"])("div",m,[O,Object(c["g"])("div",g,[Object(c["g"])("form",{onSubmit:e[2]||(e[2]=Object(c["H"])((...t)=>o.createList(...t),["prevent"]))},[Object(c["g"])("div",j,[Object(c["G"])(Object(c["g"])("input",{type:"text",placeholder:"List name",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>o.state.newList.body=t)},null,512),[[c["D"],o.state.newList.body]])]),v],32)])])])])],64)}));var y=a("83fc"),k=a("617f"),w=a("6c02"),C=a("15c1"),P=a("1157"),T=a.n(P),x={name:"ActiveBoardPage",components:{ListComponent:C["default"]},props:{boardProp:Object},setup(t){const e=Object(w["c"])(),a=Object(c["u"])({newList:{boardId:e.params.boardId}});return Object(c["o"])(async()=>{await k["a"].getBoards(),await k["a"].showActiveBoard(e.params.boardId),await k["a"].getLists(e.params.boardId)}),{state:a,activeBoard:Object(c["b"])(()=>y["a"].activeBoard),lists:Object(c["b"])(()=>y["a"].activeBoardLists),comments:Object(c["b"])(()=>y["a"].comments),createList(){k["a"].createList(a.newList),a.newList.body="",T()("#listModal").modal("toggle"),T()(".modal-backdrop").remove()}}}};a("6588");x.render=h,x.__scopeId="data-v-c9311c6a";e["default"]=x},a2f9:function(t,e,a){var c={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./ActiveBoardPage.vue":["9e4d"],"./HomePage.vue":["78a7","chunk-97f98c5e"],"./ProfilePage.vue":["1a3e","chunk-3a2f3149"]};function o(t){if(!a.o(c,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=c[t],o=e[0];return Promise.all(e.slice(1).map(a.e)).then((function(){return a(o)}))}o.keys=function(){return Object.keys(c)},o.id="a2f9",t.exports=o},be62:function(t,e,a){},ccc2:function(t,e,a){var c={"./BoardComponent.vue":"7b76","./CommentComponent.vue":"8574","./ListComponent.vue":"15c1","./TaskComponent.vue":"9523","./navbar.vue":"9d8d"};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}o.keys=function(){return Object.keys(c)},o.resolve=n,t.exports=o,o.id="ccc2"},d673:function(t,e,a){},f2d4:function(t,e,a){"use strict";a("77be")}});