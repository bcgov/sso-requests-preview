(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{76691:function(t,e,n){"use strict";n.d(e,{Kk:function(){return Z},MO:function(){return C},ZP:function(){return _},c4:function(){return P}});var r,a,u,c=n(50029),o=n(59499),s=n(4730),i=n(71383),l=n(87794),p=n.n(l),d=n(11163),f=n(71893),h=n(99603),v=n(59417),b=n(61165),m=n(37226),x=n(63055),g=n(34798),w=n.n(g),y=n(20353),j=n(85893),k=["disabled","activeColor","isUnread"];function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var P=f.ZP.div(r||(r=(0,i.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 15px;\n  & > * {\n    margin-left: 15px;\n  }\n"]))),Z=(0,f.ZP)(function(t){t.disabled,t.activeColor,t.isUnread;var e=(0,s.Z)(t,k);return(0,j.jsx)(h.G,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach(function(e){(0,o.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e))})(a||(a=(0,i.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"])),function(t){return t.disabled?"not-allowed":"pointer"},function(t){return t.disabled?"color: #CACACA;":"color: inherit; &:hover { color: ".concat(t.activeColor||"#000","; }")},function(t){return t.isUnread?"color: ".concat(x.Uo):""}),C=f.ZP.div(u||(u=(0,i.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"])));function _(t){var e,n,r=t.request,a=t.onDelete,u=t.defaultActiveColor,o=t.children,s=t.editIconStyle,i=t.delIconStyle,l=(0,d.useRouter)();(r||{}).archived;var f=(0,y.$8)(r),h=(0,y.uP)(r),g="delete-modal-".concat(null==r?void 0:r.id),k=(e=(0,c.Z)(p().mark(function t(e){return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.stopPropagation(),h){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,l.push("/request/".concat(r.id,"?status=").concat(r.status));case 5:case"end":return t.stop()}},t)})),function(t){return e.apply(this,arguments)}),O=(n=(0,c.Z)(p().mark(function t(){return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!["pr","planned","submitted"].includes((null==r?void 0:r.status)||"")){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,(0,m.Jl)(r.id);case 5:window.location.hash="#",a&&a(r);case 7:case"end":return t.stop()}},t)})),function(){return n.apply(this,arguments)});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(P,{children:[o,(0,j.jsx)(Z,{disabled:!h,icon:v.Xcf,role:"button","data-testid":"action-button-edit","aria-label":"edit",onClick:k,activeColor:u,title:"Edit",size:"lg",style:void 0===s?{}:s}),(0,j.jsx)(Z,{icon:v.$aW,role:"button","data-testid":"action-button-delete","aria-label":"delete",onClick:f?function(){r.id&&f&&(window.location.hash=g)}:w(),disabled:!f,activeColor:x.Uo,title:"Delete",size:"lg",style:void 0===i?{}:i})]}),(0,j.jsx)(b.Z,{id:g,"data-testid":"modal-delete-integration",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:O,title:"Confirm Deletion",confirmText:"Delete"})]})}},20353:function(t,e,n){"use strict";n.d(e,{$8:function(){return r},VV:function(){return c},Yr:function(){return o},te:function(){return u},uP:function(){return a}});var r=function(t){return!(!t||t.apiServiceAccount||t.archived||["planFailed","planned","applyFailed","submitted"].includes((null==t?void 0:t.status)||""))&&(!t.usesTeam||"admin"===t.userTeamRole)},a=function(t){return!!t&&!t.apiServiceAccount&&!t.archived&&!!["draft","applied"].includes(t.status||"")},u=function(t){return!(!t||Number(t.integrationCount)>0)&&"admin"===t.role},c=function(t){return!!t&&"admin"===t.role},o=function(t){return!(!t||t.apiServiceAccount||t.archived||["pr","planned","submitted"].includes((null==t?void 0:t.status)||""))&&(!t.usesTeam||"admin"===t.userTeamRole)}},93626:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return J}});var r,a,u,c,o,s,i,l=n(50029),p=n(59499),d=n(71383),f=n(87794),h=n.n(f),v=n(67294),b=n(99603),m=n(59417),x=n(85330),g=n(59912),w=n(42894),y=n(21963),j=n(84105),k=n(73923),O=new Date,P="".concat(O.getFullYear()).concat(O.getMonth()+1).concat(O.getDate()).concat(O.getHours()).concat(O.getMinutes()),Z=(r=(0,l.Z)(h().mark(function t(){var e,n,r;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.e.get("reports/all-standard-integrations").then(function(t){return t.data});case 3:e=t.sent,n=j.P6.json_to_sheet(e),r=j.P6.book_new(),j.P6.book_append_sheet(r,n,"All standard integrations"),j.NC(r,"all-standard-integrations-".concat(P,".xlsx")),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",(0,y.z)(t.t0));case 14:case"end":return t.stop()}},t,null,[[0,10]])})),function(){return r.apply(this,arguments)}),C=(a=(0,l.Z)(h().mark(function t(e,n){var r,a,u;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.e.get("reports/database-tables",{params:{type:e,orderBy:n}}).then(function(t){return t.data});case 3:r=t.sent,a=j.P6.json_to_sheet(r),u=j.P6.book_new(),j.P6.book_append_sheet(u,a,"All ".concat(e)),j.NC(u,"all-".concat(e.toLowerCase(),"-").concat(P,".xlsx")),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",(0,y.z)(t.t0));case 14:case"end":return t.stop()}},t,null,[[0,10]])})),function(t,e){return a.apply(this,arguments)}),_=(u=(0,l.Z)(h().mark(function t(){var e,n,r;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.e.get("reports/all-bceid-approved-requests-and-events").then(function(t){return t.data});case 3:e=t.sent,n=j.P6.json_to_sheet(e),r=j.P6.book_new(),j.P6.book_append_sheet(r,n,"All BCeID Approved Reqs&Events"),j.NC(r,"all-bceid-approved-requests-and-events-".concat(P,".xlsx")),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",(0,y.z)(t.t0));case 14:case"end":return t.stop()}},t,null,[[0,10]])})),function(){return u.apply(this,arguments)}),q=(c=(0,l.Z)(h().mark(function t(){var e;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.e.get("reports/data-integrity").then(function(t){return t.data});case 3:e=t.sent,(0,k.Di)((0,k.ON)(e),"sso-css-data-integrity-".concat(new Date().getTime(),".json")),t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",(0,y.z)(t.t0));case 11:case"end":return t.stop()}},t,null,[[0,7]])})),function(){return c.apply(this,arguments)}),U=n(71893),E=n(23157),z=n(76691),A=n(85893);function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach(function(e){(0,p.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var S=U.ZP.div(o||(o=(0,d.Z)(["\n  border-bottom: 1px solid #707070;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n"]))),N=U.ZP.div(s||(s=(0,d.Z)(["\n  display: flex;\n"]))),R=U.ZP.div(i||(i=(0,d.Z)(["\n  padding-top: 5px;\n  margin-left: 20px;\n"]))),B=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],I=[{value:"all-requests",label:"Integrations"},{value:"all-users",label:"Users"},{value:"all-teams",label:"Teams"},{value:"all-events",label:"Events"}],L={"all-requests":"Requests","all-users":"Users","all-teams":"Teams","all-events":"Events"},F={Requests:"id",Users:"id",Teams:"id",Events:"request_id"};function G(t){return""==t.type?(0,A.jsx)(A.Fragment,{}):(0,A.jsx)(z.Kk,{icon:m.q7m,role:"button",onClick:t.handleClick,title:"Download",size:"lg"})}function J(t){t.session;var e,n,r,a,u=(0,v.useState)(!1),c=u[0],o=u[1],s=(0,v.useState)(""),i=s[0],p=s[1],d=(e=(0,l.Z)(h().mark(function t(){return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,Z();case 3:o(!1);case 4:case"end":return t.stop()}},t)})),function(){return e.apply(this,arguments)}),f=(n=(0,l.Z)(h().mark(function t(){return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,_();case 3:o(!1);case 4:case"end":return t.stop()}},t)})),function(){return n.apply(this,arguments)}),y=(r=(0,l.Z)(h().mark(function t(){return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,q();case 3:o(!1);case 4:case"end":return t.stop()}},t)})),function(){return r.apply(this,arguments)}),j=(a=(0,l.Z)(h().mark(function t(){return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,C(L[i],F[L[i]]);case 3:o(!1);case 4:case"end":return t.stop()}},t)})),function(){return a.apply(this,arguments)});return(0,A.jsxs)(g.Z,{rules:B,children:[(0,A.jsx)("h2",{children:"Reports"}),(0,A.jsx)(S,{children:c?(0,A.jsx)(w.rj,{color:"#000",height:25,width:25,wrapperClass:"d-block",visible:c}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(x.zx,{variant:"primary",type:"button",className:"text-center",onClick:d,children:[(0,A.jsx)("span",{children:"All Standard Integrations\xa0"}),(0,A.jsx)(b.G,{icon:m.q7m})]}),(0,A.jsx)("br",{}),(0,A.jsx)("br",{}),(0,A.jsxs)(x.zx,{variant:"primary",type:"button",className:"text-center",onClick:f,children:[(0,A.jsx)("span",{children:"All BCeID Approved Requests And Events\xa0"}),(0,A.jsx)(b.G,{icon:m.q7m})]}),(0,A.jsx)("br",{}),(0,A.jsx)("br",{}),(0,A.jsxs)(x.zx,{variant:"primary",type:"button",className:"text-center",onClick:y,children:[(0,A.jsx)("span",{children:"Data Integrity\xa0"}),(0,A.jsx)(b.G,{icon:m.q7m})]})]})}),(0,A.jsx)("h2",{children:"Database"}),c?(0,A.jsx)(w.rj,{color:"#000",height:25,width:25,wrapperClass:"d-block",visible:c}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(N,{children:[(0,A.jsx)(function(){return(0,A.jsx)(E.ZP,{value:I.filter(function(t){return t.value===i}),options:I,onChange:function(t){return p(t.value)},maxMenuHeight:300,placeholder:"Select table...",styles:{control:function(t){return T(T({},t),{},{width:"250px"})},menu:function(t){return T(T({},t),{},{width:"250px"})}}})},{}),(0,A.jsx)(R,{children:(0,A.jsx)(G,{type:i,handleClick:j})})]}),"all-events"===i&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("br",{}),(0,A.jsx)("p",{children:(0,A.jsx)("em",{children:"Event downloads limited to 5000 most recent events. Please use dashboard for long-term event analysis."})})]})]})]})}},37226:function(t,e,n){"use strict";n.d(e,{A_:function(){return P},H0:function(){return C},Jl:function(){return z},OS:function(){return q},Uw:function(){return A},WN:function(){return E},XJ:function(){return Z},ct:function(){return _},hG:function(){return O},zD:function(){return U}});var r,a,u,c,o,s,i,l,p,d,f=n(50029),h=n(87794),v=n.n(h),b=n(21963),m=n(75316),x=n.n(m),g=n(25751),w=n.n(g),y=n(76427),j=n.n(y),k=n(31513),O=(r=(0,f.Z)(v().mark(function t(e){var n;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.e.post("requests",e).then(function(t){return t.data});case 3:return n=t.sent,t.abrupt("return",[(0,k.UB)(n),null]);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,b.z)(t.t0));case 10:case"end":return t.stop()}},t,null,[[0,7]])})),function(t){return r.apply(this,arguments)}),P=(a=(0,f.Z)(v().mark(function t(e){var n;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.e.post("request",{requestId:w()(e)?parseInt(e):e}).then(function(t){return t.data});case 3:return n=t.sent,t.abrupt("return",[(0,k.UB)(n),null]);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,b.z)(t.t0));case 10:case"end":return t.stop()}},t,null,[[0,7]])})),function(t){return a.apply(this,arguments)}),Z=(u=(0,f.Z)(v().mark(function t(){var e,n,r=arguments;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={params:{include:r.length>0&&void 0!==r[0]?r[0]:"active"}},t.prev=2,t.next=5,b.e.get("requests",e).then(function(t){return t.data});case 5:return n=t.sent,n=x()(n,["createdAt"],["desc"]),t.abrupt("return",[n.map(k.UB),null]);case 10:return t.prev=10,t.t0=t.catch(2),t.abrupt("return",(0,b.z)(t.t0));case 13:case"end":return t.stop()}},t,null,[[2,10]])})),function(){return u.apply(this,arguments)}),C=(c=(0,f.Z)(v().mark(function t(e){var n;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.e.get("team-integrations/".concat(e)).then(function(t){return t.data});case 3:return n=t.sent,n=x()(n,["createdAt"],["desc"]),t.abrupt("return",[n.map(k.UB),null]);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",(0,b.z)(t.t0));case 11:case"end":return t.stop()}},t,null,[[0,8]])})),function(t){return c.apply(this,arguments)}),_=(o=(0,f.Z)(v().mark(function t(e){var n;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.e.get("requests/".concat(e,"/resubmit")).then(function(t){return t.data});case 3:return n=t.sent,t.abrupt("return",[(0,k.UB)(n),null]);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,b.z)(t.t0));case 10:case"end":return t.stop()}},t,null,[[0,7]])})),function(t){return o.apply(this,arguments)}),q=(s=(0,f.Z)(v().mark(function t(e){var n;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.e.get("requests/".concat(e,"/restore")).then(function(t){return t.data});case 3:return n=t.sent,t.abrupt("return",[(0,k.UB)(n),null]);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,b.z)(t.t0));case 10:case"end":return t.stop()}},t,null,[[0,7]])})),function(t){return s.apply(this,arguments)}),U=(i=(0,f.Z)(v().mark(function t(e){var n;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.e.post("requests-all",e).then(function(t){return t.data});case 3:return n=t.sent,t.abrupt("return",[{count:n.count,rows:n.rows.map(k.UB)},null]);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,b.z)(t.t0));case 10:case"end":return t.stop()}},t,null,[[0,7]])})),function(t){return i.apply(this,arguments)}),E=(l=(0,f.Z)(v().mark(function t(e){var n,r,a,u,c,o=arguments;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]&&o[1],t.prev=1,u="requests",n&&(u="".concat(u,"?submit=true")),(e=j()(e,["user","lastChanges"])).devLoginTitle=e.devLoginTitle||"",e.testLoginTitle=e.testLoginTitle||"",e.prodLoginTitle=e.prodLoginTitle||"",e.additionalRoleAttribute=e.additionalRoleAttribute||"",e.clientId=e.clientId||"",e.primaryEndUsers=null!==(r=e.primaryEndUsers)&&void 0!==r?r:[],e.primaryEndUsersOther=null!==(a=e.primaryEndUsersOther)&&void 0!==a?a:"",t.next=14,b.e.put(u,e).then(function(t){return t.data});case 14:return c=t.sent,t.abrupt("return",[(0,k.UB)(c),null]);case 18:return t.prev=18,t.t0=t.catch(1),t.abrupt("return",(0,b.z)(t.t0));case 21:case"end":return t.stop()}},t,null,[[1,18]])})),function(t){return l.apply(this,arguments)}),z=(p=(0,f.Z)(v().mark(function t(e){var n;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.e.delete("requests",{params:{id:e}}).then(function(t){return t.data});case 3:return n=t.sent,t.abrupt("return",[n,null]);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,b.z)(t.t0));case 10:case"end":return t.stop()}},t,null,[[0,7]])})),function(t){return p.apply(this,arguments)}),A=(d=(0,f.Z)(v().mark(function t(e){var n;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.e.put("request-metadata",e).then(function(t){return t.data});case 3:return n=t.sent,t.abrupt("return",[(0,k.UB)(n),null]);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,b.z)(t.t0));case 10:case"end":return t.stop()}},t,null,[[0,7]])})),function(t){return d.apply(this,arguments)})},73923:function(t,e,n){"use strict";n.d(e,{Di:function(){return u},ON:function(){return r},TE:function(){return a}});var r=function(t){return JSON.stringify(t,void 0,2)},a=function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.focus(),e.select();try{return document.execCommand("copy"),document.body.removeChild(e),!0}catch(t){return document.body.removeChild(e),!1}},u=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",r=window.URL.createObjectURL(new Blob([t],{type:n})),a=document.createElement("a");a.href=r,a.setAttribute("download",e),document.body.appendChild(a),a.click(),document.body.removeChild(a)}},36484:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-reports",function(){return n(93626)}])},23157:function(t,e,n){"use strict";n.d(e,{ZP:function(){return o}});var r=n(65342),a=n(2717),u=n(67294),c=n(28648);n(68357),n(73935),n(73469);var o=(0,u.forwardRef)(function(t,e){var n=(0,r.u)(t);return u.createElement(c.S,(0,a.Z)({ref:e},n))})},20067:function(){},72061:function(){},4730:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,{Z:function(){return r}})}},function(t){t.O(0,[251,650,774,888,179],function(){return t(t.s=36484)}),_N_E=t.O()}]);