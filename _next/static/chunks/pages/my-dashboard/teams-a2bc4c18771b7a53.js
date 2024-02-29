(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{36575:function(e,n,t){"use strict";var r,i=t(71383),a=t(71893).ZP.span(r||(r=(0,i.Z)(["\n  color: #dc3545;\n  margin: 0;\n  padding: 0;\n"])));n.Z=a},39772:function(e,n,t){"use strict";var r,i=t(16835),a=t(50029),o=t(71383),s=t(87794),c=t.n(s),l=t(67294),d=t(11915),u=t(71893),m=t(85330),p=t(3016),h=t(42894),f=t(15812),x=t(36575),b=t(91679),g=t(24444),v=t(85893),j=u.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  & button {\n    min-width: 180px;\n  }\n"]))),w={idirEmail:"",role:"member",id:new Date().getTime()};n.Z=(0,f.hU)(function(e){var n,t=e.onSubmit,r=e.alert,o=((0,l.useContext)(g.SessionContext)||{}).session,s=(0,l.useState)([w]),u=s[0],f=s[1],y=(0,l.useState)(""),Z=y[0],S=y[1],P=(0,l.useState)(!1),k=P[0],C=P[1],O=(0,l.useState)(),A=O[0],T=O[1],E=(n=(0,a.Z)(c().mark(function e(){var n,a,s,l,d,m,h,x,g;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n={name:Z,members:u},a=(0,b.p)(n,o.email),l=(s=(0,i.Z)(a,2))[0],d=s[1],!l){e.next=5;break}return e.abrupt("return",T(d));case 5:return C(!0),e.next=8,(0,p.Cm)(n);case 8:if(m=e.sent,x=(h=(0,i.Z)(m,2))[0],(g=h[1])?r.show({variant:"danger",fadeOut:1e4,closable:!0,content:g}):r.show({variant:"success",fadeOut:1e4,closable:!0,content:"Team ".concat(Z," successfully created")}),!x){e.next=16;break}return e.next=16,t(x.id);case 16:f([w]),S(""),C(!1),window.location.hash="#";case 20:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});return(0,v.jsxs)("div",{children:[(0,v.jsx)(d.default,{label:"Team Name",onChange:function(e){S(e.target.value)},maxLength:"255","data-testid":"team-name",value:Z}),A&&A.name&&(0,v.jsx)(x.Z,{children:null==A?void 0:A.name}),(0,v.jsx)("br",{}),(0,v.jsx)("strong",{children:"Team Members"}),(0,v.jsx)(b.Z,{errors:A,members:u,setMembers:f,currentUser:o}),(0,v.jsxs)(j,{children:[(0,v.jsx)(m.zx,{variant:"secondary",onClick:function(){window.location.hash="#"},children:"Cancel"}),(0,v.jsx)(m.zx,{type:"button",onClick:E,"data-testid":"send-invitation",children:k?(0,v.jsx)(h.rj,{color:"#FFF",height:18,width:50,visible:k}):"Send Invitation"})]})]})})},91679:function(e,n,t){"use strict";t.d(n,{p:function(){return q}});var r,i,a,o,s,c,l,d,u,m,p=t(59499),h=t(27812),f=t(16835),x=t(71383);t(67294);var b=t(11915),g=t(35611),v=t(71893),j=t(48966),w=t.n(j),y=t(99603),Z=t(59417),S=t(36575),P=t(74150),k=t(90352),C=t(91296),O=t.n(C),A=t(69885),T=t(35685),E=t(85893);function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach(function(n){(0,p.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var I=v.ZP.div(r||(r=(0,x.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: end;\n  margin-bottom: 10px;\n  grid-gap: 0 1em;\n"]))),F=(0,v.ZP)(g.default)(i||(i=(0,x.Z)(["\n  & .pg-select-wrapper {\n    height: 44px;\n    ","\n  }\n"])),function(e){return e.readOnlyRole?"padding-left:6px;":""}),R=v.ZP.div(a||(a=(0,x.Z)(["\n  border-bottom: 1px solid black;\n  grid-column: 1 / 3;\n"]))),z=v.ZP.span(o||(o=(0,x.Z)(["\n  margin: 10px 0;\n  cursor: pointer;\n  & span {\n    margin-left: 5px;\n  }\n"]))),M=v.ZP.section(s||(s=(0,x.Z)(["\n  max-height: 50vh;\n  overflow-y: scroll;\n  padding-left: 1em;\n"]))),U=(0,v.ZP)(I)(c||(c=(0,x.Z)(["\n  grid-template-columns: 2.2fr 0.9fr 1.2fr;\n  align-items: start;\n  margin-bottom: 20px;\n  .email-select > .select-inner__control {\n    padding: 0.13em 0;\n    border: 2px solid #606060;\n\n    &:focus-within {\n      outline: 4px solid #3b99fc !important;\n      outline-offset: 2px !important;\n    }\n  }\n"]))),B=(0,v.ZP)(y.G)(l||(l=(0,x.Z)(["\n  align-self: center;\n  color: red;\n  cursor: pointer;\n"]))),G=(0,v.ZP)(y.G)(d||(d=(0,x.Z)(["\n  padding: 3px;\n  border-radius: 25px;\n  border-style: solid;\n  border-color: black;\n  border-width: thin;\n"]))),H=(0,v.ZP)(y.G)(u||(u=(0,x.Z)(["\n  padding: 3px;\n  border-radius: 25px;\n  border-style: solid;\n  border-color: black;\n  border-width: thin;\n  color: white;\n  background-color: black;\n"]))),K=v.ZP.p(m||(m=(0,x.Z)(["\n  font-style: italic;\n  font-size: 0.95em;\n"]))),_=O()(function(e,n){if(e.length<=2){n([]);return}(0,A.$J)(e).then(function(e){var t=(0,f.Z)(e,1)[0];return n((null==t?void 0:t.map(function(e){return{value:e.id,label:e.mail}}))||[])})},300,{trailing:!0}),q=function(e,n){var t={name:null,members:[]};return e.name||(t.name="Please enter a name"),e.members.forEach(function(r,i){r.idirEmail?w().isEmail(r.idirEmail)?(e.members.filter(function(e){return e.idirEmail===r.idirEmail}).length>1||r.idirEmail===n)&&(t.members[i]="Please use unique email"):t.members[i]="Please enter a valid email":t.members[i]="Please enter an email"}),[t.name||t.members.length>0,t]};n.Z=function(e){var n=e.errors,t=e.members,r=e.setMembers,i=e.allowDelete,a=void 0===i||i,o=e.currentUser,s=void 0===o?null:o,c=function(e,n){var i=N({},t[n]);i.idirEmail=(null==e?void 0:e.label.toLowerCase())||"";var a=(0,h.Z)(t);a[n]=i,r(a)},l=function(e,n){var i=N({},t[e]);i.role=n.target.value;var a=(0,h.Z)(t);a[e]=i,r(a)},d=function(e){r(t.filter(function(n,t){return t!==e}))};return(0,E.jsxs)("div",{children:[(0,E.jsxs)("p",{children:["Enter your team member’s government email address and they will be sent an invitation to join the project. Once they accept the invitation, they will have access to your project. Their invitation will expire in"," ",(0,E.jsx)("strong",{children:"2 business days"}),"."]}),(0,E.jsxs)("p",{children:[(0,E.jsx)("span",{className:"strong",children:"Roles:"}),(0,E.jsx)("br",{}),(0,E.jsxs)("div",{children:[(0,E.jsx)("span",{children:(0,E.jsx)(H,{icon:Z.Tab})}),"\xa0\xa0",(0,E.jsx)("span",{className:"underline",style:{verticalAlign:"top"},children:"Admins"}),(0,E.jsxs)("span",{style:{verticalAlign:"top"},children:["\xa0have ",(0,E.jsx)("b",{children:"managing"})," powers"]})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("span",{children:(0,E.jsx)(G,{icon:Z.Tab})}),"\xa0\xa0",(0,E.jsx)("span",{className:"underline",style:{verticalAlign:"top"},children:"Members"}),(0,E.jsxs)("span",{style:{verticalAlign:"top"},children:["\xa0have ",(0,E.jsx)("b",{children:"viewing"})," powers"]})]}),(0,E.jsx)("br",{}),(0,E.jsx)("div",{children:(0,E.jsx)("span",{className:"underline",children:(0,E.jsx)(P.default,{external:!0,href:(0,k.eO)("CSS-App-My-Teams#ive-created-a-team-now-what"),children:"View a detailed breakdown of roles on our wiki page"})})})]}),(0,E.jsxs)(M,{children:[(0,E.jsxs)(I,{children:[(0,E.jsx)("strong",{children:"Member"}),(0,E.jsx)("strong",{children:"Role"}),(0,E.jsx)(R,{})]}),(0,E.jsx)(K,{children:"*Please enter email address tied to an IDIR to allow your user to login"}),s&&(0,E.jsxs)(U,{children:[(0,E.jsx)(b.default,{value:(null==s?void 0:s.email)||"",readOnly:!0,fullWidth:!0}),(0,E.jsx)(F,{label:"Role",disabled:!0,value:"admin",readOnlyRole:!0,children:(0,E.jsx)("option",{value:"admin",children:"Admin"})})]}),t.map(function(e,t){return(0,E.jsxs)(U,{children:[(0,E.jsxs)("div",{children:[(0,E.jsx)(T.Z,{loadOptions:_,onChange:function(e){return c(e,t)},noOptionsMessage:function(){return"Start typing email..."},className:"email-select",menuPlacement:"top",maxMenuHeight:120,classNamePrefix:"select-inner",placeholder:"Enter email address"}),n&&n.members&&n.members[t]&&(0,E.jsx)(S.Z,{children:n.members[t]})]}),(0,E.jsxs)(F,{label:"Role",onChange:function(e){return l(t,e)},value:e.role,"data-testid":"user-role",children:[(0,E.jsx)("option",{value:"member",children:"Member"}),(0,E.jsx)("option",{value:"admin",children:"Admin"})]}),t>=0&&a&&(0,E.jsx)(B,{icon:Z.uMC,onClick:function(){return d(t)},title:"Delete","data-testid":"delete-user-role"})]},e.id)}),(0,E.jsxs)(z,{onClick:function(){r([].concat((0,h.Z)(t),[{idirEmail:"",role:"member",id:new Date().getTime(),pending:!0}]))},children:[(0,E.jsx)(y.G,{style:{color:"#006fc4"},icon:Z.KtF,title:"Add Item","data-testid":"add-user-role"}),(0,E.jsx)("span",{children:"Add another team member"})]})]})]})}},71057:function(e,n,t){"use strict";var r=t(83024),i=t(63055),a={shared:{button:"\n      border-radius: 0.222em;\n      border-width: 0;\n      padding: 0.6em 1.1em;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 700;\n      letter-spacing: 1px;\n      display: inline-block;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;\n    "},size:{xsmall:{button:"\n        font-size: 0.7rem;\n      "},small:{button:"\n        font-size: 0.8rem;\n      "},medium:{button:"\n        font-size: ".concat(i.n5,";\n      ")},large:{button:"\n        font-size: ".concat(i.zA,";\n      ")}},variant:{primary:{button:"\n        background-color: #D5EDFF;\n        box-shadow: 0px 0px 0px 2px #D5EDFF inset !important;\n        color: #3E3E3E;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #FFF7D5;\n          box-shadow: 0px 0px 0px 2px #FFF7D5 inset !important;\n          opacity: 0.80;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n      "},grey:{button:"\n        background-color: #B2B2B2;\n        box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        color: #F8F8F8;\n        min-width: 110px;\n\n        &:hover {\n          background-color: ".concat(i.TU,";\n          box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        }\n      ")}}},o=(0,r.applyTheme)(a,{defaultProps:{variant:"primary",size:"medium"},breakProps:[],staticProps:["fullHeight","fullWidth"]});n.Z=o},48398:function(e,n,t){"use strict";t.d(n,{V:function(){return p},q:function(){return m}});var r,i,a=t(71383),o=t(71893),s=t(99603),c=t(59417),l=t(85893),d=o.ZP.div(r||(r=(0,a.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]))),u=o.ZP.div(i||(i=(0,a.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]))),m=function(){return(0,l.jsxs)(d,{children:[(0,l.jsx)(s.G,{icon:c.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]})},p=function(e){var n=e.message;return(0,l.jsxs)(u,{children:[(0,l.jsx)(s.G,{icon:c.sqG,title:"Information"}),"\xa0 ",n]})}},6178:function(e,n,t){"use strict";var r,i=t(71383);t(67294);var a=t(11163),o=t(46312),s=t(71893),c=t(85330),l=t(59912),d=t(49910),u=t(85893),m=s.ZP.div(r||(r=(0,i.Z)(["\n  height: 100%;\n  overflow: auto;\n"])));n.Z=function(e){var n=e.tab,t=e.leftPanel,r=e.rightPanel,i=e.showResizable;e.children;var s=(0,a.useRouter)(),p=(0,u.jsxs)(c.mQ,{onChange:function(e){s.replace("/my-dashboard/".concat(e))},activeKey:n,tabBarGutter:30,children:[(0,u.jsx)(c.OK,{tab:"My Projects"},"integrations"),(0,u.jsx)(c.OK,{tab:"My Teams"},"teams")]});return(0,u.jsxs)(l.Z,{rules:d.F,children:[p,void 0===i||i?(0,u.jsx)(o.e,{style:{paddingTop:"2px",borderBottom:"3px solid black"},defaultSize:{width:"100%",height:.4*window.innerHeight},enable:{bottom:!0},handleStyles:{bottom:{bottom:0}},children:(0,u.jsx)(m,{children:t&&t()})}):t&&t(),(0,u.jsx)("br",{}),r&&r()]})}},37222:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return eJ}});var r,i,a,o,s,c,l,d,u,m,p,h,f,x,b,g,v,j,w,y,Z,S=t(16835),P=t(50029),k=t(87794),C=t.n(k),O=t(67294),A=t(6178),T=t(59499),E=t(71383),D=t(11163),N=t(71893),I=t(85330),F=t(53442),R=t(71057),z=t(35611),M=t(61165),U=t(91679),B=t(37226),G=t(3016),H=t(15812),K=t(76457),_=t(99603),q=t(59417),L=t(31513),Y=t(76691),W=t(85893),V=(0,N.ZP)(_.G)(r||(r=(0,E.Z)(["\n  color: #ff0303;\n"]))),$=N.ZP.div(i||(i=(0,E.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 6fr;\n"]))),X=function(e){var n=e.title,t=e.content,r=e.note;return(0,W.jsxs)($,{children:[(0,W.jsx)(V,{icon:q.RLE,size:"3x"}),(0,W.jsxs)("div",{children:[n&&(0,W.jsx)("strong",{children:n}),t&&(0,W.jsx)("p",{children:t}),r&&(0,W.jsx)("i",{children:r})]})]})},J=t(75780),Q=t(64735),ee=t(42894),en=t(63055),et=N.ZP.div(a||(a=(0,E.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 15px;\n  & > * {\n    margin-left: 15px;\n  }\n"]))),er=(0,N.ZP)(_.G)(o||(o=(0,E.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"])),function(e){return e.disabled?"not-allowed":"pointer"},function(e){return e.disabled?"color: #CACACA;":"color: inherit; &:hover { color: ".concat(e.activeColor||"#000","; }")},function(e){return e.isUnread?"color: ".concat(en.Uo):""});function ei(e){var n=e.copyOrDownloadAction,t=e.showDeleteModal,r=e.showUpdateModal,i=e.actionsDisabled;return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(et,{children:[(0,W.jsx)(er,{icon:q.kZ_,role:"button","aria-label":"copy",onClick:function(){return n(!1)},title:"Copy to clipboard",size:"lg",disabled:i}),(0,W.jsx)(er,{icon:q.q7m,role:"button","aria-label":"download",onClick:function(){return n(!0)},title:"Download",size:"lg",disabled:i}),(0,W.jsx)(er,{icon:q.lUd,role:"button","aria-label":"download",onClick:r,title:"Update secret",size:"lg",disabled:i}),(0,W.jsx)(er,{icon:q.$aW,role:"button","aria-label":"delete",onClick:t,title:"Delete",size:"lg",disabled:i})]})})}N.ZP.div(s||(s=(0,E.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"])));var ea=t(73923),eo=N.ZP.td(c||(c=(0,E.Z)(["\n  float: right;\n"])));(0,N.ZP)(_.G)(l||(l=(0,E.Z)(["\n  color: #000000;\n"])));var es=N.ZP.div(d||(d=(0,E.Z)(["\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n"])));function ec(){return(0,W.jsx)("span",{style:{float:"right",paddingRight:"2.7em"},children:"Actions"})}function el(e){var n,t,r,i=e.team,a=e.selectedServiceAccount,o=e.setSelectedServiceAccount,s=e.teamServiceAccounts,c=e.getTeamServiceAccounts,l="delete-service-account-modal",d="update-service-account-secret-modal",u=function(e){return e&&(null==e?void 0:e.status)!=="applied"&&!(null!=e&&e.archived)},m=function(){u(a)||(window.location.hash=l)},p=(n=(0,P.Z)(C().mark(function e(){return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,G.yN)(i.id,null==a?void 0:a.id);case 2:c(i.id);case 3:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)}),h=function(){u(a)||(window.location.hash=d)},f=(t=(0,P.Z)(C().mark(function e(){return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,G.Gc)(i.id,null==a?void 0:a.id);case 2:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)}),x=(r=(0,P.Z)(C().mark(function e(n){var t,r,o,s;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!u(a)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,G.vM)(i.id,null==a?void 0:a.id);case 4:r=e.sent,o=(o=(0,S.Z)(r,1)[0])||{},s={tokenUrl:"".concat(o["auth-server-url"],"/realms/").concat(o.realm,"/protocol/openid-connect/token"),clientId:"".concat(o.resource),clientSecret:"".concat(null===(t=o.credentials)||void 0===t?void 0:t.secret)},n?(0,ea.Di)((0,ea.ON)(s),"".concat(null==a?void 0:a.clientId,".json")):(0,ea.TE)((0,ea.ON)(s));case 10:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)});return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(F.Z,{headers:[{accessor:"id",Header:"API Account ID"},{accessor:"actions",Header:(0,W.jsx)(ec,{}),disableSortBy:!0}],data:s.map(function(e){return{id:e.id,actions:(0,W.jsx)(eo,{children:(0,W.jsx)(ei,{copyOrDownloadAction:x,showUpdateModal:h,showDeleteModal:m,actionsDisabled:Boolean(u(e))})})}}),colfilters:[],activateRow:function(e){var n=e.cells[0].row.original.id;s.forEach(function(e){e.id==n&&o(e)})},rowSelectorKey:"id"}),(0,W.jsx)(M.Z,{title:"Request a new secret for CSS API Account",icon:q.eHv,onConfirm:f,id:d,content:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(es,{children:(0,W.jsx)("strong",{children:"You are about to request a new secret for CSS API Account"})}),(0,W.jsx)("br",{}),(0,W.jsx)("p",{children:"Once the new secret gets generated, your previous secret will no longer be valid for any applications using it."}),(0,W.jsx)("p",{children:"This means any application using CSS API through this account should be configured with the new secret."})]}),buttonStyle:"custom",confirmText:"Confirm",closable:!0}),(0,W.jsx)(M.Z,{title:"Delete CSS API Account",icon:null,onConfirm:p,id:l,content:(0,W.jsx)(X,{title:"Are you sure that you want to delete this CSS API Account?",content:"Once you delete this CSS PI Account, this action cannot be undone."}),buttonStyle:"danger",confirmText:"Delete CSS API Account",closable:!0})]})}N.ZP.div(u||(u=(0,E.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 6fr;\n"])));var ed=t(44e3),eu=t(9206),em=t(24444),ep=t(90352);function eh(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var ef=N.ZP.div(m||(m=(0,E.Z)(["\n  padding-left: 1rem;\n  ","\n"])),function(e){return"\n  margin-top: ".concat(e.marginTop||"0",";\n  margin-bottom: ").concat(e.marginBottom||"0",";\n  margin-left: ").concat(e.marginLeft||"0",";\n  margin-right: ").concat(e.marginRight||"0",";\n  ")}),ex=N.ZP.td(p||(p=(0,E.Z)(["\n  float: right;\n"]))),eb=(0,N.ZP)(R.Z)(h||(h=(0,E.Z)(["\n  padding: 0 !important;\n  margin: 10px 0 !important;\n"]))),eg=N.ZP.td(f||(f=(0,E.Z)(["\n  text-align: left !important;\n"]))),ev=N.ZP.div(x||(x=(0,E.Z)(["\n  height: var(--field-top-spacing);\n"])));function ej(){return(0,W.jsxs)("span",{children:["Role\xa0",(0,W.jsx)(J.Z,{title:"",content:'Admin: can manage integrations <span class="strong">and</span> teams. <br> Members: can <span class="strong">only</span> manage integrations.',hide:200})]})}function ew(){return(0,W.jsx)("span",{style:{float:"right",paddingRight:"1.8em"},children:"Actions"})}function ey(){return(0,W.jsx)("span",{style:{float:"right",paddingRight:"0.4em"},children:"Actions"})}var eZ="add-member-modal",eS="delete-member-modal",eP={idirEmail:"",role:"member",pending:!0},ek=function(e){var n=e.onConfirmDelete,t=e.type,r={confirmText:"Delete",buttonStyle:"danger"},i="",a="";switch(t){case"allow":i="Once they are deleted, they will no longer have access to the team's integrations.",a="Are you sure that you want to delete this team member?",r.onConfirm=n;break;case"notAllowed":i="Before you delete the last team admin, you must assign a new admin.",r.confirmText="Okay",r.buttonStyle="custom"}return(0,W.jsx)(M.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?eh(Object(t),!0).forEach(function(n){(0,T.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):eh(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({title:"Delete Team Member",icon:null,id:eS,content:(0,W.jsx)(X,{content:i,title:a}),closable:!0},r))},eC=(0,N.ZP)(_.G)(b||(b=(0,E.Z)(["\n  margin-right: 10px;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),eO=function(e){var n=e.status;if(!n)return null;var t=q.RLE,r="black";return"draft"===n?(t=q.Xcf,r="#1a5a96"):"submitted"===n?(t=q.SZw,r="#fcba19"):["prFailed","applyFailed","planFailed"].includes(n)?(t=q.nYk,r="#ff0303"):"applied"===n&&(r="#2e8540",t=q.f8k),(0,W.jsx)(_.G,{icon:t,title:n,style:{color:r}})},eA=function(e){var n,t,r,i=e.pending,a=e.invitationSendTime;if(!a)return null;var o=new Date().getTime()-new Date(a).getTime();return i&&o/864e5>2?(n=q.RLE,t="#ff0303",r="Invitation Expired"):i?(n=q.SZw,t="#fcba19",r="Invitation Sent"):(t="#2e8540",n=q.f8k,r="Active Member"),(0,W.jsx)(_.G,{icon:n,title:r,style:{color:t}})};N.ZP.div(g||(g=(0,E.Z)(["\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-bottom: 1rem;\n"]))),N.ZP.div(v||(v=(0,E.Z)(["\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  border-bottom: 1px solid gray;\n"])));var eT=N.ZP.div(j||(j=(0,E.Z)(["\n  text-align: center;\n"]))),eE=(0,H.hU)(function(e){var n,t,r,i,a,o,s,c=e.alert,l=e.currentUser,d=e.team,u=e.loadTeams,m=(0,D.useRouter)(),p=(0,O.useState)([]),h=p[0],f=p[1],x=(0,O.useState)([]),b=x[0],g=x[1],v=(0,O.useState)([]),j=v[0],w=v[1],y=(0,O.useState)(null),Z=y[0],k=y[1],A=(0,O.useState)(null),T=A[0],E=A[1],N=(0,O.useState)(null),R=N[0],H=N[1],_=(0,O.useState)([eP]),V=_[0],$=_[1],X=(0,O.useState)(),J=X[0],en=X[1],et=(0,O.useState)(!1),er=et[0],ei=et[1],ea=(0,O.useState)(),eo=ea[0],es=ea[1],ec=(0,O.useState)("allow"),eh=ec[0],eE=ec[1],eD=(0,O.useContext)(em.SurveyContext),eN=(n=(0,P.Z)(C().mark(function e(n){var t,r,i,a,o,s,c,d,u,m;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return ei(!0),e.next=3,Promise.all([(0,G.YY)(n),(0,B.H0)(n)]);case 3:return t=e.sent,i=(r=(0,S.Z)(t,2))[0],a=r[1],s=(o=(0,S.Z)(i,2))[0],c=o[1],u=(d=(0,S.Z)(a,2))[0],m=d[1],c||m?(f([]),H(null),g([])):(f(s),H(s.find(function(e){return e.idirEmail===l.email})),g(u||[])),e.next=12,eI(n);case 12:ei(!1);case 13:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)}),eI=(t=(0,P.Z)(C().mark(function e(n){var t,r,i;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(ei(!0),"admin"!==d.role){e.next=11;break}return e.next=4,(0,G.Sx)(n);case 4:t=e.sent,i=(r=(0,S.Z)(t,2))[0],r[1]?w([]):(w(i),k(i&&i.length>0?i[0]:null)),e.next=13;break;case 11:w([]),k(null);case 13:ei(!1);case 14:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)});(0,O.useEffect)(function(){E(null),eN(d.id)},[d.id]),(0,O.useEffect)(function(){Z&&"applied"!==Z.status&&!Z.archived&&E(Z)},[Z]),(0,O.useEffect)(function(){return T&&"applied"!==T.status?(clearInterval(s),s=setInterval((0,P.Z)(C().mark(function e(){var n,t,r;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,G.ZT)(d.id,T.id);case 2:n=e.sent,r=(t=(0,S.Z)(n,2))[0],t[1]?clearInterval(s):E(r);case 7:case"end":return e.stop()}},e)})),5e3)):(eI(d.id),E(null)),function(){s&&clearInterval(s)}},[T]);var eF=function(e){e&&((0,L.Wv)(h,e)?eE("allow"):eE("notAllowed"),es(e),window.location.hash=eS)},eR=(r=(0,P.Z)(C().mark(function e(){var n,t,r,i,a;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,U.p)({name:d.name,members:V},l.email),r=(t=(0,S.Z)(n,2))[0],i=t[1],!r){e.next=4;break}return en(i),e.abrupt("return");case 4:return e.next=6,(0,G.yG)({members:V,id:d.id});case 6:if(a=e.sent,!(0,S.Z)(a,2)[1]){e.next=13;break}c.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to add new members. Please ensure the emails you have entered are valid,\n        and reach out to the SSO team if the problem persists"}),e.next=18;break;case 13:return e.next=15,eN(d.id);case 15:$([eP]),window.location.hash="",c.show({variant:"success",fadeOut:1e4,closable:!0,content:"Invited new members to your team!"});case 18:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)}),ez=(i=(0,P.Z)(C().mark(function e(){var n,t,r;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!eo||!d.id)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,G.MH)(Number(eo),d.id);case 4:n=e.sent,(0,S.Z)(n,2)[1]?c.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to delete team member."}):(f(h.filter(function(e){return e.id!==eo})),r=null===(t=h.find(function(e){return e.id===eo}))||void 0===t?void 0:t.idirEmail,c.show({variant:"success",fadeOut:1e4,closable:!0,content:"".concat(r," has successfully been deleted.")}));case 8:case"end":return e.stop()}},e)})),function(){return i.apply(this,arguments)}),eM=function(e){m.push({pathname:"/my-dashboard/integrations",query:{integr:e}})},eU=(a=(0,P.Z)(C().mark(function e(n){var t;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(d.id){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,G.rU)(n,d.id);case 4:t=e.sent,(0,S.Z)(t,2)[1]?c.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to resend invitation."}):c.show({variant:"success",fadeOut:1e4,closable:!0,content:"Sent new invitation for team member ".concat(n.idirEmail)});case 8:case"end":return e.stop()}},e)})),function(e){return a.apply(this,arguments)}),eB=(o=(0,P.Z)(C().mark(function e(n,t){var r,i,a,o;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,G.zZ)(d.id,n,{role:t});case 2:if(r=e.sent,a=(i=(0,S.Z)(r,2))[0],!(o=i[1])){e.next=9;break}return console.error(o),e.abrupt("return");case 9:f(h.map(function(e){return e.id===n?a:e})),c.show({variant:"success",fadeOut:1e4,closable:!0,content:"Member role updated successfully"});case 12:case"end":return e.stop()}},e)})),function(e,n){return o.apply(this,arguments)});if(!d||!R)return null;var eG="admin"===R.role;return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("h2",{children:"Team Details"}),(0,W.jsxs)(I.mQ,{defaultActiveKey:"members",tabBarGutter:30,children:[(0,W.jsx)(I.OK,{tab:"Members",children:(0,W.jsxs)(ef,{children:[eG?(0,W.jsx)(eb,{children:(0,W.jsx)(I.zx,{onClick:function(){return window.location.hash=eZ},"data-testid":"add-new-team-member",children:"+ Add New Team Members"})}):(0,W.jsx)("br",{}),(0,W.jsx)(K.Z,{type:"text",rows:7,ready:!er,style:{marginTop:"20px"},children:(0,W.jsx)(F.Z,{"data-testid":"team-members-table",variant:"medium",headers:[{accessor:"status",Header:"Invite Status",disableSortBy:!0},{accessor:"idirEmail",Header:"Email"},{accessor:"role",Header:(0,W.jsx)(ej,{}),disableSortBy:!0},{accessor:"actions",Header:(0,W.jsx)(ey,{}),disableSortBy:!0}],data:h.map(function(e){var n=eG&&R.id!==e.id;return{status:(0,W.jsx)(eA,{pending:e.pending,invitationSendTime:e.createdAt}),idirEmail:e.idirEmail,role:n&&!e.pending?(0,W.jsxs)(z.default,{onChange:function(n){return eB(e.id,n.target.value)},value:e.role,children:[(0,W.jsx)("option",{value:"member",children:"Member"}),(0,W.jsx)("option",{value:"admin",children:"Admin"})]}):(0,L.kC)(e.role),actions:(0,W.jsxs)(ex,{children:[n&&e.pending&&(0,W.jsx)(eC,{icon:q.zBy,size:"lg",onClick:function(){return eU(e)},title:"Resend Invitation",style:{marginRight:"6px"},"data-testid":"resend-invitation"}),n&&(0,W.jsx)(eC,{icon:q.$aW,onClick:function(){return eF(e.id)},size:"lg",title:"Delete User",style:{marginRight:"16px"},"data-testid":"delete-member"})]})}}),colfilters:[],rowSelectorKey:"status",readOnly:!0})})]})},"members"),(0,W.jsx)(I.OK,{tab:"Integrations",children:(0,W.jsx)(ef,{marginTop:"20px",children:(0,W.jsx)(K.Z,{type:"text",rows:7,ready:!er,style:{marginTop:"20px"},children:(0,W.jsx)(F.Z,{variant:"medium",headers:[{accessor:"status",Header:"Status",disableSortBy:!0},{accessor:"id",Header:"Request ID"},{accessor:"projectName",Header:"Project Name"},{accessor:"actions",Header:(0,W.jsx)(ew,{}),disableSortBy:!0}],data:(null==b?void 0:b.length)>0?null==b?void 0:b.map(function(e){return{status:(0,W.jsx)(eO,{status:null==e?void 0:e.status}),id:e.id,projectName:e.projectName,actions:(0,W.jsx)(ex,{children:(0,W.jsx)(Y.ZP,{request:e,onDelete:function(){u(),eN(null==d?void 0:d.id)},children:(0,W.jsx)(Y.Kk,{icon:q.Mdf,"aria-label":"view",onClick:function(){return eM(e.id)},size:"lg"})})})}}):[],readOnly:!0,colfilters:[],rowSelectorKey:"status",noDataFoundElement:(0,W.jsxs)(eg,{colSpan:5,children:[(0,W.jsx)("br",{}),"There are no integrations for this team yet.",(0,W.jsx)("br",{}),(0,W.jsx)("br",{}),"To add this team to an ",(0,W.jsx)("span",{className:"strong",children:"existing integration"}),":",(0,W.jsx)("span",{className:"line-height-200"}),(0,W.jsxs)("ol",{children:[(0,W.jsxs)("li",{children:["Go to your"," ",(0,W.jsx)("span",{className:"text-blue",children:(0,W.jsx)("span",{className:"strong",children:"Projects"})})," ","tab"]}),(0,W.jsx)("li",{children:"Select the “pencil” icon to edit the integration"}),(0,W.jsx)("li",{children:"Select this team from the “Project Team” drop down"})]}),(0,W.jsx)("br",{}),"To add this team to a ",(0,W.jsx)("span",{className:"strong",children:"new integration"}),":",(0,W.jsx)("span",{className:"line-height-200"}),(0,W.jsxs)("ol",{children:[(0,W.jsxs)("li",{children:["Go to your"," ",(0,W.jsx)("span",{className:"text-blue",children:(0,W.jsx)("span",{className:"strong",children:"Projects"})})," ","tab"]}),(0,W.jsx)("li",{children:"Select “+ Request SSO Integration”"}),(0,W.jsx)("li",{children:"Select “Yes” to allow multiple team members to manage the integration"}),(0,W.jsx)("li",{children:"Select this team from the “Project Team” drop down"})]})]})})})})},"integrations"),eG&&(0,W.jsx)(I.OK,{tab:"CSS API Account",children:(0,W.jsx)(ef,{marginTop:"10px",children:er?(0,W.jsxs)(eT,{children:[(0,W.jsx)(ev,{}),(0,W.jsx)(ee.rj,{color:"#000",height:45,width:45,wrapperClass:"d-block",visible:!0})]}):(0,W.jsxs)(Q.ZP,{cols:10,children:[(0,W.jsxs)(Q.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,W.jsx)(Q.ZP.Col,{span:4,children:j.length>0?(0,W.jsx)(el,{team:d,selectedServiceAccount:Z,setSelectedServiceAccount:k,teamServiceAccounts:j,getTeamServiceAccounts:eI}):(0,W.jsx)(I.zx,{style:{marginBottom:10},onClick:(0,P.Z)(C().mark(function e(){var n,t,r;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return ei(!0),e.next=3,(0,G.rl)(d.id);case 3:n=e.sent,(t=(0,S.Z)(n,2))[0],(r=t[1])?(ei(!1),c.show({variant:"danger",fadeOut:1e4,closable:!0,content:r})):(null==eD||eD.setShowSurvey(!0,"cssApiRequest"),eI(d.id));case 8:case"end":return e.stop()}},e)})),children:"+ Request CSS API Account"})}),(0,W.jsx)(Q.ZP.Col,{span:6,children:T&&(0,W.jsx)("div",{style:{display:"inline-flex",margin:"20px 0 20px 0",background:"#FFCCCB",borderRadius:"5px"},children:(0,W.jsx)("div",{style:{padding:5},children:(0,W.jsxs)(ed.B,{children:["Your request for an API account could not be completed. Please"," ",(0,W.jsx)(eu.rU,{external:!0,href:"mailto:bcgov.sso@gov.bc.ca",children:"contact the Pathfinder SSO Team"})]})})})})]}),j.length>0&&(0,W.jsx)(Q.ZP.Row,{children:(0,W.jsxs)(ed.$,{children:["For more information on how to use the CSS API Account with your integrations,"," ",(0,W.jsx)(eu.rU,{href:"".concat(ep.UN,"/integrating-your-application/css-app-api"),external:!0,children:"click to learn more on our wiki page"}),"."]})})]})})},"service-accounts")]}),(0,W.jsx)(M.Z,{title:"Add a New Team Member",icon:null,id:eZ,content:(0,W.jsx)(U.Z,{members:V,setMembers:$,allowDelete:eG,errors:J,currentUser:l}),onConfirm:eR,skipCloseOnConfirm:!0,buttonStyle:"custom",closable:!0}),(0,W.jsx)(ek,{onConfirmDelete:ez,type:eh})]})}),eD=t(39772),eN=t(11915),eI=t(36575),eF=N.ZP.div(w||(w=(0,E.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  & button {\n    min-width: 180px;\n  }\n"])));function eR(e){var n,t=e.onSubmit,r=e.teamId,i=e.initialTeamName,a=(0,O.useState)(""),o=a[0],s=a[1],c=(0,O.useState)(!1),l=c[0],d=c[1],u=(0,O.useState)(),m=u[0],p=u[1];(0,O.useEffect)(function(){s(i)},[i]);var h=function(e){var n={members:[]},t=!1;return(e.name.trim()||(n.name="Please enter a name",t=!0),t)?n:(p(void 0),null)},f=(n=(0,P.Z)(C().mark(function e(){var n,i,a,s;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=h(n={name:o.trim(),id:r}))){e.next=4;break}return e.abrupt("return",p(i));case 4:return d(!0),e.next=7,(0,G.w2)(n);case 7:return a=e.sent,(s=(0,S.Z)(a,2)[1])&&console.error(s),e.next=13,t();case 13:d(!1),window.location.hash="#";case 15:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});return(0,W.jsxs)("div",{children:[(0,W.jsx)(eN.default,{label:"New Team Name",onChange:function(e){s(e.target.value)},value:o,"data-testid":"edit-name"}),m&&m.name&&(0,W.jsx)(eI.Z,{children:null==m?void 0:m.name}),(0,W.jsx)("br",{}),(0,W.jsxs)(eF,{children:[(0,W.jsx)(I.zx,{variant:"secondary",onClick:function(){s(i),window.location.hash="#"},style:{marginRight:"20px"},"data-testid":"cancel-edit-name",children:"Cancel"}),(0,W.jsx)(I.zx,{type:"button",onClick:f,"data-testid":"save-edit-name",children:l?(0,W.jsx)(ee.rj,{color:"#FFF",height:18,width:50,visible:l}):"Save"})]})]})}var ez=t(31637),eM=t(20353),eU=t(34798),eB=t.n(eU);function eG(e){var n=e.team,t=e.showEditTeamNameModal,r=e.showDeleteModal,i=(0,eM.te)(n),a=(0,eM.VV)(n);return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(Y.c4,{children:[(0,W.jsx)(Y.Kk,{disabled:!a,icon:q.Xcf,role:"button","aria-label":"edit",title:"Edit",size:"lg",onClick:function(){return a?t(n):eB()},"data-testid":"edit-team-button"}),(0,W.jsx)(Y.Kk,{disabled:!i,icon:q.$aW,role:"button","aria-label":"delete",title:"Delete",size:"lg",onClick:function(){return i?r(n):eB()},style:{marginLeft:"7px"},"data-testid":"delete-team-button"})]})})}var eH=t(99245),eK=t.n(eH),e_=t(48398),eq="delete-team-modal",eL="edit-team-name-modal",eY=N.ZP.tr(y||(y=(0,E.Z)(["\n  float: right;\n  padding-right: 0.5em;\n"])));function eW(){return(0,W.jsx)("span",{style:{float:"right",paddingRight:"1em"},children:"Actions"})}var eV=(0,N.ZP)(I.zx)(Z||(Z=(0,E.Z)(["\n  &&& {\n    margin: 0;\n  }\n"]))),e$=function(e){var n=e.handleNewTeamClick;return(0,W.jsx)(eV,{size:"large",onClick:n,variant:"callout",children:"+ Create a New Team"})};function eX(e){var n,t,r,i=e.currentUser,a=e.setTeam,o=e.loading,s=e.teams,c=e.loadTeams,l=e.hasError,d=(0,O.useState)(null),u=d[0],m=d[1],p=(0,O.useState)(void 0),h=p[0],f=p[1],x=(0,O.useState)([]),b=x[0],g=x[1],v=u&&0===Number(u.integrationCount),j=function(e){m(e),f(null==e?void 0:e.id),a(e)},w=(n=(0,P.Z)(C().mark(function e(){var n;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((null==u?void 0:u.role)!=="admin"){e.next=9;break}return e.next=3,(0,G.Sx)(h);case 3:n=e.sent,g((0,S.Z)(n,1)[0]),e.next=10;break;case 9:g([]);case 10:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});(0,O.useEffect)(function(){(null==s?void 0:s.length)>0?h&&s.find(function(e){return e.id===h})||j(s[0]):j(null)},[s]),(0,O.useEffect)(function(){Number(null==u?void 0:u.serviceAccountCount)>0&&w()},[h]);var y=(t=(0,P.Z)(C().mark(function e(){return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.location.hash=ep.zw);case 1:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)}),Z=function(e){j(e),h===e.id&&(window.location.hash=eq)},k=function(e){j(e),window.location.hash=eL},A=l?(0,W.jsx)(e_.q,{}):s&&(null==s?void 0:s.length)!==0?(0,W.jsx)(F.Z,{headers:[{accessor:"name",Header:"Team Name"},{accessor:"actions",Header:(0,W.jsx)(eW,{}),disableSortBy:!0}],data:s&&s.map(function(e){return{teamId:e.id,name:e.name,actions:(0,W.jsx)(eY,{children:(0,W.jsx)(eG,{team:e,showEditTeamNameModal:k,showDeleteModal:Z})})}}),activateRow:function(e){var n=e.cells[0].row.original.teamId;s.forEach(function(e){e.id==n&&j(e)})},rowSelectorKey:"teamId",activeSelector:h,colfilters:[]}):(0,W.jsx)(e_.V,{message:"You have not been added to any teams yet."}),T=(r=(0,P.Z)(C().mark(function e(){return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=2;break}return e.abrupt("return");case 2:return b.length>0&&Promise.all(b.map(function(e){(0,G.yN)(h,e.id)})),e.next=5,(0,G.fC)(h);case 5:return e.next=7,c();case 7:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)});return o?(0,W.jsx)(ez.Z,{}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("br",{}),(0,W.jsx)(e$,{handleNewTeamClick:y}),(0,W.jsx)("br",{}),(0,W.jsx)("br",{}),A,(0,W.jsx)(M.Z,{title:"Create a New Team",icon:null,onConfirm:function(){return console.log("confirm")},id:ep.zw,content:(0,W.jsx)(eD.Z,{onSubmit:c,currentUser:i}),showCancel:!1,showConfirm:!1,closable:!0}),(0,W.jsx)(M.Z,{title:"Edit Team Name",icon:null,onConfirm:function(){return console.log("confirm")},id:eL,content:(0,W.jsx)(eR,{onSubmit:c,teamId:h,initialTeamName:(null==u?void 0:u.name)||""}),showCancel:!1,showConfirm:!1,closable:!0}),(0,W.jsx)(M.Z,{title:"Delete team",icon:null,onConfirm:T,id:eq,content:(0,W.jsx)(X,{title:"Are you sure that you want to delete this team?",content:v?"Once you delete this team, this action cannot be undone.":"Before you delete this team, you will need to delete the integration(s) the team is responsible for.",note:v&&!eK()(b)?"*By deleting this team, you are also deleting the CSS App API Account that belongs to this team.":""}),buttonStyle:v?"danger":"custom",confirmText:v?"Delete Team":"Okay",closable:!0})]})}var eJ=function(e){var n,t=e.session,r=(0,O.useState)(!0),i=r[0],a=r[1],o=(0,O.useState)(!1),s=o[0],c=o[1],l=(0,O.useState)(null),d=l[0],u=l[1],m=(0,O.useState)([]),p=m[0],h=m[1],f=(n=(0,P.Z)(C().mark(function e(){var n,t,r;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,(0,G.Dc)();case 3:n=e.sent,r=(t=(0,S.Z)(n,2))[0],c(!!t[1]),h(r||[]),a(!1);case 10:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});return(0,O.useEffect)(function(){f()},[]),(0,W.jsx)(A.Z,{tab:"teams",leftPanel:function(){return(0,W.jsx)(eX,{currentUser:t,setTeam:u,loading:i,teams:p,loadTeams:f,hasError:s})},rightPanel:function(){return d&&(0,W.jsx)(eE,{team:d,currentUser:t,loadTeams:f})}})}},73923:function(e,n,t){"use strict";t.d(n,{Di:function(){return a},ON:function(){return r},TE:function(){return i}});var r=function(e){return JSON.stringify(e,void 0,2)},i=function(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),document.body.removeChild(n),!0}catch(e){return document.body.removeChild(n),!1}},a=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",r=window.URL.createObjectURL(new Blob([e],{type:t})),i=document.createElement("a");i.href=r,i.setAttribute("download",n),document.body.appendChild(i),i.click(),document.body.removeChild(i)}},69137:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-dashboard/teams",function(){return t(37222)}])}},function(e){e.O(0,[650,936,908,715,584,54,774,888,179],function(){return e(e.s=69137)}),_N_E=e.O()}]);