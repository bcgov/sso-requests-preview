(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{35611:function(e,t,n){"use strict";t.ZP=void 0;var r=n(96282),a=n(69829),l={shared:{label:"\n      display: block;\n      margin-bottom: 0.2777em;\n    ",wrapper:"\n      position: relative;\n      display: flex;\n      background: #fff;\n      overflow: hidden;\n      border: 2px solid #606060;\n      border-radius: 0;\n      padding: 0.3em 0;\n\n      &:after {\n        content: ' ';\n        background-image: "+(0,a.toSvgUrl)(a.ChevronDown)+";\n        background-size: contain;\n        background-repeat: no-repeat;\n        position: absolute;\n        right: 0.2em;\n        width: 1.2em;\n        height: 100%;\n        text-align: center;\n        cursor: pointer;\n        pointer-events: none;\n        -webkit-transition: .25s all ease;\n        -o-transition: .25s all ease;\n        transition: .25s all ease;\n      }\n\n      &:focus-within  {\n        outline: 4px solid #3B99FC;\n        outline-offset: 1px;\n      }\n\n      &:hover::after {}\n  ",input:"\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      -ms-appearance: none;\n      appearance: none;\n      outline: 0;\n      box-shadow: none;\n      border: 0 !important;\n      background: #fff;\n      background-image: none;\n      display: inline-block;\n      flex: 1;\n      padding: 0 .5em;\n      color: #000;\n      cursor: pointer;\n\n      &::-ms-expand {\n        display: none;\n      }\n    "},size:{small:{container:"\n        font-size: 0.8rem;\n      "},medium:{container:"\n        font-size: 1rem;\n      "},large:{container:"\n        font-size: 1.2rem;\n      "}},rounded:{wrapper:"\n      border-radius: 0.25em;\n    "}};var i=(0,r.applyTheme)(l,{defaultProps:{size:"medium",rounded:!0,required:!1},staticProps:["fullWidth"],includeWrapper:!0});t.ZP=i},74150:function(e,t,n){"use strict";var r=n(95318);t.ZP=function(e){var t=e.content,n=e.external,r=e.children,a=(0,i.default)(e,["content","external","children"]);return o.default.createElement(p,(0,l.default)({target:n?"_blank":"_self"},a),t||r,n&&o.default.createElement(o.default.Fragment,null,"\xa0",o.default.createElement(u.FaSVG,null,o.default.createElement("path",{fill:"currentColor",d:u.ExternalLinkAlt}))))};var a,l=r(n(87462)),i=r(n(63366)),s=r(n(81880)),o=r(n(67294)),c=r(n(37797)),u=n(69829),d={small:"0.8rem",medium:"1rem",large:"1.2rem"};var p=c.default.a(a||(a=(0,s.default)(["\n  font-size: ",";\n  color: #1a5a96;\n\n  &:hover {\n    text-decoration: none;\n    color: blue;\n  }\n\n  &:focus {\n    outline: 4px solid #3b99fc;\n    outline-offset: 1px;\n  }\n"])),(function(e){return d[e.size||"medium"]}))},96282:function(e,t,n){"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.applyTheme=void 0;var a=r(n(87462)),l=r(n(63366)),i=r(n(67294)),s=r(n(86010)),o=n(80927),c=function(e,t){var n=(0,o.processStyle)(e),r=(0,o.createStyleBuilder)(n,t),c=t.as||{},u=r(c.container||"div","container"),d=r("label","label"),p=t.includeWrapper?r(c.wrapper||"div","wrapper"):null,m=r("select","input"),f=(0,o.createBootstrap)(n,"select");return function(e){var t=f(e),n=t.id,r=t.name,o=t.label,c=t.ariaLabel,v=t.styleProps,h=t.children,b=t.className,x=t.rest,g=x.style,y=x.labelStyle,E=x.inputStyle,w=x.wrapperStyle,j=(0,l.default)(x,["style","labelStyle","inputStyle","wrapperStyle"]),S=i.default.createElement(m,(0,a.default)({"aria-label":c},j,{id:n,name:r,style:E,className:"pg-select-input"}),h);return i.default.createElement(u,(0,a.default)({},v,{style:g,className:(0,s.default)("pg-select",b)}),o&&i.default.createElement(d,(0,a.default)({htmlFor:n},v,{style:y,className:"pg-select-label"}),o),p?i.default.createElement(p,(0,a.default)({},v,{style:w,className:"pg-select-wrapper"}),S):S)}};t.applyTheme=c;var u=c({},{staticProps:["fullWidth"]});t.default=u},19344:function(e,t,n){"use strict";var r,a,l,i=n(71383),s=n(31513),o=n(37797),c=n(85893),u=o.default.table(r||(r=(0,i.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]))),d=o.default.span(a||(a=(0,i.Z)(["\n  font-weight: 600;\n"]))),p=o.default.ul(l||(l=(0,i.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]))),m=function(e){var t=e.list,n=e.title,r=e.inline,a=void 0!==r&&r;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:n}),(1===(null===t||void 0===t?void 0:t.length)||a)&&(0,c.jsx)(d,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,c.jsxs)("span",{children:[e,n!==t.length-1&&", "," "]},e)}))})]}),!a&&((null===t||void 0===t?void 0:t.length)||0)>1&&(0,c.jsx)("tr",{children:(0,c.jsx)("td",{children:(0,c.jsx)(d,{children:(0,c.jsx)(p,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,c.jsx)("li",{children:e},e)}))})})})})]})},f=function(e){return!!e&&(1!==e.length||""!==e[0])};t.Z=function(e){var t=e.children,n=e.request;if(!n)return null;var r,a="gold"===("gold"===n.serviceType?"gold":"silver")?n.devIdps:(0,s.LF)(null===n||void 0===n?void 0:n.realm);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(u,{children:(0,c.jsxs)("tbody",{children:[(null===n||void 0===n?void 0:n.team)&&(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Associated Team:"}),(0,c.jsx)("td",{children:(0,c.jsx)(d,{children:n.team.name})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Are you accountable for this project?"}),(0,c.jsx)("td",{children:(0,c.jsx)(d,{children:(r=null===n||void 0===n?void 0:n.projectLead,void 0===r?"":r?"Yes":"No")})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Client Type:"}),(0,c.jsx)("td",{children:(0,c.jsx)(d,{children:null!==n&&void 0!==n&&n.publicAccess?"Public":"Confidential"})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Project Name:"}),(0,c.jsx)("td",{children:(0,c.jsx)(d,{children:null===n||void 0===n?void 0:n.projectName})})]}),(0,c.jsx)(m,{list:a,title:"Identity Providers Required:",inline:!0}),f(null===n||void 0===n?void 0:n.devValidRedirectUris)&&(0,c.jsx)(m,{list:null===n||void 0===n?void 0:n.devValidRedirectUris,title:"Dev Redirect URIs:"}),f(null===n||void 0===n?void 0:n.testValidRedirectUris)&&(0,c.jsx)(m,{list:null===n||void 0===n?void 0:n.testValidRedirectUris,title:"Test Redirect URIs:"}),f(null===n||void 0===n?void 0:n.prodValidRedirectUris)&&(0,c.jsx)(m,{list:null===n||void 0===n?void 0:n.prodValidRedirectUris,title:"Prod Redirect URIs:"}),t]})})})}},66732:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return re}});var r,a=n(16835),l=n(50029),i=n(71383),s=n(87794),o=n.n(s),c=n(67294),u=n(37797),d=n(11163),p=n(96486),m=n(51436),f=n(64735),v=n(59912),h=n(96807),b=n(37226),x=n(76691),g=n(61165),y=n(63055),E=n(31513),w=n(59499),j=n(73192),S=n(73118),C=n(4826),k=n(19344),N=n(35611),R=[{value:"draft",label:"Draft"},{value:"submitted",label:"Submitted"},{value:"pr",label:"PR"},{value:"prFailed",label:"PR Failed"},{value:"planned",label:"Planned"},{value:"applied",label:"Applied"},{value:"applyFailed",label:"Apply Failed"}],P=n(85893),O=(0,u.default)(N.ZP)(r||(r=(0,i.Z)(["\n  & label {\n    display: block;\n    font-weight: bold;\n  }\n"])));var _,A=function(e){var t=e.request,n=e.onUpdate,r=(0,c.useState)(t.status),a=r[0],i=r[1],s="edit-metadata",u=function(){var e=(0,l.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Uw)({id:t.id,status:a});case 2:if(!n){e.next=5;break}return e.next=5,n();case 5:window.location.hash="#";case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){i(t.status)}),[t.id]);var d=(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(O,{label:"Integration Status",onChange:function(e){i(e.target.value)},value:a,children:R.map((function(e){return(0,P.jsx)("option",{value:e.value,children:e.label},e.value)}))})});return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(C.ZP,{variant:"bcPrimary",size:"small",onClick:function(){return window.location.hash=s},children:"Edit Metadata"}),(0,P.jsx)(g.Z,{id:s,content:d,onConfirm:u,icon:m.UJf,title:"Edit Metadata",closable:!0})]})},T=u.default.div(_||(_=(0,i.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function U(e){var t=e.currentUser,n=e.request,r=e.onUpdate;return n?(0,P.jsxs)(T,{children:[(0,P.jsx)("br",{}),(0,P.jsxs)(k.Z,{request:n,hasBceid:!1,children:[(0,P.jsx)("br",{}),t.isAdmin&&(0,P.jsx)(A,{request:n,onUpdate:r})]})]}):null}var I,Z=n(56839),D=n(70300),L=n(76944),F=n(83333),q=u.default.div(I||(I=(0,i.Z)(["\n  text-align: center;\n"]))),M=[{value:"all",text:"All Events"},{value:"request-pr-success",text:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",text:"REQUEST_PR_FAILURE"},{value:"request-plan-success",text:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",text:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",text:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",text:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",text:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",text:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",text:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",text:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",text:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",text:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",text:"EMAIL_SUBMISSION_FAILURE"}];function W(e){var t=e.requestId,n=(0,c.useState)("all"),r=n[0],i=n[1],s=(0,c.useState)([]),u=s[0],d=s[1],p=(0,c.useState)(!1),m=p[0],f=p[1],v=(0,c.useState)(!1),h=v[0],b=v[1],x=function(){var e=(0,l.Z)(o().mark((function e(){var n,l,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return f(!0),e.next=5,(0,L.v)({requestId:t,eventCode:r});case 5:n=e.sent,l=(0,a.Z)(n,2),i=l[0],l[1]?b(!0):i&&d(i.rows),f(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){x()}),[t,r]);var g;return h?null:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(D.Z,{children:[(0,P.jsx)("br",{}),(0,P.jsx)(N.ZP,{style:{display:"inline-block",width:"250px"},value:r,onChange:function(e){i(e.target.value)},children:(g=M,(0,P.jsx)(P.Fragment,{children:g.map((function(e){return(0,P.jsx)("option",{value:e.value,children:e.text},e.value)}))}))})]}),m?(0,P.jsx)(q,{children:(0,P.jsx)(Z.rj,{color:"#000",height:45,width:45,wrapperClass:"d-block",visible:m})}):(0,P.jsx)(F.Z,{events:u})]})}var z,B=n(332);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=u.default.div(z||(z=(0,i.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"])));var H,V=function(e){var t=e.currentUser,n=e.selectedRequest,r=e.defaultTabKey,i=e.setActiveKey,s=e.setRows,c=e.activeKey,u=void 0===c?r:c;if(!n)return null;var d,p=n.environments,f=void 0===p?[]:p,v=n.status,h=n.bceidApproved,x=(0,E.Jx)(n),y=x&&f.includes("prod"),w=y&&"applied"!==v&&h,k="bceid-approval-modal";d=y&&"applied"===v&&!h?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("p",{children:"To begin the BCeID integration in production, Click Below."}),(0,P.jsx)(C.ZP,{onClick:function(){return window.location.hash=k},children:"Approve Production"})]}):w?(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(B.Z,{selectedRequest:n,title:"The terraform script will take approximately 20 minutes to complete."})}):(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("p",{children:["This request is ",h?"already approved.":"not ready to approve production."]})});var N=function(){var e=(0,l.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.WN)($($({},n),{},{bceidApproved:!0}),!0);case 2:t=e.sent,r=(0,a.Z)(t,2),r[1]||s();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(S.H,{activeKey:u,onSelect:function(e){return i(e)},children:[(0,P.jsx)(j.Z,{eventKey:"details",title:"Details",children:(0,P.jsx)(Q,{children:(0,P.jsx)(U,{currentUser:t,request:n,onUpdate:s})})}),x&&(0,P.jsx)(j.Z,{eventKey:"prod-configuration",title:"Prod Configuration",children:(0,P.jsxs)(Q,{children:[(0,P.jsx)("br",{}),d]})}),(0,P.jsx)(j.Z,{eventKey:"events",title:"Events",children:(0,P.jsx)(Q,{children:(0,P.jsx)(W,{requestId:n.id})})})]}),(0,P.jsx)(g.Z,{id:k,content:"Are you sure you want to approve this integration for production?",onConfirm:N,icon:m.eHv,title:"Approve Production"})]})},G=u.default.div(H||(H=(0,i.Z)(["\n  text-align: center;\n"]))),Y=[{value:["onestopauth"],label:"IDIR"},{value:["onestopauth-basic","onestopauth-business","onestopauth-both"],label:"BCeID"}],J=[{value:"active",label:"Active"},{value:"archived",label:"Deleted"}],X=[{value:"dev",label:"Dev"},{value:"test",label:"Test"},{value:"prod",label:"Prod"}],ee=[{value:"silver",label:"Silver"},{value:"gold",label:"Gold"}],te=[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"},{value:30,text:"30 per page"},{value:50,text:"50 per page"},{value:100,text:"100 per page"}],ne=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}];function re(e){var t,n,r=e.session,i=(0,d.useRouter)(),s=(0,c.useState)(!1),u=s[0],w=s[1],j=(0,c.useState)(!1),S=j[0],C=j[1],k=(0,c.useState)([]),N=k[0],O=k[1],_=(0,c.useState)(String((null===(t=i.query)||void 0===t?void 0:t.id)||"")),A=_[0],T=_[1],U=(0,c.useState)(0),I=U[0],Z=U[1],D=(0,c.useState)(5),L=D[0],F=D[1],q=(0,c.useState)(1),M=q[0],W=q[1],z=(0,c.useState)(Number(null===(n=i.query)||void 0===n?void 0:n.id)||void 0),B=z[0],K=z[1],$=(0,c.useState)([]),Q=$[0],H=$[1],re=(0,c.useState)([]),ae=re[0],le=re[1],ie=(0,c.useState)([]),se=ie[0],oe=ie[1],ce=(0,c.useState)([]),ue=ce[0],de=ce[1],pe=(0,c.useState)([]),me=pe[0],fe=pe[1],ve=(0,c.useState)("details"),he=ve[0],be=ve[1],xe=N.find((function(e){return e.id===B})),ge=function(){var e=(0,l.Z)(o().mark((function e(){var t,n,r,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,E.UT)(ae,Q),n=(0,a.Z)(t,2),r=n[0],l=n[1],e.abrupt("return",(0,b.zD)({searchField:["id","projectName"],searchKey:A,order:[["updatedAt","desc"],["status","desc"]],limit:L,page:M,status:se.map((function(e){return e.value})),archiveStatus:ue.map((function(e){return e.value})),realms:r,environments:l,types:me.map((function(e){return e.value}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=(0,l.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,ge();case 3:t=e.sent,n=(0,a.Z)(t,2),r=n[0],n[1]?C(!0):r&&(O(r.rows),Z(r.count)),w(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,c.useEffect)((function(){K(void 0),ye()}),[A,L,M,se,ue,ae,Q,me]),(0,c.useEffect)((function(){var e;return(0,E.rn)(N)&&(e=setTimeout((0,l.Z)(o().mark((function t(){var n,r,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ge();case 2:n=t.sent,r=(0,a.Z)(n,2),l=r[0],r[1]?clearInterval(e):l&&(O(l.rows),Z(l.count));case 7:case"end":return t.stop()}}),t)}))),5e3)),function(){e&&clearInterval(e)}}),[N]),S)return null;var Ee=function(e){return["applied"].includes((null===e||void 0===e?void 0:e.status)||"")},we=function(e){return!["pr","planned","submitted"].includes((null===e||void 0===e?void 0:e.status)||"")},je=function(){var e=(0,l.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&Ee(t)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,i.push("/request/".concat(t.id,"?status=").concat(t.status));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=(0,l.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&we(t)){e.next=2;break}return e.abrupt("return");case 2:K(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=(0,l.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(we){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,b.Jl)(B);case 4:return e.next=6,ge();case 6:window.location.hash="#";case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,P.jsxs)(v.Z,{rules:ne,children:[(0,P.jsx)(f.ZP,{cols:10,children:(0,P.jsxs)(f.ZP.Row,{collapse:"1200",gutter:[15,2],children:[(0,P.jsx)(f.ZP.Col,{span:6,children:(0,P.jsx)(h.Z,{filters:[{value:Q,multiselect:!0,onChange:H,options:X,label:"Environments"},{value:ae,multiselect:!0,onChange:le,options:Y,label:"IDPs"},{value:se,multiselect:!0,onChange:oe,options:R,label:"Workflow Status"},{value:ue,multiselect:!0,onChange:de,options:J,label:"Archive Status"},{value:me,multiselect:!0,onChange:fe,options:ee,label:"Service Type"}],headers:[{name:"Request ID"},{name:"Project Name"},{name:"Request Status"},{name:"File Status"},{name:"Service Type"},{name:"Actions",style:{textAlign:"center",minWidth:"140px"}}],pagination:!0,pageLimits:te,searchKey:A,searchPlaceholder:"Project ID or Name",limit:L,page:M,rowCount:I,onSearch:function(e){T(e),W(1)},onEnter:function(e){T(e),W(1)},onLimit:function(e){W(1),F(e)},onPrev:W,onNext:W,loading:u,totalColSpan:15,searchColSpan:5,headerAlign:"bottom",headerGutter:[5,0],children:N.length>0?N.map((function(e){return(0,P.jsxs)("tr",{className:B===e.id?"active":"",onClick:function(){K(e.id),be("details")},children:[(0,P.jsx)("td",{children:(0,p.padStart)(String(e.id),8,"0")}),(0,P.jsx)("td",{children:e.projectName}),(0,P.jsx)("td",{children:(0,p.startCase)(e.status)}),(0,P.jsx)("td",{children:e.archived?"Deleted":"Active"}),(0,P.jsx)("td",{children:"gold"===e.serviceType?"Gold":"Silver"}),(0,P.jsx)("td",{children:(0,P.jsxs)(x.c4,{children:[(0,P.jsx)(x.Kk,{icon:m.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),K(e.id),be("events")},title:"Events"}),(0,P.jsx)(x.MO,{}),(0,P.jsx)(x.Kk,{disabled:!Ee(e),icon:m.Xcf,role:"button","aria-label":"edit",onClick:function(){return je(e)},title:"Edit"}),(0,P.jsx)(x.MO,{}),(0,P.jsx)(x.Kk,{icon:m.$aW,role:"button","aria-label":"delete",onClick:function(){return Se(e)},disabled:!we(e),activeColor:y.Uo,title:"Delete"})]})})]},e.id)})):(0,P.jsx)("tr",{children:(0,P.jsx)("td",{colSpan:10,children:(0,P.jsx)(G,{children:"No clients found."})})})})}),(0,P.jsx)(f.ZP.Col,{span:4,children:xe&&(0,P.jsx)(V,{currentUser:r,selectedRequest:xe,defaultTabKey:"details",setActiveKey:be,activeKey:he,setRows:ye})})]})}),(0,P.jsx)(g.Z,{id:"delete-modal",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:Ce,confirmText:"Delete",title:"Confirm Deletion"})]})}},25809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n(66732)}])},80770:function(){},52205:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(94184),a=n.n(r),l=n(67294),i=n(76792),s=n(78980),o=n(85893);const c=l.forwardRef((({active:e,disabled:t,className:n,style:r,activeLabel:l,children:i,...c},u)=>{const d=e||t?"span":s.Z;return(0,o.jsx)("li",{ref:u,style:r,className:a()(n,"page-item",{active:e,disabled:t}),children:(0,o.jsxs)(d,{className:"page-link",disabled:t,...c,children:[i,e&&l&&(0,o.jsx)("span",{className:"visually-hidden",children:l})]})})}));c.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},c.displayName="PageItem";var u=c;function d(e,t,n=e){const r=l.forwardRef((({children:e,...r},a)=>(0,o.jsxs)(c,{...r,ref:a,children:[(0,o.jsx)("span",{"aria-hidden":"true",children:e||t}),(0,o.jsx)("span",{className:"visually-hidden",children:n})]})));return r.displayName=e,r}const p=d("First","\xab"),m=d("Prev","\u2039","Previous"),f=d("Ellipsis","\u2026","More"),v=d("Next","\u203a"),h=d("Last","\xbb"),b=l.forwardRef((({bsPrefix:e,className:t,size:n,...r},l)=>{const s=(0,i.vE)(e,"pagination");return(0,o.jsx)("ul",{ref:l,...r,className:a()(t,s,n&&`${s}-${n}`)})}));b.displayName="Pagination";var x=Object.assign(b,{First:p,Prev:m,Ellipsis:f,Item:u,Next:v,Last:h})},51479:function(e,t,n){"use strict";var r=n(94184),a=n.n(r),l=n(67294),i=n(76792),s=n(53439),o=n(85893);function c(e,t,n){const r=(e-t)/(n-t)*100;return Math.round(1e3*r)/1e3}function u({min:e,now:t,max:n,label:r,visuallyHidden:l,striped:i,animated:s,className:u,style:d,variant:p,bsPrefix:m,...f},v){return(0,o.jsx)("div",{ref:v,...f,role:"progressbar",className:a()(u,`${m}-bar`,{[`bg-${p}`]:p,[`${m}-bar-animated`]:s,[`${m}-bar-striped`]:s||i}),style:{width:`${c(t,e,n)}%`,...d},"aria-valuenow":t,"aria-valuemin":e,"aria-valuemax":n,children:l?(0,o.jsx)("span",{className:"visually-hidden",children:r}):r})}const d=l.forwardRef((({isChild:e,...t},n)=>{if(t.bsPrefix=(0,i.vE)(t.bsPrefix,"progress"),e)return u(t,n);const{min:r,now:c,max:d,label:p,visuallyHidden:m,striped:f,animated:v,bsPrefix:h,variant:b,className:x,children:g,...y}=t;return(0,o.jsx)("div",{ref:n,...y,className:a()(x,h),children:g?(0,s.UI)(g,(e=>(0,l.cloneElement)(e,{isChild:!0}))):u({min:r,now:c,max:d,label:p,visuallyHidden:m,striped:f,animated:v,bsPrefix:h,variant:b},n)})}));d.displayName="ProgressBar",d.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},t.Z=d},11177:function(e,t,n){"use strict";n.d(t,{NU:function(){return O}});var r=n(67294),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e},p=(e,t)=>l(e,i(t));!function(e,{insertAt:t}={}){if(!e||typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}(".rmsc{--rmsc-main: #4285f4;--rmsc-hover: #f1f3f5;--rmsc-selected: #e2e6ea;--rmsc-border: #ccc;--rmsc-gray: #aaa;--rmsc-bg: #fff;--rmsc-p: 10px;--rmsc-radius: 4px;--rmsc-h: 38px}.rmsc *{box-sizing:border-box;transition:all .2s ease}.rmsc .gray{color:var(--rmsc-gray)}.rmsc .dropdown-content{position:absolute;z-index:1;top:100%;width:100%;padding-top:8px}.rmsc .dropdown-content .panel-content{overflow:hidden;border-radius:var(--rmsc-radius);background:var(--rmsc-bg);box-shadow:0 0 0 1px #0000001a,0 4px 11px #0000001a}.rmsc .dropdown-container{position:relative;outline:0;background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius)}.rmsc .dropdown-container[aria-disabled=true]:focus-within{box-shadow:var(--rmsc-gray) 0 0 0 1px;border-color:var(--rmsc-gray)}.rmsc .dropdown-container:focus-within{box-shadow:var(--rmsc-main) 0 0 0 1px;border-color:var(--rmsc-main)}.rmsc .dropdown-heading{position:relative;padding:0 var(--rmsc-p);display:flex;align-items:center;width:100%;height:var(--rmsc-h);cursor:default;outline:0}.rmsc .dropdown-heading .dropdown-heading-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.rmsc .clear-selected-button{cursor:pointer;background:none;border:0;padding:0;display:flex}.rmsc .options{max-height:260px;overflow-y:auto;margin:0;padding-left:0}.rmsc .options li{list-style:none;margin:0}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;padding:var(--rmsc-p);outline:0}.rmsc .select-item:hover,.rmsc .select-item:focus{background:var(--rmsc-hover)}.rmsc .select-item.selected{background:var(--rmsc-selected)}.rmsc .no-options{padding:var(--rmsc-p);text-align:center;color:var(--rmsc-gray)}.rmsc .search{width:100%;position:relative;border-bottom:1px solid var(--rmsc-border)}.rmsc .search input{background:none;height:var(--rmsc-h);padding:0 var(--rmsc-p);width:100%;outline:0;border:0}.rmsc .search-clear-button{cursor:pointer;position:absolute;top:0;right:0;bottom:0;background:none;border:0;padding:0 calc(var(--rmsc-p) / 2)}.rmsc .search-clear-button [hidden]{display:none}.rmsc .item-renderer{display:flex;align-items:baseline}.rmsc .item-renderer input{margin:0 5px 0 0}.rmsc .item-renderer.disabled{opacity:.5}.rmsc .spinner{animation:rotate 2s linear infinite}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}\n");var m={allItemsAreSelected:"All items are selected.",clearSearch:"Clear Search",clearSelected:"Clear Selected",noOptions:"No options",search:"Search",selectAll:"Select All",selectAllFiltered:"Select All (Filtered)",selectSomeItems:"Select...",create:"Create"},f={value:[],hasSelectAll:!0,className:"multi-select",debounceDuration:200,options:[]},v=r.createContext({}),h=({props:e,children:t})=>{let[n,a]=(0,r.useState)(e.options);return(0,r.useEffect)((()=>{a(e.options)}),[e.options]),r.createElement(v.Provider,{value:p(d(d({t:t=>{var n;return(null==(n=e.overrideStrings)?void 0:n[t])||m[t]}},f),e),{options:n,setOptions:a})},t)},b=()=>r.useContext(v);var x={when:!0,eventTypes:["keydown"]};function g(e,t,n){let a=(0,r.useMemo)((()=>Array.isArray(e)?e:[e]),[e]),l=Object.assign({},x,n),{when:i,eventTypes:s}=l,o=(0,r.useRef)(t),{target:c}=l;(0,r.useEffect)((()=>{o.current=t}));let u=(0,r.useCallback)((e=>{a.some((t=>e.key===t||e.code===t))&&o.current(e)}),[a]);(0,r.useEffect)((()=>{if(i&&typeof window<"u"){let e=c?c.current:window;return s.forEach((t=>{e&&e.addEventListener(t,u)})),()=>{s.forEach((t=>{e&&e.removeEventListener(t,u)}))}}}),[i,s,a,c,t])}var y={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape",SPACE:"Space"};var E=()=>r.createElement("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-search-clear-icon gray"},r.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),w=({checked:e,option:t,onClick:n,disabled:a})=>r.createElement("div",{className:`item-renderer ${a&&"disabled"}`},r.createElement("input",{type:"checkbox",onChange:n,checked:e,tabIndex:-1,disabled:a}),r.createElement("span",null,t.label)),j=({itemRenderer:e=w,option:t,checked:n,tabIndex:a,disabled:l,onSelectionChanged:i,onClick:s})=>{let o=(0,r.useRef)(),c=()=>{l||i(!n)};return g([y.ENTER,y.SPACE],(e=>{c(),e.preventDefault()}),{target:o}),r.createElement("label",{className:`select-item ${n&&"selected"}`,role:"option","aria-selected":n,tabIndex:a,ref:o},r.createElement(e,{option:t,checked:n,onClick:e=>{c(),s(e)},disabled:l}))},S=({options:e,onClick:t,skipIndex:n})=>{let{disabled:a,value:l,onChange:i,ItemRenderer:s}=b();return r.createElement(r.Fragment,null,e.map(((e,o)=>{let c=o+n;return r.createElement("li",{key:(null==e?void 0:e.key)||o},r.createElement(j,{tabIndex:c,option:e,onSelectionChanged:t=>((e,t)=>{a||i(t?[...l,e]:l.filter((t=>t.value!==e.value)))})(e,t),checked:!!l.find((t=>t.value===e.value)),onClick:e=>t(e,c),itemRenderer:s,disabled:e.disabled||a}))})))},C=()=>{let{t:e,onChange:t,options:n,setOptions:a,value:l,filterOptions:i,ItemRenderer:s,disabled:o,disableSearch:c,hasSelectAll:u,ClearIcon:d,debounceDuration:p,isCreatable:m,onCreateOption:f}=b(),v=(0,r.useRef)(),h=(0,r.useRef)(),[x,w]=(0,r.useState)(""),[C,k]=(0,r.useState)(n),[N,R]=(0,r.useState)(""),[P,O]=(0,r.useState)(0),_=(0,r.useCallback)(((e,t)=>{let n;return function(...r){clearTimeout(n),n=setTimeout((()=>{e.apply(null,r)}),t)}})((e=>R(e)),p),[]),A=(0,r.useMemo)((()=>{let e=0;return c||(e+=1),u&&(e+=1),e}),[c,u]),T={label:e(x?"selectAllFiltered":"selectAll"),value:""},U=()=>{var e;R(""),w(""),null==(e=null==h?void 0:h.current)||e.focus()},I=e=>O(e);g([y.ARROW_DOWN,y.ARROW_UP],(e=>{switch(e.code){case y.ARROW_UP:D(-1);break;case y.ARROW_DOWN:D(1);break;default:return}e.stopPropagation(),e.preventDefault()}),{target:v});let Z=async()=>{let e={label:x,value:x,__isNew__:!0};f&&(e=await f(x)),a([e,...n]),U(),t([...l,e])},D=e=>{let t=P+e;t=Math.max(0,t),t=Math.min(t,n.length+Math.max(A-1,0)),O(t)};(0,r.useEffect)((()=>{var e,t;null==(t=null==(e=null==v?void 0:v.current)?void 0:e.querySelector(`[tabIndex='${P}']`))||t.focus()}),[P]);let[L,F]=(0,r.useMemo)((()=>{let e=C.filter((e=>!e.disabled));return[e.every((e=>-1!==l.findIndex((t=>t.value===e.value)))),0!==e.length]}),[C,l]);(0,r.useEffect)((()=>{(async()=>i?await i(n,N):function(e,t){return t?e.filter((({label:e,value:n})=>null!=e&&null!=n&&e.toLowerCase().includes(t.toLowerCase()))):e}(n,N))().then(k)}),[N,n]);let q=(0,r.useRef)();g([y.ENTER],Z,{target:q});let M=m&&x&&!C.some((e=>(null==e?void 0:e.value)===x));return r.createElement("div",{className:"select-panel",role:"listbox",ref:v},!c&&r.createElement("div",{className:"search"},r.createElement("input",{placeholder:e("search"),type:"text","aria-describedby":e("search"),onChange:e=>{_(e.target.value),w(e.target.value),O(0)},onFocus:()=>{O(0)},value:x,ref:h,tabIndex:0}),r.createElement("button",{type:"button",className:"search-clear-button",hidden:!x,onClick:U,"aria-label":e("clearSearch")},d||r.createElement(E,null))),r.createElement("ul",{className:"options"},u&&F&&r.createElement(j,{tabIndex:1===A?0:1,checked:L,option:T,onSelectionChanged:e=>{let r=(e=>{let t=C.filter((e=>!e.disabled)).map((e=>e.value));if(e){let e=[...l.map((e=>e.value)),...t];return(i?C:n).filter((t=>e.includes(t.value)))}return l.filter((e=>!t.includes(e.value)))})(e);t(r)},onClick:()=>I(1),itemRenderer:s,disabled:o}),C.length?r.createElement(S,{skipIndex:A,options:C,onClick:(e,t)=>I(t)}):M?r.createElement("li",{onClick:Z,className:"select-item creatable",tabIndex:1===A?0:1,ref:q},`${e("create")} "${x}"`):r.createElement("li",{className:"no-options"},e("noOptions"))))},k=({expanded:e})=>r.createElement("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-heading-dropdown-arrow gray"},r.createElement("path",{d:e?"M18 15 12 9 6 15":"M6 9L12 15 18 9"})),N=()=>{let{t:e,value:t,options:n,valueRenderer:a}=b(),l=0===t.length,i=t.length===n.length,s=a&&a(t,n);return l?r.createElement("span",{className:"gray"},s||e("selectSomeItems")):r.createElement("span",null,s||(i?e("allItemsAreSelected"):t.map((e=>e.label)).join(", ")))},R=({size:e=24})=>r.createElement("span",{style:{width:e,marginRight:"0.2rem"}},r.createElement("svg",{width:e,height:e,className:"spinner",viewBox:"0 0 50 50",style:{display:"inline",verticalAlign:"middle"}},r.createElement("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"path"}))),P=()=>{let{t:e,onMenuToggle:t,ArrowRenderer:n,shouldToggleOnHover:a,isLoading:l,disabled:i,onChange:s,labelledBy:o,value:c,isOpen:u,defaultIsOpen:d,ClearSelectedIcon:p,closeOnChangedValue:m}=b();(0,r.useEffect)((()=>{m&&x(!1)}),[c]);let[f,v]=(0,r.useState)(!0),[h,x]=(0,r.useState)(d),[w,j]=(0,r.useState)(!1),S=n||k,P=(0,r.useRef)();(function(e,t){let n=(0,r.useRef)(!1);(0,r.useEffect)((()=>{n.current?e():n.current=!0}),t)})((()=>{t&&t(h)}),[h]),(0,r.useEffect)((()=>{void 0===d&&"boolean"==typeof u&&(v(!1),x(u))}),[u]);g([y.ENTER,y.ARROW_DOWN,y.SPACE,y.ESCAPE],(e=>{var t;["text","button"].includes(e.target.type)&&[y.SPACE,y.ENTER].includes(e.code)||(f&&(e.code===y.ESCAPE?(x(!1),null==(t=null==P?void 0:P.current)||t.focus()):x(!0)),e.preventDefault())}),{target:P});let O=e=>{f&&a&&x(e)};return r.createElement("div",{tabIndex:0,className:"dropdown-container","aria-labelledby":o,"aria-expanded":h,"aria-readonly":!0,"aria-disabled":i,ref:P,onFocus:()=>!w&&j(!0),onBlur:e=>{!e.currentTarget.contains(e.relatedTarget)&&f&&(j(!1),x(!1))},onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1)},r.createElement("div",{className:"dropdown-heading",onClick:()=>{f&&x(!l&&!i&&!h)}},r.createElement("div",{className:"dropdown-heading-value"},r.createElement(N,null)),l&&r.createElement(R,null),c.length>0&&null!==p&&r.createElement("button",{type:"button",className:"clear-selected-button",onClick:e=>{e.stopPropagation(),s([]),f&&x(!1)},disabled:i,"aria-label":e("clearSelected")},p||r.createElement(E,null)),r.createElement(S,{expanded:h})),h&&r.createElement("div",{className:"dropdown-content"},r.createElement("div",{className:"panel-content"},r.createElement(C,null))))},O=e=>r.createElement(h,{props:e},r.createElement("div",{className:`rmsc ${e.className||"multi-select"}`},r.createElement(P,null)))},41070:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.__esModule=!0;var l=n(67294),i=n(65837),s=n(64643);t.default=function(e){var t=e.delay,n=void 0===t?0:t,o=e.type,c=void 0===o?"text":o,u=e.color,d=void 0===u?"#CDCDCD":u,p=e.rows,m=void 0===p?3:p,f=e.ready,v=e.firstLaunchOnly,h=e.children,b=e.className,x=e.showLoadingAnimation,g=e.customPlaceholder,y=a(e,["delay","type","color","rows","ready","firstLaunchOnly","children","className","showLoadingAnimation","customPlaceholder"]),E=l.useState(f),w=E[0],j=E[1],S=l.useRef(null);return l.useEffect((function(){v||!w||f?f&&(S.current&&window.clearTimeout(S.current),w||j(!0)):n&&n>0?S.current=window.setTimeout((function(){j(!1)}),n):j(!1)}),[v,w,f,n]),l.useEffect((function(){return function(){S.current&&window.clearTimeout(S.current)}}),[]),w?h:function(){var e=x?s.joinClassNames("show-loading-animation",b):b;if(g&&l.isValidElement(g)){var t=s.joinClassNames(g.props.className,e);return l.cloneElement(g,{className:t})}if(g)return g;var n=i[c];return l.createElement(n,r({},y,{color:d,rows:m,className:e}))}()}},76457:function(e,t,n){"use strict";var r=n(41070);t.Z=r.default},41985:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};t.__esModule=!0;var a=n(67294),l=n(72075),i=n(91817),s=n(64643),o={display:"flex"};t.default=function(e){var t=e.className,n=e.style,c=e.color,u=e.rows;return a.createElement("div",{className:s.joinClassNames("media-block",t),style:r(r({},o),n)},a.createElement(i.default,{color:c,style:{minHeight:55,width:55,minWidth:55,marginRight:10}}),a.createElement(l.default,{color:c,rows:u}))}},38588:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};t.__esModule=!0;var a=n(67294),l=n(64643);t.default=function(e){var t=e.className,n=e.style,i={backgroundColor:e.color,width:"100%",height:"100%",marginRight:10};return a.createElement("div",{className:l.joinClassNames("rect-shape",t),style:r(r({},i),n)})}},91817:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};t.__esModule=!0;var a=n(67294),l=n(64643);t.default=function(e){var t=e.className,n=e.style,i={backgroundColor:e.color,borderRadius:"500rem",width:"100%",height:"100%"};return a.createElement("div",{className:l.joinClassNames("round-shape",t),style:r(r({},i),n)})}},72075:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};t.__esModule=!0;var a=n(67294),l=n(72992),i=n(64643),s={width:"100%"},o=[97,100,94,90,98,95,98,40];t.default=function(e){var t=e.rows,n=e.lineSpacing,c=e.color,u=e.style,d=e.className,p=e.widths,m=void 0===p?o:p,f=function(e){return{maxHeight:100/(2*t-1)+"%",width:m[(e+m.length)%m.length]+"%"}};return a.createElement("div",{className:i.joinClassNames("text-block",d),style:r(r({},s),u)},Array.apply(null,Array(t)).map((function(e,t){return a.createElement(l.default,{color:c,style:f(t),lineSpacing:0!==t?n:0,key:t})})))}},72992:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};t.__esModule=!0;var a=n(67294),l=n(64643);t.default=function(e){var t=e.className,n=e.maxHeight,i=e.color,s=e.lineSpacing,o=void 0===s?"0.7em":s,c=e.style,u={maxHeight:n,width:"100%",height:"1em",backgroundColor:i,marginTop:o};return a.createElement("div",{className:l.joinClassNames("text-row",t),style:r(r({},u),c)})}},65837:function(e,t,n){"use strict";t.__esModule=!0,t.media=t.text=t.rect=t.round=t.textRow=t.MediaBlock=t.TextBlock=t.RectShape=t.RoundShape=t.TextRow=void 0;var r=n(72992);t.TextRow=r.default;var a=n(91817);t.RoundShape=a.default;var l=n(38588);t.RectShape=l.default;var i=n(72075);t.TextBlock=i.default;var s=n(41985);t.MediaBlock=s.default,t.textRow=r.default,t.round=a.default,t.rect=l.default,t.text=i.default,t.media=s.default},64643:function(e,t){"use strict";t.__esModule=!0,t.joinClassNames=void 0,t.joinClassNames=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter((function(e){return e})).join(" ")}}},function(e){e.O(0,[163,665,774,888,179],(function(){return t=25809,e(e.s=t);var t}));var t=e.O();_N_E=t}]);