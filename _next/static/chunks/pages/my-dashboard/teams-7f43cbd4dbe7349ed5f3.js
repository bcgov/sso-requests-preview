(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{35611:function(e,n,t){"use strict";n.ZP=void 0;var r=t(96282),a=t(69829),i={shared:{label:"\n      display: block;\n      margin-bottom: 0.2777em;\n    ",wrapper:"\n      position: relative;\n      display: flex;\n      background: #fff;\n      overflow: hidden;\n      border: 2px solid #606060;\n      border-radius: 0;\n      padding: 0.3em 0;\n\n      &:after {\n        content: ' ';\n        background-image: "+(0,a.toSvgUrl)(a.ChevronDown)+";\n        background-size: contain;\n        background-repeat: no-repeat;\n        position: absolute;\n        right: 0.2em;\n        width: 1.2em;\n        height: 100%;\n        text-align: center;\n        cursor: pointer;\n        pointer-events: none;\n        -webkit-transition: .25s all ease;\n        -o-transition: .25s all ease;\n        transition: .25s all ease;\n      }\n\n      &:focus-within  {\n        outline: 4px solid #3B99FC;\n        outline-offset: 1px;\n      }\n\n      &:hover::after {}\n  ",input:"\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      -ms-appearance: none;\n      appearance: none;\n      outline: 0;\n      box-shadow: none;\n      border: 0 !important;\n      background: #fff;\n      background-image: none;\n      display: inline-block;\n      flex: 1;\n      padding: 0 .5em;\n      color: #000;\n      cursor: pointer;\n\n      &::-ms-expand {\n        display: none;\n      }\n    "},size:{small:{container:"\n        font-size: 0.8rem;\n      "},medium:{container:"\n        font-size: 1rem;\n      "},large:{container:"\n        font-size: 1.2rem;\n      "}},rounded:{wrapper:"\n      border-radius: 0.25em;\n    "}};var o=(0,r.applyTheme)(i,{defaultProps:{size:"medium",rounded:!0,required:!1},staticProps:["fullWidth"],includeWrapper:!0});n.ZP=o},96282:function(e,n,t){"use strict";var r=t(95318);Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.applyTheme=void 0;var a=r(t(22122)),i=r(t(19756)),o=r(t(67294)),s=r(t(86010)),l=t(80927),c=function(e,n){var t=(0,l.processStyle)(e),r=(0,l.createStyleBuilder)(t,n),c=n.as||{},u=r(c.container||"div","container"),d=r("label","label"),f=n.includeWrapper?r(c.wrapper||"div","wrapper"):null,m=r("select","input"),p=(0,l.createBootstrap)(t,"select");return function(e){var n=p(e),t=n.id,r=n.name,l=n.label,c=n.ariaLabel,h=n.styleProps,v=n.children,x=n.className,b=n.rest,g=b.style,j=b.labelStyle,w=b.inputStyle,y=b.wrapperStyle,Z=(0,i.default)(b,["style","labelStyle","inputStyle","wrapperStyle"]),k=o.default.createElement(m,(0,a.default)({"aria-label":c},Z,{id:t,name:r,style:w,className:"pg-select-input"}),v);return o.default.createElement(u,(0,a.default)({},h,{style:g,className:(0,s.default)("pg-select",x)}),l&&o.default.createElement(d,(0,a.default)({htmlFor:t},h,{style:j,className:"pg-select-label"}),l),f?o.default.createElement(f,(0,a.default)({},h,{style:y,className:"pg-select-wrapper"}),k):k)}};n.applyTheme=c;var u=c({},{staticProps:["fullWidth"]});n.default=u},61408:function(e,n,t){"use strict";t.d(n,{c4:function(){return b},Kk:function(){return g},MO:function(){return j},ZP:function(){return w}});var r=t(85893),a=t(809),i=t.n(a),o=t(92447),s=t(27261),l=t(11163),c=t(42745),u=t(17625),d=t(51436),f=t(98806),m=t(6645),p=t(30454);function h(){var e=(0,s.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"]);return h=function(){return e},e}function v(){var e=(0,s.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"]);return v=function(){return e},e}function x(){var e=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 15px;\n  & > * {\n    margin-left: 15px;\n  }\n"]);return x=function(){return e},e}var b=c.default.div(x()),g=(0,c.default)(u.G)(v(),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"color: #CACACA;":"color: black; &:hover { color: ".concat(e.activeColor||"#137ac8","; }")}),(function(e){return e.isUnread?"color: ".concat(p.Uo):""})),j=c.default.div(h());function w(e){var n=e.request,t=e.onDelete,a=e.children,s=(0,l.useRouter)(),c=(n||{}).archived,u=!c&&!["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||""),h=!c&&["draft","applied"].includes(n.status||""),v="delete-modal-".concat(null===n||void 0===n?void 0:n.id),x=function(){var e=(0,o.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),h){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,s.push("/request/".concat(n.id,"?status=").concat(n.status));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=function(){var e=(0,o.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||"")){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,m.Jl)(n.id);case 5:window.location.hash="#",t&&t(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b,{children:[a,(0,r.jsx)(g,{disabled:!h,icon:d.Xcf,role:"button","aria-label":"edit",onClick:x,title:"Edit",size:"lg"}),(0,r.jsx)(g,{icon:d.$aW,role:"button","aria-label":"delete",onClick:function(){n.id&&u&&(window.location.hash=v)},disabled:!u,activeColor:p.Uo,title:"Delete",size:"lg"})]}),(0,r.jsx)(f.Z,{id:v,content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:j,title:"Confirm Deletion",confirmText:"Delete"})]})}},20374:function(e,n,t){"use strict";t.d(n,{H:function(){return l}});var r=t(27261),a=t(42745),i=t(42881),o=t(30454);function s(){var e=(0,r.Z)(["\n  .nav-link {\n    color: black !important;\n    height: 30px !important;\n    font-size: "," !important;\n    padding-top: 0; !important;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n    font-weight: 600;\n  }\n"]);return s=function(){return e},e}var l=(0,a.default)(i.Z)(s(),o.CA)},23451:function(e,n,t){"use strict";var r=t(27261),a=t(42745),i=t(30454);function o(){var e=(0,r.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 ","px;\n\n  & thead {\n    font-size: 16px;\n    color: black;\n\n    & th {\n      min-width: ",";\n    }\n  }\n\n  & tbody {\n    font-size: ",";\n    tr {\n      height: ",";\n      background-color: #f8f8f8;\n      ","\n    }\n  }\n\n  td:first-child {\n    padding-left: 1em;\n    text-align: left;\n  }\n\n  & th,\n  & td {\n    border: none;\n    padding: 0;\n    overflow: hidden;\n  }\n\n  & th.w60,\n  & td.w60 {\n    width: 60px;\n  }\n\n  & th.w120,\n  & td.w120 {\n    width: 120px;\n  }\n"]);return o=function(){return e},e}var s=a.default.table(o(),i.gM,(function(e){return"mini"===e.variant?"30px":"140px"}),(function(e){return"mini"===e.variant?"14px":"16px"}),(function(e){return"mini"===e.variant?"".concat(i.ZW,"px"):"".concat(i.eX,"px")}),(function(e){return!e.readOnly&&"\n        &:hover {\n          background-color: ".concat(i.uB,";\n          cursor: pointer;\n        }\n        &.active {\n          background-color: ").concat(i.uB,";\n          font-weight: bold;\n          border: 2px solid #9fadc0 !important;\n        }\n      ")}));n.Z=s},83746:function(e,n,t){"use strict";t.d(n,{FE:function(){return v}});var r=t(85893),a=t(27261),i=t(67294),o=t(11163),s=t(64735),l=t(42745),c=t(56841),u=t(20374),d=t(40602),f=t(83727),m=t(81235);function p(){var e=(0,a.Z)(["\n  padding-top: 2px;\n"]);return p=function(){return e},e}function h(){var e=(0,a.Z)(["\n  overflow: auto;\n"]);return h=function(){return e},e}var v=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],x=l.default.div(h()),b=l.default.div(p()),g=i.createContext({});n.ZP=function(e){var n,t=e.tab,a=e.leftPanel,l=e.rightPanel,p=e.children,h=(0,o.useRouter)(),j=(0,i.useReducer)(f.Z,f.E),w=j[0],y=j[1],Z=(0,i.useContext)(m.SessionContext)||{},k=Z.user,O=Z.enableGold,S=null===k||void 0===k||null===(n=k.integrations)||void 0===n?void 0:n.find((function(e){return"silver"===e.serviceType})),C=(0,i.useMemo)((function(){return{state:w,dispatch:y}}),[w,y]),N=(0,r.jsxs)(u.H,{onSelect:function(e){h.replace("/my-dashboard/".concat(e))},activeKey:t,children:[(0,r.jsx)(c.Z,{eventKey:"integrations",title:"My Projects"}),(0,r.jsx)(c.Z,{eventKey:"teams",title:"My Teams"}),O&&S&&(0,r.jsx)(c.Z,{eventKey:"s2g",title:"*New - Silver to Gold Upgrade"})]});return(0,r.jsx)(d.Z,{rules:v,children:(0,r.jsx)(g.Provider,{value:C,children:p?(0,r.jsxs)(b,{children:[N,p]}):(0,r.jsx)(s.ZP,{cols:10,children:(0,r.jsxs)(s.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,r.jsx)(s.ZP.Col,{span:6,children:(0,r.jsxs)(x,{children:[N,a&&a(w,y)]})}),(0,r.jsx)(s.ZP.Col,{span:4,children:l&&l(w,y)})]})})})})}},70791:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Oe}});var r=t(85893),a=t(809),i=t.n(a),o=t(64121),s=t(92447),l=t(67294),c=t(83746),u=t(26265),d=t(27261),f=t(11163),m=t(42745),p=t(56841),h=t(20374),v=t(23451),x=t(85330),b=t(35611),g=t(98806),j=t(89779),w=t(6645),y=t(38073),Z=t(28783),k=t(76457),O=t(17625),S=t(51436),C=t(6434),N=t(61408);function P(){var e=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 6fr;\n"]);return P=function(){return e},e}function T(){var e=(0,d.Z)(["\n  color: #ff0303;\n"]);return T=function(){return e},e}var E=(0,m.default)(O.G)(T()),_=m.default.div(P()),D=function(e){var n=e.title,t=e.content;return(0,r.jsxs)(_,{children:[(0,r.jsx)(E,{icon:S.RLE,size:"3x"}),(0,r.jsxs)("div",{children:[n&&(0,r.jsx)("strong",{children:n}),t&&(0,r.jsx)("p",{children:t})]})]})},R=t(82096);function z(){var e=(0,d.Z)(["\n  margin-right: 10px;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return z=function(){return e},e}function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function M(){var e=(0,d.Z)(["\n  text-align: left !important;\n"]);return M=function(){return e},e}function I(){var e=(0,d.Z)(["\n  border: 3px solid #a6b1c4;\n  padding: 10px;\n"]);return I=function(){return e},e}function U(){var e=(0,d.Z)(["\n  padding: 0 !important;\n  margin: 20px 0 !important;\n"]);return U=function(){return e},e}function F(){var e=(0,d.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  ","\n"]);return F=function(){return e},e}var G=((0,t(11752).default)()||{}).publicRuntimeConfig,B=((void 0===G?{}:G).enable_gold,m.default.div(F(),(function(e){return"\n  margin-top: ".concat(e.marginTop||"0",";\n  margin-bottom: ").concat(e.marginBottom||"0",";\n  margin-left: ").concat(e.marginLeft||"0",";\n  margin-right: ").concat(e.marginRight||"0",";\n  ")}))),L=(0,m.default)(x.zx)(U()),K=m.default.div(I()),W=m.default.td(M()),q="add-member-modal",H="delete-member-modal",X=function(e,n){var t={members:[]};return e.forEach((function(e,n){e.idirEmail||(t.members[n]="Please enter an email")})),0===t.members.length?(n(null),null):(n(t),t)},Y={idirEmail:"",role:"member",pending:!0},$=function(e){var n=e.onConfirmDelete,t={confirmText:"Delete",buttonStyle:"danger"},a="",i="";switch(e.type){case"allow":a="Once they are deleted, they will no longer have access to the team's integrations.",i="Are you sure that you want to delete this team member?",t.onConfirm=n;break;case"notAllowed":a="Before you delete the last team admin, you must assign a new admin.",t.confirmText="Okay",t.buttonStyle="custom"}return(0,r.jsx)(g.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({title:"Delete Team Member",icon:null,id:H,content:(0,r.jsx)(D,{content:a,title:i}),closable:!0},t))},J=(0,m.default)(O.G)(z()),V=function(e){var n=e.status;if(!n)return null;var t=S.RLE,a="black";return"draft"===n?(t=S.Xcf,a="#1a5a96"):"submitted"===n?(t=S.SZw,a="#fcba19"):["prFailed","applyFailed","planFailed"].includes(n)?(t=S.nYk,a="#ff0303"):"applied"===n&&(a="#2e8540",t=S.f8k),(0,r.jsx)(O.G,{icon:t,title:n,style:{color:a}})},Q=function(e){var n=e.pending,t=e.invitationSendTime;if(!t)return null;var a,i,o,s=(new Date).getTime()-new Date(t).getTime();return n&&s/864e5>2?(a=S.RLE,i="#ff0303",o="Invitation Expired"):n?(a=S.SZw,i="#fcba19",o="Invitation Sent"):(i="#2e8540",a=S.f8k,o="Active Member"),(0,r.jsx)(O.G,{icon:a,title:o,style:{color:i}})};var ee=(0,Z.hU)((function(e){var n,t=e.alert,a=e.currentUser,c=e.team,u=e.loadTeams,d=(0,f.useRouter)(),m=(0,l.useState)([]),x=m[0],Z=m[1],O=(0,l.useState)([]),P=O[0],T=O[1],E=(0,l.useState)(null),_=E[0],D=E[1],z=(0,l.useState)(null),A=z[0],M=z[1],I=(0,l.useState)([Y]),U=I[0],F=I[1],G=(0,l.useState)(),ee=G[0],ne=G[1],te=(0,l.useState)(!1),re=te[0],ae=te[1],ie=(0,l.useState)(),oe=ie[0],se=ie[1],le=(0,l.useState)("allow"),ce=le[0],ue=le[1],de=function(){var e=(0,s.Z)(i().mark((function e(n){var t,r,s,l,c,u,d,f,m,p,h,v,x,b;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ae(!0),e.next=3,Promise.all([(0,y.YY)(n),(0,w.H0)(n),(0,y.ZT)(n)]);case 3:t=e.sent,r=(0,o.Z)(t,3),s=r[0],l=r[1],c=r[2],u=(0,o.Z)(s,2),d=u[0],f=u[1],m=(0,o.Z)(l,2),p=m[0],h=m[1],v=(0,o.Z)(c,2),x=v[0],b=v[1],f||h||b?(Z([]),M(null),T([]),D(null)):(Z(d),M(d.find((function(e){return e.idirEmail===a.email}))),T(p||[]),D(x)),ae(!1);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){de(c.id)}),[null===c||void 0===c?void 0:c.id]),(0,l.useEffect)((function(){return _&&"submitted"===_.status&&(clearInterval(n),n=setInterval((0,s.Z)(i().mark((function e(){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.ZT)(c.id);case 2:t=e.sent,r=(0,o.Z)(t,2),a=r[0],r[1]?clearInterval(n):D(a);case 7:case"end":return e.stop()}}),e)}))),5e3)),function(){n&&clearInterval(n)}}),[_]);var fe=function(){var e=(0,s.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!X(U,ne)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,y.yG)({members:U,id:c.id});case 5:if(n=e.sent,r=(0,o.Z)(n,2),!r[1]){e.next=12;break}t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to add new members. Please ensure the emails you have entered are valid,\n        and reach out to the SSO team if the problem persists"}),e.next=17;break;case 12:return e.next=14,de(c.id);case 14:F([Y]),window.location.hash="",t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Invited new members to your team!"});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=(0,s.Z)(i().mark((function e(){var n,r,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(oe&&c.id){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,y.MH)(Number(oe),c.id);case 4:n=e.sent,r=(0,o.Z)(n,2),r[1]?t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to delete team member."}):(Z(x.filter((function(e){return e.id!==oe}))),s=null===(a=x.find((function(e){return e.id===oe})))||void 0===a?void 0:a.idirEmail,t.show({variant:"success",fadeOut:1e4,closable:!0,content:"".concat(s," has successfully been deleted.")}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=(0,s.Z)(i().mark((function e(n){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.id){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,y.rU)(n,c.id);case 4:r=e.sent,a=(0,o.Z)(r,2),a[1]?t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to resend invitation."}):t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Sent new invitation for team member ".concat(n.idirEmail)});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),he=function(){var e=(0,s.Z)(i().mark((function e(n,r){var a,s,l,u,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.zZ)(c.id,n,{role:r});case 2:if(a=e.sent,s=(0,o.Z)(a,2),l=s[0],!(u=s[1])){e.next=9;break}return console.error(u),e.abrupt("return");case 9:d=x.map((function(e){return e.id===n?l:e})),Z(d),t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Member role updated successfully"});case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();if(!c||!A)return null;var ve="admin"===A.role;return(0,r.jsxs)(K,{children:[(0,r.jsxs)(h.H,{defaultActiveKey:"members",children:[(0,r.jsx)(p.Z,{eventKey:"members",title:"Members",children:(0,r.jsxs)(B,{children:[ve?(0,r.jsx)(L,{variant:"plainText",onClick:function(){return window.location.hash=q},children:"+ Add new team members"}):(0,r.jsx)("br",{}),(0,r.jsx)(k.Z,{type:"text",rows:7,ready:!re,style:{marginTop:"20px"},children:(0,r.jsxs)(v.Z,{variant:"medium",readOnly:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"w60",children:"Status"}),(0,r.jsx)("th",{children:"Email"}),(0,r.jsxs)("th",{className:"w120",children:["Role\xa0",(0,r.jsx)(R.Z,{title:"",content:'Admin: can manage integrations <span class="strong">and</span> teams. <br> Members: can <span class="strong">only</span> manage integrations.',hide:200})]}),(0,r.jsx)("th",{className:"w120",children:"Actions"})]})}),(0,r.jsx)("tbody",{children:x.map((function(e){var n=ve&&A.id!==e.id;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"w60",children:(0,r.jsx)(Q,{pending:e.pending,invitationSendTime:e.createdAt})}),(0,r.jsx)("td",{children:e.idirEmail}),(0,r.jsx)("td",{className:"w120",children:n&&!e.pending?(0,r.jsxs)(b.ZP,{onChange:function(n){return he(e.id,n.target.value)},value:e.role,children:[(0,r.jsx)("option",{value:"member",children:"Member"}),(0,r.jsx)("option",{value:"admin",children:"Admin"})]}):(0,C.kC)(e.role)}),(0,r.jsxs)("td",{className:"w120",children:[n&&e.pending&&(0,r.jsx)(J,{icon:S.zBy,size:"lg",onClick:function(){return pe(e)},title:"Resend Invitation"}),n&&(0,r.jsx)(J,{icon:S.$aW,onClick:function(){return function(e){if(e){var n=(0,C.Wv)(x,e);ue(n?"allow":"notAllowed"),se(e),window.location.hash=H}}(e.id)},size:"lg",title:"Delete User"})]})]},e.id)}))})]})})]})}),(0,r.jsx)(p.Z,{eventKey:"integrations",title:"Integrations",children:(0,r.jsx)(B,{marginTop:"20px",children:(0,r.jsx)(k.Z,{type:"text",rows:7,ready:!re,style:{marginTop:"20px"},children:(0,r.jsxs)(v.Z,{variant:"medium",readOnly:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"w60",children:"Status"}),(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:(null===P||void 0===P?void 0:P.length)>0?null===P||void 0===P?void 0:P.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"w60",children:(0,r.jsx)(V,{status:null===e||void 0===e?void 0:e.status})}),(0,r.jsx)("td",{children:e.id}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:(0,r.jsx)(N.ZP,{request:e,onDelete:function(){u(),de(null===c||void 0===c?void 0:c.id)},children:(0,r.jsx)(N.Kk,{icon:S.Mdf,onClick:function(){return n=e.id,void d.push({pathname:"/my-dashboard/integrations",query:{integr:n}});var n},size:"lg"})})})]},e.id)})):(0,r.jsx)("tr",{children:(0,r.jsxs)(W,{colSpan:5,children:[(0,r.jsx)("br",{}),"There are no integrations for this team yet.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"To add this team to an ",(0,r.jsx)("span",{className:"strong",children:"existing integration"}),":",(0,r.jsx)("span",{className:"line-height-200"}),(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["Go to your"," ",(0,r.jsx)("span",{className:"text-blue",children:(0,r.jsx)("span",{className:"strong",children:"Projects"})})," ","tab"]}),(0,r.jsx)("li",{children:'Select the "pencil" icon to edit the integration'}),(0,r.jsx)("li",{children:'Select this team from the "Project Team" drop down'})]}),(0,r.jsx)("br",{}),"To add this team to a ",(0,r.jsx)("span",{className:"strong",children:"new integration"}),":",(0,r.jsx)("span",{className:"line-height-200"}),(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["Go to your"," ",(0,r.jsx)("span",{className:"text-blue",children:(0,r.jsx)("span",{className:"strong",children:"Projects"})})," ","tab"]}),(0,r.jsx)("li",{children:'Select "+ Request SSO Integration"'}),(0,r.jsx)("li",{children:'Select "Yes" to allow multiple team members to manage the integration'}),(0,r.jsx)("li",{children:'Select this team from the "Project Team" drop down'})]})]})})})]})})})})]}),(0,r.jsx)(g.Z,{title:"Add a New Team Member",icon:null,id:q,content:(0,r.jsx)(j.Z,{members:U,setMembers:F,allowDelete:!1,errors:ee,currentUser:a}),onConfirm:fe,skipCloseOnConfirm:!0,buttonStyle:"custom",closable:!0}),(0,r.jsx)($,{onConfirmDelete:me,type:ce})]})})),ne=t(96486),te=t(65764),re=t(11915),ae=t(31607),ie=t(10633);function oe(){var e=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  & button {\n    min-width: 180px;\n  }\n"]);return oe=function(){return e},e}var se=m.default.div(oe());function le(e){var n=e.onSubmit,t=e.teamId,a=e.initialTeamName,c=(0,l.useState)(""),u=c[0],d=c[1],f=(0,l.useState)(!1),m=f[0],p=f[1],h=(0,l.useState)(),v=h[0],b=h[1];(0,l.useEffect)((function(){d(a)}),[a]);var g=function(e){var n={members:[]},t=!1;return e.name.trim()||(n.name="Please enter a name",t=!0),t?n:(b(void 0),null)},j=function(){var e=(0,s.Z)(i().mark((function e(){var r,a,s,l,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={name:u.trim(),id:t},!(a=g(r))){e.next=4;break}return e.abrupt("return",b(a));case 4:return p(!0),e.next=7,(0,y.w2)(r);case 7:return s=e.sent,l=(0,o.Z)(s,2),(c=l[1])&&console.error(c),e.next=13,n();case 13:p(!1),window.location.hash="#";case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[(0,r.jsx)(re.ZP,{label:"New Team Name",onChange:function(e){d(e.target.value)},value:u}),v&&v.name&&(0,r.jsx)(ie.Z,{children:null===v||void 0===v?void 0:v.name}),(0,r.jsx)("br",{}),(0,r.jsxs)(se,{children:[(0,r.jsx)(x.zx,{variant:"secondary",onClick:function(){d(a),window.location.hash="#"},style:{marginRight:"20px"},children:"Cancel"}),(0,r.jsx)(x.zx,{type:"button",onClick:j,children:m?(0,r.jsx)(ae.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:m}):"Save"})]})]})}var ce=t(57120),ue=t(98224);function de(){var e=(0,d.Z)(["\n  &&& {\n    margin: 0;\n  }\n"]);return de=function(){return e},e}function fe(){var e=(0,d.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]);return fe=function(){return e},e}function me(){var e=(0,d.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]);return me=function(){return e},e}function pe(){var e=(0,d.Z)(["\n  text-align: center;\n  min-width: 100px;\n"]);return pe=function(){return e},e}var he="delete-team-modal",ve="edit-team-name-modal",xe=m.default.th(pe()),be=m.default.div(me()),ge=m.default.div(fe()),je=(0,m.default)(x.zx)(de()),we=(0,r.jsxs)(be,{children:[(0,r.jsx)(O.G,{icon:S.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]}),ye=function(e){var n=e.message;return(0,r.jsxs)(ge,{children:[(0,r.jsx)(O.G,{icon:S.sqG,title:"Information"}),"\xa0 ",n]})},Ze=function(e){var n=e.handleNewTeamClick;return(0,r.jsx)(je,{size:"large",onClick:n,variant:"callout",children:"+ Create a new Team"})};function ke(e){var n=e.currentUser,t=e.setTeam,a=e.loading,o=e.teams,c=e.loadTeams,u=e.state,d=(e.dispatch,(0,l.useState)(null)),f=d[0],m=d[1],p=(0,l.useState)(void 0),h=p[0],x=p[1],b=u.downloadError,j=f&&0===Number(f.integrationCount),w=function(e){m(e),x(null===e||void 0===e?void 0:e.id),t(e)};(0,l.useEffect)((function(){(null===o||void 0===o?void 0:o.length)>0?h&&o.find((function(e){return e.id===h}))||w(o[0]):w(null)}),[o]);var Z=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.location.hash=ce.zw);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=b?we:o&&0!==(null===o||void 0===o?void 0:o.length)?(0,r.jsxs)(v.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Team Name"}),(0,r.jsx)(xe,{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:o&&o.map((function(e){var n=0===Number(e.integrationCount);return(0,r.jsxs)("tr",{className:h===e.id?"active":"",onClick:function(){return w(e)},children:[(0,r.jsx)("td",{children:e.name}),(0,r.jsx)("td",{children:(0,r.jsxs)(N.c4,{children:[(0,r.jsx)(N.Kk,{icon:S.Xcf,role:"button","aria-label":"edit",title:"Edit",size:"lg",onClick:function(){return function(e){w(e),window.location.hash=ve}(e)}}),(0,r.jsx)(N.Kk,{disabled:!n,icon:S.$aW,role:"button","aria-label":"delete",title:"Delete",size:"lg",onClick:function(){return n?function(e){w(e),window.location.hash=he}(e):ne.noop}})]})})]},e.id)}))})]}):(0,r.jsx)(ye,{message:"You have not been added to any teams yet."}),O=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,y.fC)(h);case 4:return e.next=6,c();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?(0,r.jsx)(ue.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(Ze,{handleNewTeamClick:Z}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),k,(0,r.jsx)(g.Z,{title:"Create a new team",icon:null,onConfirm:function(){return console.log("confirm")},id:ce.zw,content:(0,r.jsx)(te.Z,{onSubmit:c,currentUser:n}),showCancel:!1,showConfirm:!1,closable:!0}),(0,r.jsx)(g.Z,{title:"Edit Team Name",icon:null,onConfirm:function(){return console.log("confirm")},id:ve,content:(0,r.jsx)(le,{onSubmit:c,teamId:h,initialTeamName:(null===f||void 0===f?void 0:f.name)||""}),showCancel:!1,showConfirm:!1,closable:!0}),(0,r.jsx)(g.Z,{title:"Delete team",icon:null,onConfirm:O,id:he,content:(0,r.jsx)(D,{title:"Are you sure that you want to delete this team?",content:j?"Once you delete this team, this action cannot be undone.":"Before you delete this team, you will need to delete the integration(s) the team is responsible for."}),buttonStyle:j?"danger":"custom",confirmText:j?"Delete Team":"Okay",closable:!0})]})}var Oe=function(e){var n=e.session,t=(0,l.useState)(!0),a=t[0],u=t[1],d=(0,l.useState)(null),f=d[0],m=d[1],p=(0,l.useState)([]),h=p[0],v=p[1],x=function(){var e=(0,s.Z)(i().mark((function e(){var n,t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,(0,y.Dc)();case 3:n=e.sent,t=(0,o.Z)(n,2),r=t[0],t[1],r&&v(r||[]),u(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){x()}),[]),(0,r.jsx)(c.ZP,{tab:"teams",leftPanel:function(e,t){return(0,r.jsx)(ke,{currentUser:n,setTeam:m,loading:a,teams:h,loadTeams:x,state:e,dispatch:t})},rightPanel:function(e,t){return f&&(0,r.jsx)(ee,{team:f,currentUser:n,loadTeams:x,state:e,dispatch:t})}})}},83727:function(e,n,t){"use strict";t.d(n,{E:function(){return o}});var r=t(26265);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var o={};n.Z=function(e,n){switch(n.type){case"setPanelTab":return i(i({},e),{},{panelTab:n.payload});case"setDownloadError":return i(i({},e),{},{downloadError:n.payload});default:return e}}},20417:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-dashboard/teams",function(){return t(70791)}])},59999:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(75093);var a=t(40355);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},41070:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};n.__esModule=!0;var i=t(67294),o=t(65837),s=t(64643);n.default=function(e){var n=e.delay,t=void 0===n?0:n,l=e.type,c=void 0===l?"text":l,u=e.color,d=void 0===u?"#CDCDCD":u,f=e.rows,m=void 0===f?3:f,p=e.ready,h=e.firstLaunchOnly,v=e.children,x=e.className,b=e.showLoadingAnimation,g=e.customPlaceholder,j=a(e,["delay","type","color","rows","ready","firstLaunchOnly","children","className","showLoadingAnimation","customPlaceholder"]),w=i.useState(p),y=w[0],Z=w[1],k=i.useRef(null);return i.useEffect((function(){h||!y||p?p&&(k.current&&window.clearTimeout(k.current),y||Z(!0)):t&&t>0?k.current=window.setTimeout((function(){Z(!1)}),t):Z(!1)}),[h,y,p,t]),i.useEffect((function(){return function(){k.current&&window.clearTimeout(k.current)}}),[]),y?v:function(){var e=b?s.joinClassNames("show-loading-animation",x):x;if(g&&i.isValidElement(g)){var n=s.joinClassNames(g.props.className,e);return i.cloneElement(g,{className:n})}if(g)return g;var t=o[c];return i.createElement(t,r({},j,{color:d,rows:m,className:e}))}()}},76457:function(e,n,t){"use strict";var r=t(41070);n.Z=r.default},41985:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};n.__esModule=!0;var a=t(67294),i=t(72075),o=t(91817),s=t(64643),l={display:"flex"};n.default=function(e){var n=e.className,t=e.style,c=e.color,u=e.rows;return a.createElement("div",{className:s.joinClassNames("media-block",n),style:r(r({},l),t)},a.createElement(o.default,{color:c,style:{minHeight:55,width:55,minWidth:55,marginRight:10}}),a.createElement(i.default,{color:c,rows:u}))}},38588:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};n.__esModule=!0;var a=t(67294),i=t(64643);n.default=function(e){var n=e.className,t=e.style,o={backgroundColor:e.color,width:"100%",height:"100%",marginRight:10};return a.createElement("div",{className:i.joinClassNames("rect-shape",n),style:r(r({},o),t)})}},91817:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};n.__esModule=!0;var a=t(67294),i=t(64643);n.default=function(e){var n=e.className,t=e.style,o={backgroundColor:e.color,borderRadius:"500rem",width:"100%",height:"100%"};return a.createElement("div",{className:i.joinClassNames("round-shape",n),style:r(r({},o),t)})}},72075:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};n.__esModule=!0;var a=t(67294),i=t(72992),o=t(64643),s={width:"100%"},l=[97,100,94,90,98,95,98,40];n.default=function(e){var n=e.rows,t=e.lineSpacing,c=e.color,u=e.style,d=e.className,f=e.widths,m=void 0===f?l:f,p=function(e){return{maxHeight:100/(2*n-1)+"%",width:m[(e+m.length)%m.length]+"%"}};return a.createElement("div",{className:o.joinClassNames("text-block",d),style:r(r({},s),u)},Array.apply(null,Array(n)).map((function(e,n){return a.createElement(i.default,{color:c,style:p(n),lineSpacing:0!==n?t:0,key:n})})))}},72992:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};n.__esModule=!0;var a=t(67294),i=t(64643);n.default=function(e){var n=e.className,t=e.maxHeight,o=e.color,s=e.lineSpacing,l=void 0===s?"0.7em":s,c=e.style,u={maxHeight:t,width:"100%",height:"1em",backgroundColor:o,marginTop:l};return a.createElement("div",{className:i.joinClassNames("text-row",n),style:r(r({},u),c)})}},65837:function(e,n,t){"use strict";n.__esModule=!0,n.media=n.text=n.rect=n.round=n.textRow=n.MediaBlock=n.TextBlock=n.RectShape=n.RoundShape=n.TextRow=void 0;var r=t(72992);n.TextRow=r.default;var a=t(91817);n.RoundShape=a.default;var i=t(38588);n.RectShape=i.default;var o=t(72075);n.TextBlock=o.default;var s=t(41985);n.MediaBlock=s.default,n.textRow=r.default,n.round=a.default,n.rect=i.default,n.text=o.default,n.media=s.default},64643:function(e,n){"use strict";n.__esModule=!0,n.joinClassNames=void 0,n.joinClassNames=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return e})).join(" ")}}},function(e){e.O(0,[376,591,774,888,179],(function(){return n=20417,e(e.s=n);var n}));var n=e.O();_N_E=n}]);