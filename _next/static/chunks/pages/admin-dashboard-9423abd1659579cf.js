(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{64735:function(e,t,n){"use strict";t.ZP=void 0;var r=(0,n(70623).applyTheme)({},{defaultProps:{},staticProps:[],cols:20,gutter:[5,2]});t.ZP=r},74150:function(e,t,n){"use strict";var r,i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.content,n=e.external,r=e.children,i=(0,s.default)(e,["content","external","children"]);return o.default.createElement(p,(0,a.default)({target:n?"_blank":"_self"},i),t||r,n&&o.default.createElement(o.default.Fragment,null,"\xa0",o.default.createElement(u.FaSVG,null,o.default.createElement("path",{fill:"currentColor",d:u.ExternalLinkAlt}))))},t.sizes=void 0;var a=i(n(87462)),s=i(n(63366)),l=i(n(81880)),o=i(n(67294)),c=i(n(8557)),u=n(69829),d={small:"0.8rem",medium:"1rem",large:"1.2rem"};t.sizes=d;var p=c.default.a(r||(r=(0,l.default)(["\n  font-size: ",";\n  color: #1a5a96;\n\n  &:hover {\n    text-decoration: none;\n    color: blue;\n  }\n\n  &:focus {\n    outline: 4px solid #3b99fc;\n    outline-offset: 1px;\n  }\n"])),function(e){return d[e.size||"medium"]})},70623:function(e,t,n){"use strict";var r,i,a=n(64836),s=n(75263);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.applyTheme=void 0;var l=a(n(63366)),o=a(n(87462)),c=a(n(81880)),u=s(n(67294)),d=a(n(86010)),p=a(n(78096)),f=n(80927),v="pg-grid-col",h={start:"flex-start",center:"center",end:"flex-end","space-between":"space-between","space-around":"space-around"},x={top:"flex-start",center:"center",bottom:"flex-end"},b=u.default.createContext({styleProps:{},Srow:null,Scol:null,cols:16,gutter:0,gutterUnit:"px",justify:"start",align:"start"}),m=function(e,t){var n,a,s=(0,f.processStyle)(e),m=(0,f.createStyleBuilder)(s,t),g=t.as||{},j=m(g.container||"div","container"),w=m((n=g.row||"div",p.default[n](r||(r=(0,c.default)(["\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-pack: inherit;\n    -ms-flex-pack: inherit;\n    justify-content: inherit;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    ","\n  "])),function(e){return"\n      margin-left: -"+e.gutterHorizontal+e.gutterUnit+";\n      margin-right: -"+e.gutterHorizontal+e.gutterUnit+";\n      row-gap: "+e.gutterVertical+e.gutterUnit+";\n      & > ."+v+" {\n        padding: "+e.gutterVertical+e.gutterUnit+" "+e.gutterHorizontal+e.gutterUnit+";\n      }\n      justify-content: "+h[e.justify]+";\n      align-items: "+x[e.align]+";\n      "+(e.collapse?"@media (max-width: "+e.collapse+"px) {\n              -webkit-box-orient: vertical;\n              -ms-flex-direction: column;\n              flex-direction: column;\n              & > ."+v+" {\n                width: 100% !important;\n              }\n            }\n            ":"")+"\n    "})),"row"),y=m((a=g.col||"div",p.default[a](i||(i=(0,c.default)(["\n    width: ","%;\n  "])),function(e){return e.width})),"col"),S=t.cols,E=void 0===S?16:S,P=t.gutter,C=t.gutterUnit,A=t.justify,U=t.align,Z=(0,f.createBootstrap)(s,"grid"),O=function(e){var t=Z(e),n=(t.id,t.name,t.label,t.ariaLabel,t.styleProps),r=t.children,i=t.className,a=t.rest,s=a.cols;return u.default.createElement(b.Provider,{value:{styleProps:n,Srow:w,Scol:y,cols:s||E,gutter:P,gutterUnit:C,justify:A,align:U}},u.default.createElement(j,(0,o.default)({},a,{className:(0,d.default)("pg-grid-container",i)}),r))};return O.Row=function(e){var t=(0,u.useContext)(b),n=t.Srow,r=t.styleProps,i=t.gutter,a=t.gutterUnit,s=t.justify,c=t.align,p=e.children,f=e.className,v=e.gutter,h=void 0===v?i:v,x=e.gutterUnit,m=e.justify,g=e.align,j=e.collapse,w=(0,l.default)(e,["children","className","gutter","gutterUnit","justify","align","collapse"]),y=(0,d.default)("pg-grid-row",f),S=0,E=0;if(Array.isArray(h))S=h[0]||0,E=h[1]||0;else{var P=h||0;S=P,E=P}return u.default.createElement(n,(0,o.default)({className:y},r,w,{collapse:j||"",gutterHorizontal:S,gutterVertical:E,gutterUnit:(void 0===x?a:x)||"px",justify:(void 0===m?s:m)||"start",align:(void 0===g?c:g)||"start"}),p)},O.Col=function(e){var t=e.children,n=e.className,r=e.span,i=(0,l.default)(e,["children","className","span"]),a=(0,d.default)(v,n),s=(0,u.useContext)(b),c=s.Scol,p=s.cols,f=s.styleProps;return u.default.createElement(c,(0,o.default)({className:a},f,i,{width:(void 0===r?1:r)/p*100}),t)},O};t.applyTheme=m;var g=m({},{});t.default=g},83333:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r,i=n(71383);n(67294);var a=n(71893),s=n(31513),l=n(85893),o=a.ZP.div(r||(r=(0,i.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function c(e){var t=e.events;return(0,l.jsx)(o,{children:t&&0!==t.length?t.map(function(e){var t;return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Event Code: "}),e.eventCode]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Created Time: "}),(t=e.createdAt,new Date(t).toLocaleString())]}),e.idirUserDisplayName&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Created By: "}),e.idirUserDisplayName]})}),e.details&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:(0,l.jsx)("strong",{children:"Details"})}),"request-update-success"===e.eventCode?(0,l.jsxs)(l.Fragment,{children:[(0,s.Sx)(e.details.changes),(0,l.jsx)("strong",{children:"Comment: "}),(0,l.jsx)("p",{children:e.details.comment})]}):(0,l.jsx)("pre",{children:(0,l.jsx)("code",{children:JSON.stringify(e.details||{},void 0,2)})})]}),(0,l.jsx)("hr",{})]},e.id)}):(0,l.jsx)("div",{children:"No events found"})})}},19344:function(e,t,n){"use strict";var r,i,a,s=n(71383),l=n(71893),o=n(77740),c=n(63005),u=n(85893),d=l.ZP.table(r||(r=(0,s.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]))),p=l.ZP.span(i||(i=(0,s.Z)(["\n  font-weight: 600;\n"]))),f=l.ZP.ul(a||(a=(0,s.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]))),v=function(e){var t=e.list,n=e.title,r=e.inline,i=void 0!==r&&r,a=e.testid;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:n}),((null==t?void 0:t.length)===1||i)&&(0,u.jsx)(p,{"data-testid":a,children:null==t?void 0:t.map(function(e,n){return(0,u.jsxs)("span",{children:[e,n!==t.length-1&&", "," "]},e)})})]}),!i&&((null==t?void 0:t.length)||0)>1&&(0,u.jsx)("tr",{children:(0,u.jsx)("td",{children:(0,u.jsx)(p,{children:(0,u.jsx)(f,{children:null==t?void 0:t.map(function(e){return(0,u.jsx)("li",{children:e},e)})})})})})]})};t.Z=function(e){var t,n,r,i,a,s,l,f,h=e.children,x=e.request,b=e.teams;if(!x)return null;var m=null!==(i=x.devIdps)&&void 0!==i?i:[],g="saml"!==x.protocol,j=m.map(function(e){return c.S[e]}),w="";x.usesTeam&&(w=(null===(f=(void 0===b?[]:b).find(function(e){return String(e.id)===String(x.teamId)}))||void 0===f?void 0:f.name)||x.team&&x.team.name);var y=(t=x.primaryEndUsers,n=x.primaryEndUsersOther,null==t?void 0:t.map(function(e){switch(e){case"livingInBC":return"People living in BC";case"businessInBC":return"People doing business/travel in BC";case"bcGovEmployees":return"BC Gov Employees";case"other":return"Other: ".concat(null!=n?n:"");default:return""}}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(d,{children:(0,u.jsxs)("tbody",{children:[w?(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Associated Team:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"associated-team",children:w})})]}):(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Are you accountable for this project?"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"you-accountable",children:void 0===(r=x.projectLead)?"":r?"Yes":"No"})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Client Protocol:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"client-protocol",children:g?"OpenID Connect":"SAML"})})]}),g&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Client Type:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"client-type-team",children:x.publicAccess?"Public":"Confidential"})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Usecase:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"use-case",children:o.F[x.authType||"browser-login"]})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Project Name:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"project-name",children:x.projectName})})]}),y&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Primary End Users:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"project-name",children:y.join(", ")})})]}),x.additionalRoleAttribute&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Additional Role Attribute:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"add-role-attrib",children:x.additionalRoleAttribute})})]}),(0,u.jsx)(v,{list:j,title:"Identity Providers Required:",inline:!0,testid:"idp-required"}),(null===(a=x.environments)||void 0===a?void 0:a.includes("dev"))&&(0,u.jsx)(v,{list:x.devValidRedirectUris,title:"Dev Redirect URIs:",testid:"dev-uri"}),(null===(s=x.environments)||void 0===s?void 0:s.includes("test"))&&(0,u.jsx)(v,{list:x.testValidRedirectUris,title:"Test Redirect URIs:",testid:"test-uri"}),(null===(l=x.environments)||void 0===l?void 0:l.includes("prod"))&&(0,u.jsx)(v,{list:x.prodValidRedirectUris,title:"Prod Redirect URIs:",testid:"prod-uri"}),h]})})})}},63005:function(e,t,n){"use strict";n.d(t,{S:function(){return r}});var r={idir:"IDIR",azureidir:"Azure IDIR",bceidbasic:"Basic BCeID",bceidbusiness:"Business BCeID",bceidboth:"Basic or Business BCeID",githubbcgov:"GitHub BC Gov",githubpublic:"GitHub",digitalcredential:"Digital Credential"}},77740:function(e,t,n){"use strict";n.d(t,{F:function(){return r}});var r={"browser-login":"Browser Login","service-account":"Service Account",both:"Browser Login & Service Account"}},80877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ed}});var r,i,a,s,l,o=n(16835),c=n(50029),u=n(87794),d=n.n(u),p=n(67294),f=n(11163),v=n(20070),h=n.n(v),x=n(59417),b=n(53442),m=n(37226),g=n(76691),j=n(61165),w=n(63055),y=n(31513),S=n(71383),E=n(71893),P=n(85330),C=n(99154),A=n(19344),U=n(4826),Z=n(74379),O=[{value:"draft",label:"Draft"},{value:"submitted",label:"Submitted"},{value:"pr",label:"PR"},{value:"prFailed",label:"PR Failed"},{value:"planned",label:"Planned"},{value:"applied",label:"Applied"},{value:"applyFailed",label:"Apply Failed"}],R=n(85893),k=function(e){var t,n=e.request,r=e.onUpdate,i=(0,p.useState)(n.status),a=i[0],s=i[1],l="edit-metadata",o=(t=(0,c.Z)(d().mark(function e(){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Uw)({id:n.id,status:a});case 2:if(!r){e.next=5;break}return e.next=5,r();case 5:window.location.hash="#";case 6:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,p.useEffect)(function(){s(n.status)},[n.id]);var u=(0,R.jsxs)("div",{"data-testid":"integration-status",children:[(0,R.jsx)("p",{style:{fontWeight:"bold"},children:"Integration Status"}),(0,R.jsx)(Z.ZP,{className:"react-select-container",classNamePrefix:"select",options:O.filter(function(e){return["submitted","planned"].includes(e.value)}),onChange:function(e){return s(e.value)},isSearchable:!0})]});return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(U.default,{variant:"bcPrimary",size:"small",onClick:function(){return window.location.hash=l},children:"Edit Metadata"}),(0,R.jsx)(j.Z,{id:l,content:u,onConfirm:o,icon:x.UJf,title:"Edit Metadata",closable:!0})]})},T=E.ZP.div(r||(r=(0,S.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function _(e){var t=e.currentUser,n=e.request,r=e.onUpdate;return n?(0,R.jsxs)(T,{children:[(0,R.jsx)("br",{}),(0,R.jsxs)(A.Z,{request:n,children:[(0,R.jsx)("br",{}),t.isAdmin&&(0,R.jsx)(k,{request:n,onUpdate:r})]})]}):null}var D=n(59499),I=n(42894),F=n(70300),N=n(76944),q=n(83333);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach(function(t){(0,D.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var K=E.ZP.div(i||(i=(0,S.Z)(["\n  text-align: center;\n"]))),z=[{value:"all",label:"All Events"},{value:"request-pr-success",label:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",label:"REQUEST_PR_FAILURE"},{value:"request-plan-success",label:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",label:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",label:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",label:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",label:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",label:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",label:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",label:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",label:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",label:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",label:"EMAIL_SUBMISSION_FAILURE"}];function H(e){var t,n=e.requestId,r=(0,p.useState)("all"),i=r[0],a=r[1],s=(0,p.useState)([]),l=s[0],u=s[1],f=(0,p.useState)(!1),v=f[0],h=f[1],x=(0,p.useState)(!1),b=x[0],m=x[1],g=(t=(0,c.Z)(d().mark(function e(){var t,r,a;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.next=5,(0,N.v)({requestId:n,eventCode:i});case 5:t=e.sent,a=(r=(0,o.Z)(t,2))[0],r[1]?m(!0):a&&u(a.rows),h(!1);case 11:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,p.useEffect)(function(){g()},[n,i]);var j=function(e){a(e)};return b?null:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(F.Z,{"data-testid":"events-dropdown",children:[(0,R.jsx)("br",{}),(0,R.jsx)(Z.ZP,{options:z,onChange:function(e){return j(e.value)},maxMenuHeight:300,styles:{control:function(e){return L(L({},e),{},{width:"250px"})},menu:function(e){return L(L({},e),{},{width:"250px"})}}})]}),v?(0,R.jsx)(K,{children:(0,R.jsx)(I.rj,{color:"#000",height:45,width:45,wrapperClass:"d-block",visible:v})}):(0,R.jsx)(q.Z,{events:l})]})}var Q=n(12059);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach(function(t){(0,D.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var V=E.ZP.div(a||(a=(0,S.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]))),J=function(e){var t,n,r=e.integration,i=e.type,a=e.canApproveProd,s=e.awaitingTFComplete,l=e.onApproved;if(!r)return null;var u=h()(i),p="".concat(i,"-approval-modal"),f=!1;switch(i){case"bceid":f=(0,y.he)(r);break;case"github":f=(0,y.R5)(r);break;case"digitalCredential":f=(0,y.jt)(r)}n=a?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("p",{children:"To begin the ".concat(u," integration in production, Click Below.")}),(0,R.jsx)(U.default,{onClick:function(){return window.location.hash=p},disabled:s,children:"Approve Prod"})]}):s&&f?(0,R.jsx)(Q.Z,{integration:r,title:"The terraform script will take approximately 20 minutes to complete."}):(0,R.jsx)("p",{children:"This integration has already been approved."});var v=(t=(0,c.Z)(d().mark(function e(){var t,n;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.WN)(G(G({},r),{},(0,D.Z)({},"".concat(i,"Approved"),!0)),!0);case 2:t=e.sent,n=(0,o.Z)(t,2)[1],l&&!n&&l();case 6:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(V,{children:[(0,R.jsx)("br",{}),n]}),(0,R.jsx)(j.Z,{id:p,content:"Are you sure you want to approve this integration for ".concat(u," production?"),onConfirm:v,icon:x.eHv,title:"".concat(u," Approve")})]})},W=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.bceidApproved;return(0,R.jsx)(J,{type:"bceid",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},Y=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.githubApproved;return(0,R.jsx)(J,{type:"github",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},X=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.digitalCredentialApproved;return(0,R.jsx)(J,{type:"digitalCredential",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},$=E.ZP.div(s||(s=(0,S.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]))),ee=function(e){var t=e.currentUser,n=e.integration,r=e.defaultTabKey,i=e.setActiveKey,a=e.setRows,s=e.activeKey;if(!n)return null;var l=n.environments,o=(void 0===l?[]:l).includes("prod"),c=(0,C.Jx)(n),u=(0,C.dV)(n),d=(0,C.S3)(n);return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(P.mQ,{activeKey:void 0===s?r:s,onChange:function(e){return i(e)},tabBarGutter:30,children:[(0,R.jsx)(P.OK,{tab:"Details",children:(0,R.jsx)($,{children:(0,R.jsx)(_,{currentUser:t,request:n,onUpdate:a})})},"details"),c&&o&&(0,R.jsx)(P.OK,{tab:"BCeID Prod",children:(0,R.jsx)(W,{integration:n,onApproved:function(){return a()}})},"bceid-prod"),u&&o&&(0,R.jsx)(P.OK,{tab:"GitHub Prod",children:(0,R.jsx)(Y,{integration:n,onApproved:function(){return a()}})},"github-prod"),d&&o&&(0,R.jsx)(P.OK,{tab:"Digital Credential Prod",children:(0,R.jsx)(X,{integration:n,onApproved:function(){return a()}})},"vc-prod"),(0,R.jsx)(P.OK,{tab:"Events",children:(0,R.jsx)($,{children:(0,R.jsx)(H,{requestId:n.id})})},"events")]})})},et=n(46312),en=n(59912),er=n(49910),ei=E.ZP.div(l||(l=(0,S.Z)(["\n  height: 100%;\n  overflow: auto;\n"]))),ea=function(e){var t=e.leftPanel,n=e.rightPanel,r=e.showResizable;return e.children,(0,R.jsxs)(en.Z,{rules:er.F,children:[void 0===r||r?(0,R.jsx)(et.e,{style:{paddingTop:"2px",borderBottom:"3px solid black"},defaultSize:{width:"100%",height:.45*window.innerHeight},enable:{bottom:!0},handleStyles:{bottom:{bottom:0}},children:(0,R.jsx)(ei,{children:t&&t()})}):t&&t(),(0,R.jsx)("br",{}),n&&n()]})},es=[{value:"idir",label:"IDIR"},{value:"bceid",label:"BCeID"},{value:"github",label:"GitHub"},{value:"digitalcredential",label:"Digital Credential"}],el=[{value:"active",label:"Active"},{value:"archived",label:"Deleted"}],eo=[{value:"dev",label:"Dev"},{value:"test",label:"Test"},{value:"prod",label:"Prod"}],ec=[5,10,15,30,50,100];function eu(){return(0,R.jsx)("span",{style:{marginLeft:"40%"},children:"Actions"})}function ed(e){var t,n,r,i,a,s,l,u=e.session,v=(0,f.useRouter)(),S=(0,p.useState)(!1),E=S[0],P=S[1],C=(0,p.useState)(!1),A=C[0],U=C[1],Z=(0,p.useState)([]),k=Z[0],T=Z[1],_=(0,p.useState)(String((null===(s=v.query)||void 0===s?void 0:s.id)||"")),D=_[0],I=_[1],F=(0,p.useState)(0),N=F[0],q=F[1],B=(0,p.useState)(5),L=B[0],K=B[1],z=(0,p.useState)(1),H=z[0],Q=z[1],M=(0,p.useState)(Number(null===(l=v.query)||void 0===l?void 0:l.id)||void 0),G=M[0],V=M[1],J=(0,p.useState)([]),W=J[0],Y=J[1],X=(0,p.useState)([]),$=X[0],et=X[1],en=(0,p.useState)([]),er=en[0],ei=en[1],ed=(0,p.useState)([]),ep=ed[0],ef=ed[1],ev=(0,p.useState)("details"),eh=ev[0],ex=ev[1],eb=k.find(function(e){return e.id===G}),em=(t=(0,c.Z)(d().mark(function e(){var t,n,r,i,a;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,y.UT)($,W),r=(n=(0,o.Z)(t,3))[0],i=n[1],a=n[2],e.abrupt("return",(0,m.zD)({searchField:["id","projectName"],searchKey:D,order:[["updatedAt","desc"],["status","desc"]],limit:L,page:H,status:er.map(function(e){return e.value}),archiveStatus:ep.map(function(e){return e.value}),realms:i,environments:a,types:["gold"],devIdps:r}));case 2:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)}),eg=(n=(0,c.Z)(d().mark(function e(){var t,n,r;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,em();case 3:t=e.sent,r=(n=(0,o.Z)(t,2))[0],n[1]?U(!0):r&&(T(r.rows),q(r.count)),P(!1);case 9:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});if((0,p.useEffect)(function(){V(void 0),eg()},[D,L,H,er,ep,$,W]),(0,p.useEffect)(function(){var e;return(0,y.rn)(k)&&(e=setTimeout((0,c.Z)(d().mark(function t(){var n,r,i;return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,em();case 2:n=t.sent,i=(r=(0,o.Z)(n,2))[0],r[1]?clearInterval(e):i&&(T(i.rows),q(i.count));case 7:case"end":return t.stop()}},t)})),5e3)),function(){e&&clearInterval(e)}},[k]),A)return null;var ej=function(e){return!e.archived&&["applied"].includes((null==e?void 0:e.status)||"")},ew=function(e){return!0!==e.archived&&!["pr","planned","submitted"].includes((null==e?void 0:e.status)||"")},ey=(r=(0,c.Z)(d().mark(function e(t){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!ej(t))){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v.push("/request/".concat(t.id,"?status=").concat(t.status));case 4:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)}),eS=(i=(0,c.Z)(d().mark(function e(t){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!ew(t))){e.next=2;break}return e.abrupt("return");case 2:V(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}},e)})),function(e){return i.apply(this,arguments)}),eE=(a=(0,c.Z)(d().mark(function e(){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(ew){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,m.Jl)(G);case 4:return e.next=6,em();case 6:window.location.hash="#";case 7:case"end":return e.stop()}},e)})),function(){return a.apply(this,arguments)}),eP=function(e){V(e.cells[0].value),ex("details")};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(ea,{leftPanel:function(){return(0,R.jsx)(b.Z,{searchPlaceholder:"Project ID or Name",headers:[{accessor:"id",Header:"Request ID"},{accessor:"projectName",Header:"Project Name"},{accessor:"status",Header:"Request Status"},{accessor:"archived",Header:"File Status"},{accessor:"actions",Header:(0,R.jsx)(eu,{}),disableSortBy:!0}],data:k.map(function(e){return{id:e.id,projectName:e.projectName,status:h()(e.status),archived:e.archived?"Deleted":"Active",environments:e.environments,actions:(0,R.jsxs)(g.c4,{children:[(0,R.jsx)(g.Kk,{icon:x.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),V(e.id),ex("events")},title:"Events"}),(0,R.jsx)(g.MO,{}),(0,R.jsx)(g.Kk,{disabled:!ej(e),icon:x.Xcf,role:"button","aria-label":"edit",onClick:function(){return ey(e)},title:"Edit"}),(0,R.jsx)(g.MO,{}),(0,R.jsx)(g.Kk,{icon:x.$aW,role:"button","aria-label":"delete",onClick:function(){return eS(e)},disabled:!ew(e),activeColor:w.Uo,title:"Delete from Keycloak"})]})}}),activateRow:eP,colfilters:[{value:W,multiselect:!0,onChange:Y,options:eo,label:"Environments"},{value:$,multiselect:!0,onChange:et,options:es,label:"IDPs"},{value:er,multiselect:!0,onChange:ei,options:O,label:"Workflow Status"},{value:ep,multiselect:!0,onChange:ef,options:el,label:"Archive Status"}],showFilters:!0,loading:E,totalColSpan:15,searchColSpan:5,headerAlign:"bottom",headerGutter:[5,0],onPage:Q,rowCount:N,searchKey:D,onSearch:function(e){I(e)},onEnter:function(e){I(e)},pageLimits:ec,limit:L,onLimit:function(e){Q(1),K(e)},noDataFoundElement:(0,R.jsx)("div",{style:{textAlign:"center"},children:"No clients found."}),pagination:!0})},rightPanel:function(){return eb&&(0,R.jsx)(ee,{currentUser:u,integration:eb,defaultTabKey:"details",setActiveKey:ex,activeKey:eh,setRows:eg})}}),(0,R.jsx)(j.Z,{id:"delete-modal","data-testid":"modal-delete-integration",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:eE,confirmText:"Delete",title:"Confirm Deletion"})]})}},76944:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});var r,i=n(50029),a=n(87794),s=n.n(a),l=n(21963),o=(r=(0,i.Z)(s().mark(function e(t){var n;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.e.post("events",t).then(function(e){return e.data});case 3:return n=e.sent,e.abrupt("return",[n,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return r.apply(this,arguments)})},25809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n(80877)}])}},function(e){e.O(0,[693,634,38,691,137,774,888,179],function(){return e(e.s=25809)}),_N_E=e.O()}]);