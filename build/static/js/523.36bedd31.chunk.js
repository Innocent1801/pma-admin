"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[523],{9523:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var n=s(3433),a=s(9439),i=s(2791),l=s(7689),o=s(1087),c=(s(8228),s(4942)),r=s(1413),d=s(4290),u=s(4702),h=s(1353),m=(0,u.ZF)({apiKey:"AIzaSyAvHiCbuI2bpFsZm6aVedHGcrZhrqW-V0k",authDomain:"premium-model-frontend.firebaseapp.com",projectId:"premium-model-frontend",storageBucket:"premium-model-frontend.appspot.com",messagingSenderId:"62996785354",appId:"1:62996785354:web:be12debb9741d4fe2aec33"}),p=(0,h.cF)(m),v=s(9434),x=s(4338),f=s(184),j=function(){var e=(0,l.TH)().state,t=(0,v.I0)(),s=(0,i.useState)((null===e||void 0===e?void 0:e.text)||""),n=(0,a.Z)(s,2),o=n[0],u=n[1],h=(0,i.useState)((null===e||void 0===e?void 0:e.title)||""),m=(0,a.Z)(h,2),j=m[0],g=m[1],b=(0,i.useState)((null===e||void 0===e?void 0:e.photo)||void 0),N=(0,a.Z)(b,2),k=N[0],y=N[1],C=(0,i.useState)((null===e||void 0===e?void 0:e.cat)||""),Z=(0,a.Z)(C,2),w=Z[0],S=Z[1],F=(0,i.useState)(!1),I=(0,a.Z)(F,2),T=I[0],U=I[1],P=(0,i.useState)(0),B=(0,a.Z)(P,2),D=(B[0],B[1]),H=(0,i.useState)({}),_=(0,a.Z)(H,2),M=_[0],V=_[1];(0,i.useEffect)((function(){k&&function(e,t){var s=(new Date).getTime()+e.name,n=(0,d.iH)(p,"/models/".concat(s)),a=(0,d.B0)(n,e);a.on("state_changed",(function(e){var s=e.bytesTransferred/e.totalBytes*100;switch("photo"===t&&D(Math.round(s)),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(function(e){}),(function(){(0,d.Jt)(a.snapshot.ref).then((function(e){V((function(s){return(0,r.Z)((0,r.Z)({},s),{},(0,c.Z)({},t,e))}))}))}))}(k,"photo")}),[k]);var L={text:o,title:j,photo:(null===e||void 0===e?void 0:e.photo)||M.photo,cat:w};console.log(L);return(0,f.jsxs)("div",{className:"add",children:[(0,f.jsxs)("div",{className:"content",children:[(0,f.jsx)("input",{type:"text",placeholder:"Title",onChange:function(e){return g(e.target.value)},value:j}),(0,f.jsxs)("div",{className:"editorContainer",children:[k&&(0,f.jsx)("img",{src:(null===e||void 0===e?void 0:e.photo)||URL.createObjectURL(k),alt:""}),(0,f.jsx)("textarea",{className:"editor",value:o,onChange:function(e){return u(e.target.value)}})]})]}),(0,f.jsxs)("div",{className:"menu",children:[(0,f.jsxs)("div",{className:"item",children:[(0,f.jsx)("h1",{children:"Publish"}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Status: "})," Draft"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Visibility: "})," Public"]}),(0,f.jsx)("input",{style:{display:"none"},type:"file",id:"file",name:"photo",onChange:function(e){return y(e.target.files[0])}}),(0,f.jsx)("label",{className:"file",htmlFor:"file",children:"Upload Image"}),(0,f.jsxs)("div",{className:"buttons",children:[(0,f.jsx)("button",{children:"Save as a draft"}),(0,f.jsx)("button",{onClick:function(){e?(U(!0),(0,x.e8)(t,"/blog/blog/edit?_id=".concat(e._id),L)):(U(!0),(0,x.JV)(t,"/blog/post-blog",L))},children:T?"Please wait...":"Publish"})]})]}),(0,f.jsxs)("div",{className:"item",children:[(0,f.jsx)("h1",{children:"Category"}),(0,f.jsxs)("div",{className:"cat",children:[(0,f.jsx)("input",{type:"radio",checked:"tips&tricks"===w,name:"cat",value:"tips&tricks",id:"tips&tricks",onChange:function(e){return S(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"tips&tricks",children:"Tips & Tricks"})]}),(0,f.jsxs)("div",{className:"cat",children:[(0,f.jsx)("input",{type:"radio",checked:"news"===w,name:"cat",value:"news",id:"news",onChange:function(e){return S(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"news",children:"News"})]}),(0,f.jsxs)("div",{className:"cat",children:[(0,f.jsx)("input",{type:"radio",checked:"models"===w,name:"cat",value:"models",id:"models",onChange:function(e){return S(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"models",children:"Models"})]}),(0,f.jsxs)("div",{className:"cat",children:[(0,f.jsx)("input",{type:"radio",checked:"lifestyle"===w,name:"cat",value:"lifestyle",id:"lifestyle",onChange:function(e){return S(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"lifestyle",children:"Lifestyle"})]})]})]})]})},g=function(e){var t=e.isWrite,s=e.setIsWrite,c=(0,v.I0)(),r=(0,i.useState)([]),d=(0,a.Z)(r,2),u=d[0],h=d[1],m=(0,l.TH)().search;(0,i.useEffect)((function(){(0,x.PD)(c,"/blog/blogs",h)}),[m]);var p=(0,n.Z)(u).reverse();return(0,f.jsxs)("div",{className:"home",children:[(0,f.jsx)("button",{className:"newBlog",onClick:function(){return s(!t)},children:t?"Close":"New Blog"}),t?(0,f.jsx)(j,{}):(0,f.jsx)("div",{className:"posts",children:p.map((function(e,t){return(0,f.jsxs)("div",{className:"post",children:[e.photo&&(0,f.jsx)("div",{className:"img",children:(0,f.jsx)("img",{src:e.photo,alt:""})}),(0,f.jsxs)("div",{className:"content",children:[(0,f.jsx)(o.rU,{className:"link",to:"/adminpage/post/".concat(e._id),children:(0,f.jsx)("h1",{children:e.title})}),(0,f.jsx)("p",{children:(s=e.text,(new DOMParser).parseFromString(s,"text/html").body.textContent)}),(0,f.jsx)(o.rU,{className:"link",to:"/adminpage/post/".concat(e._id),children:(0,f.jsx)("button",{children:"Read More"})})]})]},t);var s}))})]})}}}]);
//# sourceMappingURL=523.36bedd31.chunk.js.map