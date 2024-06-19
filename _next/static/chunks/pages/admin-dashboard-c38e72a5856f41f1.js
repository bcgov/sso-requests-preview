(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{83333:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r,i=n(71383);n(67294);var a=n(71893),s=n(31513),o=n(85893),l=a.ZP.div(r||(r=(0,i.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function c(e){var t=e.events;return(0,o.jsx)(l,{children:t&&0!==t.length?t.map(function(e){var t;return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Event Code: "}),e.eventCode]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Created Time: "}),(t=e.createdAt,new Date(t).toLocaleString())]}),e.idirUserDisplayName&&(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Created By: "}),e.idirUserDisplayName]})}),e.details&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsx)("strong",{children:"Details"})}),"request-update-success"===e.eventCode?(0,o.jsxs)(o.Fragment,{children:[(0,s.Sx)(e.details.changes),(0,o.jsx)("strong",{children:"Comment: "}),(0,o.jsx)("p",{children:e.details.comment})]}):(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:JSON.stringify(e.details||{},void 0,2)})})]}),(0,o.jsx)("hr",{})]},e.id)}):(0,o.jsx)("div",{children:"No events found"})})}},19344:function(e,t,n){"use strict";var r,i,a,s=n(71383),o=n(71893),l=n(77740),c=n(63005),u=n(85893),d=o.ZP.table(r||(r=(0,s.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]))),p=o.ZP.span(i||(i=(0,s.Z)(["\n  font-weight: 600;\n"]))),v=o.ZP.ul(a||(a=(0,s.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]))),h=function(e){var t=e.list,n=e.title,r=e.inline,i=void 0!==r&&r,a=e.testid;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:n}),((null==t?void 0:t.length)===1||i)&&(0,u.jsx)(p,{"data-testid":a,children:null==t?void 0:t.map(function(e,n){return(0,u.jsxs)("span",{children:[e,n!==t.length-1&&", "," "]},e)})})]}),!i&&((null==t?void 0:t.length)||0)>1&&(0,u.jsx)("tr",{children:(0,u.jsx)("td",{children:(0,u.jsx)(p,{children:(0,u.jsx)(v,{children:null==t?void 0:t.map(function(e){return(0,u.jsx)("li",{children:e},e)})})})})})]})};t.Z=function(e){var t,n,r,i,a,s,o,v,f=e.children,x=e.request,b=e.teams;if(!x)return null;var j=null!==(i=x.devIdps)&&void 0!==i?i:[],m="saml"!==x.protocol,g=j.map(function(e){return c.S[e]}),w="";x.usesTeam&&(w=(null===(v=(void 0===b?[]:b).find(function(e){return String(e.id)===String(x.teamId)}))||void 0===v?void 0:v.name)||x.team&&x.team.name);var S=(t=x.primaryEndUsers,n=x.primaryEndUsersOther,null==t?void 0:t.map(function(e){switch(e){case"livingInBC":return"People living in BC";case"businessInBC":return"People doing business/travel in BC";case"bcGovEmployees":return"BC Gov Employees";case"other":return"Other: ".concat(null!=n?n:"");default:return""}}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(d,{children:(0,u.jsxs)("tbody",{children:[w?(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Associated Team:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"associated-team",children:w})})]}):(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Are you accountable for this project?"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"you-accountable",children:void 0===(r=x.projectLead)?"":r?"Yes":"No"})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Client Protocol:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"client-protocol",children:m?"OpenID Connect":"SAML"})})]}),m&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Client Type:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"client-type-team",children:x.publicAccess?"Public":"Confidential"})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Usecase:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"use-case",children:l.F[x.authType||"browser-login"]})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Project Name:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"project-name",children:x.projectName})})]}),S&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Primary End Users:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"project-name",children:S.join(", ")})})]}),x.additionalRoleAttribute&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Additional Role Attribute:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"add-role-attrib",children:x.additionalRoleAttribute})})]}),(0,u.jsx)(h,{list:g,title:"Identity Providers Required:",inline:!0,testid:"idp-required"}),(null===(a=x.environments)||void 0===a?void 0:a.includes("dev"))&&(0,u.jsx)(h,{list:x.devValidRedirectUris,title:"Dev Redirect URIs:",testid:"dev-uri"}),(null===(s=x.environments)||void 0===s?void 0:s.includes("test"))&&(0,u.jsx)(h,{list:x.testValidRedirectUris,title:"Test Redirect URIs:",testid:"test-uri"}),(null===(o=x.environments)||void 0===o?void 0:o.includes("prod"))&&(0,u.jsx)(h,{list:x.prodValidRedirectUris,title:"Prod Redirect URIs:",testid:"prod-uri"}),f]})})})}},63005:function(e,t,n){"use strict";n.d(t,{S:function(){return r}});var r={idir:"IDIR",azureidir:"IDIR - MFA",bceidbasic:"Basic BCeID",bceidbusiness:"Business BCeID",bceidboth:"Basic or Business BCeID",githubbcgov:"GitHub BC Gov",githubpublic:"GitHub",digitalcredential:"Digital Credential",bcservicescard:"BC Services Card"}},77740:function(e,t,n){"use strict";n.d(t,{F:function(){return r}});var r={"browser-login":"Browser Login","service-account":"Service Account",both:"Browser Login & Service Account"}},67569:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eC}});var r,i,a,s,o,l,c=n(16835),u=n(50029),d=n(71383),p=n(87794),v=n.n(p),h=n(67294),f=n(11163),x=n(20070),b=n.n(x),j=n(59417),m=n(53442),g=n(37226),w=n(76691),S=n(61165),C=n(63055),y=n(31513),E=n(71893),P=n(85330),A=n(99154),Z=n(19344),k=n(4826),U=n(23157),O=[{value:"draft",label:"Draft"},{value:"submitted",label:"Submitted"},{value:"planned",label:"Planned"},{value:"planFailed",label:"Plan Failed"},{value:"applied",label:"Applied"},{value:"applyFailed",label:"Apply Failed"}],R=n(85893),T=function(e){var t,n=e.request,r=e.onUpdate,i=(0,h.useState)(n.status),a=i[0],s=i[1],o="edit-metadata",l=(t=(0,u.Z)(v().mark(function e(){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.Uw)({id:n.id,status:a});case 2:if(!r){e.next=5;break}return e.next=5,r();case 5:window.location.hash="#";case 6:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,h.useEffect)(function(){s(n.status)},[n.id]);var c=(0,R.jsxs)("div",{"data-testid":"integration-status",children:[(0,R.jsx)("p",{style:{fontWeight:"bold"},children:"Integration Status"}),(0,R.jsx)(U.ZP,{className:"react-select-container",classNamePrefix:"select",options:O.filter(function(e){return["draft","submitted"].includes(e.value)}),onChange:function(e){return s(e.value)},isSearchable:!0})]});return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(k.default,{variant:"bcPrimary",size:"small",onClick:function(){return window.location.hash=o},children:"Edit Metadata"}),(0,R.jsx)(S.Z,{id:o,content:c,onConfirm:l,icon:j.UJf,title:"Edit Metadata",closable:!0})]})},I=E.ZP.div(r||(r=(0,d.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function D(e){var t=e.currentUser,n=e.request,r=e.onUpdate;return n?(0,R.jsxs)(I,{children:[(0,R.jsx)("br",{}),(0,R.jsxs)(Z.Z,{request:n,children:[(0,R.jsx)("br",{}),t.isAdmin&&(0,R.jsx)(T,{request:n,onUpdate:r})]})]}):null}var F=n(59499),_=n(42894),q=n(70300),N=n(76944),B=n(83333);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(t){(0,F.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var H=E.ZP.div(i||(i=(0,d.Z)(["\n  text-align: center;\n"]))),M=[{value:"all",label:"All Events"},{value:"request-pr-success",label:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",label:"REQUEST_PR_FAILURE"},{value:"request-plan-success",label:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",label:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",label:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",label:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",label:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",label:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",label:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",label:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",label:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",label:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",label:"EMAIL_SUBMISSION_FAILURE"}];function Q(e){var t,n=e.requestId,r=(0,h.useState)("all"),i=r[0],a=r[1],s=(0,h.useState)([]),o=s[0],l=s[1],d=(0,h.useState)(!1),p=d[0],f=d[1],x=(0,h.useState)(!1),b=x[0],j=x[1],m=(t=(0,u.Z)(v().mark(function e(){var t,r,a;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return f(!0),e.next=5,(0,N.v)({requestId:n,eventCode:i});case 5:t=e.sent,a=(r=(0,c.Z)(t,2))[0],r[1]?j(!0):a&&l(a.rows),f(!1);case 11:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,h.useEffect)(function(){m()},[n,i]);var g=function(e){a(e)};return b?null:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(q.Z,{"data-testid":"events-dropdown",children:[(0,R.jsx)("br",{}),(0,R.jsx)(U.ZP,{options:M,onChange:function(e){return g(e.value)},maxMenuHeight:300,styles:{control:function(e){return K(K({},e),{},{width:"250px"})},menu:function(e){return K(K({},e),{},{width:"250px"})}}})]}),p?(0,R.jsx)(H,{children:(0,R.jsx)(_.rj,{color:"#000",height:45,width:45,wrapperClass:"d-block",visible:p})}):(0,R.jsx)(B.Z,{events:o})]})}var G=n(44e3),z=n(9206);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach(function(t){(0,F.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var V=E.ZP.div(a||(a=(0,d.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]))),W=function(e){var t,n,r=e.integration,i=e.type,a=e.canApproveProd,s=e.awaitingTFComplete,o=e.onApproved;if(!r)return null;var l=b()(i),d="".concat(i,"-approval-modal"),p=!1;switch(i){case"bceid":p=(0,y.he)(r);break;case"github":p=(0,y.R5)(r);break;case"digitalCredential":p=(0,y.jt)(r);break;case"BCServicesCard":p=(0,y.kF)(r)}n=a?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("p",{children:"To begin the ".concat(l," integration in production, Click Below.")}),(0,R.jsx)(k.default,{onClick:function(){return window.location.hash=d},disabled:s,children:"Approve Prod"})]}):s&&p?(0,R.jsx)("div",{style:{display:"inline-flex",background:"#FFCCCB",borderRadius:"5px"},children:(0,R.jsx)("div",{style:{padding:5},children:(0,R.jsxs)(G.B,{children:["Your request for ",i," approval could not be completed. Please"," ",(0,R.jsx)(z.rU,{external:!0,href:"mailto:bcgov.sso@gov.bc.ca",children:"contact the Pathfinder SSO Team"})]})})}):(0,R.jsx)("p",{children:"This integration has already been approved."});var h=(t=(0,u.Z)(v().mark(function e(){var t,n;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.WN)(J(J({},r),{},(0,F.Z)({},"".concat(i,"Approved"),!0)),!0);case 2:t=e.sent,n=(0,c.Z)(t,2)[1],o&&!n&&o();case 6:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(V,{children:[(0,R.jsx)("br",{}),n]}),(0,R.jsx)(S.Z,{id:d,content:"Are you sure you want to approve this integration for ".concat(l," production?"),onConfirm:h,icon:j.eHv,title:"".concat(l," Approve")})]})},X=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.bceidApproved;return(0,R.jsx)(W,{type:"bceid",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},$=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.githubApproved;return(0,R.jsx)(W,{type:"github",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},ee=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.digitalCredentialApproved;return(0,R.jsx)(W,{type:"digitalCredential",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},et=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.bcServicesCardApproved;return(0,R.jsx)(W,{type:"BCServicesCard",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},en=E.ZP.div(s||(s=(0,d.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]))),er=function(e){var t=e.currentUser,n=e.integration,r=e.defaultTabKey,i=e.setActiveKey,a=e.setRows,s=e.activeKey;if(!n)return null;var o=n.environments,l=(void 0===o?[]:o).includes("prod"),c=(0,A.Jx)(n),u=(0,A.dV)(n),d=(0,A.S3)(n),p=(0,A.e$)(n);return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(P.mQ,{activeKey:void 0===s?r:s,onChange:function(e){return i(e)},tabBarGutter:30,children:[(0,R.jsx)(P.OK,{tab:"Details",children:(0,R.jsx)(en,{children:(0,R.jsx)(D,{currentUser:t,request:n,onUpdate:a})})},"details"),c&&l&&(0,R.jsx)(P.OK,{tab:"BCeID Prod",children:(0,R.jsx)(X,{integration:n,onApproved:function(){return a()}})},"bceid-prod"),u&&l&&(0,R.jsx)(P.OK,{tab:"GitHub Prod",children:(0,R.jsx)($,{integration:n,onApproved:function(){return a()}})},"github-prod"),d&&l&&(0,R.jsx)(P.OK,{tab:"Digital Credential Prod",children:(0,R.jsx)(ee,{integration:n,onApproved:function(){return a()}})},"vc-prod"),p&&l&&(0,R.jsx)(P.OK,{tab:"BC Services Card Prod",children:(0,R.jsx)(et,{integration:n,onApproved:function(){return a()}})},"bcsc-prod"),(0,R.jsx)(P.OK,{tab:"Events",children:(0,R.jsx)(en,{children:(0,R.jsx)(Q,{requestId:n.id})})},"events")]})})},ei=n(46312),ea=n(59912),es=n(49910),eo=E.ZP.div(o||(o=(0,d.Z)(["\n  height: 100%;\n  overflow: auto;\n"]))),el=function(e){var t=e.leftPanel,n=e.rightPanel,r=e.showResizable;return e.children,(0,R.jsxs)(ea.Z,{rules:es.F,children:[void 0===r||r?(0,R.jsx)(ei.e,{style:{paddingTop:"2px",borderBottom:"3px solid black"},defaultSize:{width:"100%",height:.45*window.innerHeight},enable:{bottom:!0},handleStyles:{bottom:{bottom:0}},children:(0,R.jsx)(eo,{children:t&&t()})}):t&&t(),(0,R.jsx)("br",{}),n&&n()]})},ec=n(3016),eu=n(35685),ed=n(48398),ep=n(15812),ev=n(67888),eh=n(63784),ef=n(34155),ex=[{value:"idir",label:"IDIR"},{value:"bceid",label:"BCeID"},{value:"github",label:"GitHub"},{value:"digitalcredential",label:"Digital Credential"},{value:"bcservicescard",label:"BC Services Card"}],eb=[{value:"active",label:"Active"},{value:"archived",label:"Deleted"}],ej=[{value:"dev",label:"Dev"},{value:"test",label:"Test"},{value:"prod",label:"Prod"}],em=[5,10,15,30,50,100];function eg(){return(0,R.jsx)("span",{style:{marginLeft:"40%"},children:"Actions"})}var ew=E.ZP.div(l||(l=(0,d.Z)(["\n  .restoration-email-select {\n    * {\n      visibility: inherit;\n    }\n  }\n  label {\n    margin-bottom: 0.5em;\n  }\n  .error-text {\n    margin-top: 0.5em;\n    color: red;\n  }\n"]))),eS=function(e){var t,n,r=e.selectedIntegration,i=e.loadData,a=e.alert,s=(0,h.useState)(!1),o=s[0],l=s[1],d=(0,h.useState)(!1),p=d[0],f=d[1],x=(0,h.useState)(""),b=x[0],j=x[1],m=(0,h.useState)(""),w=m[0],C=m[1],y=(t=(0,u.Z)(v().mark(function e(){var t,n,i;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,(0,ec.Um)(String(r.teamId));case 3:t=e.sent,i=(n=(0,c.Z)(t,2))[0],n[1],l(!!i),f(!1);case 9:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,h.useEffect)(function(){C(""),j(""),null!=r&&r.usesTeam&&y()},[null==r?void 0:r.id]),(0,h.useEffect)(function(){C("")},[b]);var E=(n=(0,u.Z)(v().mark(function e(){var t,n,s,l,u,d;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!(null!=r&&r.usesTeam&&o),n=!1,!(t&&!b)){e.next=5;break}return C("Please select an email address to restore the integration to."),e.abrupt("return");case 5:if(!(null!=r&&r.apiServiceAccount)){e.next=15;break}return e.next=8,(0,ec.NU)(Number(null==r?void 0:r.teamId),null==r?void 0:r.id);case 8:s=e.sent,(l=(0,c.Z)(s,2))[0],n=!!l[1],e.next=22;break;case 15:return e.next=17,(0,g.OS)(null==r?void 0:r.id,b);case 17:u=e.sent,(d=(0,c.Z)(u,2))[0],n=!!d[1];case 22:return n&&a.show({variant:"danger",content:"Failed to restore integration, please try again."}),e.next=25,i();case 25:P(),window.location.hash="#";case 27:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)}),P=function(){j(""),C("")};if(!r)return null;var A="";return A=p?"Checking if the team exists...":r.usesTeam&&o?"You are about to restore this integration.":r.apiServiceAccount&&!o?"Cannot restore this team account, team does not exist.":(0,R.jsxs)(ew,{children:[(0,R.jsx)("label",{htmlFor:"restoration-email-select",children:"Please validate the requestor who is asking to restore (get one more government employee confirming their role). Please enter new requestor email address. Note this requestor can then assign to a new team as needed."}),(0,R.jsx)(eu.Z,{loadOptions:ev.c,value:{value:b,label:b},onChange:function(e){return j((null==e?void 0:e.label)||"")},noOptionsMessage:function(){return"Start typing email..."},maxMenuHeight:120,placeholder:"Enter email address",id:"restoration-email-select",className:"restoration-email-select"}),w&&(0,R.jsx)("p",{className:"error-text",children:"Select an email address"})]}),(0,R.jsx)(S.Z,{id:"restore-modal","data-testid":"modal-restore-integration",content:A,onConfirm:E,confirmText:"Restore",title:"Confirm Restoration",skipCloseOnConfirm:!0,showConfirm:!(r.apiServiceAccount&&!o),onClose:P})},eC=(0,ep.hU)(function(e){var t,n,r,i,a,s,o,l,d=e.session,p=e.alert,x=(0,f.useRouter)(),S=(0,h.useState)(!1),E=S[0],P=S[1],A=(0,h.useState)(!1),Z=A[0],k=A[1],U=(0,h.useState)([]),T=U[0],I=U[1],D=(0,h.useState)(String((null===(o=x.query)||void 0===o?void 0:o.id)||"")),F=D[0],_=D[1],q=(0,h.useState)(0),N=q[0],B=q[1],L=(0,h.useState)(5),K=L[0],H=L[1],M=(0,h.useState)(1),Q=M[0],G=M[1],z=(0,h.useState)(Number(null===(l=x.query)||void 0===l?void 0:l.id)||void 0),Y=z[0],J=z[1],V=(0,h.useState)([]),W=V[0],X=V[1],$=(0,h.useState)([]),ee=$[0],et=$[1],en=(0,h.useState)([]),ei=en[0],ea=en[1],es=(0,h.useState)([]),eo=es[0],eu=es[1],ep=(0,h.useState)("details"),ev=ep[0],ew=ep[1],eC=T.find(function(e){return e.id===Y}),ey=(t=(0,u.Z)(v().mark(function e(){var t,n,r,i,a;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,y.UT)(ee,W),r=(n=(0,c.Z)(t,3))[0],i=n[1],a=n[2],e.abrupt("return",(0,g.zD)({searchField:["id","projectName"],searchKey:F,order:[["updatedAt","desc"],["status","desc"]],limit:K,page:Q,status:ei.map(function(e){return e.value}),archiveStatus:eo.map(function(e){return e.value}),realms:i,environments:a,types:["gold"],devIdps:r}));case 2:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)}),eE=(n=(0,u.Z)(v().mark(function e(){var t,n,r;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,ey();case 3:t=e.sent,r=(n=(0,c.Z)(t,2))[0],n[1]?k(!0):r&&(I(r.rows),B(r.count)),P(!1);case 9:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});if((0,h.useEffect)(function(){J(void 0),eE()},[F,K,Q,ei,eo,ee,W]),(0,h.useEffect)(function(){var e;return(0,y.rn)(T)&&(e=setTimeout((0,u.Z)(v().mark(function t(){var n,r,i;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ey();case 2:n=t.sent,i=(r=(0,c.Z)(n,2))[0],r[1]?clearInterval(e):i&&(I(i.rows),B(i.count));case 7:case"end":return t.stop()}},t)})),5e3)),function(){e&&clearInterval(e)}},[T]),Z)return(0,R.jsx)(ed.q1,{});var eP=function(e){return!e.archived&&["applied"].includes((null==e?void 0:e.status)||"")&&!e.apiServiceAccount},eA=function(e){return!0!==e.archived&&!["pr","planned","submitted"].includes((null==e?void 0:e.status)||"")},eZ=function(e){return!1!==e.archived&&!!["applied"].includes((null==e?void 0:e.status)||"")},ek=(r=(0,u.Z)(v().mark(function e(t){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!eP(t))){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,x.push("/request/".concat(t.id,"?status=").concat(t.status));case 4:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)}),eU=(i=(0,u.Z)(v().mark(function e(t){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!eA(t))){e.next=2;break}return e.abrupt("return");case 2:J(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}},e)})),function(e){return i.apply(this,arguments)}),eO=(a=(0,u.Z)(v().mark(function e(t){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!eZ(t))){e.next=2;break}return e.abrupt("return");case 2:J(t.id),window.location.hash="",ef.nextTick(function(){window.location.hash="restore-modal"});case 5:case"end":return e.stop()}},e)})),function(e){return a.apply(this,arguments)}),eR=(s=(0,u.Z)(v().mark(function e(){var t,n;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(eA){e.next=2;break}return e.abrupt("return");case 2:if(!(null!=eC&&eC.apiServiceAccount)){e.next=8;break}return e.next=5,(0,ec.yN)(null==eC?void 0:eC.teamId,Y);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,(0,g.Jl)(Y);case 10:e.t0=e.sent;case 11:if(t=e.t0,(n=(0,c.Z)(t,2))[0],!n[1]){e.next=19;break}p.show({variant:"danger",content:"Failed to delete the integration, please try again."}),e.next=21;break;case 19:return e.next=21,ey();case 21:window.location.hash="#";case 22:case"end":return e.stop()}},e)})),function(){return s.apply(this,arguments)}),eT=function(e){J(e.cells[0].value),ew("details")};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(el,{leftPanel:function(){return(0,R.jsx)(m.Z,{searchPlaceholder:"Project ID or Name",headers:[{accessor:"id",Header:"Request ID"},{accessor:"projectName",Header:"Project Name"},{accessor:"status",Header:"Request Status"},{accessor:"archived",Header:"File Status"},{accessor:"actions",Header:(0,R.jsx)(eg,{}),disableSortBy:!0}],data:T.map(function(e){return{id:e.id,projectName:e.projectName,status:b()(e.status),archived:e.archived?"Deleted":"Active",environments:e.environments,actions:(0,R.jsxs)(w.c4,{children:[(0,R.jsx)(w.Kk,{icon:j.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),J(e.id),ew("events")},title:"Events"}),(0,R.jsx)(w.MO,{}),(0,R.jsx)(w.Kk,{disabled:!eP(e),icon:j.Xcf,role:"button","aria-label":"edit",onClick:function(){return ek(e)},title:"Edit"}),(0,R.jsx)(w.MO,{}),(0,R.jsx)(w.Kk,{icon:j.$aW,role:"button","aria-label":"delete",onClick:function(){return eU(e)},disabled:!eA(e),activeColor:C.Uo,title:"Delete from Keycloak"}),(0,R.jsx)(w.MO,{}),(0,R.jsx)(w.Kk,{icon:j.pdr,role:"button","aria-label":"restore",onClick:function(){return eO(e)},disabled:!eZ(e),activeColor:C.Uo,title:"Restore at Keycloak"})]})}}),activateRow:eT,colfilters:[{value:W,multiselect:!0,onChange:X,options:ej,label:"Environments"},{value:ee,multiselect:!0,onChange:et,options:ex,label:"IDPs"},{value:ei,multiselect:!0,onChange:ea,options:O,label:"Workflow Status"},{value:eo,multiselect:!0,onChange:eu,options:eb,label:"Archive Status"}],showFilters:!0,loading:E,totalColSpan:15,searchColSpan:5,headerAlign:"bottom",headerGutter:[5,0],onPage:G,rowCount:N,searchKey:F,onSearch:function(e){_(e)},onEnter:function(e){_(e)},pageLimits:em,limit:K,onLimit:function(e){G(1),H(e)},noDataFoundElement:(0,R.jsx)("div",{style:{textAlign:"center"},children:"No clients found."}),pagination:!0})},rightPanel:function(){return eC&&(0,R.jsx)(er,{currentUser:d,integration:eC,defaultTabKey:"details",setActiveKey:ew,activeKey:ev,setRows:eE})}}),(0,R.jsx)(eh.Z,{projectName:null==eC?void 0:eC.projectName,id:"delete-modal",onConfirm:eR,title:"Confirm Deletion",content:"You are about to delete this integration request. This action cannot be undone."}),(0,R.jsx)(eS,{selectedIntegration:eC,loadData:eE,alert:p})]})})},76944:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var r,i=n(50029),a=n(87794),s=n.n(a),o=n(21963),l=(r=(0,i.Z)(s().mark(function e(t){var n;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.e.post("events",t).then(function(e){return e.data});case 3:return n=e.sent,e.abrupt("return",[n,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return r.apply(this,arguments)})},25809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n(67569)}])}},function(e){e.O(0,[925,830,937,974,954,774,888,179],function(){return e(e.s=25809)}),_N_E=e.O()}]);