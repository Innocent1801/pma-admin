"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[490],{927:function(e,n,t){t(2791);n.Z=t.p+"static/media/avatar.bed0beba0e8bf953080b665e81b37c57.svg"},5050:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(8182),r=(t(2791),t(184)),i="default",c=function(e){var n=e.onClick,t=void 0===n?function(e){}:n,c=e.variant,l=e.children,s=e.className,d=e.isDisabled;switch(c){case"normal":s=(0,a.Z)("btn-normal");break;case"blur":s=(0,a.Z)("btn-blur");break;case"primary":s=(0,a.Z)(i,"btn-primary");break;case"secondary":s=(0,a.Z)(i,"btn-secondary");break;case"transparent":s=(0,a.Z)(i,"btn-transparent");break;case"outlined":s=(0,a.Z)(i,"btn-outlined")}return(0,r.jsx)("button",{onClick:function(e){return t(e)},className:s,isDisabled:d,children:l})}},9947:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(8182),r=t(184),i="default",c=function(e){var n=e.children,t=e.className,c=e.variant;switch(c){case"fill_light_green":t=(0,a.Z)(i,"card-light-green");break;case"fill_light_green-md":t=(0,a.Z)(i,"card-light-green_md");break;case"fill_red":t=(0,a.Z)(i,"card-red");break;case"fill_red-md":t=(0,a.Z)(i,"card-red_md");break;case"fill_black":t=(0,a.Z)(i,"card-black");break;case"full_width":t="full_width"}return(0,r.jsx)("div",{variant:c,className:(0,a.Z)(i,t),children:n})}},7290:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var a=t(184),r=function(e){var n=e.variant,t=e.children,r=e.className;switch(n){case"flexFit":r="flex-fit";break;case"flexed":r="flex-bw";break;case"normal":r="container";break;case"container_fit":r="container_fit";break;case"gapped":r="gapped";break;case"gapped-spaced":r="nav-flex-bw";break;case"gapped-top":r="gapped-top";break;case"gapped-top-center":r="gapped-top-center";break;case"flex-around":r="flex-around"}return(0,a.jsx)("main",{className:r,variant:n,children:t})}},307:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var a=t(184),r=function(e){var n=e.onChange,t=void 0===n?function(e){return null}:n,r=e.type,i=void 0===r?"":r,c=e.className,l=e.name,s=e.checked,d=e.placeholder,o=void 0===d?"":d,u=e.variant,h=e.max,x=e.value;switch(u){case"normal":c="input";break;case"checkbox":c="checkbox";break;case"number":c="number";break;case"search":c="search"}return(0,a.jsx)("input",{placeholder:o,name:l,type:i,value:x,max:h,checked:s,onChange:t,className:c})}},8177:function(e,n,t){t.d(n,{Z:function(){return s}});t(2791);var a=t(5050),r=t(7290),i=t(9515),c=t(1552),l=t(184),s=function(e){var n=e.currentPage,t=e.totalPages,s=e.onPageChange,d=e.handleNextClick,o=e.handlePrevClick,u=Array.from({length:t},(function(e,n){return n+1}));return(0,l.jsxs)(r.Z,{className:"Pagination",children:[(0,l.jsx)(a.Z,{className:"Pagination__button Pagination__button--arrow",onClick:o,disabled:n<=1,children:(0,l.jsx)(i.Z,{})}),(t<=5?u:n<=3?u.slice(0,5):n>t-3?u.slice(t-5,t):u.slice(n-3,n+2)).map((function(e){return(0,l.jsx)("button",{className:"Pagination__button ".concat(e===n?"Pagination__button--active":""),onClick:function(){return function(e){e<1||e>t||e===n||s(e)}(e)},children:e},e)})),(0,l.jsx)(a.Z,{className:"Pagination__button Pagination__button--arrow",onClick:d,disabled:n>=t,children:(0,l.jsx)(c.Z,{})})]})}},3631:function(e,n,t){var a=t(9439),r=t(2791),i=(t(7676),t(184));n.Z=function(e){var n=e.isOpen,t=(e.onClose,e.children),c=(0,r.useState)(n),l=(0,a.Z)(c,2);l[0],l[1];return(0,i.jsx)("div",{className:n?"modal-overlay ":"modal-hiden",children:(0,i.jsx)("div",{className:"modal",children:(0,i.jsx)("div",{className:"modal-content",children:t})})})}},3883:function(e,n,t){t(2791);var a=t(307),r=t(7290),i=t(184);n.Z=function(e){var n=e.pageSize,t=e.handlePageSizeChange,c=e.totalRows,l=e.handleQuery;return(0,i.jsxs)(r.Z,{variant:"gapped-top",children:[(0,i.jsxs)(r.Z,{variant:"gapped",children:[(0,i.jsx)("div",{children:"Search"}),(0,i.jsx)(a.Z,{variant:"normal",type:"text",onChange:l,placeholder:"Enter name or email"})]}),(0,i.jsxs)(r.Z,{variant:"gapped",children:[(0,i.jsx)("div",{children:"Show"}),(0,i.jsx)(a.Z,{variant:"number",type:"number",max:c,value:n,onChange:t}),(0,i.jsx)("div",{children:"entries"})]})]})}},7296:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var a=t(184),r=function(e){var n=e.children;return(0,a.jsx)("main",{className:"layout",children:(0,a.jsx)("main",{children:n})})}},1490:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(9439),r=t(2791),i=t(7296),c=t(3433),l=t(4165),s=t(5861),d=t(3883),o=t(5050),u=t(8077),h=t(307),x=t(1087),f=t(8177),v=t(9434),p=t(927),j=t(4733),m=t(8914),g=t(3631),b=(t(7676),t(184)),Z=function(e){var n=e.models,t=e.isDelete,i=e.setIsDelete,Z=e.handleQuery,k=(0,r.useState)(!1),_=(0,a.Z)(k,2),y=_[0],w=_[1],N=(0,v.I0)(),C=(0,r.useState)(1),P=(0,a.Z)(C,2),S=P[0],A=P[1],D=(0,r.useState)(5),M=(0,a.Z)(D,2),z=M[0],E=M[1],L=(0,r.useState)([]),I=(0,a.Z)(L,2),O=I[0],F=I[1],Q=null===n||void 0===n?void 0:n.length,V=Math.ceil(Q/z),R=(S-1)*z,B=R+z,G=function(){var e=(0,s.Z)((0,l.Z)().mark((function e(n){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.W.delete("/admin/model/".concat(n));case 2:i(!t);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),U=(0,c.Z)(n).reverse(),W=null===U||void 0===U?void 0:U.slice(R,B),q=function(e){var n=e.target.value;e.target.checked?F([].concat((0,c.Z)(O),[n])):F(O.filter((function(e){return e!==n})))},H=function(){w(!0)},J=function(){w(!1)};return(0,b.jsxs)("main",{children:[(0,b.jsxs)(g.Z,{isOpen:y,onClose:J,children:[(0,b.jsx)("p",{className:"modal-text",children:"Are you sure you want to delete this user?"}),(0,b.jsxs)("div",{className:"btn-group",children:[(0,b.jsx)(o.Z,{variant:"outlined",onClick:J,children:"Cancel"}),(0,b.jsx)(o.Z,{variant:"secondary",onClick:function(){var e=Math.floor(Math.random()*W.length),n=W[e]._id;G(n),w(!1)},children:"delete"})]})]}),(0,b.jsxs)("div",{className:"table_container",children:[(0,b.jsx)(d.Z,{pageSize:z,handlePageSizeChange:function(e){!function(e){E(e),A(1)}(parseInt(e.target.value))},totalRows:Q,handleQuery:Z}),(0,b.jsxs)("table",{className:"data-table",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"#"}),(0,b.jsx)("th",{children:"Picture"}),(0,b.jsx)("th",{style:{width:"150px"},children:"Location"}),(0,b.jsx)("th",{style:{width:"150px"},children:"Name"}),(0,b.jsx)("th",{style:{width:"150px"},children:"Category"}),(0,b.jsx)("th",{style:{width:"150px"},children:"Edit"}),(0,b.jsx)("th",{style:{width:"150px"},children:"Delete"}),(0,b.jsx)("th",{style:{width:"150px"},children:"Select"})]})}),(0,b.jsx)("tbody",{children:null===W||void 0===W?void 0:W.map((function(e,n){return(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:n+1}),(0,b.jsx)("td",{children:(0,b.jsx)("div",{className:"table_img",children:(0,b.jsx)(u.Z,{width:100,height:97,src:e.picture?e.picture:p.Z,alt:e.picture})})}),(0,b.jsx)("td",{style:{width:"150px",textAlign:"center"},children:(0,b.jsx)("div",{children:e.country&&e.state?(0,b.jsxs)("p",{children:[e.country,", ",e.state]}):(0,b.jsx)("span",{children:"No Location"})})}),(0,b.jsx)("td",{style:{width:"150px",textAlign:"center"},children:e.fullName}),(0,b.jsx)("td",{style:{width:"150px",textAlign:"center"},children:(0,b.jsx)("div",{children:e.category?(0,b.jsxs)("div",{children:[e.category[0]," & ",e.category[1]]}):(0,b.jsx)("div",{children:"none"})})}),(0,b.jsx)("td",{style:{width:"150px",textAlign:"center"},children:(0,b.jsx)(x.rU,{to:"/adminpage/manage_models/".concat(e.uuid),children:(0,b.jsx)(o.Z,{variant:"primary",onClick:function(){return n=e._id,void N((0,j.F9)(n));var n},children:"Edit"})})}),(0,b.jsx)("td",{style:{width:"150px",textAlign:"center"},children:(0,b.jsx)(o.Z,{variant:"secondary",onClick:H,children:"Delete"})}),(0,b.jsx)("td",{style:{width:"150px",textAlign:"center"},children:(0,b.jsx)("label",{children:(0,b.jsx)(h.Z,{variant:"checkbox",type:"checkbox",name:e._id,value:e._id,checked:O.includes(e._id),onChange:q})})})]},n)}))})]})]}),(0,b.jsx)(f.Z,{currentPage:S,totalPages:V,onPageChange:function(e){A(e)},handlePrevClick:function(){S>1&&A(S-1)},handleNextClick:function(){S<V&&A(S+1)}})]})},k=t(9947),_=t(7290),y=function(e){var n=e.models,t=n.filter((function(e){return e.isVerified})),a=n.filter((function(e){return!e.isVerified})),r=n.filter((function(e){return e.isFeatured})),i=[{id:1,variant:"fill_light_green",txt_1:t.length,desc:"Verified"},{id:2,variant:"fill_red",txt_1:a.length,desc:"Not Verified"},{id:3,variant:"fill_black",txt_1:r.length,desc:"Featured"}];return(0,b.jsxs)("div",{children:[(0,b.jsx)(_.Z,{variant:"flexed",children:i.map((function(e){var n=e.id,t=e.variant,a=e.txt_1,r=e.desc;return(0,b.jsxs)(k.Z,{variant:t,children:[(0,b.jsx)("p",{children:a}),(0,b.jsx)("p",{children:r})]},n)}))}),(0,b.jsx)("div",{children:(0,b.jsx)(k.Z,{variant:"full_width",children:"MANAGE MODELS"})})]})},w=t(4338),N=function(){var e=(0,v.I0)(),n=(0,r.useState)([]),t=(0,a.Z)(n,2),c=t[0],l=t[1],s=(0,r.useState)(!1),d=(0,a.Z)(s,2),o=d[0],u=d[1],h=(0,r.useState)(""),x=(0,a.Z)(h,2),f=x[0],p=x[1];return(0,r.useEffect)((function(){var n=void(0,w.PD)(e,"/model/models/?model=".concat(f),l);return function(){return n}}),[o,f]),(0,b.jsx)(_.Z,{variant:"normal",children:(0,b.jsx)(_.Z,{variant:"container_fit",children:(0,b.jsxs)(i.Z,{children:[(0,b.jsx)(y,{models:c}),(0,b.jsx)(Z,{models:c,isDelete:o,setIsDelete:u,handleQuery:function(e){p(e.target.value.toLowerCase())}})]})})})}},9515:function(e,n,t){var a=t(6189),r=t(184);n.Z=(0,a.Z)((0,r.jsx)("path",{d:"M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"}),"NavigateBeforeOutlined")},1552:function(e,n,t){var a=t(6189),r=t(184);n.Z=(0,a.Z)((0,r.jsx)("path",{d:"M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"}),"NavigateNextOutlined")},7676:function(){}}]);
//# sourceMappingURL=490.96fb5f3f.chunk.js.map